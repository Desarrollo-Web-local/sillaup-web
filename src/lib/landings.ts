// Páginas de categoría (/productos/...) y landings institucionales. Cada una muestra los productos
// indicados en `productSlugs` (con precio vigente desde el panel), sus secciones y preguntas frecuentes.
//
// En `metaDescription`, {precio} se reemplaza por el precio vigente más bajo de esos productos,
// siguiendo la regla "(producto) + (beneficio) + (precio) + (garantía)".

export type LandingSection = { title: string; paragraphs?: string[]; bullets?: string[]; id?: string };

export type Landing = {
  path: string;
  /** Miga de pan sin "Inicio" (se agrega siempre al principio) */
  breadcrumb: { name: string; path: string }[];
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  productsTitle: string;
  productSlugs: string[];
  sections: LandingSection[];
  faqs: { question: string; answer: string }[];
  whatsappText: string;
  /** Muestra el bloque de cotización para instituciones */
  institutions?: boolean;
};

const productos = { name: "Productos", path: "/productos" };
const allProducts = ["grua-electrica", "elevador-de-inodoro", "grua-manual", "elevador-multiuso", "elevador-de-cama"];

const warrantyFaq = {
  question: "¿Qué garantía tienen los equipos?",
  answer:
    "Todos los equipos SillaUp tienen garantía de 1 año directa de fábrica. Como los fabricamos en Chile, los repuestos y el servicio técnico se coordinan desde nuestro showroom en Merced 562, Santiago.",
};
const shippingFaq = {
  question: "¿Hacen despacho fuera de Santiago?",
  answer:
    "Sí, despachamos a todo Chile. Escríbenos por WhatsApp con tu comuna o ciudad y te confirmamos el costo y el plazo de entrega.",
};
const showroomFaq = {
  question: "¿Puedo probar el equipo antes de comprarlo?",
  answer:
    "Sí. Puedes agendar una prueba en nuestro showroom de Merced 562, Santiago, de lunes a viernes entre 9:00 y 18:00 hrs. Escríbenos por WhatsApp para reservar un horario.",
};

export const landings = {
  bano: {
    path: "/productos/bano",
    breadcrumb: [productos, { name: "Baño", path: "/productos/bano" }],
    metaTitle: "Elevador de Inodoro y Ayudas para el Baño | SillaUp",
    metaDescription:
      "Elevador de inodoro eléctrico hecho en Chile para sentarse y levantarse sin esfuerzo. Desde {precio} IVA incl., garantía 1 año y despacho a todo Chile.",
    eyebrow: "Higiene y baño",
    h1: "Ayudas para el baño: elevador de inodoro para adultos mayores",
    intro:
      "Sentarse y levantarse del inodoro es uno de los momentos con más riesgo de caídas en casa. El elevador de inodoro SillaUp acompaña el movimiento con asistencia eléctrica, para que la persona recupere autonomía en el baño y el cuidador no tenga que cargar su peso.",
    productsTitle: "Equipos para el baño",
    productSlugs: ["elevador-de-inodoro"],
    sections: [
      {
        title: "¿Cuándo conviene un elevador de inodoro?",
        bullets: [
          "Cuando cuesta agacharse o ponerse de pie desde el inodoro por dolor de rodillas o cadera",
          "Después de una cirugía de cadera o rodilla, durante la recuperación",
          "Cuando la persona necesita ayuda de otro para levantarse y quiere hacerlo sola",
          "Cuando hay pérdida de equilibrio al sentarse o reincorporarse",
        ],
      },
      {
        title: "Qué revisar antes de comprar",
        paragraphs: [
          "Mide el espacio disponible alrededor del inodoro y considera el peso de la persona: el elevador SillaUp soporta hasta 110 kg. Si tienes dudas sobre la compatibilidad con tu baño, envíanos una foto por WhatsApp y te asesoramos sin costo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El elevador de inodoro requiere instalación?",
        answer:
          "No. Se instala sobre el inodoro existente siguiendo la guía de instalación, sin obras ni perforaciones. Si tienes dudas, te ayudamos por WhatsApp.",
      },
      warrantyFaq,
      showroomFaq,
    ],
    whatsappText: "Hola SillaUp, necesito asesoría para elegir un elevador de inodoro",
  },
  "traslado-de-pacientes": {
    path: "/productos/traslado-de-pacientes",
    breadcrumb: [productos, { name: "Traslado de pacientes", path: "/productos/traslado-de-pacientes" }],
    metaTitle: "Grúas para Traslado de Pacientes Eléctricas y Manuales | SillaUp",
    metaDescription:
      "Grúas de traslado de pacientes hechas en Chile, eléctricas y manuales, para mover a la persona sin esfuerzo del cuidador. Desde {precio} IVA incl., garantía 1 año.",
    eyebrow: "Traslado de pacientes",
    h1: "Grúas para traslado de pacientes: eléctrica y manual",
    intro:
      "Mover a una persona dependiente de la cama a la silla de ruedas, al baño o al sillón exige mucha fuerza y es una de las principales causas de lesiones de espalda en cuidadores. Las grúas SillaUp hacen el trabajo de levantar, para que el traslado sea seguro para ambos.",
    productsTitle: "Grúas de traslado",
    productSlugs: ["grua-electrica", "grua-manual"],
    sections: [
      {
        title: "¿Grúa eléctrica o grúa manual?",
        bullets: [
          "Grúa eléctrica: eleva con un botón en el mando, ideal si los traslados son varios al día o el cuidador tiene poca fuerza",
          "Grúa manual: funciona con sistema hidráulico y no depende de la electricidad, ideal si hay cortes de luz o se traslada entre lugares",
          "Ambas soportan hasta 110 kg y tienen ruedas con bloqueo para desplazarse y posicionarse con precisión",
        ],
      },
      {
        title: "Antes de elegir",
        paragraphs: [
          "Considera el peso de la persona, el ancho de las puertas, el espacio bajo la cama para las patas de la grúa y cuántos traslados se hacen al día. Te asesoramos gratis por WhatsApp o en el showroom.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se puede usar la grúa con una sola persona cuidando?",
        answer:
          "Sí. Las grúas están pensadas para que un solo cuidador pueda hacer el traslado, sin cargar el peso del paciente. Te explicamos cómo usarla por WhatsApp o en el showroom.",
      },
      warrantyFaq,
      shippingFaq,
    ],
    whatsappText: "Hola SillaUp, necesito asesoría para elegir una grúa de traslado de pacientes",
    institutions: true,
  },
  bipedestacion: {
    path: "/productos/bipedestacion",
    breadcrumb: [productos, { name: "Bipedestación", path: "/productos/bipedestacion" }],
    metaTitle: "Elevador para Ponerse de Pie desde Sillas y Sofás | SillaUp",
    metaDescription:
      "Elevador multiuso eléctrico hecho en Chile para ponerse de pie sin esfuerzo desde sillas, sofás o la cama. Desde {precio} IVA incl., garantía 1 año.",
    eyebrow: "Bipedestación y elevación",
    h1: "Elevador para ponerse de pie desde sillas, sofás y la cama",
    intro:
      "Pasar de estar sentado a estar de pie es un movimiento que se repite muchas veces al día. El elevador multiuso SillaUp entrega un apoyo progresivo para levantarse desde distintos asientos, sin depender de la fuerza de otra persona.",
    productsTitle: "Equipos de bipedestación",
    productSlugs: ["elevador-multiuso"],
    sections: [
      {
        title: "¿Para quién es un elevador multiuso?",
        bullets: [
          "Adultos mayores con debilidad en las piernas que aún pueden mantenerse de pie",
          "Personas con artrosis o dolor articular al incorporarse",
          "Familias que necesitan ayuda para levantarse desde más de un asiento de la casa",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Sirve si la persona no puede sostenerse de pie?",
        answer:
          "El elevador multiuso está pensado para personas que pueden mantenerse de pie con apoyo. Si la persona no se sostiene, lo indicado es una grúa de traslado. Te ayudamos a elegir por WhatsApp.",
      },
      warrantyFaq,
      showroomFaq,
    ],
    whatsappText: "Hola SillaUp, necesito asesoría sobre el elevador multiuso",
  },
  "cuidado-en-cama": {
    path: "/productos/cuidado-en-cama",
    breadcrumb: [productos, { name: "Cuidado en cama", path: "/productos/cuidado-en-cama" }],
    metaTitle: "Elevador de Cama Eléctrico con Respaldo Ajustable | SillaUp",
    metaDescription:
      "Elevador de cama eléctrico hecho en Chile: convierte tu cama en ajustable con control remoto, sin cambiarla. Desde {precio} IVA incl., garantía 1 año.",
    eyebrow: "Cuidado en cama",
    h1: "Cuidado en cama: elevador de respaldo eléctrico",
    intro:
      "Para quien pasa muchas horas en cama, poder incorporarse para comer, leer o conversar marca una gran diferencia. El elevador de cama SillaUp levanta el respaldo con control remoto sobre tu propia cama, sin necesidad de comprar una cama clínica.",
    productsTitle: "Equipos para el cuidado en cama",
    productSlugs: ["elevador-de-cama"],
    sections: [
      {
        title: "Beneficios para la persona y el cuidador",
        bullets: [
          "Incorporarse sin ayuda para comer, tomar medicamentos o ver televisión",
          "Menos esfuerzo para el cuidador al acomodar a la persona",
          "Se usa sobre la cama que ya tienes en casa",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Funciona con cualquier cama?",
        answer:
          "Se instala sobre tu cama actual, sin necesidad de comprar una cama clínica. Envíanos las medidas de tu cama por WhatsApp y te confirmamos la compatibilidad.",
      },
      warrantyFaq,
      shippingFaq,
    ],
    whatsappText: "Hola SillaUp, necesito asesoría sobre el elevador de cama",
  },
  "para-cuidadores": {
    path: "/para-cuidadores",
    breadcrumb: [{ name: "Para cuidadores", path: "/para-cuidadores" }],
    metaTitle: "Equipos de Movilidad para Cuidadores de Adultos Mayores | SillaUp",
    metaDescription:
      "Elevadores y grúas hechos en Chile para cuidar a un familiar sin lesionarte la espalda. Desde {precio} IVA incl., garantía 1 año. Asesoría gratis por WhatsApp.",
    eyebrow: "Para cuidadores",
    h1: "Equipos para cuidar a tu familiar sin dañar tu espalda",
    intro:
      "Cuidar a un adulto mayor o a una persona con movilidad reducida es un trabajo físico diario. Nuestros equipos reducen el esfuerzo en los momentos más exigentes: levantarse del inodoro, de la cama o de la silla, y los traslados.",
    productsTitle: "Equipos recomendados para cuidadores",
    productSlugs: allProducts,
    sections: [
      {
        title: "¿Qué equipo necesito?",
        bullets: [
          "Si le cuesta levantarse del inodoro: elevador de inodoro",
          "Si pasa muchas horas en cama y necesita incorporarse: elevador de cama",
          "Si puede estar de pie pero le cuesta levantarse de sillas o sofás: elevador multiuso",
          "Si no puede sostenerse de pie y hay que trasladarla: grúa eléctrica o manual",
        ],
      },
      {
        title: "Te acompañamos en la decisión",
        paragraphs: [
          "Cuéntanos por WhatsApp la situación de tu familiar, el peso aproximado y cómo es tu casa. Te recomendamos el equipo adecuado sin costo y, si quieres, puedes probarlo antes en el showroom de Merced 562.",
        ],
      },
    ],
    faqs: [warrantyFaq, shippingFaq, showroomFaq],
    whatsappText: "Hola SillaUp, cuido a un familiar y necesito asesoría para elegir un equipo",
  },
  "para-kinesiologos-y-centros": {
    path: "/para-kinesiologos-y-centros",
    breadcrumb: [{ name: "Para kinesiólogos y centros", path: "/para-kinesiologos-y-centros" }],
    metaTitle: "Equipos de Movilidad para Kinesiólogos y Centros de Rehabilitación | SillaUp",
    metaDescription:
      "Grúas y elevadores hechos en Chile para kinesiólogos, terapeutas y centros de rehabilitación. Desde {precio} IVA incl., garantía 1 año y repuestos locales.",
    eyebrow: "Profesionales de la salud",
    h1: "Equipos de movilidad para kinesiólogos y centros de rehabilitación",
    intro:
      "Si recomiendas ayudas técnicas a tus pacientes o equipas un centro de rehabilitación, SillaUp te ofrece equipos fabricados en Chile, con repuestos disponibles y servicio técnico local, para que tus pacientes no queden sin equipo por una falla.",
    productsTitle: "Equipos para pacientes y centros",
    productSlugs: ["grua-electrica", "grua-manual", "elevador-multiuso", "elevador-de-cama", "elevador-de-inodoro"],
    sections: [
      {
        title: "Por qué recomendar SillaUp",
        bullets: [
          "Fabricación chilena: repuestos y servicio técnico en Santiago",
          "Garantía de 1 año directa de fábrica",
          "Showroom en Merced 562 donde el paciente y su familia pueden probar el equipo",
          "Despacho a todo Chile",
        ],
      },
      {
        title: "Cotizaciones para centros",
        paragraphs: [
          "Si necesitas varios equipos para un centro, clínica o consulta, escríbenos con la cantidad y el tipo de pacientes que atiendes y te preparamos una cotización.",
        ],
      },
    ],
    faqs: [warrantyFaq, showroomFaq, shippingFaq],
    whatsappText: "Hola SillaUp, soy profesional de la salud y quiero información sobre sus equipos",
    institutions: true,
  },
  "residencias-adulto-mayor": {
    path: "/residencias-adulto-mayor",
    breadcrumb: [{ name: "Residencias de adulto mayor", path: "/residencias-adulto-mayor" }],
    metaTitle: "Grúas y Elevadores para Residencias de Adulto Mayor (ELEAM) | SillaUp",
    metaDescription:
      "Grúas de traslado y elevadores hechos en Chile para residencias de adulto mayor y ELEAM. Desde {precio} IVA incl., garantía 1 año. Cotiza por WhatsApp.",
    eyebrow: "Residencias y ELEAM",
    h1: "Grúas y elevadores para residencias de adulto mayor",
    intro:
      "En una residencia, los traslados y la asistencia en el baño se repiten muchas veces al día. Equipar al personal con grúas y elevadores reduce el riesgo de caídas de los residentes y de lesiones en los cuidadores.",
    productsTitle: "Equipos para residencias",
    productSlugs: ["grua-electrica", "grua-manual", "elevador-de-inodoro", "elevador-de-cama"],
    sections: [
      {
        title: "Cómo te ayudamos a equipar tu residencia",
        bullets: [
          "Asesoría según el número de residentes y su nivel de dependencia",
          "Cotización por varios equipos",
          "Garantía de 1 año, repuestos y servicio técnico en Santiago",
          "Despacho a todo Chile",
        ],
      },
    ],
    faqs: [warrantyFaq, shippingFaq, showroomFaq],
    whatsappText: "Hola SillaUp, quiero cotizar equipos para una residencia de adulto mayor",
    institutions: true,
  },
  guias: {
    path: "/guias",
    breadcrumb: [{ name: "Guías", path: "/guias" }],
    metaTitle: "Guías para Cuidadores y Movilidad Reducida | SillaUp",
    metaDescription:
      "Guías prácticas de SillaUp para elegir elevadores y grúas de traslado y cuidar mejor a un adulto mayor en casa. Equipos desde {precio}, garantía 1 año.",
    eyebrow: "Guías",
    h1: "Guías para cuidadores y personas con movilidad reducida",
    intro:
      "Consejos prácticos para elegir el equipo adecuado, preparar la casa y hacer los traslados de forma segura. Si tienes una duda puntual, escríbenos por WhatsApp y te asesoramos sin costo.",
    productsTitle: "Equipos mencionados en las guías",
    productSlugs: allProducts,
    sections: [
      {
        id: "como-elegir",
        title: "Cómo elegir un equipo de movilidad asistida",
        paragraphs: [
          "Parte por identificar el momento del día que más cuesta: el baño, levantarse de la cama, ponerse de pie desde una silla o los traslados. Luego considera si la persona puede sostenerse de pie, su peso y el espacio de tu casa.",
        ],
        bullets: [
          "Puede ponerse de pie con apoyo: elevador de inodoro o elevador multiuso",
          "Pasa mucho tiempo en cama: elevador de cama",
          "No se sostiene de pie: grúa de traslado eléctrica o manual",
        ],
      },
      {
        id: "bano-seguro",
        title: "Cómo hacer más seguro el baño de un adulto mayor",
        bullets: [
          "Instala barras de apoyo junto al inodoro y la ducha",
          "Usa alfombras antideslizantes y buena iluminación, también de noche",
          "Despeja el espacio alrededor del inodoro para poder asistir",
          "Considera un elevador de inodoro si cuesta sentarse o levantarse",
        ],
      },
      {
        id: "traslados",
        title: "Traslados seguros de cama a silla: cuidar tu espalda",
        paragraphs: [
          "Al trasladar a una persona sin ayuda técnica, el cuidador carga gran parte de su peso con la espalda. Si los traslados son diarios, una grúa reduce ese esfuerzo y el riesgo de caídas. Antes de cada traslado, frena la silla de ruedas y la cama, y explica a la persona cada paso.",
        ],
      },
    ],
    faqs: [warrantyFaq, showroomFaq],
    whatsappText: "Hola SillaUp, leí sus guías y necesito asesoría",
  },
} satisfies Record<string, Landing>;

export type LandingId = keyof typeof landings;
export const landingList = Object.values(landings) as Landing[];
