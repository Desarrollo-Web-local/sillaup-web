"use client";

import { submitTestimonial } from "@/app/actions";
import StarRating from "@/components/StarRating";
import { useFormAction } from "@/components/useFormAction";

export default function TestimonialsPage() {
  const feedback = useFormAction(submitTestimonial);

  return (
    <>
    {/* MAIN CANVAS */}
    <main className="flex-grow">
      {/* ENCABEZADO SIMPLIFICADO */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/60 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#174A5A]/10 text-[#174A5A] text-xs font-bold tracking-wide uppercase mb-3">
            <span className="material-symbols-outlined text-sm fill-icon" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Opiniones de Familias y Cuidadores
          </div>
          <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight mb-3">
            Testimonios y Opiniones
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-6">
            Conoce las experiencias reales de quienes ya utilizan nuestros equipos de movilidad asistida en todo Chile.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-surface-container-low px-6 py-3.5 rounded-2xl border border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-on-surface">
                5.0
              </span>
              <div className="flex items-center text-amber-500">
                <span className="material-symbols-outlined text-xl fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-xl fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <span className="text-xs font-bold text-on-surface-variant ml-1">
                (Más de 120 opiniones verificadas)
              </span>
            </div>
            <a href="#formulario-opinion" className="inline-flex items-center gap-1.5 bg-primary-container hover:bg-primary text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm">
              <span className="material-symbols-outlined text-base" data-icon="edit">
                edit
              </span>
              Escribir una opinión
            </a>
          </div>
        </div>
      </section>
      {/* SECCIÓN PRINCIPAL: FORMULARIO DIRECTO Y LISTADO LIMPIO */}
      <section className="py-10 md:py-14 bg-surface">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* FORMULARIO DIRECTO Y SENCILLO PARA OPINAR */}
          <div id="formulario-opinion" className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" data-icon="rate_review">
                  rate_review
                </span>
              </div>
              <div>
                <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                  Agregar una opinión y puntuar
                </h2>
                <p className="text-body-sm text-on-surface-variant">
                  Comparte tu experiencia para ayudar a otros cuidadores y pacientes.
                </p>
              </div>
            </div>
            <form className="mt-6 space-y-5" onSubmit={feedback.onSubmit}>
              {/* Calificación con estrellas táctiles grandes */}
              <div>
                <label className="block text-label-md font-bold text-on-surface mb-1.5">
                  ¿Cómo calificas tu experiencia?*
                </label>
                <StarRating
                  iconClassName="text-3xl"
                  labelClassName="text-xs font-bold text-[#174A5A] px-2.5 py-1 rounded-full bg-[#174A5A]/10 ml-2"
                  showLabel
                />
              </div>
              {/* Nombre y Equipo en cuadrícula responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre_usuario" className="block text-label-md font-bold text-on-surface mb-1">
                    Tu nombre y rol*
                  </label>
                  <input type="text" id="nombre_usuario" name="name" placeholder="Ej: María González (Cuidadora familiar)" required className="w-full h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="equipo_adquirido" className="block text-label-md font-bold text-on-surface mb-1">
                    Equipo o dispositivo adquirido*
                  </label>
                  <select id="equipo_adquirido" name="product" defaultValue="" required className="w-full h-11 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Grúa manual">
                      Grúa manual SillaUp
                    </option>
                    <option value="Elevador de inodoro">
                      Elevador de inodoro ergonómico
                    </option>
                    <option value="Grúa eléctrica">
                      Grúa eléctrica asistida
                    </option>
                    <option value="Elevador multiuso">
                      Elevador multiuso
                    </option>
                    <option value="Elevador de cama">
                      Elevador de cama
                    </option>
                  </select>
                </div>
              </div>
              {/* Comentario breve */}
              <div>
                <label htmlFor="comentario_texto" className="block text-label-md font-bold text-on-surface mb-1">
                  Tu testimonio o experiencia*
                </label>
                <textarea id="comentario_texto" name="comment" rows={3} placeholder="Cuéntanos cómo te ayudó en las transferencias, comodidad del paciente y seguridad en casa..." required className="w-full p-4 rounded-xl border border-outline-variant bg-surface-container-lowest text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="text-xs text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-tertiary" data-icon="lock">
                    lock
                  </span>
                  Tu testimonio será publicado respetando tu privacidad.
                </p>
                <button type="submit" disabled={feedback.sending} className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-sm active:scale-95 disabled:opacity-60">
                  <span className="material-symbols-outlined text-base" data-icon="send">
                    send
                  </span>
                  {feedback.sending ? "Enviando..." : "Publicar opinión"}
                </button>
              </div>
            </form>
            {feedback.status === "error" && (
              <p className="mt-4 p-4 rounded-xl bg-error-container text-on-error-container text-xs font-medium" role="alert">
                {feedback.error}
              </p>
            )}
            {/* Mensaje de confirmación */}
            {feedback.status === "success" && (
            <div role="status" className="mt-4 p-4 rounded-xl bg-tertiary-container/10 border border-tertiary text-tertiary text-xs flex items-center gap-2 font-medium">
              <span className="material-symbols-outlined text-lg" data-icon="check_circle">
                check_circle
              </span>
              ¡Gracias! Tu opinión ha sido recibida con éxito y estará visible tras una breve revisión.
            </div>
            )}
          </div>
          {/* LISTADO DE TESTIMONIOS SENCILLO Y ORDENADO */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
              <h2 className="text-headline-sm font-bold text-on-surface">
                Opiniones recientes
              </h2>
              <span className="text-xs text-on-surface-variant font-medium">
                Ordenados por fecha
              </span>
            </div>
            {/* Testimonio 1 */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/80 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold flex items-center justify-center text-sm">
                    CP
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-base">
                      Camila P.
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Santiago (Las Condes) • Cuidadora familiar
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#174A5A]/10 text-[#174A5A] text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-xs" data-icon="check_circle">
                  check_circle
                </span>
                Compra verificada: Grúa manual
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                &quot;Mi madre tiene movilidad reducida por un ACV y levantarla entre dos personas nos causaba mucho dolor de espalda. Con la Grúa manual de SillaUp, una sola persona la transfiere suavemente y sin esfuerzo de la cama a la silla de ruedas. La calidad y firmeza se notan de inmediato.&quot;
              </p>
              <span className="text-[11px] text-on-surface-variant block mt-3">
                Publicado hace 3 días
              </span>
            </article>
            {/* Testimonio 2 */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/80 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center text-sm">
                    RM
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-base">
                      Rodrigo M.
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Viña del Mar • Kinesiólogo Neurorehabilitación
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#174A5A]/10 text-[#174A5A] text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-xs" data-icon="check_circle">
                  check_circle
                </span>
                Compra verificada: Elevador de inodoro
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                &quot;Como profesional recomiendo ampliamente el Elevador de inodoro. Le devuelve total intimidad al paciente en el baño y otorga una estabilidad sobresaliente gracias a sus apoyabrazos abatibles. El despacho a regiones fue rápido y el armado muy sencillo.&quot;
              </p>
              <span className="text-[11px] text-on-surface-variant block mt-3">
                Publicado hace 1 semana
              </span>
            </article>
            {/* Testimonio 3 */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/80 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-sm">
                    EG
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-base">
                      Elena G.
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Concepción • Hija y cuidadora principal
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#174A5A]/10 text-[#174A5A] text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-xs" data-icon="check_circle">
                  check_circle
                </span>
                Compra verificada: Grúa eléctrica
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                &quot;Excelente atención y orientación telefónica para elegir el arnés adecuado para mi papá. La grúa eléctrica funciona de manera impecable y silenciosa. Da mucha tranquilidad contar con servicio técnico directo en Chile.&quot;
              </p>
              <span className="text-[11px] text-on-surface-variant block mt-3">
                Publicado hace 2 semanas
              </span>
            </article>
            {/* Testimonio 4 */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/80 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface font-bold flex items-center justify-center text-sm">
                    MA
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface text-base">
                      Marcos A.
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      La Serena • Cuidador certificado
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg fill-icon" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#174A5A]/10 text-[#174A5A] text-xs font-bold mb-3">
                <span className="material-symbols-outlined text-xs" data-icon="check_circle">
                  check_circle
                </span>
                Compra verificada: Elevador multiuso
              </div>
              <p className="text-body-md text-on-surface leading-relaxed">
                &quot;El elevador multiuso cabe sin problemas por puertas y pasillos de 70 cm. Para los turnos nocturnos ha sido un descanso enorme, fácil de desinfectar y con materiales muy resistentes.&quot;
              </p>
              <span className="text-[11px] text-on-surface-variant block mt-3">
                Publicado hace 3 semanas
              </span>
            </article>
          </div>
          {/* CONSULTA O ASESORÍA DIRECTA */}
          <div className="bg-surface-container rounded-2xl p-6 md:p-8 text-center border border-outline-variant/60">
            <h3 className="text-headline-sm font-bold text-on-surface mb-2">
              ¿Tienes dudas sobre qué equipo necesitas?
            </h3>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto mb-6">
              Nuestro equipo kinesiológico evalúa sin costo la condición de tu paciente y las medidas de tu hogar.
            </p>
            <a href="https://wa.me/56972215907" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebc59] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-95">
              <span className="material-symbols-outlined text-xl" data-icon="chat">
                chat
              </span>
              Consultar por WhatsApp con Kinesiólogo
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
