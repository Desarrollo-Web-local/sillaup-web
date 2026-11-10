import Link from "next/link";
import InstitutionsCta from "@/components/InstitutionsCta";
import JsonLd from "@/components/JsonLd";
import { CardPrice, OfferBadge } from "@/components/Price";
import { getSiteData } from "@/lib/cms";
import type { Landing } from "@/lib/landings";
import { coverImage, productHref } from "@/lib/products";
import { landingJsonLd } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

const icon = "material-symbols-outlined";

/** Category page (/productos/...) or institutional landing, built from src/lib/landings.ts. */
export default async function LandingView({ landing }: { landing: Landing }) {
  const { products } = await getSiteData();
  // Keep the order given in the landing
  const shown = landing.productSlugs.map((slug) => products.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  const crumbs = [{ name: "Inicio", path: "/" }, ...landing.breadcrumb];

  return (
    <main className="w-full">
      <JsonLd data={landingJsonLd(landing, shown)} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-container-low via-surface to-background pt-10 pb-12 border-b border-outline-variant/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav aria-label="Miga de pan" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
              {crumbs.map((crumb, i) => (
                <li className="flex items-center gap-2" key={crumb.path}>
                  {i > 0 && (
                    <span aria-hidden="true" className={`${icon} text-base`}>
                      chevron_right
                    </span>
                  )}
                  {i < crumbs.length - 1 ? (
                    <Link className="hover:text-primary underline-offset-2 hover:underline inline-flex min-h-[44px] items-center" href={crumb.path}>
                      {crumb.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-primary font-bold">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold uppercase bg-brand-teal text-white mb-4 tracking-wide">
              {landing.eyebrow}
            </p>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-brand-night tracking-tight text-balance">{landing.h1}</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant mt-4 leading-relaxed">{landing.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-whatsapp text-white font-bold text-base px-7 py-3.5 shadow-md hover:brightness-110 active:scale-95 transition-all min-h-[48px]"
                href={whatsappLink(landing.whatsappText)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className={`${icon} text-xl`}>
                  chat
                </span>
                Recibir asesoría gratis por WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary font-bold text-base px-7 py-3 hover:bg-primary/5 transition-colors min-h-[48px]"
                href={site.phoneHref}
              >
                <span aria-hidden="true" className={`${icon} text-xl`}>
                  call
                </span>
                Llamar al {site.phone}
              </a>
            </div>
            <p className="text-sm text-on-surface-variant mt-3">Atención Lun–Vie 9:00 a 18:00 hrs · Showroom en Merced 562, Santiago</p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section aria-labelledby="landing-productos" className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <h2 className="text-headline-md font-headline-md text-on-surface mb-6" id="landing-productos">
          {landing.productsTitle}
        </h2>
        <ul className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((product) => (
            <li key={product.slug}>
              <article className="group relative h-full bg-surface-container-lowest rounded-[24px] p-4 border border-brand-border shadow-level-1 hover:shadow-level-2 transition-shadow flex flex-col">
                <div className="relative w-full aspect-[4/3] bg-surface-container-low rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-2">
                  <div className="absolute top-3 right-3 z-10 bg-brand-night text-white text-sm font-extrabold px-3 py-1.5 rounded-full shadow-md">
                    <CardPrice product={product} />
                  </div>
                  <OfferBadge className="absolute top-3 left-3 z-10" product={product} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={`${product.name} SillaUp`} className="w-full h-full object-contain" loading="lazy" src={coverImage(product).src} />
                </div>
                <h3 className="text-xl text-brand-night font-bold">{product.name}</h3>
                <p className="text-base text-on-surface-variant mt-1 mb-4 leading-relaxed flex-1">{product.card.summary}</p>
                <p className="text-sm text-on-surface-variant mb-4">Garantía 1 año · Despacho a todo Chile</p>
                <Link
                  className="w-full text-center bg-primary text-white py-3 rounded-full hover:brightness-110 transition font-bold flex items-center justify-center gap-2 min-h-[48px] after:absolute after:inset-0 after:content-['']"
                  href={productHref(product.slug)}
                >
                  Ver {product.name.toLowerCase()}
                  <span aria-hidden="true" className={`${icon} text-xl`}>
                    arrow_forward
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Contenido */}
      <section className="bg-surface-container-low border-y border-outline-variant py-14">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-10">
          {landing.sections.map((section) => (
            <article className="scroll-mt-28" id={section.id} key={section.title}>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-4">{section.title}</h2>
              {section.paragraphs?.map((text) => (
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed mb-4" key={text}>
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((text) => (
                    <li className="flex items-start gap-3 text-body-lg font-body-lg text-on-surface-variant" key={text}>
                      <span aria-hidden="true" className={`${icon} text-primary text-2xl shrink-0`}>
                        check_circle
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {landing.institutions && <InstitutionsCta />}

      {/* Preguntas frecuentes */}
      <section aria-labelledby="landing-faq" className="max-w-3xl mx-auto px-6 md:px-12 py-14">
        <h2 className="text-headline-md font-headline-md text-on-surface mb-6" id="landing-faq">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {landing.faqs.map((faq) => (
            <details className="group bg-surface-container-lowest border border-outline-variant rounded-2xl" key={faq.question}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 min-h-[56px] text-lg font-bold text-on-surface">
                {faq.question}
                <span aria-hidden="true" className={`${icon} text-2xl transition-transform group-open:rotate-180`}>
                  expand_more
                </span>
              </summary>
              <p className="px-5 pb-5 text-body-md font-body-md text-on-surface-variant leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="text-base text-on-surface-variant mt-6">
          ¿Más dudas? Revisa las{" "}
          <Link className="text-primary font-bold underline underline-offset-2" href="/preguntas-frecuentes">
            preguntas frecuentes
          </Link>{" "}
          o{" "}
          <Link className="text-primary font-bold underline underline-offset-2" href="/contacto">
            solicita asesoría gratuita
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
