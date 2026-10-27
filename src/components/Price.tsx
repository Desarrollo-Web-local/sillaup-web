import { formatPrice, salePrice, type Product } from "@/lib/products";

/** Price as shown on product cards: the sale price, with the regular one struck through during an offer. */
export function CardPrice({ product }: { product: Product }) {
  if (!product.offer) return <>{formatPrice(product.price)}</>;
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <s className="opacity-60 font-semibold text-[0.85em]">{formatPrice(product.price)}</s>
      {formatPrice(salePrice(product))}
    </span>
  );
}

/** "Cyber Day -15%" ribbon for product cards; renders nothing without an offer. */
export function OfferBadge({ product, className = "" }: { product: Product; className?: string }) {
  if (!product.offer) return null;
  return (
    <span className={`inline-flex items-center gap-1 bg-error text-on-error text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md ${className}`}>
      <span className="material-symbols-outlined text-[13px]">sell</span>
      {product.offer.label} -{product.offer.discountPercent}%
    </span>
  );
}
