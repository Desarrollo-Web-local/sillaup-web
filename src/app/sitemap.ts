import type { MetadataRoute } from "next";

const routes = ["", "/productos", "/productos/grua-electrica", "/nosotros", "/testimonios", "/preguntas-frecuentes", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return routes.map((route) => ({ url: `${base}${route}` }));
}
