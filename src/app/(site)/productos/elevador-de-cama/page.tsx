import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getSiteProduct } from "@/lib/cms";

const slug = "elevador-de-cama";

export async function generateMetadata(): Promise<Metadata> {
  const product = await getSiteProduct(slug);
  return { title: product.name, description: product.metaDescription };
}

export default function Page() {
  return <ProductDetail slug={slug} />;
}
