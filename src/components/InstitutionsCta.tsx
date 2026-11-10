import { site } from "@/lib/site";

const quoteText =
  "Hola SillaUp, quiero cotizar equipos para una institución (residencia de adulto mayor o centro de rehabilitación). ¿Me pueden asesorar?";

/** Quote request aimed at institutions: elderly residences and rehabilitation centers. */
export default function InstitutionsCta() {
  return (
    <section aria-labelledby="instituciones-titulo" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="rounded-3xl border-2 border-brand-teal/30 bg-white shadow-sm p-6 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center">
          <span aria-hidden="true" className="material-symbols-outlined text-3xl">apartment</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-extrabold uppercase tracking-wider text-secondary mb-1">Instituciones</p>
          <h2 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface font-extrabold" id="instituciones-titulo">
            Cotizar para residencias de adulto mayor y centros de rehabilitación
          </h2>
          <p className="text-body-sm md:text-body-md text-on-surface-variant mt-2">
            Equipamos residencias (ELEAM), clínicas y centros de rehabilitación con elevadores y grúas de traslado. Te asesoramos según el número de
            camas y residentes, con despacho, instalación y garantía de 1 año
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal text-white font-bold px-6 py-3.5 shadow-sm hover:brightness-110 active:scale-95 transition-all min-h-[48px]"
            href={`https://wa.me/56972215907?text=${encodeURIComponent(quoteText)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-lg">request_quote</span>
            Cotizar para mi institución
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-teal text-brand-teal font-bold px-6 py-3 hover:bg-brand-teal/5 transition-colors min-h-[48px]"
            href={`mailto:${site.email}?subject=${encodeURIComponent("Cotización institucional SillaUp")}`}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-lg">mail</span>
            Cotizar por correo
          </a>
        </div>
      </div>
    </section>
  );
}
