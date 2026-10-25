"use client";

import { submitContact } from "@/app/actions";
import ShowroomMap from "@/components/ShowroomMap";
import { useFormAction } from "@/components/useFormAction";

export default function ContactPage() {
  const contact = useFormAction(submitContact);

  return (
    <>
    <main className="flex-grow">
      {/* 2. HERO DE CONTACTO */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-outline-variant flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6d0PHJgk2xF-BNuBp7Z7vGiYgA7ZyXB6dIIWCsRoi-JehpkaYUVNyn8IsILIDB3vy5adzw-DxOapJOH8WivtgkkHxy4TD4_IaLtEXv1j8Y0YQWtWWdnOXCsHuQhibe1s3-EFbt-6t-9JdLUNajbx8OoYU1JZV5507NbQ1j7NFtSxokMbkdPt89ge6qRpH9XpuHmiDDpJ9l8u-lYbfvUAFU1INgOJqaOJ_ZEHBKz9hiZpN08NpImE" alt="Showroom y taller de movilidad asistida SillaUp" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d141a]/90 via-[#151c23]/80 to-[#174a5a]/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-label-sm font-label-sm shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-[#66ff8e]">
              support_agent
            </span>
            <span>
              Atención directa y asesoría
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-white font-extrabold tracking-tight leading-tight">
              Contáctanos
            </h1>
            <p className="text-body-lg font-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para orientarte y resolver cualquier duda sobre nuestros equipos de movilidad asistida.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px] text-[#66ff8e]">
                check_circle
              </span>
              Atención personalizada
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px] text-[#66ff8e]">
                storefront
              </span>
              Showroom en Santiago
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px] text-[#66ff8e]">
                bolt
              </span>
              Respuesta inmediata
            </span>
          </div>
        </div>
      </section>
      {/* 3. CANALES DE CONTACTO DIRECTO (3 tarjetas grandes y accesibles) */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-headline-sm md:text-headline-md font-headline-md text-on-surface mb-2">
            Canales de Atención Inmediata
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Selecciona el medio de contacto que te sea más cómodo para recibir orientación experta sobre nuestros modelos y transferencias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: WhatsApp */}
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E7F8EE] text-[#128C7E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">
                    chat
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D1FADF] text-[#05603A] text-label-sm font-label-sm">
                  <span className="w-2 h-2 rounded-full bg-[#12B76A]"></span>
                  Respuesta rápida
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                WhatsApp
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Resuelve dudas técnicas al instante, solicita videos funcionales y cotiza con nuestros especialistas.
              </p>
              <p className="text-label-lg font-label-lg text-on-surface mb-6 font-bold">
                +56 9 7221 5907
              </p>
            </div>
            <a className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-white text-label-md font-label-md hover:bg-[#1EBE5D] transition-colors active:scale-95 duration-150 shadow-sm" href="https://wa.me/56972215907?text=Hola%20SillaUp,%20quisiera%20recibir%20informaci%C3%B3n%20sobre%20sus%20dispositivos%20de%20movilidad" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">
                forum
              </span>
              Iniciar conversación
            </a>
          </div>
          {/* Tarjeta 2: Llamada Directa */}
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">
                    call
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-secondary text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    engineering
                  </span>
                  Taller & Ventas
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Llamada directa
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Atención técnica y comercial inmediata. Habla directamente con ingenieros y asesores de movilidad.
              </p>
              <p className="text-label-lg font-label-lg text-on-surface mb-6 font-bold">
                +56 9 7221 5907
              </p>
            </div>
            <a className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-primary-container text-on-primary text-label-md font-label-md hover:bg-primary transition-colors active:scale-95 duration-150 shadow-sm" href="tel:+56972215907">
              <span className="material-symbols-outlined text-[20px]">
                phone_in_talk
              </span>
              Llamar ahora
            </a>
          </div>
          {/* Tarjeta 3: Correo Electrónico */}
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">
                    mail
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  Institucional
                </span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                Correo electrónico
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Atención a consultas, cotizaciones formales para clínicas, residencias de adultos mayores o particulares.
              </p>
              <p className="text-label-lg font-label-lg text-on-surface mb-6 font-bold break-all">
                sillaupventas@gmail.com
              </p>
            </div>
            <a className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-inverse-surface text-inverse-on-surface text-label-md font-label-md hover:bg-on-surface transition-colors active:scale-95 duration-150 shadow-sm" href="mailto:sillaupventas@gmail.com?subject=Consulta%20sobre%20productos%20SillaUp">
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
              Enviar correo
            </a>
          </div>
        </div>
      </section>
      {/* 4. FORMULARIO DE CONTACTO INTERACTIVO & GUÍA DE COMPRA */}
      <section className="py-12 md:py-16 bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Reassurance & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-label-sm font-label-sm text-primary uppercase tracking-wider">
                Formulario de Asistencia
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface">
                Escríbenos y un especialista evaluará tus requerimientos
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Cada usuario y cuidador tiene necesidades ergonómicas únicas. Ya sea para transferencias de cama a silla, acceso vehicular o traslados de baño, te ayudamos a elegir la configuración óptima.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant space-y-4 shadow-sm">
              <h3 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                Compromiso SillaUp
              </h3>
              <ul className="space-y-3 text-body-sm font-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong>
                      Respuesta en menos de 2 horas hábiles
                    </strong>{" "}
                    a través del canal de tu preferencia.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong>
                      Cotizaciones oficiales detalladas
                    </strong>{" "}
                    con opciones de pago y despacho nacional.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>
                    <strong>
                      Asesoría técnica sin costo
                    </strong>{" "}
                    por videollamada o visita en showroom en Santiago.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg border border-outline-variant p-8 md:p-10 shadow-md">
            <form className="space-y-6" onSubmit={contact.onSubmit}>
              <input name="source" type="hidden" value="contacto" />
              {/* Full Name */}
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="fullname">
                  Nombre completo
                  <span className="text-error">
                    *
                  </span>
                </label>
                <input className="w-full h-12 px-4 rounded bg-surface border border-outline-variant text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-150 outline-none" id="fullname" name="name" placeholder="Ej. Roberto Morales Sánchez" required type="text" />
              </div>
              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="email">
                    Correo electrónico
                    <span className="text-error">
                      *
                    </span>
                  </label>
                  <input className="w-full h-12 px-4 rounded bg-surface border border-outline-variant text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-150 outline-none" id="email" name="email" placeholder="ejemplo@correo.cl" required type="email" />
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="phone">
                    Número telefónico
                    <span className="text-error">
                      *
                    </span>
                  </label>
                  <input className="w-full h-12 px-4 rounded bg-surface border border-outline-variant text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-150 outline-none" id="phone" name="phone" placeholder="+56 9 1234 5678" required type="tel" />
                </div>
              </div>
              {/* Subject / Reason Optional selector for enhanced usability */}
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="interest">
                  ¿En qué producto o servicio estás interesado?
                </label>
                <select className="w-full h-12 px-4 rounded bg-surface border border-outline-variant text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-150 outline-none" id="interest" name="interest">
                  <option value="general">
                    Consulta general o dudas
                  </option>
                  <option value="silla-transferencia">
                    Silla de ruedas para transferencia asistida
                  </option>
                  <option value="grua-pacientes">
                    Grúa para traslado de pacientes
                  </option>
                  <option value="servicio-tecnico">
                    Servicio técnico o mantención
                  </option>
                  <option value="clinicas">
                    Cotización institucional para residencias o clínicas
                  </option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-2" htmlFor="message">
                  Mensaje
                  <span className="text-error">
                    *
                  </span>
                </label>
                <textarea className="w-full p-4 rounded bg-surface border border-outline-variant text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition duration-150 outline-none resize-none" id="message" name="message" placeholder="Por favor cuéntanos las condiciones de movilidad o el tipo de transferencia que necesitas resolver..." required rows={4} />
              </div>
              {/* Privacy Note */}
              <p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  lock
                </span>
                Tus datos están protegidos y solo se utilizarán para gestionar tu solicitud.
              </p>
              {/* Submit Button (Píldora Azul Verbatim [Enviar mensaje]) */}
              <div className="pt-2">
                <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary text-label-md font-label-md hover:bg-primary transition-all duration-150 shadow-sm active:scale-95 cursor-pointer font-bold disabled:opacity-60" disabled={contact.sending} type="submit">
                  <span>
                    {contact.sending ? "Enviando..." : "Enviar mensaje"}
                  </span>
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </button>
              </div>
            </form>
            {contact.status === "error" && (
              <p className="mt-6 p-4 rounded bg-error-container text-on-error-container text-body-sm font-body-sm font-bold" role="alert">
                {contact.error}
              </p>
            )}
            {contact.status === "success" && (
            <div className="mt-6 p-4 rounded bg-[#D1FADF] border border-[#A6F4C5] text-[#05603A]" role="status">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[28px] text-[#12B76A]">
                  task_alt
                </span>
                <div>
                  <p className="text-label-md font-label-md">
                    ¡Mensaje enviado con éxito!
                  </p>
                  <p className="text-body-sm font-body-sm">
                    Nos pondremos en contacto contigo dentro de las próximas horas hábiles.
                  </p>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
      {/* 5. SECCIÓN "NUESTRA UBICACIÓN" */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Panel */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-lg border border-outline-variant p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-label-sm font-label-sm mb-4">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                Taller & Showroom Central
              </div>
              <h2 className="text-headline-md font-headline-md text-on-surface mb-3">
                Nuestra ubicación
              </h2>
              {/* Verbatim text from prompt */}
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                Nos encontramos en el corazón de la ciudad, siempre listos para atenderte con productos que cambian vidas.
              </p>
              <div className="space-y-4 border-t border-outline-variant pt-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">
                      pin_drop
                    </span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-label-md text-on-surface">
                      Dirección
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant font-bold">
                      Merced 562, Santiago Centro
                    </p>
                    <p className="text-body-sm font-body-sm text-secondary">
                      A pasos de Metro Bellas Artes y Santa Lucía
                    </p>
                  </div>
                </div>
                {/* Schedule */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">
                      schedule
                    </span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-label-md text-on-surface">
                      Horario de atención
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant font-bold">
                      Lunes a Viernes de 9:00 a 18:00 hrs.
                    </p>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Sábados con previa coordinación técnica.
                    </p>
                  </div>
                </div>
                {/* Technical Service */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-tertiary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">
                      build
                    </span>
                  </div>
                  <div>
                    <h4 className="text-label-md font-label-md text-on-surface">
                      Soporte y Pruebas
                    </h4>
                    <p className="text-body-sm font-body-sm text-on-surface-variant">
                      Zona acondicionada para pruebas prácticas de transferencia con pacientes y cuidadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-outline-variant flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-on-surface text-label-md font-label-md hover:bg-surface-variant transition-colors active:scale-95 duration-150" href="https://maps.google.com/?q=Merced+562,+Santiago,+Chile" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[18px]">
                  near_me
                </span>
                Abrir en Google Maps
              </a>
            </div>
          </div>
          {/* Interactive Visual Map Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm flex flex-col min-h-[380px]">
            <div className="p-4 bg-surface-container flex items-center justify-between border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  map
                </span>
                <span className="text-label-md font-label-md text-on-surface">
                  Plano de Ubicación: Merced 562, Santiago
                </span>
              </div>
              <span className="text-label-sm font-label-sm bg-surface-container-lowest px-2.5 py-1 rounded-full border border-outline-variant text-secondary">
                Región Metropolitana
              </span>
            </div>
            <div className="relative flex-grow w-full min-h-[340px] bg-[#E5E9EE]">
              <ShowroomMap />
              {/* Metro Access Tags Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none">
                <div className="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-outline-variant flex items-center gap-1.5 shadow-sm text-on-surface">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E51E2B]"></span>
                  Metro Bellas Artes (L5): 250m
                </div>
                <div className="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-sm font-label-sm border border-outline-variant flex items-center gap-1.5 shadow-sm text-on-surface">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E51E2B]"></span>
                  Metro Santa Lucía (L1): 400m
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
