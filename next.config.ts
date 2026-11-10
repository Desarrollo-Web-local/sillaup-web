import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Build time, inlined into the bundle: lastmod of the fixed pages in the sitemap
  env: { SITE_BUILT_AT: new Date().toISOString() },
  async redirects() {
    return [
      // Canonical host: sillaup.cl (sin www) → https://www.sillaup.cl
      {
        source: "/:path*",
        has: [{ type: "host", value: "sillaup.cl" }],
        destination: "https://www.sillaup.cl/:path*",
        permanent: true,
      },
      // URLs of the previous store (kits del elevador de WC) now live in the current catalog
      { source: "/kit-elevador-wc-:n(\\d+)", destination: "/productos", permanent: true },
    ];
  },
};

export default nextConfig;
