"use client";

import Link from "next/link";
import { useState } from "react";

const gallery = [
  {
    alt: "Side profile view of the white SillaUp electric patient lifter crane showing the dual mast structure, robust locking castor wheels, and hydraulic electric actuator piston against a bright neutral light backdrop.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj5dYnBxfp-3ArLJZWq5oe2OtOKqEpPK0NVvsZjeQwp7vAQ9cgDDydzBUdKU9GZDinN0dR64I3KzM3B-jNQYJ9MVyw6x12_x7CbJAdsydOPnaJbrRLxQA3pO76OW_rozfaoo-GPPW45K0-xn2jK7tetHXvVPp2LWehzBNJgJiBgIiLOW3Q5-gZL_asBy7eN9dnJ0UQilbNkEE4TOv6Prk3roXiANkqM48mQ2V_0uGgeLgjxug5rZs"
  },
  {
    alt: "Detailed close up of the ergonomic wired handheld remote control with intuitive push buttons for lifting and lowering patient transfers, resting on the steel medical crane handle.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtR2nU4yzHVgT_npIZFY_kHEqZ65cxpQ8P7xZQP7c0RTlfPxZPYYTCR9AFNTYp8-eYYepk1J9w_vPvSpgZjYGUB3wnBtUT3Ho0EaoaFFzruYKz6xMlyTFsNvBBfuUrTDw1iepAWYXKPC6rtd2V8U2idhLRb0B2gpqbz5_sIS0dxjlfegl3fj9I-K7XTLeENdcHTtqTwjmSmj2q8XZ7pC_xg6bPwi4gngjrPxvwDcht4lROLuT6BPs"
  },
  {
    alt: "Reinforced padded ergonomic body sling harness in navy and grey fabric with multi-point high-tensile safety carabiners and strap hooks shown spread flat.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv6JGgOF84JZSg00-_XfsuxkZ1PkT7mP2tyEGabpT2fGWgF5RM5ivO0oFHqKknLVNh5GYqs-WKfcXLQC7NjGH8we5azqRSWHHzU68FjLea6n9gdCkC4IHkV8YwD3RuUlrnJJu5VGc5xvbcvSCsr-US0SCZU6866VcohlkZp8lABrg1ecuq8xgcj__3eDCxWmfuckGjtw_v8oRXDrU_ilJ6CUJJi73KPs8i6ISk0oJ-LmwocoDNJV0"
  },
  {
    alt: "Electric patient lift crane situated in a modern accessible bathroom next to a walk-in shower and toilet demonstrating clearance and transfer versatility in domestic environments.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFwQdJrnRtExOwQFEksK0xT2JAlTszsRcI7qBfhGwIU-wTPxKJeqnNZ6Csll22Ba7vLwbg80sVeI0vozzvpsRhInW-FmGDRiZKj8LcSEYEXeWBbxzx4swVDkFikU2NXTjxbaYYY7bD9U9bUvMqGoaWcQgseJHVmAaASjdAUvawga2tNikC4T3cYSD_g8lgcHxikBsef3-bTMJ3B3uzyWCTMg3yr5AKE5b2GFds7pxaJBW2cQ2dBL0"
  }
];

export default function GruaElectricaPage() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function showImage(index: number) {
    if (index === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 120);
  }

  return (
    <>
    <main className="w-full">
      {/* SECCIÓN 1: Ficha Principal, Migas de Pan, Galería y Acción de Compra */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-16">
        {/* Migas de Pan */}
        <nav className="flex items-center text-body-sm font-body-sm text-on-surface-variant mb-6 overflow-x-auto whitespace-nowrap">
          <Link className="hover:text-primary transition-colors" href="/">
            Inicio
          </Link>
          <span className="mx-2 text-outline-variant">
            /
          </span>
          <Link className="hover:text-primary transition-colors" href="/productos">
            Productos
          </Link>
          <span className="mx-2 text-outline-variant">
            /
          </span>
          <span className="hover:text-primary transition-colors">
            Traslado
          </span>
          <span className="mx-2 text-outline-variant">
            /
          </span>
          <span className="text-on-surface font-bold">
            Grúa eléctrica
          </span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Galería de Fotos */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Image Stage */}
            <div className="relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden p-6 flex items-center justify-center min-h-[460px] shadow-sm group">
              {/* Real Photos Badge */}
              <div className="absolute top-4 left-4 z-10 bg-secondary text-on-secondary px-3.5 py-1.5 rounded-full text-label-sm font-label-sm flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                  camera_alt
                </span>
              </div>
              {/* National Badge Indicator */}
              <div className="absolute top-4 right-4 z-10 bg-surface-container-lowest border border-outline-variant text-on-surface px-3 py-1.5 rounded-full text-label-sm font-label-sm flex items-center gap-1.5 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-error inline-block"></span>
              </div>
              <img className="w-full max-h-[420px] object-contain transition-transform duration-300 group-hover:scale-105" alt="Grúa eléctrica SillaUp" data-alt={gallery[active].alt} src={gallery[active].src} style={{ opacity: fading ? 0.4 : 1, transition: "opacity 120ms" }} />
            </div>
            {/* Thumbnails Strip */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  aria-label={`Ver imagen ${index + 1}`}
                  aria-pressed={index === active}
                  className={`thumbnail-btn ${index === active ? "border-2 border-primary" : "border border-outline-variant hover:border-primary"} rounded-lg overflow-hidden p-2 bg-surface-container-lowest focus:outline-none transition-all`}
                  onClick={() => showImage(index)}
                  type="button"
                >
                  <img alt="" className="w-full h-20 object-contain rounded" data-alt={image.alt} src={image.src} />
                </button>
              ))}
            </div>
          </div>
          {/* Columna de Información y Compra */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Categoría */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                  Traslado · Asistencia Eléctrica
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <span className="text-tertiary font-bold text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>
                  En stock
                </span>
              </div>
              {/* Título y Subtítulos */}
              <h1 className="text-headline-lg font-headline-lg text-on-surface mb-2">
                Grúa eléctrica
              </h1>
              <p className="text-primary font-bold text-body-md font-body-md mb-3">
                Traslada con seguridad mediante elevación eléctrica asistida
              </p>
              <p className="text-on-surface-variant text-body-md font-body-md mb-6 leading-relaxed">
                Traslada personas con seguridad y comodidad gracias a su elevación eléctrica, reduciendo el esfuerzo del cuidador.
              </p>
              {/* Bloque de Precio */}
              <div className="bg-surface-container-low rounded-lg p-4 mb-6 border border-outline-variant flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wide text-on-surface-variant font-bold block">
                    Precio de lanzamiento
                  </span>
                  <span className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight leading-none">
                    $390.000
                  </span>
                  <span className="text-body-sm text-on-surface-variant ml-1 font-semibold">
                    CLP
                  </span>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant text-on-surface px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  IVA incluido
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Botón Primario Mercado Pago */}
                <a className="w-full bg-primary-container hover:bg-primary text-on-primary py-3.5 px-6 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] text-center" href="https://mpago.la/2Gquygz" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[20px]">
                    shopping_cart_checkout
                  </span>
                  <span>
                    Comprar ahora
                  </span>
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    lock
                  </span>
                  <span>
                    Pago seguro con Mercado Pago · Hasta 12 cuotas sin interés
                  </span>
                </div>
                {/* Botón Secundario WhatsApp */}
                <a className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm active:scale-[0.99] text-center mt-1" href="https://wa.me/56972215907?text=Hola,%20quiero%20información%20sobre%20la%20Grúa%20eléctrica" rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    chat
                  </span>
                  <span>
                    Consultar por WhatsApp
                  </span>
                </a>
              </div>
            </div>
            {/* Badges de Confianza Rápidos */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-outline-variant">
              <div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  fitness_center
                </span>
                <div>
                  <span className="text-xs text-on-surface-variant block font-bold">
                    Capacidad
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface">
                    Máx. 110 kg
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  bolt
                </span>
                <div>
                  <span className="text-xs text-on-surface-variant block font-bold">
                    Carga Rápida
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface">
                    2 Horas
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  verified_user
                </span>
                <div>
                  <span className="text-xs text-on-surface-variant block font-bold">
                    Garantía Oficial
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface">
                    1 Año Directa
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  local_shipping
                </span>
                <div>
                  <span className="text-xs text-on-surface-variant block font-bold">
                    Despacho
                  </span>
                  <span className="text-label-sm font-label-sm text-on-surface">
                    A todo Chile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 2: Descripción Detallada */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
                Ingeniería y Seguridad
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-4">
                Diseñada para proteger al usuario y aliviar la carga física del cuidador
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-1">
                    health_and_safety
                  </span>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Prevención comprobada de lumbagos y lesiones osteomusculares crónicas en cuidadores y familiares.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container mt-1">
                    airline_seat_recline_extra
                  </span>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Arnés ergonómico acolchado que distribuye el peso de manera uniforme sin puntos de presión dolorosos.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm">
              <p className="text-body-lg font-body-lg text-on-surface leading-relaxed mb-4">
                La
                <strong className="text-primary font-bold">
                  Grúa Eléctrica de Traslado
                </strong>
                facilita la movilización segura de personas con movilidad reducida o dependencia entre distintos espacios del hogar o centros de atención. Su elevación eléctrica, accionada con control remoto, permite hacer las transferencias con mínimo esfuerzo físico.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-4">
                Su funcionamiento estable y preciso ayuda a reducir el riesgo de caídas y lesiones. Ideal para transferencias entre cama, silla de ruedas, sillón, baño u otras superficies, con estructura robusta y fácil de maniobrar para hogar, rehabilitación, clínicas y establecimientos de salud.
              </p>
              <div className="p-4 bg-surface-container rounded-lg border-l-4 border-primary text-body-sm text-on-surface flex items-center justify-between">
                <span>
                  ¿Necesitas una prueba presencial antes de comprar? Puedes visitar nuestro showroom en Santiago.
                </span>
                <a className="text-primary font-bold hover:underline shrink-0 ml-4" href="#contacto-taller">
                  Agendar visita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 3: ¿Cómo funciona? Pasos numerados secuenciales */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
            Protocolo de Uso Seguro
          </span>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            ¿Cómo funciona la Grúa Eléctrica?
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">
            Secuencia simple en 5 pasos para realizar un traslado rápido, digno y sin esfuerzo físico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Paso 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-black flex items-center justify-center text-label-md mb-4 shadow-sm">
              01
            </div>
            <h3 className="font-bold text-on-surface text-label-md mb-2">
              Coloca el arnés
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Posiciona el arnés correctamente en el usuario, garantizando el soporte lumbar y bajo los muslos.
            </p>
          </div>
          {/* Paso 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-black flex items-center justify-center text-label-md mb-4 shadow-sm">
              02
            </div>
            <h3 className="font-bold text-on-surface text-label-md mb-2">
              Posiciona la grúa
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Abre o ajusta la base para rodear la cama o asiento y engancha las cintas de seguridad en la percha.
            </p>
          </div>
          {/* Paso 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-black flex items-center justify-center text-label-md mb-4 shadow-sm">
              03
            </div>
            <h3 className="font-bold text-on-surface text-label-md mb-2">
              Eleva con control
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Usa el control remoto ergonómico para elevar al usuario de forma gradual, suave y controlada.
            </p>
          </div>
          {/* Paso 4 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-black flex items-center justify-center text-label-md mb-4 shadow-sm">
              04
            </div>
            <h3 className="font-bold text-on-surface text-label-md mb-2">
              Desplaza al destino
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Rueda la grúa con suavidad hacia la silla de ruedas, sillón reclinable o baño.
            </p>
          </div>
          {/* Paso 5 */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-black flex items-center justify-center text-label-md mb-4 shadow-sm">
              05
            </div>
            <h3 className="font-bold text-on-surface text-label-md mb-2">
              Desciende suavemente
            </h3>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Desciende al usuario suavemente con el mismo control y retira las fijaciones con total holgura.
            </p>
          </div>
        </div>
      </section>
      {/* SECCIÓN 4: Demostración en Video */}
      <section className="bg-surface-container py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
            Video Demostrativo
          </span>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
            Demostración de funcionamiento en vivo: Grúa Eléctrica SillaUp
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Observa en detalle la estabilidad, la suavidad del motor de elevación y la facilidad de desplazamiento en espacios domésticos y clínicos.
          </p>
          {/* Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-outline-variant bg-inverse-surface">
            <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full" frameBorder="0" src="https://www.youtube-nocookie.com/embed/1Fu9VohTIqA?rel=0&modestbranding=1" title="Demostración de funcionamiento en vivo: Grúa Eléctrica SillaUp"></iframe>
          </div>
          <p className="text-xs text-on-surface-variant mt-4 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">
              play_circle
            </span>
            Video oficial grabado en taller y ambientes reales de transferencia SillaUp.
          </p>
        </div>
      </section>
      {/* SECCIÓN 5: Beneficios Destacados (Con Íconos) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
            Ventajas Clave
          </span>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            Beneficios diseñados para cuidar a quienes cuidan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-primary-fixed rounded-lg text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                settings_remote
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Elevación por control remoto
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Accionamiento eléctrico milimétrico sin bombear pedales ni palancas pesadas.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-secondary-fixed rounded-lg text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                personal_injury
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Cero esfuerzo lumbar
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Reduce significativamente el esfuerzo físico del cuidador, previniendo lesiones permanentes.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-tertiary-fixed rounded-lg text-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                motion_photos_on
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Traslados suaves y seguros
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Movimiento gradual sin tirones bruscos que infunden tranquilidad y confianza al usuario.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-error-container rounded-lg text-error flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                shield
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Disminuye el riesgo de caídas
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Sujeción estructural certificada de 4 puntos que asegura al paciente durante todo el trayecto.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-surface-container-high rounded-lg text-on-surface flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                swap_horiz
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Fácil maniobrabilidad
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Ruedas giratorias 360° de rodadura suave con frenos de alta precisión para giros en pasillos.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-4 shadow-sm hover:border-primary transition-colors">
            <div className="p-3 bg-primary-fixed-dim rounded-lg text-on-primary-fixed-variant flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                domain
              </span>
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Hogar y Clínicas
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Diseño compacto con dimensiones optimizadas tanto para recintos residenciales como centros de salud.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 6: ¿Para quién está recomendado? */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
              Indicaciones Clínicas
            </span>
            <h2 className="text-headline-md font-headline-md text-on-surface">
              ¿Para quién está recomendado este dispositivo?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[36px] mb-3">
                elderly
              </span>
              <h4 className="font-bold text-on-surface text-label-md mb-1">
                Adultos mayores
              </h4>
              <p className="text-xs text-on-surface-variant">
                Con debilidad motriz o sarcopenia avanzada en extremidades inferiores.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[36px] mb-3">
                accessible
              </span>
              <h4 className="font-bold text-on-surface text-label-md mb-1">
                Movilidad reducida
              </h4>
              <p className="text-xs text-on-surface-variant">
                Personas que requieren asistencia constante para pasar de la cama a la silla.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[36px] mb-3">
                accessible_forward
              </span>
              <h4 className="font-bold text-on-surface text-label-md mb-1">
                Discapacidad física
              </h4>
              <p className="text-xs text-on-surface-variant">
                Usuarios con paraplejía, tetraplejía o patologías neuromusculares complejas.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[36px] mb-3">
                assist_walker
              </span>
              <h4 className="font-bold text-on-surface text-label-md mb-1">
                En rehabilitación
              </h4>
              <p className="text-xs text-on-surface-variant">
                Etapas postoperatorias de cadera o recuperación tras accidentes cerebrovasculares.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[36px] mb-3">
                transfer_within_a_station
              </span>
              <h4 className="font-bold text-on-surface text-label-md mb-1">
                Dependencia parcial/total
              </h4>
              <p className="text-xs text-on-surface-variant">
                Pacientes encamados que necesitan cambios posturales y transferencias diarias.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 7: Especificaciones Técnicas (Tabla Limpia) */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-10">
          <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
            Ficha de Ingeniería
          </span>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            Especificaciones Técnicas
          </h2>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface w-1/3">
                  Dimensiones
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  Por confirmar (diseñada para puertas estándar chilenas de 70-80 cm)
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-[#FAFBFB] hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Peso máximo soportado
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm font-bold text-primary">
                  110 kg (Carga de trabajo segura certificada)
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Material de construcción
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  Estructura de Acero de alta resistencia con acabado en pintura electrostática termoendurecida
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-[#FAFBFB] hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Color
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-outline-variant bg-white inline-block"></span>
                  Blanco clínico antibacteriano
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Accionamiento
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  Elevación eléctrica mediante pistón lineal y control remoto ergonómico cableado
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-[#FAFBFB] hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Tiempo de carga
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  2 horas de carga rápida (autonomía para múltiples ciclos diarios)
                </td>
              </tr>
              <tr className="border-b border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Garantía
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant font-bold text-tertiary">
                  1 año de garantía técnica directa de fábrica SillaUp
                </td>
              </tr>
              <tr className="bg-[#FAFBFB] hover:bg-surface-container-low transition-colors">
                <th className="py-4 px-6 text-label-md font-label-md text-on-surface">
                  Procedencia y taller
                </th>
                <td className="py-4 px-6 text-body-sm font-body-sm text-on-surface-variant">
                  Fabricación chilena en Santiago (Taller y Showroom: Merced 562)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* SECCIÓN 8: ¿Por qué elegir SillaUp? */}
      <section className="bg-surface-container-lowest py-16 px-6 md:px-12 border-y border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[44px]">
                favorite
              </span>
            </div>
            <div>
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-1">
                Propósito & Compromiso Humano
              </span>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                ¿Por qué elegir SillaUp?
              </h3>
              <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                &quot;Desarrollamos soluciones que mejoran la calidad de vida de las personas y facilitan el trabajo de quienes las cuidan: una forma más segura, cómoda y eficiente de hacer transferencias, con menos esfuerzo físico y más tranquilidad en cada movimiento.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 9: Dónde nos ubicamos y Asesoría Técnica */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="contacto-taller">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
              Visita Nuestro Showroom
            </span>
            <h2 className="text-headline-md font-headline-md text-on-surface mb-4">
              Dónde nos ubicamos y Asesoría Técnica personalizada
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6">
              Te invitamos a probar la grúa en persona, resolver dudas con nuestros diseñadores industriales y recibir asesoría especializada antes de decidir tu compra.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  location_on
                </span>
                <div>
                  <strong className="text-on-surface text-label-md block">
                    Dirección Showroom y Taller
                  </strong>
                  <span className="text-body-sm text-on-surface-variant">
                    Merced 562, Santiago Centro, Región Metropolitana (Metro Bellas Artes)
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  schedule
                </span>
                <div>
                  <strong className="text-on-surface text-label-md block">
                    Horario de Atención
                  </strong>
                  <span className="text-body-sm text-on-surface-variant">
                    Lunes a Viernes de 9:00 a 18:00 hrs (Continuado)
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  support
                </span>
                <div>
                  <strong className="text-on-surface text-label-md block">
                    Teléfono y Asistencia WhatsApp
                  </strong>
                  <span className="text-body-sm text-on-surface-variant">
                    +56 9 7221 5907 (Servicio técnico y repuestos inmediatos)
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="px-6 py-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-2" href="https://wa.me/56972215907?text=Hola,%20deseo%20agendar%20una%20demostración%20de%20la%20Grúa%20eléctrica%20en%20Merced%20562">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                <span>
                  Agendar demostración
                </span>
              </a>
              <a className="px-6 py-3 rounded-full border-2 border-outline-variant text-on-surface font-label-md text-label-md hover:border-primary transition-colors flex items-center gap-2" href="https://maps.google.com/?q=Merced+562+Santiago+Chile" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[18px]">
                  directions
                </span>
                <span>
                  Cómo llegar
                </span>
              </a>
            </div>
          </div>
          {/* Mapa Ilustrado del Taller */}
          <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm p-3">
            <div className="relative w-full h-[360px] rounded-xl overflow-hidden bg-surface-container flex items-center justify-center">
              <img alt="" className="w-full h-full object-cover" data-alt="Editorial clean urban street map illustration of downtown Santiago Chile highlighting Merced 562 near Santa Lucia hill and Parque Forestal, presented in a crisp modern cartographic architectural layout with calm teal and blue clinical accents." data-location="Santiago, Chile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJeeu54MzYKHcnaO0hMn3RYhhiBQ9sLQoY4JZo9G2Bw6ei2OZcXPTGQRof--JdTptGrSdtT2RD4x1D8hGsrIlXYMSjokIqJRGfgVh375-Xo9N8FtZLu9KEEKzbMIrqa-lOhn_QGF9nW3AaNNF6s2-Y-DJHN2-jTxxOfanMUQnvqTlgPjNsgz9jMgh0VFLz24QcQi0Z_LvtBg01v4ey0HimVgSR3nYsRUR673-nWh_41RwNAMsz17w" />
              <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-xl border border-outline-variant shadow-md max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-bold text-xs text-on-surface uppercase tracking-wide">
                    Taller SillaUp
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Merced 562, Santiago · Estacionamiento para clientes disponible
                </p>
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
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
                Testimonios Reales
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Opiniones de clientes sobre la Grúa eléctrica
              </h2>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex text-amber-500">
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                </div>
                <span className="text-headline-sm font-headline-sm text-on-surface">
                  5.0 / 5.0
                </span>
                <span className="text-body-sm text-on-surface-variant">
                  (Basado en 28 compras verificadas en Chile)
                </span>
              </div>
            </div>
            <Link className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-200" href="/testimonios#formulario-opinion">
              Dejar mi opinión
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-3">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">
                  &quot;Nos cambió la vida familiar por completo. Mi madre pesa 78 kg y mi hermana ya no podía levantarla sola sin dañarse la espalda. La grúa es silenciosa, el control remoto responde al instante y el arnés es súper seguro.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">
                  CR
                </div>
                <div>
                  <span className="text-on-surface font-bold text-sm block">
                    Carmen Rodríguez
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified
                    </span>
                    Comprador verificado · Providencia
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-3">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">
                  &quot;Como kinesiólogo en centro de atención domiciliaria, destaco la robustez del chasis de acero. No tiene ese balanceo inestable de modelos importados chinos. Y saber que están en Merced por cualquier repuesto da una tranquilidad inmensa.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">
                  MM
                </div>
                <div>
                  <span className="text-on-surface font-bold text-sm block">
                    Matías Morales
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified
                    </span>
                    Kinesiólogo · Viña del Mar
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-3">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    star
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface leading-relaxed mb-4">
                  &quot;Excelente atención. Fuimos al taller a verla y nos enseñaron a usarla con mucha paciencia. El despacho a Concepción llegó en 48 horas sin inconvenientes. Cien por ciento recomendados.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">
                  GS
                </div>
                <div>
                  <span className="text-on-surface font-bold text-sm block">
                    Gonzalo Sanhueza
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      verified
                    </span>
                    Comprador verificado · Concepción
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 11: Productos Relacionados (Catálogo SillaUp) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16" id="catalogo">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider block mb-2">
              Soluciones Complementarias
            </span>
            <h2 className="text-headline-md font-headline-md text-on-surface">
              Otros productos del catálogo SillaUp
            </h2>
          </div>
          <Link className="text-primary font-bold text-body-md hover:underline flex items-center gap-1 mt-2 md:mt-0" href="/productos">
            <span>
              Ver catálogo completo
            </span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Relacionado 1: Elevador de inodoro */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative bg-surface-container-low rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
                <span className="absolute top-2 right-2 bg-on-surface text-surface-container-lowest text-label-sm font-label-sm px-2.5 py-1 rounded-full">
                  $390.000
                </span>
                <img alt="" className="max-h-36 object-contain group-hover:scale-105 transition-transform" data-alt="Modern clinical toilet seat lifter aid in clean white medical-grade composite with chrome handrails installed securely over a contemporary home bathroom commode." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwxcs5T6m7kLg6sh7yzhwj4y_Ph-ofD2PxhsYaREKP8mYtumFclThCtKLZVK1QuFOCnFz0esr_Xu6Z0Sma_JkWE6uGXPRHJZyNvyRCvg9bgFH8y4WdDx7tL4jEWr2gVBsToa2rvhZl03oNv8Ncd6D3bjtr4LDRg89E23u8Glp6Sm4AviTACNslL3eqa81djGv7pmDCLZuA9eL-pWd1WckYUQ_vLk5HdywkunomymcAoLokuaB42E4" />
              </div>
              <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                Higiene y Baño
              </span>
              <h3 className="text-label-lg font-label-lg text-on-surface mt-1 mb-2">
                Elevador de inodoro
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">
                Asistencia motorizada para sentarse e incorporarse del inodoro con total autonomía.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs font-bold text-on-surface-variant">
                Capacidad: 120 kg
              </span>
              <Link className="text-primary font-bold text-xs hover:underline flex items-center" href="/contacto">
                Ver detalle
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
          {/* Relacionado 2: Grúa manual */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative bg-surface-container-low rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
                <span className="absolute top-2 right-2 bg-on-surface text-surface-container-lowest text-label-sm font-label-sm px-2.5 py-1 rounded-full">
                  $290.000
                </span>
                <img alt="" className="max-h-36 object-contain group-hover:scale-105 transition-transform" data-alt="Manual hydraulic patient lifter crane in clinical white coated steel with ergonomic pump handle and adjustable base legs for bedroom transfer." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwRcUp_fD8M1rN62t87uVZ0XMTKiMCqFjAAkUigkI74mFFFmu0aHPRDdEMKQSx25ofPcMHZAI3Y1okAT4oZ79p0KXodzURlCIR9MfbAdIrdkzwhpEHWE5tSJUf6-6be6qX_Obqmo0RQ3AbKPZ6hV-2FHHpRyTOy0hggA85BHJmGMWHXflXKo10vj-beJ4KOTAOPWOLNWrXrWkt-bLi1RCqn1kYveMSp3IkzcTPjU_SZf39NtX248s" />
              </div>
              <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                Traslado Manual
              </span>
              <h3 className="text-label-lg font-label-lg text-on-surface mt-1 mb-2">
                Grúa manual
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">
                Elevación asistida por pistón hidráulico manual. Ideal para presupuestos acotados.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs font-bold text-on-surface-variant">
                Capacidad: 110 kg
              </span>
              <Link className="text-primary font-bold text-xs hover:underline flex items-center" href="/contacto">
                Ver detalle
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
          {/* Relacionado 3: Elevador multiuso */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative bg-surface-container-low rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
                <span className="absolute top-2 right-2 bg-on-surface text-surface-container-lowest text-label-sm font-label-sm px-2.5 py-1 rounded-full">
                  $390.000
                </span>
                <img alt="" className="max-h-36 object-contain group-hover:scale-105 transition-transform" data-alt="Multi-purpose convertible patient transfer chair with split seat opening mechanism in white and blue waterproof healthcare finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx4kHpQvBU53ZOyBjWlVeFKp92VHfCJ68jhrJ1cVZfOT7_vk4_uHVGt12kq8iDSunYPwMObWdXMY__kBoowwOHASDlIKPSxHzVij-cvuLnmEbemIpwQ2hwhETokrhNRqV-FAHe5IhQdyz1VlrJLJLyZxQ9FAEytvQhI1JkADKtHzlgOCoRNOGooGOu2n_j2uT2lV3DFRN9Q47509ZZmpRJ8pVzgkGO16QJYjo7i8K7tymoXjHPgA4" />
              </div>
              <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                Multiuso y Ducha
              </span>
              <h3 className="text-label-lg font-label-lg text-on-surface mt-1 mb-2">
                Elevador multiuso
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">
                Silla de transferencia con asiento abatible apta para ducha, comedor y traslados directos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs font-bold text-on-surface-variant">
                Capacidad: 120 kg
              </span>
              <Link className="text-primary font-bold text-xs hover:underline flex items-center" href="/contacto">
                Ver detalle
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
          {/* Relacionado 4: Elevador de cama */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative bg-surface-container-low rounded-lg p-4 mb-4 flex items-center justify-center h-48 overflow-hidden">
                <span className="absolute top-2 right-2 bg-on-surface text-surface-container-lowest text-label-sm font-label-sm px-2.5 py-1 rounded-full">
                  $390.000
                </span>
                <img alt="" className="max-h-36 object-contain group-hover:scale-105 transition-transform" data-alt="Electric bed backrest riser support mattress system placed on a domestic bed, showing motorized elevation for reading and care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4w_NPU8rBUY_-lnUSA5_Xdae1aD1EkRSB8JmYaGTi67YdRMNISZeiW_bEeAYYjtigJRxv6U1TJNLtpyYXYQ5QtbFoAkmlliB1j2tMaDZpK-xFiv0xzc1Gwrltz5Hhf5712fe6ozS8L1AXgsn9Q6mzqyqdXzketUcwiBqhOTjsQQtov6EykXPXv7ncNJsFdewzsQtqDx9hVqVIkmRITVGQXb0MV0w2RC8jeadT4XsaLa1C0MzWIzg" />
              </div>
              <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                Cuidado en Cama
              </span>
              <h3 className="text-label-lg font-label-lg text-on-surface mt-1 mb-2">
                Elevador de cama
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2">
                Convierte cualquier cama estándar en una superficie reclinable eléctrica para descanso y alimentación.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant flex items-center justify-between">
              <span className="text-xs font-bold text-on-surface-variant">
                Ángulo: 0° a 80°
              </span>
              <Link className="text-primary font-bold text-xs hover:underline flex items-center" href="/contacto">
                Ver detalle
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* Simple Gallery Micro-Interaction */}
    </>
  );
}
