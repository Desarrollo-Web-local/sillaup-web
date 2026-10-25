"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { submitContact, submitTestimonial } from "@/app/actions";
import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";
import { useFormAction } from "@/components/useFormAction";

export default function HomePage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const contact = useFormAction(submitContact);
  const feedback = useFormAction(submitTestimonial);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollTrack = (left: number) => trackRef.current?.scrollBy({ left, behavior: "smooth" });
  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  };

  return (
    <>
    {/* 3. HERO A PANTALLA COMPLETA */}
    <section className="relative overflow-hidden w-full min-h-[90vh] flex items-center justify-center" id="inicio">
      {/* Imagen de fondo a sangre completa con animación sutil Ken Burns */}
      <div className="absolute inset-0 overflow-hidden select-none">
        <img alt="Cuidado, cariño y asistencia para personas con movilidad reducida" className="w-full h-full object-cover object-center animate-kenburns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIrYP9qTRRetDYa6PA8GrSj2Jzcjqgv0kelogfm0WcKB15xO_zaN9HqXctnl0C81Xg2cdYCb20q76_oQPk4X3o3kFpWju9m0DoEl_knK8bsHaehGOGF3kRUNLNkiRq0rslPCE-ORAaHwFN5rYidW9KPDP8ANtCP6sAWw0UeNvEej5E7e7vTCLdlZkyWtN10txl_SY0uTxno2854bB4sW3OcFmg515O46aXkk05V7PdWrmiulwp-WI" />
      </div>
      {/* Capa de degradado superpuesto para garantizar alto contraste de lectura */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D141A]/95 via-[#0D141A]/75 to-[#174A5A]/40 z-0"></div>
      {/* Contenido principal alineado a la izquierda */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center min-h-[90vh]">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          {/* Badge Fabricación Chilena */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full shadow-sm">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-whatsapp animate-pulse"></span>
            <span className="text-xs md:text-sm font-extrabold tracking-wider uppercase">
              Fabricación chilena directa de fábrica
            </span>
          </div>
          {/* Título principal de gran escala */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
            Dispositivos para personas con movilidad reducida
          </h1>
          {/* Subtítulo complementario */}
          <p className="text-base md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl">
            Ingeniería ergonómica nacional creada para devolver la independencia a adultos mayores y aliviar la carga física de cuidadores y familias en todo Chile.
          </p>
          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container text-white text-base font-bold px-8 py-4 shadow-lg hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px] text-center" href="/productos">
              <span className="material-symbols-outlined mr-2">
                arrow_downward
              </span>
              Ver productos
            </Link>
            <a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white text-white text-base font-bold px-8 py-4 hover:bg-white hover:text-[#0D141A] active:scale-95 transition-all duration-150 min-h-[48px] text-center shadow-lg" href="https://wa.me/56972215907?text=Hola%20SillaUp,%20quisiera%20asesor%C3%ADa%20sobre%20sus%20dispositivos%20de%20movilidad" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined mr-2">
                chat
              </span>
              Hablar por WhatsApp
            </a>
          </div>
          {/* Trust Proof Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 text-white">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                100%
              </p>
              <p className="text-xs md:text-sm text-white/80 uppercase font-bold tracking-wider mt-0.5">
                Acero Estructural
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                24/7
              </p>
              <p className="text-xs md:text-sm text-white/80 uppercase font-bold tracking-wider mt-0.5">
                Soporte Técnico
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                Santiago
              </p>
              <p className="text-xs md:text-sm text-white/80 uppercase font-bold tracking-wider mt-0.5">
                Taller & Showroom
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Indicador animado de scroll hacia abajo */}
      <Link aria-label="Deslizar hacia productos" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white transition-colors duration-150 group cursor-pointer" href="/productos">
        <span className="text-[11px] font-bold uppercase tracking-widest mb-1 opacity-80 group-hover:opacity-100">
          Explorar
        </span>
        <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-1.5 shadow-sm group-hover:border-white transition-colors">
          <span className="w-1.5 h-2.5 bg-white rounded-full animate-bounce mt-1"></span>
        </div>
      </Link>
    </section>
    {/* 4. MARQUESINA INFINITA DE VALORES (Ticker animado en loop continuo) */}
    <section aria-label="Valores corporativos" className="bg-surface-container-highest border-y border-outline-variant py-4 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Repetition Block 1 */}
        <div className="flex items-center gap-8 md:gap-14 text-brand-teal text-label-md font-label-md uppercase tracking-wider font-extrabold px-4">
          <span>
            Seguridad
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Autonomía
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Movilidad
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Fabricación chilena
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Garantía de 1 año
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
        </div>
        {/* Repetition Block 2 */}
        <div className="flex items-center gap-8 md:gap-14 text-brand-teal text-label-md font-label-md uppercase tracking-wider font-extrabold px-4">
          <span>
            Seguridad
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Autonomía
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Movilidad
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Fabricación chilena
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
          <span>
            Garantía de 1 año
          </span>
          <span className="text-primary-container font-black">
            ★
          </span>
        </div>
      </div>
    </section>
    {/* 5. SECCIÓN PRODUCTOS DESTACADOS (Fondo verde azulado profundo #174A5A, texto de títulos blanco) */}
    <section className="bg-brand-teal text-white py-20 px-6 md:px-12 relative" id="productos">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with carousel controllers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-secondary-fixed px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm">
                precision_manufacturing
              </span>
              Soluciones Especializadas
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-white font-extrabold tracking-tight">
              Productos
            </h2>
          </div>
        </div>
        {/* Carousel Container (5 Exact Products) with side arrows */}
        <div className="relative">
          <button aria-label="Producto anterior" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white text-primary shadow-xl border border-white/60 hover:bg-surface-container-low active:scale-95 flex items-center justify-center transition-all duration-150 disabled:opacity-0 disabled:pointer-events-none" disabled={atStart} onClick={() => scrollTrack(-380)} type="button">
            <span className="material-symbols-outlined">
              arrow_back
            </span>
          </button>
          <button aria-label="Producto siguiente" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-full bg-white text-primary shadow-xl border border-white/60 hover:bg-surface-container-low active:scale-95 flex items-center justify-center transition-all duration-150 disabled:opacity-0 disabled:pointer-events-none" disabled={atEnd} onClick={() => scrollTrack(380)} type="button">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </button>
        <div className="product-carousel flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory focus:outline-none" onScroll={updateArrows} ref={trackRef}>
          {/* Producto 1: Grúa eléctrica */}
          <article className="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] bg-white text-on-surface rounded-3xl p-5 shadow-lg flex flex-col justify-between snap-start border border-[#DADADB] hover:shadow-2xl transition-all duration-200">
            <div>
              <div className="relative w-full h-56 rounded-2xl bg-surface-container-low overflow-hidden mb-4">
                <img alt="Grúa eléctrica de elevación asistida SillaUp" className="w-full h-full object-cover" data-alt="Professional medical equipment photography of an advanced battery-powered electric patient lifting crane. Sleek white frame with remote control wand, emergency stop module, dual battery pack, and reinforced patient sling. Set in a luminous, sterile yet welcoming contemporary rehabilitation suite with light oak flooring and soft ambient highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS7k-zTobK5wOL5LeI2e3SpVf3aruEp6gSmS6AMCf5Lbtp9s2uRJ5UwE2-MK0HwfmzLgNPKFJVE_jJIVYDqWWwmMARXgB5QhIVIk3PV6UzqD8RCf3x_9dN3LUAC0mzl35lWBho4WnFDewSunONysdxKC6OkApqIKlQHL00g4S_VXxGFzqxQb1yUg-oCH3BtGLzOPYpy9dBNWZ6Gpt-H_m5qNwaWtCYzZ-MQ7_k5ly6TWotXgJvrBQ" />
                <div className="absolute top-3 right-3 bg-[#0D141A] text-white text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-extrabold shadow-md">
                  $390.000
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Eléctrica 24V
                </span>
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                  SWL 110 kg
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Grúa eléctrica
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Traslada con seguridad mediante elevación eléctrica asistida con pulsar un solo botón en el mando remoto.
              </p>
            </div>
            <Link className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 px-6 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]" href="/productos/grua-electrica">
              Ver producto
              <span className="material-symbols-outlined ml-2 text-base">
                chevron_right
              </span>
            </Link>
          </article>
          {/* Producto 2: Elevador de inodoro */}
          <article className="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] bg-white text-on-surface rounded-3xl p-5 shadow-lg flex flex-col justify-between snap-start border border-[#DADADB] hover:shadow-2xl transition-all duration-200">
            <div>
              {/* Image Stage with Embedded Price Chip */}
              <div className="relative w-full h-56 rounded-2xl bg-surface-container-low overflow-hidden mb-4">
                <img alt="Elevador de inodoro SillaUp" className="w-full h-full object-cover" data-alt="Studio catalog product photography of a modern ergonomic toilet lifter assistive chair on a pure high-key white background. Steel white powder-coated structure with soft padded medical armrests and non-slip safety suction footings. Clear ambient lighting highlighting high-precision engineering and domestic warmth in soft blue and white tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxLwH6baDMQkdQ3RvRAUEjafYePfP7Gf2H-72wcfyTwOGod2IxvTegAgyLH1T20a8-FZBac5achCJTlYvGUQI0NtFr4SBEoxNP3ur6LSqkfKluHePWLFD3UOtDtYe92f_F0mjEac_Ys_xvp_DREJF9jSIxHzTVcWBlN14sn6yFCHxa5xFz3mltsJzsPQnQBYv9CmQuR06rx0LU3sSbETqCfaHy6E9XowMcyPaACxosmcKrONKshgI" />
                {/* Price Chip Integration ($390.000) */}
                <div className="absolute top-3 right-3 bg-[#0D141A] text-white text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-extrabold shadow-md">
                  $390.000
                </div>
              </div>
              {/* Tags */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Baño seguro
                </span>
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                  SWL 110 kg
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Elevador de inodoro
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Siéntate y levántate del inodoro con mayor seguridad y autonomía sin exigir tus rodillas ni cadera.
              </p>
            </div>
            <Link className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 px-6 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]" href="/productos/elevador-de-inodoro">
              Ver producto
              <span className="material-symbols-outlined ml-2 text-base">
                chevron_right
              </span>
            </Link>
          </article>
          {/* Producto 3: Grúa manual */}
          <article className="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] bg-white text-on-surface rounded-3xl p-5 shadow-lg flex flex-col justify-between snap-start border border-[#DADADB] hover:shadow-2xl transition-all duration-200">
            <div>
              <div className="relative w-full h-56 rounded-2xl bg-surface-container-low overflow-hidden mb-4">
                <img alt="Grúa manual de traslado SillaUp" className="w-full h-full object-cover" data-alt="Clinical product photography of a heavy-duty manual hydraulic patient transfer hoist crane. Powder-coated white steel framework with high-grade dual-caster locking wheels and an ergonomic comfort sling harness. Shot against a crisp bright backdrop with subtle blue reflections, highlighting medical grade precision, durability and dignified care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMFjiWKuRALQEYhmQgQxvWJfXscssKvHERbvsTtiKpdq0l0sZQE-BA7HcmsYA9hK0b544Ms-ZtlYB2n5n-Z-UUwzr7ovVokkYVV8IXNcJoI2a4HjQ-B6LM_HoU-U3uR6jpqDak5uljKy8QwUD_Eyz3laWZgXB7YmUgfhKL8cWXW1vodxsNdinNg76X6D_dW95MYuAlXLSU1bHqspcd66k2peRYNCciXDa3ROK_eAbCbwK4mh6MFZ0" />
                <div className="absolute top-3 right-3 bg-[#0D141A] text-white text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-extrabold shadow-md">
                  $290.000
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Hidráulica
                </span>
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                  SWL 110 kg
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Grúa manual
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Traslados seguros y cómodos con menor esfuerzo del cuidador, protegiendo la columna vertebral.
              </p>
            </div>
            <Link className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 px-6 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]" href="/productos/grua-manual">
              Ver producto
              <span className="material-symbols-outlined ml-2 text-base">
                chevron_right
              </span>
            </Link>
          </article>
          {/* Producto 4: Elevador multiuso */}
          <article className="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] bg-white text-on-surface rounded-3xl p-5 shadow-lg flex flex-col justify-between snap-start border border-[#DADADB] hover:shadow-2xl transition-all duration-200">
            <div>
              <div className="relative w-full h-56 rounded-2xl bg-surface-container-low overflow-hidden mb-4">
                <img alt="Elevador multiuso para sillón y sillas SillaUp" className="w-full h-full object-cover" data-alt="Crisp studio product shot of a versatile portable multi-use chair lifting mechanism designed for domestic armchairs and dining seats. Clean white structural frame with cushioned support handles and non-slip rubber base. Shot in a bright minimalist room setting with soft natural illumination and calm therapeutic aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC83eXy5G2pvbM-gKmLB2qScL3pKJEN0rDHzd7ITH4tIwPBXCVQXo8wezCA37mgf8NEVIti4f7XetSfLnPb9Yt3qAVFMrNM3Rk12vR5ziZaGnbE2ZDtjIbjbhGICKEbhTX4fZNF2-nwRcffLlXMTRPid64BW4weWrMGkLLDhFNjZowUb018ToQ1WW7O9ZERFZR4wqnHko-0qG3YAR-to8RuEtcrPEfi8zA-Zc1DmvrNeCVp3BapzVg" />
                <div className="absolute top-3 right-3 bg-[#0D141A] text-white text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-extrabold shadow-md">
                  $390.000
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Multisuperficie
                </span>
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                  SWL 110 kg
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Elevador multiuso
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Levántate con facilidad desde cualquier asiento o superficie sin requerir la fuerza de otra persona.
              </p>
            </div>
            <Link className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 px-6 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]" href="/productos/elevador-multiuso">
              Ver producto
              <span className="material-symbols-outlined ml-2 text-base">
                chevron_right
              </span>
            </Link>
          </article>
          {/* Producto 5: Elevador de cama */}
          <article className="min-w-[300px] sm:min-w-[340px] md:min-w-[370px] bg-white text-on-surface rounded-3xl p-5 shadow-lg flex flex-col justify-between snap-start border border-[#DADADB] hover:shadow-2xl transition-all duration-200">
            <div>
              <div className="relative w-full h-56 rounded-2xl bg-surface-container-low overflow-hidden mb-4">
                <img alt="Elevador de cama ajustable SillaUp" className="w-full h-full object-cover" data-alt="High-end catalog photography of an adjustable backrest and bed lifter frame installed seamlessly on a residential mattress. Powder-coated steel structure with smooth angle adjustments and padded head support. Pristine white studio lighting with delicate blue undertones, portraying modern domestic elder care technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCogt2eYljZ3d-EHas-E0n-hMaARqzggVLCksVxd7RGxGZbNmwDBhe3d2K6qZ6eBD3DC99KtvmhE2hkBn9vefS2ZgTt_ReWm5uamzs-BOHeKYdzqiVt_D8O6vo2A8KJxMpbPY0vDWafwl9mn6nkJQMjnAZFASrYBE-3QnDolmGk8MEuwTZxglJY0j8iRqgtAfY1J0PDy0pmLsKATaGKxdWU2Rg_6F0UTSMkwQA_AQdufHXICiaqxVo" />
                <div className="absolute top-3 right-3 bg-[#0D141A] text-white text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-extrabold shadow-md">
                  $390.000
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Dormitorio
                </span>
                <span className="bg-[#F2F4F7] text-[#174A5A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                  Graduable
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Elevador de cama
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
                Convierte tu cama en una cama ajustable de forma sencilla para incorporarte, comer y descansar mejor.
              </p>
            </div>
            <Link className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 px-6 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]" href="/productos/elevador-de-cama">
              Ver producto
              <span className="material-symbols-outlined ml-2 text-base">
                chevron_right
              </span>
            </Link>
          </article>
        </div>
        </div>
      </div>
    </section>
    {/* 6. SECCIÓN "QUIÉNES SOMOS" */}
    <section className="py-20 md:py-28 bg-surface-container-lowest" id="nosotros">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Composition (Human touch, warmth, dignity) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-outline-variant shadow-xl">
              <img alt="Cuidado familiar y autonomía con SillaUp" className="w-full h-[460px] object-cover" data-alt="A touching and respectful close-up portrait of a family member gently holding the hands of an elderly relative in a brightly illuminated Chilean living room. The warm sunlight streams through large windows, illuminating genuine smiles, physical comfort, and human dignity. Muted warm wood and light blue accents dominate the scene, evoking authentic care, safety, and emotional relief." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClSjsj93KlCXIL6tW2vtulQCFwSK13LERVaOaF9lU2i3KblL_b5I27xoOhEDoclve_DJL09dDT105OUp7V-Y2dznNj598xhll4pHfDL_DQkUo1v7aeJF1t7x6OnLv8QogDpJcwQTYriySRKDZGacWrsLu5VnO_9YC7W4KwL84vcIbmpco8exPm0FuQBXzWLsoLoH_O55PMphpftviZJuRj5Sq-RGrjd1pY_a9XRvmExUdpcVOiPKg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-label-md font-label-md uppercase tracking-wider font-bold">
                  Compromiso Chileno
                </p>
                <p className="text-body-sm font-body-sm text-white/90">
                  Diseñado y ensamblado en Santiago para hogares de todo el país.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-surface-container text-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">
                groups
              </span>
              Propósito y Dignidad
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
              Quiénes Somos
            </h2>
            {/* Exact verbatim statement required by prompt */}
            <p className="text-headline-sm md:text-headline-md font-headline-md text-brand-teal font-bold leading-snug">
              “Somos SillaUp, desarrollamos soluciones accesibles que ayudan a personas con movilidad reducida a recuperar su independencia, mejorando su seguridad y calidad de vida en actividades cotidianas.”
            </p>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              Nacimos al constatar que las soluciones importadas son inaccesibles y complejas de reparar. En SillaUp creamos ingeniería local en acero de alta resistencia, con repuestos garantizados y atención empática para cada familia.
            </p>
            <div className="pt-2">
              <Link className="inline-flex items-center justify-center rounded-full bg-[#0D141A] text-white text-label-md font-label-md px-8 py-4 shadow-sm hover:bg-black active:scale-95 transition-all duration-150 min-h-[48px]" href="/nosotros">
                Ver más sobre nosotros
                <span className="material-symbols-outlined ml-2 text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 7. SECCIÓN CIFRAS CON CONTADORES ANIMADOS (Solo datos verificables) */}
    <section className="py-16 bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Cifra 1: 5 equipos */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm text-center flex flex-col justify-center items-center">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-2">
              devices
            </span>
            <span className="text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface tracking-tight">
              <Counter to={5} />
            </span>
            <p className="text-label-md font-label-md text-on-surface-variant mt-1 font-bold">
              equipos para tu movilidad
            </p>
          </div>
          {/* Cifra 2: 1 año de garantía */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm text-center flex flex-col justify-center items-center">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-2">
              verified_user
            </span>
            <div className="flex items-baseline justify-center">
              <span className="text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface tracking-tight">
              <Counter to={1} />
            </span>
              <span className="text-headline-md font-bold text-on-surface ml-1">
                año
              </span>
            </div>
            <p className="text-label-md font-label-md text-on-surface-variant mt-1 font-bold">
              de garantía técnica
            </p>
          </div>
          {/* Cifra 3: Hasta 110 kg */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm text-center flex flex-col justify-center items-center">
            <span className="material-symbols-outlined text-secondary text-3xl mb-2">
              weight
            </span>
            <div className="flex items-baseline justify-center">
              <span className="text-headline-sm font-bold text-on-surface-variant mr-1">
                Hasta
              </span>
              <span className="text-display-lg-mobile md:text-display-lg font-extrabold text-on-surface tracking-tight">
              <Counter to={110} />
            </span>
              <span className="text-headline-md font-bold text-on-surface ml-1">
                kg
              </span>
            </div>
            <p className="text-label-md font-label-md text-on-surface-variant mt-1 font-bold">
              de capacidad de carga
            </p>
          </div>
          {/* Cifra 4: Fabricación chilena (sin contador) */}
          <div className="bg-brand-teal text-white p-6 md:p-8 rounded-3xl border border-brand-teal shadow-sm text-center flex flex-col justify-center items-center">
            <span className="material-symbols-outlined text-secondary-fixed text-3xl mb-2">
              flag
            </span>
            <p className="text-headline-md md:text-headline-lg font-extrabold tracking-tight leading-tight mt-1">
              Fabricación chilena
            </p>
            <p className="text-secondary-fixed text-label-sm font-label-sm mt-2 font-bold uppercase tracking-wider">
              Directo de fábrica en Santiago
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 8. SECCIÓN "CÓMO ELEGIR TU EQUIPO" (4 tarjetas interactivas por necesidad) */}
    <section className="py-20 md:py-28 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-surface-container text-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-sm">
              help_center
            </span>
            Guía Rápida para Cuidadores
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
            Cómo elegir tu equipo
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-3">
            Identifica la necesidad específica de tu ser querido para encontrar la solución que mejor se adapta a tu espacio y rutina diaria.
          </p>
        </div>
        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Necesidad 1: Baño */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  bathtub
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Baño
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Dificultad para agacharse o reincorporarse del inodoro sin perder el equilibrio o forzar a quien te asiste.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <span className="text-xs uppercase font-extrabold text-primary-container block mb-3">
                Equipo recomendado:
              </span>
              <Link className="w-full inline-flex items-center justify-between rounded-full bg-surface-container text-on-surface font-label-md text-label-md px-4 py-3 hover:bg-primary-container hover:text-white transition-colors duration-150 min-h-[48px]" href="/productos/elevador-de-inodoro">
                <span>
                  Elevador de inodoro
                </span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Necesidad 2: Cama */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  bed
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Cama
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Complicaciones para sentarse erguido en el colchón al despertar, comer o tomar medicamentos.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <span className="text-xs uppercase font-extrabold text-primary-container block mb-3">
                Equipo recomendado:
              </span>
              <Link className="w-full inline-flex items-center justify-between rounded-full bg-surface-container text-on-surface font-label-md text-label-md px-4 py-3 hover:bg-primary-container hover:text-white transition-colors duration-150 min-h-[48px]" href="/productos/elevador-de-cama">
                <span>
                  Elevador de cama
                </span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Necesidad 3: Levantarme de un sillón o silla */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/15 text-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  chair
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2 leading-tight">
                Levantarme de un sillón o silla
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Falta de fuerza muscular en las piernas al pararse desde el living, comedor o silla de trabajo.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <span className="text-xs uppercase font-extrabold text-primary-container block mb-3">
                Equipo recomendado:
              </span>
              <Link className="w-full inline-flex items-center justify-between rounded-full bg-surface-container text-on-surface font-label-md text-label-md px-4 py-3 hover:bg-primary-container hover:text-white transition-colors duration-150 min-h-[48px]" href="/productos/elevador-multiuso">
                <span>
                  Elevador multiuso
                </span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          {/* Necesidad 4: Traslados */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  transfer_within_a_station
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Traslados
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Mover a una persona dependiente desde la cama hacia la silla de ruedas o baño sin lesionar la espalda del cuidador.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <span className="text-xs uppercase font-extrabold text-primary-container block mb-3">
                Equipo recomendado:
              </span>
              <Link className="w-full inline-flex items-center justify-between rounded-full bg-surface-container text-on-surface font-label-md text-label-md px-4 py-3 hover:bg-primary-container hover:text-white transition-colors duration-150 min-h-[48px]" href="/productos">
                <span>
                  Grúa manual / Grúa eléctrica
                </span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 9. SECCIÓN TESTIMONIOS */}
    <section className="py-20 md:py-28 bg-surface-container-low" id="testimonios">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-container text-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm">
                rate_review
              </span>
              Experiencias Reales
            </div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
              Opiniones de quienes ya confían en SillaUp
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
              Historias de familias y cuidadores en Chile que recuperaron tranquilidad, bienestar y ergonomía en su día a día.
            </p>
          </div>
          {/* Botón "Dejar mi opinión" */}
          <button onClick={() => setFeedbackOpen(true)} type="button" className="inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md px-6 py-3.5 shadow-sm hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px]">
            <span className="material-symbols-outlined mr-2 text-base">
              edit_note
            </span>
            Dejar mi opinión
          </button>
        </div>
        {/* Testimonial Cards Wall */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonio 1 */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div aria-label="5 de 5 estrellas" className="flex text-amber-400 mb-4">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface italic mb-6">
                &quot;El Elevador de inodoro le devolvió la dignidad y la autonomía a mi padre de 82 años. Ya no requiere pedir auxilio cada vez que necesita ir al baño y la estructura es sumamente firme.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm">
                MV
              </div>
              <div>
                <p className="text-label-md font-label-md text-on-surface font-bold">
                  Marcela Valenzuela
                </p>
                <p className="text-xs text-on-surface-variant">
                  Elevador de inodoro · Providencia
                </p>
              </div>
            </div>
          </div>
          {/* Testimonio 2 */}
          <div className="bg-white rounded-3xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <div aria-label="5 de 5 estrellas" className="flex text-amber-400 mb-4">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  star
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface italic mb-6">
                &quot;Como enfermera cuidadora, la Grúa manual salvó mi columna. Es suave para la paciente, cabe perfectamente por las puertas del departamento y el servicio técnico en Santiago respondió de inmediato.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm">
                CR
              </div>
              <div>
                <p className="text-label-md font-label-md text-on-surface font-bold">
                  Camila Rojas T.
                </p>
                <p className="text-xs text-on-surface-variant">
                  Grúa manual · Ñuñoa
                </p>
              </div>
            </div>
          </div>
          {/* Testimonio 3: Llamado visible a compartir experiencia */}
          <div className="bg-gradient-to-br from-surface-container-highest to-surface-container rounded-3xl p-6 border-2 border-dashed border-outline flex flex-col justify-between text-center items-center">
            <div className="my-auto py-6">
              <div className="w-14 h-14 rounded-full bg-primary-container/10 text-primary-container flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">
                  forum
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2">
                Sé el primero en compartir tu experiencia
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant max-w-xs mx-auto mb-4">
                ¿Ya utilizas un equipo SillaUp en tu hogar? Tu testimonio ayuda a orientar a otras familias en su decisión.
              </p>
            </div>
            <button onClick={() => setFeedbackOpen(true)} type="button" className="w-full inline-flex items-center justify-center rounded-full bg-[#0D141A] text-white text-label-md font-label-md py-3.5 px-6 hover:bg-black active:scale-95 transition-all duration-150 min-h-[48px]">
              Dejar mi opinión
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* 10. SECCIÓN CONTÁCTANOS */}
    <section className="py-20 md:py-28 bg-surface-container-lowest" id="contacto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Channels Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container text-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-sm">
                  support_agent
                </span>
                Asesoría Personalizada
              </div>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
                Contáctanos
              </h2>
              {/* Exact verbatim text required by prompt */}
              <p className="text-body-md font-body-md text-on-surface-variant mt-4 leading-relaxed">
                Si tienes dudas o quieres adquirir alguno de nuestros productos, puedes contactarnos por teléfono, correo electrónico o completar el formulario y nos comunicaremos contigo a la brevedad.
              </p>
            </div>
            {/* Canales Directos */}
            <div className="space-y-4">
              <a className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant transition-colors group" href="tel:+56972215907">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    call
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                    Teléfono / WhatsApp
                  </p>
                  <p className="text-headline-sm font-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                    +56 9 7221 5907
                  </p>
                </div>
              </a>
              <a className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant transition-colors group" href="mailto:sillaupventas@gmail.com">
                <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    email
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                    Correo Electrónico
                  </p>
                  <p className="text-label-lg font-label-lg text-on-surface font-bold group-hover:text-primary transition-colors">
                    sillaupventas@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant">
                <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                    Dirección Showroom & Taller
                  </p>
                  <p className="text-label-lg font-label-lg text-on-surface font-bold">
                    Merced 562, Santiago, Chile
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant">
                <div className="w-12 h-12 rounded-xl bg-outline text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant uppercase">
                    Horario de Atención
                  </p>
                  <p className="text-label-lg font-label-lg text-on-surface font-bold">
                    Lunes a Viernes, 9:00 a 18:00 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-outline-variant shadow-lg">
              <h3 className="text-headline-md font-headline-md text-on-surface font-extrabold mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-8">
                Completa los campos y un especialista en movilidad asistida te asesorará sin compromiso.
              </p>
              <form className="space-y-6" onSubmit={contact.onSubmit}>
                <input name="source" type="hidden" value="inicio" />
                {/* Nombre* */}
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="name">
                    Nombre completo *
                  </label>
                  <input className="w-full h-12 px-4 rounded-2xl border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-body-md" id="name" name="name" placeholder="Ej. Juan Pérez" required type="text" />
                </div>
                {/* Fila Teléfono y Correo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Número de teléfono* */}
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="phone">
                      Número de teléfono *
                    </label>
                    <input className="w-full h-12 px-4 rounded-2xl border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-body-md" id="phone" name="phone" placeholder="+56 9 1234 5678" required type="tel" />
                  </div>
                  {/* Correo* */}
                  <div>
                    <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="email">
                      Correo electrónico *
                    </label>
                    <input className="w-full h-12 px-4 rounded-2xl border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-body-md" id="email" name="email" placeholder="nombre@correo.com" required type="email" />
                  </div>
                </div>
                {/* Mensaje* */}
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="message">
                    Mensaje o consulta *
                  </label>
                  <textarea className="w-full p-4 rounded-2xl border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all font-body-md" id="message" name="message" placeholder="Indícanos qué producto te interesa o la situación de movilidad de tu familiar..." required rows={4} />
                </div>
                {/* Botón píldora azul */}
                <button className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-lg font-label-lg py-4 px-8 shadow-md hover:bg-primary active:scale-95 transition-all duration-150 min-h-[48px] disabled:opacity-60" disabled={contact.sending} type="submit">
                  <span className="material-symbols-outlined mr-2">
                    send
                  </span>
                  {contact.sending ? "Enviando..." : "Enviar mensaje"}
                </button>
                {/* Estado de Confirmación */}
                {contact.status === "error" && (
                  <p className="p-4 rounded-2xl bg-error-container text-on-error-container text-body-sm font-body-sm font-bold" role="alert">
                    {contact.error}
                  </p>
                )}
                {contact.status === "success" && (
                <div className="p-4 rounded-2xl bg-tertiary-container/10 border border-tertiary-container/30 text-tertiary flex items-center gap-3" role="status">
                  <span className="material-symbols-outlined text-2xl shrink-0">
                    check_circle
                  </span>
                  <p className="text-body-sm font-body-sm font-bold">
                    ¡Mensaje enviado con éxito! Nos comunicaremos contigo en menos de 24 horas hábiles.
                  </p>
                </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MODAL PARA DEJAR OPINIÓN / TESTIMONIO */}
    {feedbackOpen && (
    <div aria-labelledby="feedback-title" aria-modal="true" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && setFeedbackOpen(false)} role="dialog">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-outline-variant shadow-2xl relative">
        <button aria-label="Cerrar ventana" className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2" onClick={() => setFeedbackOpen(false)} type="button">
          <span className="material-symbols-outlined text-2xl">
            close
          </span>
        </button>
        <h3 className="text-headline-sm font-headline-sm text-on-surface font-extrabold mb-2" id="feedback-title">
          Compartir mi experiencia
        </h3>
        <p className="text-body-sm font-body-sm text-on-surface-variant mb-6">
          Tu valoración ayuda a familias y cuidadores a tomar decisiones informadas con seguridad.
        </p>
        {feedback.status === "success" ? (
        <div className="p-4 rounded-2xl bg-tertiary-container/10 border border-tertiary-container/30 text-tertiary flex items-center gap-3" role="status">
          <span className="material-symbols-outlined text-2xl shrink-0">check_circle</span>
          <p className="text-body-sm font-body-sm font-bold">¡Muchas gracias! Tu opinión será revisada y publicada.</p>
        </div>
        ) : (
        <form className="space-y-4" onSubmit={feedback.onSubmit}>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1" htmlFor="feedback-name">
              Nombre y Apellido *
            </label>
            <input className="w-full h-12 px-4 rounded-2xl border border-outline-variant font-body-md" id="feedback-name" name="name" placeholder="Ej. Patricia Morales" required type="text" />
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1" htmlFor="feedback-product">
              Producto utilizado *
            </label>
            <select className="w-full h-12 px-4 rounded-2xl border border-outline-variant font-body-md" id="feedback-product" name="product" required>
              <option value="">
                Selecciona un equipo
              </option>
              <option value="Elevador de inodoro">
                Elevador de inodoro
              </option>
              <option value="Grúa manual">
                Grúa manual
              </option>
              <option value="Elevador multiuso">
                Elevador multiuso
              </option>
              <option value="Elevador de cama">
                Elevador de cama
              </option>
              <option value="Grúa eléctrica">
                Grúa eléctrica
              </option>
            </select>
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1">
              Calificación *
            </label>
            <div className="py-1">
              <StarRating buttonClassName="cursor-pointer" />
            </div>
          </div>
          <div>
            <label className="block text-label-md font-label-md text-on-surface mb-1" htmlFor="feedback-comment">
              Tu testimonio *
            </label>
            <textarea className="w-full p-4 rounded-2xl border border-outline-variant font-body-md" id="feedback-comment" name="comment" placeholder="Cuéntanos cómo ha sido tu experiencia con el equipo..." required rows={3} />
          </div>
          <button className="w-full inline-flex items-center justify-center rounded-full bg-primary-container text-white text-label-md font-label-md py-3.5 min-h-[48px] disabled:opacity-60" disabled={feedback.sending} type="submit">
            {feedback.sending ? "Enviando..." : "Publicar opinión"}
          </button>
          {feedback.status === "error" && (
            <p className="text-body-sm font-body-sm text-error font-bold" role="alert">{feedback.error}</p>
          )}
        </form>
        )}
      </div>
    </div>
    )}
    </>
  );
}
