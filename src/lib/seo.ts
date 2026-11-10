import type { Metadata } from "next";
import { getSiteData, getSiteProduct } from "@/lib/cms";
import { coverImage, formatPrice, productHref, salePrice, type Product } from "@/lib/products";
import type { Landing } from "@/lib/landings";
import { site } from "@/lib/site";

/**
 * Canonical host of the site: canonical links, og:url, the sitemap and structured data always
 * point here, also from previews and the *.vercel.app domains.
 */
export const siteUrl = "https://www.sillaup.cl";

export const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`);

/**
 * Shared metadata for a public page: canonical URL plus matching Open Graph data. `title` goes
 * through the "%s | SillaUp" template; `absoluteTitle` is used as is.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
}: {
  title?: string;
  absoluteTitle?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = absoluteTitle ?? (title ? `${title} | ${site.name}` : undefined);
  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { ...(fullTitle ? { title: fullTitle } : {}), description, url: path },
    twitter: { ...(fullTitle ? { title: fullTitle } : {}), description },
  };
}

/**
 * Meta description of a product page, following "(producto) + (beneficio principal) + (precio)
 * + (garantía de 1 año)". The price is the current one (including an active offer).
 */
export function productDescription(product: Product) {
  const tryIt = product.article === "la" ? "Pruébala" : "Pruébalo";
  return `${product.seo.lead} ${formatPrice(salePrice(product))} IVA incl., garantía 1 año. ${tryIt} en nuestro showroom.`;
}

export async function productMetadata(slug: string): Promise<Metadata> {
  const product = await getSiteProduct(slug);
  const cover = coverImage(product);
  const description = productDescription(product);
  return {
    ...pageMetadata({ absoluteTitle: product.seo.title, description, path: productHref(slug) }),
    openGraph: {
      title: product.seo.title,
      description,
      url: productHref(slug),
      images: [{ url: absoluteUrl(cover.src), alt: `${product.name} SillaUp` }],
    },
    twitter: { card: "summary_large_image", title: product.seo.title, description, images: [absoluteUrl(cover.src)] },
  };
}

// ---------------------------------------------------------------------------------------------
// Datos estructurados (schema.org, JSON-LD)

const organizationId = `${siteUrl}/#organizacion`;
const businessId = `${siteUrl}/#negocio`;
const businessDescription =
  "Fabricación chilena de dispositivos de movilidad asistida: elevadores de inodoro, de cama y multiuso, y grúas manuales y eléctricas para el traslado de personas con movilidad reducida.";

/** The company (brand, manufacturer). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    alternateName: `${site.name} ${site.tagline}`,
    description: businessDescription,
    url: siteUrl,
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png"), width: 2109, height: 746 },
    email: site.email,
    telephone: site.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      areaServed: "CL",
      availableLanguage: "es",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  };
}

/** The showroom in Santiago: a local business that also sells online. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": businessId,
    name: site.name,
    description: businessDescription,
    parentOrganization: { "@id": organizationId },
    url: siteUrl,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
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
    publisher: { "@id": organizationId },
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
      manufacturer: { "@id": organizationId },
      countryOfOrigin: { "@type": "Country", name: "Chile" },
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
        warranty: {
          "@type": "WarrantyPromise",
          durationOfWarranty: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" },
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "CL" },
        },
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

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({ "@type": "Question", name: q.question, acceptedAnswer: { "@type": "Answer", text: q.answer } })),
  };
}

/** Lowest current price (offers included) of the given products. */
export function lowestPrice(products: Product[]) {
  return Math.min(...products.map(salePrice));
}

/** Metadata of a category page or institutional landing; {precio} gets the current lowest price. */
export async function landingMetadata(landing: Landing): Promise<Metadata> {
  const { products } = await getSiteData();
  const shown = products.filter((p) => landing.productSlugs.includes(p.slug));
  const description = landing.metaDescription.replace("{precio}", formatPrice(lowestPrice(shown)));
  return pageMetadata({ absoluteTitle: landing.metaTitle, description, path: landing.path });
}

/** BreadcrumbList + FAQPage + ItemList of the products shown on a landing. */
export function landingJsonLd(landing: Landing, shown: Product[]) {
  return [
    breadcrumbJsonLd([{ name: "Inicio", path: "/" }, ...landing.breadcrumb]),
    faqPageJsonLd(landing.faqs),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: landing.productsTitle,
      itemListElement: shown.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(productHref(p.slug)), name: p.name })),
    },
  ];
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
