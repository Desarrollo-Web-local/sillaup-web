"use server";

import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { CMS_TAG } from "@/lib/cms";
import { contentDefaults, isContentKey } from "@/lib/content";
import { products } from "@/lib/products";
import { createServerSupabase, requireAdmin } from "@/lib/supabase-server";

export type ActionResult = { ok: true; message: string } | { ok: false; error: string };

export async function signIn(_: ActionResult | null, data: FormData): Promise<ActionResult> {
  const email = String(data.get("email") ?? "").trim().toLowerCase();
  const password = String(data.get("password") ?? "");
  if (!email || !password) return { ok: false, error: "Ingresa tu correo y contraseña" };

  const supabase = await createServerSupabase();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, error: "Correo o contraseña incorrectos" };

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (isAdmin !== true) {
    await supabase.auth.signOut();
    return { ok: false, error: "Esta cuenta no tiene acceso al panel de administración" };
  }
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createServerSupabase();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

/**
 * Saves the edited site texts. A field equal to its default (or left empty) removes the
 * override, so the database only holds real changes.
 */
export async function saveTexts(data: FormData): Promise<ActionResult> {
  const { supabase } = await requireAdmin();

  const upserts: { key: string; value: string; updated_at: string }[] = [];
  const resets: string[] = [];
  const now = new Date().toISOString();
  for (const [key, raw] of data.entries()) {
    if (!isContentKey(key) || typeof raw !== "string") continue;
    const value = raw.trim().slice(0, 5000);
    if (!value || value === contentDefaults[key]) resets.push(key);
    else upserts.push({ key, value, updated_at: now });
  }

  if (upserts.length) {
    const { error } = await supabase.from("site_content").upsert(upserts);
    if (error) return { ok: false, error: `No se pudieron guardar los textos: ${error.message}` };
  }
  if (resets.length) {
    const { error } = await supabase.from("site_content").delete().in("key", resets);
    if (error) return { ok: false, error: `No se pudieron restablecer los textos: ${error.message}` };
  }
  updateTag(CMS_TAG);
  return { ok: true, message: "Textos guardados y publicados" };
}

const text = (data: FormData, key: string, max: number) => {
  const value = String(data.get(key) ?? "").trim().slice(0, max);
  return value || null;
};

const isHttpUrl = (value: string) => /^https?:\/\/\S+$/i.test(value);

export async function saveProduct(data: FormData): Promise<ActionResult> {
  const { supabase } = await requireAdmin();

  const slug = String(data.get("slug") ?? "");
  const base = products.find((p) => p.slug === slug);
  if (!base) return { ok: false, error: "Producto desconocido" };
  // Only store what differs from products.ts, like saveTexts does
  const changed = <T,>(value: T, original: T) => (value === original ? null : value);

  const priceRaw = String(data.get("price") ?? "").replace(/[^\d]/g, "");
  const price = priceRaw ? Number(priceRaw) : null;
  if (price !== null && (!Number.isSafeInteger(price) || price <= 0)) return { ok: false, error: "El precio debe ser un número mayor a 0" };

  const discountRaw = String(data.get("discount_percent") ?? "").trim();
  const discount = discountRaw ? Number(discountRaw) : 0;
  if (!Number.isInteger(discount) || discount < 0 || discount > 90) return { ok: false, error: "El descuento debe ser un número entero entre 0 y 90" };

  const offerEndsAt = text(data, "offer_ends_at", 10);
  if (offerEndsAt && !/^\d{4}-\d{2}-\d{2}$/.test(offerEndsAt)) return { ok: false, error: "Fecha de término de la oferta inválida" };

  // Empty means "no Mercado Pago": purchases go through WhatsApp
  const mercadoPago = String(data.get("mercado_pago_url") ?? "").trim();
  if (mercadoPago && !isHttpUrl(mercadoPago)) return { ok: false, error: "El link de Mercado Pago debe comenzar con https://" };

  const imageUrl = text(data, "image_url", 1000);
  const homeImageUrl = text(data, "home_image_url", 1000);
  const gallery = String(data.get("gallery") ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  for (const url of [imageUrl, homeImageUrl, ...gallery]) {
    if (url && !isHttpUrl(url)) return { ok: false, error: `Dirección de imagen inválida: ${url}` };
  }
  if (gallery.length > 12) return { ok: false, error: "La galería admite hasta 12 fotos" };

  const sameGallery = gallery.join("\n") === base.gallery.map((image) => image.src).join("\n");

  const { error } = await supabase.from("product_overrides").upsert({
    slug,
    name: changed(text(data, "name", 120), base.name),
    tagline: changed(text(data, "tagline", 300), base.tagline),
    summary: changed(text(data, "summary", 1000), base.summary),
    card_summary: changed(text(data, "card_summary", 500), base.card.summary),
    home_summary: changed(text(data, "home_summary", 500), base.homeSummary),
    price: changed(price, base.price),
    discount_percent: discount || null,
    offer_label: text(data, "offer_label", 60),
    offer_ends_at: offerEndsAt,
    in_stock: changed(data.get("in_stock") === "on", base.inStock),
    mercado_pago_url: changed(mercadoPago, base.mercadoPagoUrl ?? ""),
    image_url: changed(imageUrl, base.image.src),
    home_image_url: changed(homeImageUrl, base.homeImage.src),
    gallery: gallery.length && !sameGallery ? gallery : null,
    updated_at: new Date().toISOString(),
  });
  if (error) return { ok: false, error: `No se pudo guardar el producto: ${error.message}` };

  updateTag(CMS_TAG);
  return { ok: true, message: "Producto guardado y publicado" };
}
