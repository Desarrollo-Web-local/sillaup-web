import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";

const product = getProduct("elevador-de-inodoro");

export const metadata: Metadata = {
  title: product.name,
  description: product.metaDescription,
};

export default function Page() {
  return <ProductDetail slug={product.slug} />;
}
