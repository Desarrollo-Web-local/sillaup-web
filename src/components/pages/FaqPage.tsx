"use client";

import { useRef, useState } from "react";

export default function FaqPage() {
  const accordionRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  // Shows only the questions whose text or keywords contain the search term.
  function search(term: string) {
    setQuery(term);
    const q = term.toLowerCase().trim();
    let matches = 0;
    accordionRef.current?.querySelectorAll<HTMLElement>("article[data-keywords]").forEach((item) => {
      const text = `${item.textContent} ${item.dataset.keywords}`.toLowerCase();
      item.hidden = !text.includes(q);
      if (!item.hidden) matches++;
    });
    setNoResults(matches === 0);
  }

  function filterByTag(tag: string) {
    search(tag);
    accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <>
    {/* Hero Section with Search */}
    <section className="relative bg-gradient-to-b from-surface-container-low via-surface to-background pt-12 pb-16 md:pt-20 md:pb-24 border-b border-surface-container-high overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-secondary-container opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-fixed opacity-40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Fabricación Chilena Badge */}
          <div className="inline-flex items-center gap-2 bg-[#174A5A] text-white px-4 py-1.5 rounded-full text-xs font-label-sm tracking-wide mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
              verified
            </span>
            <span>
              Soporte Técnico y Fabricación Chilena • Atención Telefónica Inmediata
            </span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-5 text-balance">
            Preguntas Frecuentes
          </h1>
          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto text-pretty">
            Resolvemos todas tus dudas sobre el funcionamiento, seguridad, instalación y garantía de nuestros dispositivos de movilidad asistida.
          </p>
          {/* Search Bar with Live Filter Input */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-surface-container-lowest rounded-full shadow-[0_4px_20px_-2px_rgba(13,20,26,0.08)] border border-outline-variant focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20 transition-all p-2 pl-6">
              <span className="material-symbols-outlined text-outline text-2xl mr-3 select-none">
                search
              </span>
              <input aria-label="Buscar preguntas frecuentes" className="w-full bg-transparent border-none text-on-surface font-body-md focus:outline-none focus:ring-0 placeholder:text-outline text-sm md:text-base py-2.5 pr-4" onChange={(e) => search(e.target.value)} ref={searchRef} value={query} placeholder="Escribe tu consulta (ej. seguridad, electricidad, garantía, peso...)" type="text" />
              <button className={`${query ? "" : "hidden "}text-outline hover:text-on-surface p-2 rounded-full focus:outline-none transition-colors`} onClick={() => { search(""); searchRef.current?.focus(); }} title="Borrar búsqueda" type="button">
                <span className="material-symbols-outlined text-lg">
                  close
                </span>
              </button>
            </div>
            {/* Search category quick tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-label-sm">
              <span className="text-on-surface-variant font-medium">
                Búsquedas sugeridas:
              </span>
              <button className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-container text-on-secondary-fixed-variant transition-colors" onClick={() => filterByTag("seguridad")} type="button">
                Seguridad
              </button>
              <button className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-container text-on-secondary-fixed-variant transition-colors" onClick={() => filterByTag("electricidad")} type="button">
                Electricidad
              </button>
              <button className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-container text-on-secondary-fixed-variant transition-colors" onClick={() => filterByTag("instalación")} type="button">
                Instalación
              </button>
              <button className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-secondary-container text-on-secondary-fixed-variant transition-colors" onClick={() => filterByTag("garantía")} type="button">
                Garantía
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Interactive FAQ Main Section */}
    <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
      {/* Helper info badge for elderly / accessibility */}
      <div className="flex items-center gap-3 p-4 mb-8 bg-surface-container-low border border-secondary-container rounded-2xl text-secondary">
        <span className="material-symbols-outlined text-2xl text-primary">
          info
        </span>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Haz clic sobre cualquiera de las preguntas para desplegar la respuesta completa detallada. Letra amplia y contraste optimizado para cuidadores y usuarios familiares.
        </p>
      </div>
      {/* Accordion Container */}
      <div className="space-y-4" ref={accordionRef}>
        {/* Question 1 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 0 ? " border-primary shadow-md" : ""}`} data-keywords="seguridad seguro proteger peso calidad caidas certificacion estabilidad">
          <button aria-expanded={openIndex === 0} onClick={() => toggle(0)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  verified_user
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Es seguro usarlo?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 0 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 0}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              Sí, nuestros dispositivos cumplen con altos estándares de seguridad para protegerte.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Cada equipo SillaUp está fabricado con acero estructural de grado médico y componentes probados bajo rigurosos protocolos de carga física. Cuentan con sistemas de bloqueo en las ruedas, arneses de cuatro puntos con costuras reforzadas, y un centro de gravedad calibrado para eliminar todo riesgo de vuelco tanto en transferencias de cama a silla como en cuartos de baño.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#F2F4F7] text-[#174A5A] rounded-full text-xs font-bold">
                Capacidad probada hasta 150 kg
              </span>
              <span className="px-3 py-1 bg-[#F2F4F7] text-[#174A5A] rounded-full text-xs font-bold">
                Bloqueo bilateral de ruedas
              </span>
              <span className="px-3 py-1 bg-[#F2F4F7] text-[#174A5A] rounded-full text-xs font-bold">
                Arnés hipoalergénico acolchado
              </span>
            </div>
          </div>
        </article>
        {/* Question 2 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 1 ? " border-primary shadow-md" : ""}`} data-keywords="instalacion armado montar herramientas modificaciones obra casa puertas">
          <button aria-expanded={openIndex === 1} onClick={() => toggle(1)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  build
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Cómo se instala?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 1 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 1}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              La instalación es sencilla y rápida, no requiere herramientas especiales ni modificaciones.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Nuestros dispositivos están concebidos con un sistema modular pensado para su uso inmediato en el hogar. No necesitas realizar obras, perforar muros ni contratar técnicos de montaje: las piezas encajan de forma intuitiva mediante pernos de seguridad manuales de alta fijación. Además, incluimos una guía ilustrada paso a paso y videos explicativos en video para mayor tranquilidad del cuidador.
            </p>
            <div className="p-3 bg-surface-container rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-[#174A5A]">
                videocam
              </span>
              <span className="text-body-sm text-on-surface">
                ¿Prefieres asistencia en video? Solicita nuestra videollamada guiada gratuita tras recibir tu equipo.
              </span>
            </div>
          </div>
        </article>
        {/* Question 3 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 2 ? " border-primary shadow-md" : ""}`} data-keywords="electricidad energia enchufe bateria manual grua elevador inodoro cama control motor">
          <button aria-expanded={openIndex === 2} onClick={() => toggle(2)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  power
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Necesita electricidad para funcionar?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 2 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 2}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              Depende del equipo. La Grúa manual funciona sin electricidad, con una palanca ergonómica. El Elevador de inodoro, el Elevador multiuso, el Elevador de cama y la Grúa eléctrica funcionan con electricidad y se controlan con un control de fácil uso.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Los modelos eléctricos incorporan baterías recargables de larga duración con protección contra bajas de voltaje y botón de parada de emergencia integrado. Una sola carga provee entre 40 a 60 ciclos completos de elevación, asegurando continuidad operativa incluso en caso de cortes imprevistos en el suministro eléctrico domiciliario.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm">
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container-high">
                <strong className="text-primary block mb-1">
                  Modelos 100% Mecánicos:
                </strong>
                <span className="text-on-surface-variant">
                  Grúa manual con palanca hidráulica suave asistida por fluido.
                </span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container-high">
                <strong className="text-[#174A5A] block mb-1">
                  Modelos Eléctricos con Control:
                </strong>
                <span className="text-on-surface-variant">
                  Elevador de inodoro, multiuso, cama y grúa eléctrica con botonera ergonómica.
                </span>
              </div>
            </div>
          </div>
        </article>
        {/* Question 4 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 3 ? " border-primary shadow-md" : ""}`} data-keywords="garantia respaldo chile repuestos fabrica taller servicio tecnico santiago postventa">
          <button aria-expanded={openIndex === 3} onClick={() => toggle(3)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  workspace_premium
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Qué garantía ofrecen?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 3 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 3}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              Ofrecemos garantía de un año para asegurar tu tranquilidad y respaldo directo de fábrica en Chile.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Al ser diseñadores y fabricantes nacionales, no dependes de tiempos de importación ni distribuidores intermediarios. Contamos con stock permanente de repuestos genuinos (motores, mandos, baterías, pistones y arneses) y servicio técnico especializado directo en nuestro taller en el centro de Santiago. Cubrimos defectos de fabricación y soporte preventivo.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#174A5A] bg-[#F2F4F7] p-2.5 rounded-lg">
              <span className="material-symbols-outlined text-base">
                location_on
              </span>
              <span>
                Taller oficial y despacho de refacciones: Merced 562, Santiago Centro.
              </span>
            </div>
          </div>
        </article>
        {/* Question 5 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 4 ? " border-primary shadow-md" : ""}`} data-keywords="solo autonomia independiente autocuidado bano cama ergonomico">
          <button aria-expanded={openIndex === 4} onClick={() => toggle(4)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  person
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Puedo usarlo solo?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 4 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 4}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              Sí, están diseñados para que la persona pueda usarlos con autonomía y seguridad en las actividades diarias.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Equipos como el Elevador de inodoro y el Elevador de cama disponen de mandos accesibles con botones de textura diferenciada que permiten ser accionados con una sola mano y sin aplicar fuerza muscular. Para transferencias más complejas con grúa en pacientes con movilidad severamente reducida, el diseño ergonómico reduce el esfuerzo del cuidador hasta en un 90%, previniendo lesiones lumbares.
            </p>
            <div className="border-l-4 border-primary pl-4 py-1 text-body-sm text-on-surface-variant italic">
              &quot;Diseñado para devolver la dignidad en la rutina diaria y proteger la salud física de la familia.&quot;
            </div>
          </div>
        </article>
        {/* Question 6 */}
        <article className={`faq-item bg-surface-container-lowest border border-[#DADADB] rounded-2xl shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] transition-all duration-200 overflow-hidden${openIndex === 5 ? " border-primary shadow-md" : ""}`} data-keywords="ayuda soporte whatsapp santiago taller telefono orientacion asesor postventa">
          <button aria-expanded={openIndex === 5} onClick={() => toggle(5)} className="faq-button w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 gap-4" type="button">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container/60 text-[#174A5A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">
                  contact_support
                </span>
              </div>
              <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold text-base md:text-lg">
                ¿Qué hago si necesito ayuda o soporte?
              </h2>
            </div>
            <span className="faq-icon material-symbols-outlined text-primary text-2xl transition-transform duration-300" style={{ transform: openIndex === 5 ? "rotate(180deg)" : "rotate(0deg)" }}>
              keyboard_arrow_down
            </span>
          </button>
          <div className="faq-answer px-6 pb-6 pt-1 text-on-surface-variant border-t border-surface-container-high" hidden={openIndex !== 5}>
            <p className="text-body-lg font-body-lg font-medium text-on-surface mb-3">
              Nuestro equipo está siempre disponible para asesorarte y resolver cualquier duda que tengas, tanto por WhatsApp como de forma presencial en nuestro taller en Santiago.
            </p>
            <p className="text-body-md font-body-md leading-relaxed text-on-surface-variant mb-4">
              Puedes comunicarte de inmediato a nuestra línea directa de atención prioritaria al{" "}
              <strong className="text-on-surface">
                +56 9 7221 5907
              </strong>
              , enviarnos un mensaje con fotos o videos para orientarte en tiempo real, o coordinar una visita a nuestro centro en Merced 562, Santiago para revisar tu equipo o probar las alternativas disponibles antes de decidir.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-full font-label-md text-xs transition-colors" href="https://wa.me/56972215907?text=Hola%20SillaUp,%20necesito%20ayuda%20con%20un%20dispositivo" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-sm">
                  chat
                </span>
                Contactar por WhatsApp (+56 9 7221 5907)
              </a>
              <a className="inline-flex items-center gap-2 bg-on-surface hover:bg-black text-white px-4 py-2 rounded-full font-label-md text-xs transition-colors" href="tel:+56972215907">
                <span className="material-symbols-outlined text-sm">
                  call
                </span>
                Llamar ahora
              </a>
            </div>
          </div>
        </article>
      </div>
      {/* Empty state message for search */}
      <div className={`${noResults ? "" : "hidden "}text-center py-12 px-4 bg-surface-container-low rounded-2xl border border-outline-variant mt-4`}>
        <span className="material-symbols-outlined text-5xl text-outline mb-2">
          search_off
        </span>
        <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
          No encontramos preguntas con esa búsqueda
        </h3>
        <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mx-auto mb-6">
          No te preocupes. Nuestros kinesiólogos y asesores técnicos pueden responder tu consulta específica por teléfono o WhatsApp de inmediato.
        </p>
        <a className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full font-label-md text-sm shadow-md transition-all" href="https://wa.me/56972215907" rel="noopener noreferrer" target="_blank">
          <span className="material-symbols-outlined">
            chat
          </span>
          Consultar directamente por WhatsApp
        </a>
      </div>
    </main>
    {/* Section 4: Tarjeta destacada de Asistencia: "¿Aún tienes dudas?" */}
    <section className="max-w-5xl mx-auto px-6 md:px-12 pb-20" id="contacto-soporte">
      <div className="bg-gradient-to-br from-[#174A5A] to-[#0D2E38] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-secondary-fixed/10 rounded-full blur-xl pointer-events-none"></div>
        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-label-sm text-secondary-fixed mb-4">
              <span className="material-symbols-outlined text-sm">
                headset_mic
              </span>
              <span>
                Atención Personalizada en Chile
              </span>
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-md font-headline-md text-white mb-4">
              ¿Aún tienes dudas?
            </h2>
            <p className="text-body-md text-white/90 leading-relaxed mb-6">
              Entendemos que cada situación de cuidado y movilidad en el hogar es única. Nuestro equipo técnico en Santiago te asesora de forma gratuita para elegir la solución adecuada para tu familiar o paciente.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#25D366]">
                  check_circle
                </span>
                Sin compromiso de compra
              </span>
              <span>
                •
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#25D366]">
                  check_circle
                </span>
                Respuesta en menos de 10 min
              </span>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* WhatsApp Primary Action */}
            <a className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-label-lg text-label-lg px-6 py-4 rounded-full shadow-lg transition-transform duration-150 hover:scale-[1.02] active:scale-95 text-center" href="https://wa.me/56972215907?text=Hola%20SillaUp,%20estoy%20viendo%20la%20secci%C3%B3n%20de%20Preguntas%20Frecuentes%20y%20me%20gustar%C3%ADa%20hacer%20una%20consulta" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-2xl">
                chat
              </span>
              <div className="text-left">
                <div className="text-sm font-bold leading-tight">
                  Hablar con un asesor
                </div>
                <div className="text-xs font-normal opacity-95">
                  (+56 9 7221 5907)
                </div>
              </div>
            </a>
            {/* Direct Phone Call Action */}
            <a className="flex items-center justify-center gap-3 bg-surface-container-lowest text-on-surface hover:bg-surface-bright font-label-lg text-label-lg px-6 py-4 rounded-full transition-transform duration-150 hover:scale-[1.02] active:scale-95 shadow-md text-center" href="tel:+56972215907">
              <span className="material-symbols-outlined text-primary text-2xl">
                call
              </span>
              <div className="text-left">
                <div className="text-sm font-bold leading-tight">
                  Llamada telefónica directa
                </div>
                <div className="text-xs text-on-surface-variant font-normal">
                  Lunes a Sábado de 09:00 a 19:00 hrs
                </div>
              </div>
            </a>
            {/* Visita a taller */}
            <div className="text-center text-xs text-white/70 pt-1">
              <span>
                ¿Deseas probar un equipo? Visítanos en Merced 562, Santiago Centro previa coordinación.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Technical Specs Cards Grid (Complementary context) */}
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">
          Por qué confiar en SillaUp
        </h3>
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          Fabricamos en Chile dispositivos con ingeniería biomédica y certificación de carga.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest border border-[#DADADB] rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)]">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 text-[#174A5A] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">
              shield
            </span>
          </div>
          <h4 className="text-headline-sm font-headline-sm text-base font-bold text-on-surface mb-2">
            Garantía Real de 1 Año
          </h4>
          <p className="text-body-sm text-on-surface-variant">
            Respaldo formal de fábrica en Chile. Asistencia técnica presencial y repuestos disponibles sin esperas de aduana.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-surface-container-lowest border border-[#DADADB] rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)]">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 text-[#174A5A] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">
              precision_manufacturing
            </span>
          </div>
          <h4 className="text-headline-sm font-headline-sm text-base font-bold text-on-surface mb-2">
            Fabricación Nacional
          </h4>
          <p className="text-body-sm text-on-surface-variant">
            Estructuras de acero de alta resistencia fabricadas en Santiago, diseñadas especialmente para marcos de puertas y baños chilenos.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-surface-container-lowest border border-[#DADADB] rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(13,20,26,0.05)] sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 text-[#174A5A] flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl">
              health_and_safety
            </span>
          </div>
          <h4 className="text-headline-sm font-headline-sm text-base font-bold text-on-surface mb-2">
            Cuidado del Cuidador
          </h4>
          <p className="text-body-sm text-on-surface-variant">
            Reducción inmediata de la sobrecarga lumbar en un 90% para familiares y terapeutas que realizan transferencias diarias.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
