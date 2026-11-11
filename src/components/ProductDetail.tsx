"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { coverImage, formatPrice, isPending, productHref, salePrice } from "@/lib/products";
import { CardPrice, OfferBadge } from "@/components/Price";
import { useProduct, useProducts } from "@/components/SiteData";
import { site } from "@/lib/site";
import ImageLightbox from "@/components/ImageLightbox";
import ShowroomMap from "@/components/ShowroomMap";

const filled = { fontVariationSettings: "\"FILL\" 1" };

// Fondo/color de ícono de cada tarjeta de beneficio, en orden (del diseño original)
const benefitTones = [
  "bg-primary-fixed text-primary",
  "bg-secondary-fixed text-secondary",
  "bg-tertiary-fixed text-tertiary",
  "bg-error-container text-error",
  "bg-surface-container-high text-on-surface",
  "bg-primary-fixed-dim text-on-primary-fixed-variant",
];

const whatsapp = (text: string) => `https://wa.me/56972215907?text=${encodeURIComponent(text)}`;

function Stars({ size }: { size: "sm" | "lg" }) {
  return (
    <div className="flex text-amber-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <span aria-hidden="true" key={i} className={`material-symbols-outlined ${size === "lg" ? "text-[24px]" : "text-[20px]"}`} style={filled}>
          star
        </span>
      ))}
    </div>
  );
}

export default function ProductDetail({ slug }: { slug: string }) {
  const product = useProduct(slug);
  const { article, name, titleName } = product;
  const others = useProducts().filter((p) => p.slug !== slug);

  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [realPhotoIndex, setRealPhotoIndex] = useState<number | null>(null);
  const realPhotos = product.realPhotos ?? [];
  const thumbsRef = useRef<HTMLDivElement>(null);
  // Specs still pending confirmation are not shown publicly
  const specs = product.specs.filter((spec) => !isPending(spec.value));
  // "¿Para quién es este elevador?" / "¿Para quién es esta grúa?"
  const kind = name.split(" ")[0].toLowerCase();
  const audienceTitle = `¿Para quién es ${article === "la" ? "esta" : "este"} ${kind}?`;
  const gallery = product.gallery;
  const photoAlt = (index: number) =>
    index === 0 ? `${name} SillaUp, foto de portada` : `${name} SillaUp, foto ${index + 1} de ${gallery.length}`;

  function showImage(index: number) {
    if (index === active) return;
    // Keep the selected thumbnail visible in the horizontal strip
    thumbsRef.current
      ?.querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 120);
  }

  return (
    <main className="w-full">
      {/* SECCIÓN 1: Ficha Principal, Migas de Pan, Galería y Acción de Compra */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16">
        {/* Migas de Pan */}
        <nav aria-label="Migas de pan" className="flex items-center text-body-sm font-body-sm text-on-surface-variant mb-6 overflow-x-auto whitespace-nowrap">
          <Link className="hover:text-primary transition-colors" href="/">
            Inicio
          </Link>
          <span className="mx-2 text-outline-variant">/</span>
          <Link className="hover:text-primary transition-colors" href="/productos">
            Productos
          </Link>
          <span className="mx-2 text-outline-variant">/</span>
          <span className="hover:text-primary transition-colors">{product.breadcrumb}</span>
          <span className="mx-2 text-outline-variant">/</span>
          <span className="text-on-surface font-bold">{name}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Galería de Fotos */}
          <div className="lg:col-span-7 flex flex-col gap-3 w-full max-w-md mx-auto">
            {/* Foto principal en formato vertical (3:4) */}
            <div className="relative group">
              <button
                aria-label={`Ampliar foto ${active + 1} de ${gallery.length} de ${name}`}
                className="relative w-full aspect-[3/4] bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden p-4 flex items-center justify-center shadow-sm cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                onClick={() => setLightboxOpen(true)}
                type="button"
              >
                <img
                  alt={photoAlt(active)}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  src={(gallery[active] ?? gallery[0]).src}
                  style={{ opacity: fading ? 0.4 : 1, transition: "opacity 120ms" }}
                />
                <span className="absolute bottom-3 right-3 bg-surface-container-lowest/95 border border-outline-variant text-on-surface px-3 py-1.5 rounded-full text-label-sm font-label-sm flex items-center gap-1.5 shadow-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                  <span aria-hidden="true" className="material-symbols-outlined text-[18px]">zoom_in</span>
                  Ampliar
                </span>
              </button>
              {gallery.length > 1 && (
                <>
                  <span className="absolute top-3 left-3 bg-on-surface/75 text-white text-xs font-bold px-2.5 py-1 rounded-full pointer-events-none">
                    {active + 1} / {gallery.length}
                  </span>
                  {[
                    { step: -1, icon: "chevron_left", label: "Foto anterior", side: "left-2" },
                    { step: 1, icon: "chevron_right", label: "Foto siguiente", side: "right-2" },
                  ].map(({ step, icon, label, side }) => (
                    <button
                      aria-label={label}
                      className={`absolute ${side} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface-container-lowest/90 border border-outline-variant shadow-sm flex items-center justify-center text-on-surface hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30`}
                      key={icon}
                      onClick={() => showImage((active + step + gallery.length) % gallery.length)}
                      type="button"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-[22px]">{icon}</span>
                    </button>
                  ))}
                </>
              )}
            </div>
            {/* Miniaturas compactas con desplazamiento lateral */}
            {gallery.length > 1 && (
              <div aria-label="Fotos del producto" className="flex gap-2 overflow-x-auto snap-x pb-1 [scrollbar-width:thin]" ref={thumbsRef} role="group">
                {gallery.map((image, index) => (
                  <button
                    aria-current={index === active ? "true" : undefined}
                    className={`shrink-0 snap-start w-14 h-[70px] rounded-lg overflow-hidden p-1 bg-surface-container-lowest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      index === active ? "border-2 border-primary" : "border border-outline-variant opacity-70 hover:opacity-100 hover:border-primary"
                    }`}
                    data-index={index}
                    key={image.src}
                    onClick={() => showImage(index)}
                    type="button"
                  >
                    <img alt={`Ver ${photoAlt(index)}`} className="w-full h-full object-contain rounded" loading="lazy" src={image.src} />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Columna de Información y Compra */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">{product.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                {product.inStock ? (
                  <span className="text-tertiary font-bold text-label-sm flex items-center gap-1">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px]">check_circle</span>
                    En stock
                  </span>
                ) : (
                  <span className="text-on-surface-variant font-bold text-label-sm flex items-center gap-1">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px]">inventory_2</span>
                    Consultar stock
                  </span>
                )}
              </div>
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-2">{name}</h1>
              <p className="text-primary font-bold text-body-md font-body-md mb-3">{product.tagline}</p>
              <p className="text-on-surface-variant text-body-md font-body-md mb-6 leading-relaxed">{product.summary}</p>
              {/* Bloque de Precio */}
              <div className="bg-surface-container-low rounded-lg p-4 mb-6 border border-outline-variant flex items-baseline justify-between">
                <div>
                  {product.offer ? (
                    <span className="text-xs uppercase tracking-wide text-error font-extrabold flex flex-wrap items-center gap-x-2 mb-1">
                      {product.offer.label} -{product.offer.discountPercent}%
                      <s className="text-on-surface-variant font-bold normal-case tracking-normal">{formatPrice(product.price)}</s>
                    </span>
                  ) : (
                    <span className="text-xs uppercase tracking-wide text-on-surface-variant font-bold block">Precio de lanzamiento</span>
                  )}
                  <span className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight leading-none">
                    {formatPrice(salePrice(product))}
                  </span>
                  <span className="text-body-sm text-on-surface-variant ml-1 font-semibold">CLP</span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant text-on-surface px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  IVA incluido
                </div>
              </div>
              {/* Opciones de compra */}
              <div className="flex flex-col gap-3 mb-6">
                <a
                  className="w-full bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white py-3.5 px-6 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] text-center"
                  href={whatsapp(`Hola SillaUp, quiero comprar ${article} ${name} (${formatPrice(salePrice(product))})`)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[22px]" style={filled}>
                    chat
                  </span>
                  <span>Comprar por WhatsApp</span>
                </a>
                <a
                  className="w-full border-2 border-primary-container text-primary-container hover:bg-primary-container/5 py-3 px-6 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] text-center"
                  href={whatsapp(`Hola SillaUp, quiero agendar una prueba ${article === "la" ? "de la" : "del"} ${name} en el showroom de Merced 562`)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px]">event_available</span>
                  <span>Agendar prueba en el showroom</span>
                </a>
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-on-surface-variant font-medium text-center">
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-tertiary" style={filled}>
                    lock
                  </span>
                  <span>Coordinamos contigo el pago y el despacho a todo Chile</span>
                  {/* Online payment stays available when the product has a Mercado Pago link */}
                  {product.mercadoPagoUrl && (
                    <a className="font-bold text-primary hover:underline" href={product.mercadoPagoUrl} rel="noopener noreferrer" target="_blank">
                      o paga en línea con Mercado Pago
                    </a>
                  )}
                </div>
              </div>
            </div>
            {/* Badges de Confianza Rápidos */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-outline-variant">
              {product.quickSpecs.filter((spec) => !isPending(spec.value)).map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-[22px]">{spec.icon}</span>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-bold">{spec.label}</span>
                    <span className="text-label-sm font-label-sm text-on-surface">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Descripción Detallada */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">{product.detail.eyebrow}</span>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-4">{product.detail.title}</h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
              <div className="flex flex-col gap-3">
                {product.detail.points.map((point) => (
                  <div key={point.text} className="flex items-start gap-3">
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary-container mt-1">{point.icon}</span>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed mb-4">
                {product.detail.introPrefix} <strong className="text-primary font-bold">{product.detail.introHighlight}</strong>{" "}
                {product.detail.intro}
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-4">{product.detail.body}</p>
              <div className="p-4 bg-surface-container rounded-lg border-l-4 border-primary text-body-sm text-on-surface flex items-center justify-between">
                <span>¿Necesitas una prueba presencial antes de comprar? Puedes visitar nuestro showroom en Santiago</span>
                <a className="text-primary font-bold hover:underline shrink-0 ml-4" href="#contacto-showroom">
                  Agendar visita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ¿Cómo funciona? */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Protocolo de Uso Seguro</span>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            ¿Cómo funciona {article} {titleName}?
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">{product.stepsIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {product.steps.map((step, index) => (
            <div key={step.title} className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
              <div
                className={`w-10 h-10 rounded-full ${index === 2 ? "bg-primary text-on-primary" : "bg-primary-fixed text-on-primary-fixed"} font-black flex items-center justify-center text-label-md mb-4 shadow-sm`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-bold text-on-surface text-label-md mb-2">{step.title}</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 4: Demostración en Video */}
      <section className="bg-surface-container py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Video Demostrativo</span>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
            Demostración de funcionamiento en vivo: {titleName} SillaUp
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
            {product.video?.description ??
              `Pronto publicaremos el video demostrativo ${article === "la" ? "de la" : "del"} ${name}. Mientras tanto, podemos mostrártelo por videollamada o en nuestro showroom`}
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-outline-variant bg-inverse-surface">
            {product.video ? (
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
                src={`https://www.youtube-nocookie.com/embed/${product.video.youtubeId}?rel=0&modestbranding=1`}
                title={`Demostración de funcionamiento en vivo: ${titleName} SillaUp`}
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-inverse-on-surface px-6">
                <span aria-hidden="true" className="material-symbols-outlined text-[64px] opacity-80">videocam</span>
                <p className="text-body-md font-body-md max-w-md">Video demostrativo en preparación</p>
                <a
                  className="inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-6 py-3 rounded-full font-label-md text-label-md transition-colors"
                  href={whatsapp(`Hola, quiero ver una demostración ${article === "la" ? "de la" : "del"} ${name} por videollamada`)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px]">video_call</span>
                  Solicitar demostración por videollamada
                </a>
              </div>
            )}
          </div>
          {product.video && (
            <p className="text-xs text-on-surface-variant mt-4 flex items-center justify-center gap-1">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary">play_circle</span>
              Video oficial grabado en nuestro showroom y en ambientes reales de transferencia SillaUp
            </p>
          )}
        </div>
      </section>

      {/* SECCIÓN 5: Beneficios Destacados */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Ventajas Clave</span>
          <h2 className="text-headline-md font-headline-md text-on-surface">Beneficios diseñados para cuidar a quienes cuidan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.benefits.map((benefit, index) => (
            <div key={benefit.title} className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
              <div className={`p-3 ${benefitTones[index % benefitTones.length]} rounded-lg flex items-center justify-center shrink-0`}>
                <span aria-hidden="true" className="material-symbols-outlined text-[28px]">{benefit.icon}</span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">{benefit.title}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 6: ¿Para quién está recomendado? */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Uso recomendado</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">{audienceTitle}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {product.audience.map((item) => (
              <div
                key={item.title}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-surface-container-lowest border border-outline-variant rounded-2xl p-7 md:p-8 text-center flex flex-col items-center shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <span className="w-16 h-16 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center mb-5">
                  <span aria-hidden="true" className="material-symbols-outlined text-[40px]">{item.icon}</span>
                </span>
                <h3 className="font-extrabold text-on-surface text-headline-sm font-headline-sm mb-2 text-balance">{item.title}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: Especificaciones Técnicas */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-10">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Ficha de Ingeniería</span>
          <h2 className="text-headline-md font-headline-md text-on-surface">Especificaciones Técnicas</h2>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={spec.label}
                  className={`${index < specs.length - 1 ? "border-b border-outline-variant " : ""}${index % 2 ? "bg-[#FAFBFB]" : "bg-surface-container-lowest"} hover:bg-surface-container-low transition-colors`}
                >
                  <th className="py-4 px-6 text-label-md font-label-md text-on-surface w-1/3">{spec.label}</th>
                  <td
                    className={`py-4 px-6 text-body-sm font-body-sm ${
                      spec.emphasis === "primary"
                        ? "font-bold text-primary"
                        : spec.emphasis === "tertiary"
                          ? "font-bold text-tertiary"
                          : "text-on-surface-variant"
                    }${spec.swatch ? " flex items-center gap-2" : ""}`}
                  >
                    {spec.swatch && (
                      <span className="w-4 h-4 rounded-full border border-outline-variant inline-block" style={{ backgroundColor: spec.swatch }}></span>
                    )}
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN 7b: Fotos reales del producto (se suben desde /admin) */}
      {realPhotos.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16" id="fotos-reales">
          <div className="text-center mb-10">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Así se ve en uso</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">Fotos reales {article === "la" ? "de la" : "del"} {name.toLowerCase()}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {realPhotos.map((photo, index) => (
              <button
                aria-label={`Ampliar ${photo.alt}`}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-low shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
                key={photo.src}
                onClick={() => setRealPhotoIndex(index)}
                type="button"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={photo.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" src={photo.src} />
                <span aria-hidden="true" className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 text-on-surface flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN 8: ¿Por qué elegir SillaUp? */}
      <section className="bg-surface-container-lowest py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md">
              <span aria-hidden="true" className="material-symbols-outlined text-[44px]">favorite</span>
            </div>
            <div>
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-1">Propósito &amp; Compromiso Humano</span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">¿Por qué elegir SillaUp?</h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                &quot;Desarrollamos soluciones que mejoran la calidad de vida de las personas y facilitan el trabajo de quienes las cuidan: una forma más segura, cómoda y eficiente de hacer transferencias, con menos esfuerzo físico y más tranquilidad en cada movimiento&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9: Dónde nos ubicamos y Asesoría Técnica */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 scroll-mt-24" id="contacto-showroom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Visita Nuestro Showroom</span>
            <h2 className="text-headline-md font-headline-md text-on-surface mb-4">Dónde nos ubicamos y Asesoría Técnica personalizada</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">
              Te invitamos a probar {article} {name.toLowerCase()} en persona, resolver dudas con nuestros diseñadores industriales y recibir asesoría especializada antes de decidir tu compra
            </p>
            <div className="space-y-4">
              {[
                { icon: "location_on", title: "Dirección del Showroom", text: "Merced 562, Santiago Centro, Región Metropolitana (Metro Bellas Artes)" },
                { icon: "schedule", title: "Horario de Atención", text: "Lunes a Viernes de 9:00 a 18:00 hrs (Continuado)" },
                { icon: "support", title: "Teléfono y Asistencia WhatsApp", text: `${site.phone} (Servicio técnico y repuestos inmediatos)` },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-[24px]">{item.icon}</span>
                  <div>
                    <strong className="text-on-surface text-label-md block">{item.title}</strong>
                    <span className="text-body-sm text-on-surface-variant">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="px-6 py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-2"
                href={whatsapp(`Hola, deseo agendar una demostración ${article === "la" ? "de la" : "del"} ${name} en Merced 562`)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Agendar demostración</span>
              </a>
              <a
                className="px-6 py-3 rounded-full border-2 border-outline-variant text-on-surface font-label-md text-label-md hover:border-primary transition-colors flex items-center gap-2"
                href={site.mapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">directions</span>
                <span>Cómo llegar</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm p-3">
            <div className="relative w-full h-[360px] rounded-xl overflow-hidden bg-surface-container flex items-center justify-center">
              <ShowroomMap />
              <div className="pointer-events-none absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-xl border border-outline-variant shadow-md max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-bold text-xs text-on-surface uppercase tracking-wide">Showroom SillaUp</span>
                </div>
                <p className="text-xs text-on-surface-variant">Merced 562, Santiago · Estacionamiento para clientes disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 10: Opiniones de Clientes sobre este Producto */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Testimonios Reales</span>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Opiniones de clientes sobre {article} {name}
              </h2>
              {product.rating && (
                <div className="flex items-center gap-3 mt-3">
                  <Stars size="lg" />
                  <span className="text-headline-sm font-headline-sm text-on-surface">{product.rating.score}</span>
                  <span className="text-body-sm text-on-surface-variant">{product.rating.basis}</span>
                </div>
              )}
            </div>
            <Link
              className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-200"
              href="/testimonios#formulario-opinion"
            >
              Dejar mi opinión
            </Link>
          </div>
          {product.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.reviews.map((review) => (
                <div key={review.name} className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <Stars size="sm" />
                    </div>
                    <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">&quot;{review.quote}&quot;</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">
                      {review.initials}
                    </div>
                    <div>
                      <span className="text-on-surface font-bold text-sm block">{review.name}</span>
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-tertiary">verified</span>
                        {review.detail}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface-container-lowest border border-dashed border-outline-variant rounded-xl p-10 text-center">
              <span aria-hidden="true" className="material-symbols-outlined text-[40px] text-outline mb-3">rate_review</span>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Sé el primero en compartir tu experiencia</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mx-auto">
                ¿Ya utilizas {article} {name.toLowerCase()} en tu hogar? Tu testimonio ayuda a orientar a otras familias en su decisión
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN 11: Productos Relacionados */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="catalogo">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">Soluciones Complementarias</span>
            <h2 className="text-headline-md font-headline-md text-on-surface">Otros productos del catálogo SillaUp</h2>
          </div>
          <Link className="text-primary font-bold text-body-md hover:underline flex items-center gap-1 mt-2 md:mt-0" href="/productos">
            <span>Ver catálogo completo</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((other) => (
            <div key={other.slug} className="relative bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative w-full aspect-[4/3] bg-white rounded-xl border border-outline-variant/60 mb-4 overflow-hidden">
                  <span className="absolute top-2 right-2 z-10 bg-on-surface text-surface-container-lowest text-label-sm font-label-sm px-2.5 py-1 rounded-full">
                    <CardPrice product={other} />
                  </span>
                  <OfferBadge className="absolute top-2 left-2 z-10" product={other} />
                  <img alt={`${other.name} SillaUp`} className="absolute inset-0 w-full h-full object-contain p-3 pt-10 group-hover:scale-105 transition-transform duration-300" loading="lazy" data-alt={coverImage(other).alt} src={coverImage(other).src} />
                </div>
                <span className="text-xs text-secondary font-bold uppercase tracking-wider">{other.card.category}</span>
                <h3 className="text-label-lg font-label-lg text-on-surface mt-1 mb-2">{other.name}</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">{other.card.summary}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
                <span className="text-xs font-bold text-on-surface-variant">{other.card.meta}</span>
                <Link className="text-primary font-bold text-xs hover:underline flex items-center after:absolute after:inset-0 after:content-['']" href={productHref(other.slug)}>
                  Ver detalle
                  <span aria-hidden="true" className="material-symbols-outlined text-[14px]">chevron_right</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {realPhotoIndex !== null && realPhotos.length > 0 && (
        <ImageLightbox
          images={realPhotos}
          index={realPhotoIndex}
          label={`Fotos reales: ${name}`}
          onClose={() => setRealPhotoIndex(null)}
          onIndexChange={setRealPhotoIndex}
        />
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={product.gallery}
          index={active}
          label={name}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setActive}
        />
      )}
    </main>
  );
}
