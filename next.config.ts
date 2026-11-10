import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Build time, inlined into the bundle: lastmod of the fixed pages in the sitemap
  env: { SITE_BUILT_AT: new Date().toISOString() },
  // Redirecciones 301 (sillaup.cl → www y URLs de la tienda anterior): ver vercel.json
};

export default nextConfig;
