import { cacheLife, cacheTag } from "next/cache";
import { contentDefaults, isContentKey, type Texts } from "@/lib/content";
import { isOfferActive, products as defaultProducts, type Product } from "@/lib/products";
import { getSupabase } from "@/lib/supabase";

/** Tag of everything the admin panel can edit; saving in /admin expires it. */
export const CMS_TAG = "cms";

export type SiteData = { texts: Texts; products: Product[] };

/** A row of public.product_overrides. Null columns keep the value from products.ts. */
export type ProductOverride = {
  slug: string;
  name: string | null;
  tagline: string | null;
  summary: string | null;
  card_summary: string | null;
  home_summary: string | null;
  price: number | null;
  discount_percent: number | null;
  offer_label: string | null;
  offer_ends_at: string | null;
  in_stock: boolean | null;
  mercado_pago_url: string | null;
  image_url: string | null;
  home_image_url: string | null;
  gallery: string[] | null;
};

const smallWords = new Set(["de", "del", "la", "el", "y", "en", "para"]);
const titleCase = (name: string) =>
  name
    .split(" ")
    .map((word, i) => (i > 0 && smallWords.has(word.toLowerCase()) ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");

export function applyOverride(product: Product, row: ProductOverride | undefined, now: Date): Product {
  if (!row) return product;
  const name = row.name || product.name;
  const offer = row.discount_percent
    ? { discountPercent: row.discount_percent, label: row.offer_label || "Oferta", endsAt: row.offer_ends_at ?? undefined }
    : undefined;
  return {
    ...product,
    name,
    titleName: row.name ? titleCase(row.name) : product.titleName,
    tagline: row.tagline || product.tagline,
    summary: row.summary || product.summary,
    homeSummary: row.home_summary || product.homeSummary,
    card: { ...product.card, summary: row.card_summary || product.card.summary },
    price: row.price ?? product.price,
    offer: offer && isOfferActive(offer, now) ? offer : undefined,
    inStock: row.in_stock ?? product.inStock,
    // An empty string turns the Mercado Pago button off (purchase via WhatsApp)
    mercadoPagoUrl: row.mercado_pago_url === null ? product.mercadoPagoUrl : row.mercado_pago_url || undefined,
    image: row.image_url ? { ...product.image, src: row.image_url } : product.image,
    homeImage: row.home_image_url ? { ...product.homeImage, src: row.home_image_url } : product.homeImage,
    gallery: row.gallery?.length ? row.gallery.map((src) => ({ src, alt: name })) : product.gallery,
  };
}

/**
 * Site texts and products with the admin panel's changes applied. Cached and shared by every
 * visitor; the admin actions expire it with updateTag(CMS_TAG), and the short revalidate also
 * picks up direct database edits and offers that end.
 */
export async function getSiteData(): Promise<SiteData> {
  "use cache";
  cacheTag(CMS_TAG);
  cacheLife({ stale: 60, revalidate: 300, expire: 86400 });

  const texts: Texts = { ...contentDefaults };
  const supabase = getSupabase();
  if (!supabase) return { texts, products: defaultProducts };

  const [content, overrides] = await Promise.all([
    supabase.from("site_content").select("key, value"),
    supabase.from("product_overrides").select("*"),
  ]);
  if (content.error) console.error("[cms] site_content:", content.error.message);
  if (overrides.error) console.error("[cms] product_overrides:", overrides.error.message);

  for (const { key, value } of content.data ?? []) {
    if (isContentKey(key) && value.trim()) texts[key] = value;
  }
  const rows = new Map((overrides.data as ProductOverride[] | null)?.map((row) => [row.slug, row]));
  const now = new Date();
  return { texts, products: defaultProducts.map((p) => applyOverride(p, rows.get(p.slug), now)) };
}

export async function getSiteProduct(slug: string): Promise<Product> {
  const { products } = await getSiteData();
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error(`Producto desconocido: ${slug}`);
  return product;
}
