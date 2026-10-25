import Link from "next/link";

export default function AboutPage() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-surface to-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#174A5A] text-surface-container-lowest px-4 py-1.5 rounded-full text-xs font-label-sm tracking-wide shadow-sm">
              <span className="material-symbols-outlined text-sm" data-icon="verified">
                verified
              </span>
              <span>
                FABRICACIÓN CHILENA & INGENIERÍA BIOMÉDICA
              </span>
            </div>
            <h1 className="text-headline-lg-mobile md:text-display-lg font-headline-lg-mobile md:font-display-lg text-on-surface tracking-tight">
              Acerca de nosotros
            </h1>
            <p className="text-body-lg text-on-surface-variant font-body-lg max-w-2xl leading-relaxed">
              Nacimos con un propósito claro: transformar el cuidado y la transferencia de personas en Chile mediante ingeniería ergonómica de precisión, empatía genuina y compromiso inquebrantable. Diseñamos para devolver la autonomía a los pacientes y resguardar la salud postural y física de quienes los asisten a diario.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-3 bg-surface-container-lowest p-3 pr-5 rounded-2xl border border-outline-variant/60 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined" data-icon="precision_manufacturing">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface">
                    Taller Propio
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Merced 562, Santiago
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-surface-container-lowest p-3 pr-5 rounded-2xl border border-outline-variant/60 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined" data-icon="shield">
                    shield
                  </span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface">
                    Garantía Directa
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Repuestos e insumos 100% locales
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Visual Stage Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-outline-variant shadow-md bg-surface-container-lowest p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img alt="" className="w-full h-full object-cover" data-alt="A warm and uplifting photograph of a Chilean occupational therapist and family caregiver gently supporting an elderly patient in a bright sunlit modern Santiago living room. The room has warm wooden elements, soft natural indoor plants, and clinical-grade assistive mobility hardware with clean matte blue accents. The lighting is natural, soft, and respectful, emphasizing safety, dignity, and human connection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdzEKBf_tx-dMa7jNMoUMSyUMdkYhjECk0vQMRHnqO3QD9R3OWygTXTQC5AyXqv_7lGp_GQBhkLykvQ0qj8RklGGyrBMiA5Y0Dvz2bq4Pe_x8_viXBqe_IY3sEtbl2JRYueFPMvMby1-bwdylCMPv97wG0LZcWNBTBxWVI0uYXhTy7rlwgePSPOt5OjDdjOxtBZYcD0SfAKIrxDvWwKRV-GbHQu0vc3oGJCRjlsxprf2OC1ogD1kE" />
              </div>
              <div className="p-4 bg-surface-container-lowest rounded-xl mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></span>
                  <span className="text-xs font-label-md text-on-surface">
                    Compromiso ergonómico certificado
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">
                  Santiago, Chile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Vision & Mission Bento Cards */}
    <section className="py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-label-sm uppercase tracking-widest text-primary font-bold">
            Nuestra Guía Estratégica
          </span>
          <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface">
            Impulsando el estándar de cuidado en Chile
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Tecnología creada desde la realidad local, pensando en la ergonomía de hogares y centros asistenciales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Visión */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/30 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#174A5A] text-surface-container-lowest flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl" data-icon="visibility">
                  visibility
                </span>
              </div>
              <div className="space-y-3">
                <span className="text-xs font-label-sm text-[#174A5A] uppercase tracking-wider font-bold">
                  Hacia dónde vamos
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Nuestra Visión
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  &quot;Ser un referente en innovación para la movilidad asistida, ofreciendo soluciones accesibles que transformen la calidad de vida de las personas y se conviertan en la primera opción para hogares, instituciones de salud y centros de rehabilitación en Chile y Latinoamérica.&quot;
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-outline-variant/30 mt-6 flex items-center text-xs font-label-md text-secondary">
              <span className="material-symbols-outlined mr-1.5 text-base" data-icon="flag">
                flag
              </span>
              <span>
                Meta regional para el año 2026
              </span>
            </div>
          </div>
          {/* Card 2: Misión */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 border border-outline-variant/70 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/40 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl" data-icon="military_tech">
                  military_tech
                </span>
              </div>
              <div className="space-y-3">
                <span className="text-xs font-label-sm text-primary uppercase tracking-wider font-bold">
                  Nuestro quehacer diario
                </span>
                <h3 className="text-headline-sm font-headline-sm text-on-surface">
                  Nuestra Misión
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  &quot;Desarrollar soluciones innovadoras, accesibles y de alta calidad que mejoren la movilidad, seguridad e independencia de las personas con movilidad reducida, facilitando las actividades cotidianas y reduciendo la carga física de quienes las cuidan.&quot;
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-outline-variant/30 mt-6 flex items-center justify-between">
              <span className="text-xs font-label-md text-primary flex items-center">
                <span className="material-symbols-outlined mr-1.5 text-base" data-icon="health_and_safety">
                  health_and_safety
                </span>
                Seguridad para cuidador y usuario
              </span>
              <Link className="inline-flex items-center justify-center bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-label-md hover:bg-primary transition-all duration-150 shadow-sm" href="/contacto">
                <span>
                  Ver productos
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Pilares / Valores de Fabricación Chilena */}
    <section className="py-16 md:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-label-sm uppercase tracking-widest text-[#174A5A] font-bold">
            Respaldo Técnico & Calidad
          </span>
          <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface">
            Nuestros Pilares de Fabricación Chilena
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Combinamos tecnología metalmecánica de alta resistencia con acompañamiento técnico continuo para brindar tranquilidad absoluta.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pilar 1 */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-primary/40 transition-all hover:-translate-y-1 duration-200">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant text-[#174A5A] flex items-center justify-center mb-5 shadow-xs">
              <span className="material-symbols-outlined text-2xl" data-icon="location_city">
                location_city
              </span>
            </div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Taller en Santiago
            </h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Fabricación nacional en nuestra maestranza ubicada en Merced 562, Santiago Centro. Control estricto de cada soldadura y ensamble.
            </p>
          </div>
          {/* Pilar 2 */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-primary/40 transition-all hover:-translate-y-1 duration-200">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant text-primary flex items-center justify-center mb-5 shadow-xs">
              <span className="material-symbols-outlined text-2xl" data-icon="construction">
                construction
              </span>
            </div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Acero Estructural Certificado
            </h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Chasis robustos construidos con perfiles de acero de alta resistencia y pintura electroestática lavable para uso clínico y domiciliario.
            </p>
          </div>
          {/* Pilar 3 */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-primary/40 transition-all hover:-translate-y-1 duration-200">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant text-tertiary flex items-center justify-center mb-5 shadow-xs">
              <span className="material-symbols-outlined text-2xl" data-icon="bolt">
                bolt
              </span>
            </div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Soporte Inmediato
            </h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Repuestos en stock y mantención preventiva sin depender de prolongadas demoras aduaneras o de importaciones extranjeras.
            </p>
          </div>
          {/* Pilar 4 */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant/60 hover:border-primary/40 transition-all hover:-translate-y-1 duration-200">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant text-[#174A5A] flex items-center justify-center mb-5 shadow-xs">
              <span className="material-symbols-outlined text-2xl" data-icon="vital_signs">
                vital_signs
              </span>
            </div>
            <h4 className="text-headline-sm font-headline-sm text-on-surface mb-2">
              Kinesiología Preventiva
            </h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Diseño guiado por la prevención de lesiones lumbares en cuidadores y la dignidad en cada proceso de transferencia física.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Bloque para Instituciones */}
    <section className="py-16 md:py-20 bg-[#174A5A] text-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-secondary-fixed text-[#174A5A] px-3.5 py-1 rounded-full text-xs font-label-sm font-bold">
              <span className="material-symbols-outlined text-sm" data-icon="local_hospital">
                local_hospital
              </span>
              <span>
                CONVENIOS & VOLUMEN
              </span>
            </div>
            <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg tracking-tight">
              Soluciones a medida para Instituciones de Salud y Residencias
            </h2>
            <p className="text-body-lg text-surface-container-lowest/90 font-body-lg max-w-2xl leading-relaxed">
              Equipamos clínicas, hospitales, residencias de adultos mayores y centros de rehabilitación física en todo el territorio chileno. Ofrecemos adaptaciones ergonómicas especiales, capacitación de personal clínico y planes de mantención periódica para flotas asistenciales.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {/* WhatsApp Institucional */}
              <a className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-surface-container-lowest px-7 py-3 rounded-full font-label-md transition-all duration-150 shadow-md active:scale-95 space-x-2" href="https://wa.me/56972215907" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-xl" data-icon="chat">
                  chat
                </span>
                <span>
                  Cotizar para Instituciones (+56 9 7221 5907)
                </span>
              </a>
              {/* Botón secundario */}
              <a className="inline-flex items-center justify-center bg-transparent border-2 border-surface-container-lowest text-surface-container-lowest hover:bg-surface-container-lowest hover:text-[#174A5A] px-6 py-3 rounded-full font-label-md transition-all duration-150" href="#showroom">
                <span className="material-symbols-outlined mr-2 text-base" data-icon="calendar_month">
                  calendar_month
                </span>
                <span>
                  Agendar visita a taller
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-surface-container-lowest/10 backdrop-blur-sm p-6 rounded-3xl border border-surface-container-lowest/20 space-y-4">
            <h4 className="text-headline-sm font-headline-sm text-surface-container-lowest">
              Beneficios Institucionales
            </h4>
            <ul className="space-y-3 text-body-sm font-body-sm text-surface-container-lowest/90">
              <li className="flex items-start space-x-2">
                <span className="material-symbols-outlined text-secondary-fixed text-sm mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Facturación inmediata y orden de compra centralizada.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-symbols-outlined text-secondary-fixed text-sm mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Capacitación in situ para equipos de enfermería y TENS.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="material-symbols-outlined text-secondary-fixed text-sm mt-0.5" data-icon="check_circle">
                  check_circle
                </span>
                <span>
                  Inspección de seguridad y certificado de carga operativa.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Showroom & Dónde estamos */}
    <section className="py-16 md:py-24 bg-surface" id="showroom">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-surface-container-high text-on-surface px-3 py-1 rounded-full text-xs font-label-sm">
              <span className="material-symbols-outlined text-sm" data-icon="pin_drop">
                pin_drop
              </span>
              <span>
                SHOWROOM & PUNTO DE RETIRO
              </span>
            </div>
            <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface">
              Dónde estamos y Showroom en Santiago
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Le invitamos a conocer directamente nuestras grúas de transferencia y sillas de bipedestación. Podrá probar la ergonomía, evaluar los mecanismos de seguridad y conversar con nuestro equipo de ingenieros y especialistas.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" data-icon="home_pin">
                    home_pin
                  </span>
                </div>
                <div>
                  <p className="text-label-md font-label-md text-on-surface">
                    Dirección oficial
                  </p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Merced 562, Santiago Centro, Región Metropolitana
                  </p>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    A pasos de Metro Bellas Artes y Metro Santa Lucía
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/60 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined" data-icon="schedule">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="text-label-md font-label-md text-on-surface">
                    Horario de atención
                  </p>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Lunes a Viernes: 9:00 a 18:00 hrs continuado
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Atención telefónica y WhatsApp disponible fines de semana para urgencias
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Map & Taller Stage */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest rounded-3xl p-3 border border-outline-variant shadow-md">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center">
                <img alt="" className="w-full h-full object-cover" data-alt="A clean modern schematic satellite map representation of Santiago Centro, Chile, centered around Merced street near Bellas Artes and Santa Lucía parks. The map features minimal clean cartographic styling with a bright blue pin indicating the medical device workshop location and calm subtle street contours in light neutral tones." data-location="Santiago, Chile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFtFOEo1ixnrxukKA9bisK6LLSXrTYJ9nrSMHsLb_NJHmFek5WT8oIGdZ5H2SnEdZLN9wFUh6imJqasHrs_Z4J1DY9O40rtOGGAxMqc5_2ec6zEwwuUHi2aXloPIIhHPJHqIogeuhdn4xIXp-YkXNzsEEhzCiRO2MLn-SDr8xrVnjLHQ6RXrrRx7XOUWq-5bQTuzOh7ImaswtSrx3RW3lsSqeOTeLW7u1_nquMCUbhZHvwGF46k30" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 rounded-xl border border-outline-variant/60 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                    <span className="text-xs font-label-md text-on-surface">
                      Estacionamiento disponible previa coordinación
                    </span>
                  </div>
                  <a className="text-xs font-label-md text-primary hover:underline flex items-center" href="https://maps.google.com/?q=Merced+562+Santiago+Chile" rel="noopener noreferrer" target="_blank">
                    <span>
                      Abrir en Maps
                    </span>
                    <span className="material-symbols-outlined text-xs ml-0.5" data-icon="open_in_new">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
