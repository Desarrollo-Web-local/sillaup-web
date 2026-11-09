import type { MetadataRoute } from "next";
import { getSiteData } from "@/lib/cms";
import { productHref } from "@/lib/products";
import { absoluteUrl, siteUrl } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];
const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"]): Entry => ({
  url: `${siteUrl}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { products } = await getSiteData();
  return [
    page("", 1, "weekly"),
    page("/productos", 0.9, "weekly"),
    // Product pages, with their photos (cover first) for image search
    ...products.map((p) => ({ ...page(productHref(p.slug), 0.8, "weekly"), images: p.gallery.map((image) => absoluteUrl(image.src)) })),
    page("/nosotros", 0.6, "monthly"),
    page("/testimonios", 0.5, "monthly"),
    page("/preguntas-frecuentes", 0.6, "monthly"),
    page("/contacto", 0.7, "monthly"),
  ];
}
