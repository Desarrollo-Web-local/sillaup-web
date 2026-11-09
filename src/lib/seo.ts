import type { Metadata } from "next";
import { getSiteData, getSiteProduct } from "@/lib/cms";
import { coverImage, productHref, salePrice, type Product } from "@/lib/products";
import { site } from "@/lib/site";

/**
 * Public URL of the site, used for canonical links, the sitemap and structured data.
 * NEXT_PUBLIC_SITE_URL is set in Vercel (production); previews fall back to Vercel's own URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`);

export const seoKeywords = [
  "movilidad asistida Chile",
  "movilidad reducida",
  "ayudas técnicas Chile",
  "elevador de inodoro",
  "elevador de cama",
  "elevador multiuso",
  "grúa eléctrica para pacientes",
  "grúa manual de traslado",
  "grúa de traslado de pacientes",
  "traslado de adultos mayores",
  "cuidado de adultos mayores",
  "equipos ortopédicos Santiago",
  "fabricación chilena",
  "showroom Santiago",
  "SillaUp",
];

/** Shared metadata for a public page: canonical URL plus matching Open Graph data. */
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { ...(title ? { title: `${title} | ${site.name}` } : {}), description, url: path },
    twitter: { ...(title ? { title: `${title} | ${site.name}` } : {}), description },
  };
}

export async function productMetadata(slug: string): Promise<Metadata> {
  const product = await getSiteProduct(slug);
  const cover = coverImage(product);
  const title = `${product.name} | Movilidad asistida en Chile`;
  return {
    ...pageMetadata({ title, description: product.metaDescription, path: productHref(slug) }),
    openGraph: {
      title: `${title} | ${site.name}`,
      description: product.metaDescription,
      url: productHref(slug),
      images: [{ url: absoluteUrl(cover.src), alt: `${product.name} SillaUp` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description: product.metaDescription, images: [absoluteUrl(cover.src)] },
  };
}

// ---------------------------------------------------------------------------------------------
// Datos estructurados (schema.org, JSON-LD)

const businessId = `${siteUrl}/#negocio`;

/** The business behind the site: a physical store (the showroom) that also sells online. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": businessId,
    name: site.name,
    alternateName: `${site.name} ${site.tagline}`,
    description:
      "Fabricación chilena de dispositivos de movilidad asistida: elevadores de inodoro, de cama y multiuso, y grúas manuales y eléctricas para el traslado de personas con movilidad reducida.",
    url: siteUrl,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Merced 562",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    hasMap: site.mapsUrl,
    areaServed: { "@type": "Country", name: "Chile" },
    currenciesAccepted: "CLP",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#sitio`,
    name: site.name,
    url: siteUrl,
    inLanguage: "es-CL",
    publisher: { "@id": businessId },
  };
}

export function productJsonLd(product: Product) {
  const url = absoluteUrl(productHref(product.slug));
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${url}#producto`,
      name: product.name,
      description: product.summary,
      image: product.gallery.map((image) => absoluteUrl(image.src)),
      sku: product.slug,
      category: product.category,
      brand: { "@type": "Brand", name: site.name },
      manufacturer: { "@id": businessId },
      url,
      offers: {
        "@type": "Offer",
        url,
        price: salePrice(product),
        priceCurrency: "CLP",
        availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
        itemCondition: "https://schema.org/NewCondition",
        ...(product.offer?.endsAt ? { priceValidUntil: product.offer.endsAt } : {}),
        seller: { "@id": businessId },
      },
    },
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Productos", path: "/productos" },
      { name: product.name, path: productHref(product.slug) },
    ]),
  ];
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

/** Product list of the catalog page, in display order. */
export async function catalogJsonLd() {
  const { products } = await getSiteData();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de productos SillaUp",
    itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(productHref(p.slug)), name: p.name })),
  };
}

/** FAQ rich result, built from the same (editable) texts the page shows. */
export async function faqJsonLd() {
  const { texts } = await getSiteData();
  const questions = [1, 2, 3, 4, 5, 6].map((n) => {
    const get = (part: string) => (texts as Record<string, string | undefined>)[`faq.q${n}.${part}`] ?? "";
    return { question: get("question"), answer: [get("lead"), get("body")].filter(Boolean).join(". ") };
  });
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions
      .filter((q) => q.question && q.answer)
      .map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
  };
}
