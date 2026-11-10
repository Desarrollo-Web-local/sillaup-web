import type { MetadataRoute } from "next";
import { getSiteData } from "@/lib/cms";
import { landingList } from "@/lib/landings";
import { productHref } from "@/lib/products";
import { absoluteUrl, siteUrl } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];

/**
 * Generated on request from the current products. lastmod: when a product was last edited in the
 * admin panel (or built, if it never was); fixed pages use the time of the build/deploy.
 */
const deployedAt = new Date(process.env.SITE_BUILT_AT ?? Date.now());

const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"], lastModified = deployedAt): Entry => ({
  url: `${siteUrl}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products } = await getSiteData();
  const latest = (dates: Date[]) => new Date(Math.max(...dates.map((d) => d.getTime())));
  const productDates = products.map((p) => (p.updatedAt ? latest([new Date(p.updatedAt), deployedAt]) : deployedAt));
  return [
    page("", 1, "weekly", latest(productDates)),
    page("/productos", 0.9, "weekly", latest(productDates)),
    // Product pages, with their photos (cover first) for image search
    ...products.map((p, i) => ({ ...page(productHref(p.slug), 0.8, "weekly", productDates[i]), images: p.gallery.map((image) => absoluteUrl(image.src)) })),
    // Category pages and institutional landings: they show prices, so they change with the products
    ...landingList.map((landing) => {
      const dates = products.flatMap((p, i) => (landing.productSlugs.includes(p.slug) ? [productDates[i]] : []));
      return page(landing.path, landing.path.startsWith("/productos/") ? 0.8 : 0.7, "weekly", dates.length ? latest(dates) : deployedAt);
    }),
    page("/nosotros", 0.6, "monthly"),
    page("/testimonios", 0.5, "monthly"),
    page("/preguntas-frecuentes", 0.6, "monthly"),
    page("/contacto", 0.7, "monthly"),
  ];
}
