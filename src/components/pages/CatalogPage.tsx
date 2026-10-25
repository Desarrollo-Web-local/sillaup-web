import Link from "next/link";

export default function CatalogPage() {
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
                Ingeniería Médica Chilena
              </span>
              <h1 className="text-headline-lg font-headline-lg text-brand-night tracking-tight text-balance">
                Catálogo de Productos
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
                Equipos de ingeniería ergonómica y fabricación chilena diseñados para devolver la independencia y facilitar el cuidado seguro en el hogar y centros de salud.
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
          {/* PRODUCTO 1: Grúa eléctrica (Featured Product) */}
          <article className="product-card group bg-surface-container-lowest rounded-[24px] border-2 border-brand-blue/30 p-6 shadow-level-2 hover:shadow-level-3 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative" data-category="traslado electricos">
            {/* Top seller badge */}
            <div className="absolute -top-3 left-6 bg-brand-blue text-white text-[11px] font-label-sm uppercase px-3 py-0.5 rounded-full tracking-wide shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                star
              </span>
              Más Solicitado
            </div>
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  $390.000
                </div>
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Heavy-duty clinical electric patient transfer crane in white powder-coated steel with battery actuator, ergonomic push handles, spreader bar, and high-stability base. Modern medical clinic aesthetic with soft natural daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtLuGtnkXlzWFAWHy4rdQW-FR7-pfcvbaw_blcKx4QzsV3y6ykm_zSC9hEkETSrDc7V7iYSKRpvEAEpbiJbl7vOhRiACGh9DhLfOIycuSrXG7syMipQ9Co2zw2PJVIt0oOurTDqZZOeykAWEw9HoS9wdMvuWVuNYKXFXGDiVKezD0YaI1RP6yWe0IACRs2hqC6Y0Ilu1U8wtjvNSV9d0t6fchdW7Zi6f9y39ZoHcaTEoiIzT0cv10" />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  Traslado · Asistencia Eléctrica
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                Grúa eléctrica
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                Traslado asistido con motor eléctrico y mando ergonómico para máximo confort y cuidado postural.
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href="/productos/grua-electrica">
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
              <a className="relative z-10 w-full text-center border-2 border-brand-blue text-brand-blue bg-white font-label-md py-2.5 rounded-full hover:bg-brand-blue/5 transition-colors duration-150 font-bold active:scale-95 flex items-center justify-center gap-2" href="https://mpago.la/2Gquygz" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-sm">
                  credit_card
                </span>
                <span>
                  Comprar Ahora ($390.000)
                </span>
              </a>
            </div>
          </article>
          {/* PRODUCTO 2: Elevador de inodoro */}
          <article className="product-card group bg-surface-container-lowest rounded-[24px] border border-brand-border p-6 shadow-level-1 hover:shadow-level-2 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative" data-category="bano electricos">
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  $390.000
                </div>
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Modern medical white steel toilet lifter device designed for senior and assisted hygiene care, placed in a contemporary spotless bathroom with gentle natural daylight. Clean sanitary atmosphere with ergonomic armrests, electric piston mechanism, and sturdy Chilean engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLS1R2uL0WK8P9va3sDBrxTvvG8oiP3wUagyQuT3rtnj199l6fqc5ILsX2EzQLaQfynPw6L1xOia7OyalFyU9GZFcOwmLHHXXdUAqcqiHRaRhXzpdtAFoERyr4ruqikkqKV-sv-4tilHZSQYp-Y-iIu2b4-oOBhkaGa-dRLa9hDJW3buVuYPYD0CS2uUEeCz71yt5gw6WyrlyrHQ5VedKyBXGv0ggAgOQlMTWmG1zMYtMeU2hi4nA" />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  Baño · Eléctrico
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                Elevador de inodoro
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                Asistencia eléctrica para sentarse y ponerse de pie del inodoro con total seguridad y autonomía.
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href="/productos/elevador-de-inodoro">
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
          {/* PRODUCTO 3: Grúa manual */}
          <article className="product-card group bg-surface-container-lowest rounded-[24px] border border-brand-border p-6 shadow-level-1 hover:shadow-level-2 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative" data-category="traslado manual">
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  $290.000
                </div>
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Manual patient lift crane made of pristine white tubular steel with hydraulic lever and robust medical caster wheels. Clean studio setting with neutral lighting, demonstrating assistive mobility transfer hardware for home care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQE1EGsuBgnCAwtx593rRSzTcVfIf-YHOrw3podrn6iE4W3gFg5t-S7MJhkGGF3N_44PgvPKf-BwyDlyB0EX_AYXuPkp5giwS8WrUrrtdWGKLH3QC5gqaUIop5I0L6v2FnNV6m5kdlE9COzT66P3Hzt6zkw-JEfXQ82M7ZeQ2U2M4ShON6_Zr_aAlakKbwiUOGlJFTHMRBspRgCFKCbgMNentcJ0TCNz_paQ4UVGJLKQMpIApysnw" />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  Traslado · Manual
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                Grúa manual
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                Traslados confortables sin esfuerzo físico del cuidador ni requerimiento de cables o energía.
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href="/productos/grua-manual">
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
          {/* PRODUCTO 4: Elevador multiuso */}
          <article className="product-card group bg-surface-container-lowest rounded-[24px] border border-brand-border p-6 shadow-level-1 hover:shadow-level-2 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative" data-category="electricos">
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  $390.000
                </div>
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Multipurpose electric sit-to-stand lifting mechanism integrated with cushioned support and white medical-grade frame. Designed for helping patients stand up easily from sofas, chairs and bed sides. Clean Chilean home environment with soft daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnK0tAF5kF-QUMMMccvlp8wxZHIdMGZcniYun8riNy2qkB_Po4ToWcXE-d6nscNudZKANeijS_jZw0llLRe9Ma-c0gDwbY_A4UOwn8Oj2RrorJmKwP8ZAO5V_gYomcb_zE1i9IXcHCWF3Zzb_5uAfc7GOcxavr4pe2-SgpPLPPZOfz1ObCwcQTbSI8GJf9zH9btFziLBrg5Nle2AFXgS4zNE4wyhkBDnGXrUjaHQQ56HtRNySg95s" />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  Bipedestación y Elevación
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                Elevador multiuso
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                Levántate suavemente y sin esfuerzo desde cualquier sofá, silla o cama con apoyo progresivo.
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href="/productos/elevador-multiuso">
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
          {/* PRODUCTO 5: Elevador de cama */}
          <article className="product-card group bg-surface-container-lowest rounded-[24px] border border-brand-border p-6 shadow-level-1 hover:shadow-level-2 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between relative" data-category="cama electricos">
            <div>
              {/* Image Container with Badges */}
              <div className="relative w-full h-60 bg-surface-container-low rounded-2xl overflow-hidden mb-5 border border-outline-variant/30 flex items-center justify-center p-4">
                <div className="absolute top-3 right-3 z-10 bg-brand-night text-white font-label-sm text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                  $390.000
                </div>
                <div className="absolute top-3 left-3 z-10 bg-brand-teal/90 text-white font-label-sm text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">
                    verified
                  </span>
                  Fabricación Chilena
                </div>
                <img alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Electric adjustable bed backrest lifter mechanism made with clean white steel frame and padded mattress surface. Placed over a modern bedroom bed in a warm and dignified home healthcare environment with morning sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1xwEn0J2epefI5lcIi41M3fvYLi6xycur2aRCEQ2bHVJDS2f5Dn1RQRv5rSF-UAvpEUj9e95YMkEFt_uY-S0H0wwyjd3XDRZZZ04UgNlU6zVu5CoP1VFoUYJnB7u-F1hFsBy9CWM4cWfVPiA7303-SjT9OjYmyf1fB2JG2qZoNOYKSQF243eKVEBTbvQ9b1V7sRb3C89O0IUuV1V4UqGsVjqzpuc_bFKrwfW7R4AoAkqPO-5JDpQ" />
              </div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-surface-container-high text-brand-teal rounded-full px-3 py-1 text-xs font-label-sm font-bold">
                  Cuidado en Cama
                </span>
              </div>
              {/* Title & 1-line Value Proposition */}
              <h2 className="text-headline-sm font-headline-sm text-brand-night font-bold">
                Elevador de cama
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 mb-6 leading-relaxed">
                Convierte tu cama en ajustable clínica con respaldo ergonómico de 0° a 75° a control remoto.
              </p>
            </div>
            {/* Clean Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-brand-border/60">
              <Link className="w-full text-center bg-brand-blue text-white font-label-md py-3 rounded-full hover:bg-primary transition-colors duration-150 font-bold shadow-sm flex items-center justify-center gap-2 after:absolute after:inset-0 after:content-['']" href="/productos/elevador-de-cama">
                <span>
                  Ver producto
                </span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </article>
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
                Orientación Kinésica y Ergonómica
              </span>
              <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-white tracking-tight">
                ¿No sabes cuál dispositivo se adapta mejor a tu paciente o espacio?
              </h2>
              <p className="text-body-lg font-body-lg text-white/80 mt-4 max-w-2xl leading-relaxed">
                Cada hogar y condición física es distinta. Nuestros especialistas analizan el ancho de tus puertas, altura de cama y grado de movilidad para recomendarte la solución precisa, sin costo alguno.
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
            ¿Por qué confiar en SillaUp?
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Diseñamos soluciones pensando en la tranquilidad del paciente y la salud lumbar del cuidador.
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
              Fabricación Chilena
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Construcción robusta en taller local con soldaduras de precisión y normas biomecánicas adaptadas a la realidad habitacional del país.
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
              Garantía Real de 1 Año
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Respaldo íntegro ante fallas mecánicas o eléctricas con respuesta ágil, sin trámites burocráticos ni intermediarios de importación.
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
              Servicio Técnico y Repuestos
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Disponibilidad permanente de actuadores, motores, botoneras y arneses en Santiago con despacho inmediato a regiones.
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
              Capacitación de Uso
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Instructivos en video y acompañamiento telefónico para asegurar que familiares y cuidadores operen los equipos sin esfuerzo ni riesgos.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
