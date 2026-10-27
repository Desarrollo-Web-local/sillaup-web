"use client";

import Link from "next/link";
import { CardPrice, OfferBadge } from "@/components/Price";
import { useProducts, useText } from "@/components/SiteData";
import { formatPrice, productHref, salePrice } from "@/lib/products";

export default function CatalogPage() {
  const t = useText();
  const products = useProducts();
  return (
    <>
    {/* Main Canvas */}
    <main className="w-full">
      {/* 3. Hero Section: Catálogo de Productos */}
      <section className="bg-gradient-to-b from-surface-container-low via-surface to-background pt-12 pb-8 border-b border-outline-variant/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-label-md text-on-surface-variant mb-4">
            <Link className="hover:text-brand-blue transition-colors" href="/">
              Inicio
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-brand-blue font-bold">
              Catálogo de Productos
            </span>
          </nav>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm uppercase bg-brand-teal text-white mb-3 tracking-wide">
                <span className="material-symbols-outlined text-[14px]">
                  precision_manufacturing
                </span>
                {t("catalog.hero.eyebrow")}
              </span>
              <h1 className="text-headline-lg font-headline-lg text-brand-night tracking-tight text-balance">
                {t("catalog.hero.title")}
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
                {t("catalog.hero.description")}
              </p>
            </div>
            {/* Direct support badge */}
            <div className="hidden lg:flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-brand-border shadow-level-1">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-brand-teal">
                <span className="material-symbols-outlined">
                  support_agent
                </span>
              </div>
              <div>
                <p className="text-xs font-label-sm text-on-surface-variant">
                  ¿Dudas de compatibilidad?
                </p>
                <a className="text-sm font-label-md text-brand-night font-bold hover:text-brand-blue" href="tel:+56972215907">
                  +56 9 7221 5907
                </a>
              </div>
            </div>
          </div>
          {/* Badges de Garantía y Calidad SillaUp */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-outline-variant/40">
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-brand-border/60">
              <span className="material-symbols-outlined text-brand-blue text-2xl">
                verified
              </span>
              <span className="text-xs font-label-md text-brand-night">
                1 año de garantía técnica
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-brand-border/60">
              <span className="material-symbols-outlined text-brand-blue text-2xl">
                shield
              </span>
              <span className="text-xs font-label-md text-brand-night">
                Acero de alta resistencia
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-brand-border/60">
              <span className="material-symbols-outlined text-brand-blue text-2xl">
                local_shipping
              </span>
              <span className="text-xs font-label-md text-brand-night">
                Despacho a todo Chile
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl border border-brand-border/60">
              <span className="material-symbols-outlined text-brand-blue text-2xl">
                build_circle
              </span>
              <span className="text-xs font-label-md text-brand-night">
                Soporte y repuestos locales
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Interactive Filters Bar */}
      {/* 5. Products Grid (The 5 Official SillaUp Products) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
          {products.map((product) => (
          <article key={product.slug} className={`product-card group bg-surface-container-lowest rounded-[24px] p-6 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative ${product.featured ? "border-2 border-brand-blue/30 shadow-level-2 hover:shadow-level-3" : "border border-brand-border shadow-level-1 hover:shadow-level-2"}`}>
            {product.featured && (
            <div className="absolute -top-3 left-6 bg-brand-blue text-white text-[11px] font-label-sm uppercase px-3 py-0.5 rounded-full tracking-wide shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                star
              </span>
              Más Solicitado
            </div>
            )}
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  <CardPrice product={product} />
                </div>
                {product.offer ? (
                <OfferBadge className="absolute top-3 left-3 z-10" product={product} />
                ) : (
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                )}
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt={product.image.alt} src={product.image.src} />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  {product.category}
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                {product.name}
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                {product.card.summary}
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href={productHref(product.slug)}>
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
              {product.mercadoPagoUrl && (
              <a className="relative z-10 w-full text-center border-2 border-brand-blue text-brand-blue bg-white font-label-md py-2.5 rounded-full hover:bg-brand-blue/5 transition-colors duration-150 font-bold active:scale-95 flex items-center justify-center gap-2" href={product.mercadoPagoUrl} rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-sm">
                  credit_card
                </span>
                <span>
                  Comprar Ahora ({formatPrice(salePrice(product))})
                </span>
              </a>
              )}
            </div>
          </article>
          ))}
        </div>
      </section>
      {/* 6. Personalized Advisory Card "¿No sabes cuál elegir?" */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="bg-gradient-to-br from-brand-teal to-on-secondary-fixed-variant text-white rounded-[32px] p-8 md:p-12 shadow-level-2 relative overflow-hidden">
          {/* Subtle background deco elements */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full pointer-events-none blur-2xl"></div>
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-brand-blue/20 rounded-full pointer-events-none blur-xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-sm uppercase bg-white/10 text-secondary-fixed mb-4 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[14px]">
                  psychology_alt
                </span>
                {t("catalog.advice.eyebrow")}
              </span>
              <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-white tracking-tight">
                {t("catalog.advice.title")}
              </h2>
              <p className="text-body-lg font-body-lg text-white/80 mt-4 max-w-2xl leading-relaxed">
                {t("catalog.advice.description")}
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed">
                    location_on
                  </span>
                  <span>
                    Showroom y taller:{" "}
                    <strong>
                      Merced 562, Santiago
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-fixed">
                    schedule
                  </span>
                  <span>
                    Lun a Vie de 9:00 a 18:00 hrs
                  </span>
                </div>
              </div>
            </div>
            {/* Direct CTA button cluster */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a className="w-full bg-whatsapp text-white font-label-md py-4 px-6 rounded-full shadow-level-3 hover:brightness-105 transition-all text-center flex items-center justify-center gap-3 font-bold active:scale-95 text-sm md:text-base" href="https://wa.me/56972215907?text=Hola,%20necesito%20asesoría%20para%20elegir%20el%20dispositivo%20adecuado%20para%20mi%20familiar" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-2xl font-bold">
                  chat
                </span>
                Asesoría gratis por WhatsApp
              </a>
              <p className="text-center text-xs text-white/70">
                Respuesta habitual en menos de 15 minutos en horario hábil
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Value Pillars: Beneficios de comprar directo a SillaUp */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-headline-md font-headline-md text-brand-night">
            {t("catalog.trust.title")}
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            {t("catalog.trust.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-level-1 hover:shadow-level-2 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-surface-container-low text-brand-blue flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">
                precision_manufacturing
              </span>
            </div>
            <h3 className="font-headline-sm text-base text-brand-night font-bold mb-2">
              {t("catalog.trust.1.title")}
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              {t("catalog.trust.1.text")}
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-level-1 hover:shadow-level-2 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-surface-container-low text-brand-teal flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">
                verified_user
              </span>
            </div>
            <h3 className="font-headline-sm text-base text-brand-night font-bold mb-2">
              {t("catalog.trust.2.title")}
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              {t("catalog.trust.2.text")}
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-level-1 hover:shadow-level-2 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-surface-container-low text-brand-blue flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">
                build
              </span>
            </div>
            <h3 className="font-headline-sm text-base text-brand-night font-bold mb-2">
              {t("catalog.trust.3.title")}
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              {t("catalog.trust.3.text")}
            </p>
          </div>
          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-level-1 hover:shadow-level-2 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-surface-container-low text-brand-teal flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">
                school
              </span>
            </div>
            <h3 className="font-headline-sm text-base text-brand-night font-bold mb-2">
              {t("catalog.trust.4.title")}
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              {t("catalog.trust.4.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
