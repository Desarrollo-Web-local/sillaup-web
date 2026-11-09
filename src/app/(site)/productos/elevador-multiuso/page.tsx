import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ProductDetail from "@/components/ProductDetail";
import { getSiteProduct } from "@/lib/cms";
import { productJsonLd, productMetadata } from "@/lib/seo";

const slug = "elevador-multiuso";

export function generateMetadata(): Promise<Metadata> {
  return productMetadata(slug);
}

export default async function Page() {
  const product = await getSiteProduct(slug);
  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <ProductDetail slug={slug} />
    </>
  );
}
