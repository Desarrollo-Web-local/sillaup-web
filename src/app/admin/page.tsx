import { Suspense } from "react";
import type { ProductOverride } from "@/lib/cms";
import { contentDefaults, contentPages, isContentKey, type Texts } from "@/lib/content";
import { products } from "@/lib/products";
import { requireAdmin } from "@/lib/supabase-server";
import AdminPanel, { type ProductForm } from "./AdminPanel";

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center text-on-surface-variant font-bold">Cargando panel...</main>
      }
    >
      <Dashboard />
    </Suspense>
  );
}

/** Reads the current state straight from the database (not the site cache), as the signed-in admin. */
async function Dashboard() {
  const { supabase, admin } = await requireAdmin();
  const [content, overrides] = await Promise.all([
    supabase.from("site_content").select("key, value"),
    supabase.from("product_overrides").select("*"),
  ]);
  const loadError = content.error?.message ?? overrides.error?.message;

  const texts: Texts = { ...contentDefaults };
  const customized: string[] = [];
  for (const { key, value } of content.data ?? []) {
    if (isContentKey(key)) {
      texts[key] = value;
      customized.push(key);
    }
  }

  const rows = new Map((overrides.data as ProductOverride[] | null)?.map((row) => [row.slug, row]));
  const forms: ProductForm[] = products.map((p) => {
    const row = rows.get(p.slug);
    return {
      slug: p.slug,
      defaultName: p.name,
      name: row?.name ?? p.name,
      tagline: row?.tagline ?? p.tagline,
      summary: row?.summary ?? p.summary,
      card_summary: row?.card_summary ?? p.card.summary,
      home_summary: row?.home_summary ?? p.homeSummary,
      price: row?.price ?? p.price,
      discount_percent: row?.discount_percent ?? 0,
      offer_label: row?.offer_label ?? "",
      offer_ends_at: row?.offer_ends_at ?? "",
      in_stock: row?.in_stock ?? p.inStock,
      mercado_pago_url: row?.mercado_pago_url ?? p.mercadoPagoUrl ?? "",
      image_url: row?.image_url ?? p.image.src,
      home_image_url: row?.home_image_url ?? p.homeImage.src,
      gallery: row?.gallery?.length ? row.gallery : p.gallery.map((image) => image.src),
    };
  });

  return (
    <AdminPanel
      customized={customized}
      defaults={contentDefaults}
      email={admin.email}
      loadError={loadError}
      pages={contentPages}
      products={forms}
      texts={texts}
    />
  );
}
