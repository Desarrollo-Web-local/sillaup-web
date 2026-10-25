import type { MetadataRoute } from "next";
import { productHref, products } from "@/lib/products";

const routes = ["", "/productos", ...products.map((p) => productHref(p.slug)), "/nosotros", "/testimonios", "/preguntas-frecuentes", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return routes.map((route) => ({ url: `${base}${route}` }));
}
