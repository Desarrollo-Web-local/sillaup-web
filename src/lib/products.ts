// Catálogo de productos SillaUp. El orden de este arreglo es el orden en que se muestran.
// Los valores "Por confirmar" están pendientes de confirmar con SillaUp.

type Icon = string;
export type Image = { src: string; alt: string };
export type Offer = { discountPercent: number; label: string; endsAt?: string };

export type Product = {
  slug: string;
  name: string;
  /** Nombre en mayúsculas iniciales, usado en títulos de sección */
  titleName: string;
  article: "el" | "la";
  breadcrumb: string;
  category: string;
  /** Destacado como "Más Solicitado" en el catálogo */
  featured?: boolean;
  inStock: boolean;
  tagline: string;
  summary: string;
  /** Precio normal en pesos chilenos (CLP), IVA incluido */
  price: number;
  /** Oferta vigente, definida desde el panel de administración */
  offer?: Offer;
  /** Link de pago de Mercado Pago. Sin él, la compra se coordina por WhatsApp. */
  mercadoPagoUrl?: string;
  /** Foto del catálogo y de "Otros productos del catálogo" */
  image: Image;
  /** Foto del carrusel de la página de inicio */
  homeImage: Image;
  homeTags: [string, string];
  homeSummary: string;
  /** Fotos de la ficha del producto */
  gallery: Image[];
  quickSpecs: { icon: Icon; label: string; value: string }[];
  detail: {
    eyebrow: string;
    title: string;
    points: { icon: Icon; text: string }[];
    introPrefix: string;
    introHighlight: string;
    intro: string;
    body: string;
  };
  stepsIntro: string;
  steps: { title: string; text: string }[];
  video?: { youtubeId: string; description: string };
  benefits: { icon: Icon; title: string; text: string }[];
  audience: { icon: Icon; title: string; text: string }[];
  specs: { label: string; value: string; emphasis?: "primary" | "tertiary"; swatch?: string }[];
  rating?: { score: string; basis: string };
  reviews: { quote: string; name: string; initials: string; detail: string }[];
  /** Tarjeta usada en el catálogo y en "Otros productos del catálogo" */
  card: { category: string; summary: string; meta: string };
  metaDescription: string;
};

export const PENDING = "Por confirmar";

export const products: Product[] = [
  {
    slug: "grua-electrica",
    name: "Grúa eléctrica",
    titleName: "Grúa Eléctrica",
    article: "la",
    breadcrumb: "Traslado",
    category: "Traslado · Asistencia Eléctrica",
    featured: true,
    inStock: true,
    tagline: "Traslada con seguridad mediante elevación eléctrica asistida",
    summary: "Traslada personas con seguridad y comodidad gracias a su elevación eléctrica, reduciendo el esfuerzo del cuidador",
    price: 390000,
    mercadoPagoUrl: "https://mpago.la/2Gquygz",
    image: {
      alt: "Heavy-duty clinical electric patient transfer crane in white powder-coated steel with battery actuator, ergonomic push handles, spreader bar, and high-stability base. Modern medical clinic aesthetic with soft natural daylight.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtLuGtnkXlzWFAWHy4rdQW-FR7-pfcvbaw_blcKx4QzsV3y6ykm_zSC9hEkETSrDc7V7iYSKRpvEAEpbiJbl7vOhRiACGh9DhLfOIycuSrXG7syMipQ9Co2zw2PJVIt0oOurTDqZZOeykAWEw9HoS9wdMvuWVuNYKXFXGDiVKezD0YaI1RP6yWe0IACRs2hqC6Y0Ilu1U8wtjvNSV9d0t6fchdW7Zi6f9y39ZoHcaTEoiIzT0cv10"
    },
    homeImage: {
      alt: "Professional medical equipment photography of an advanced battery-powered electric patient lifting crane. Sleek white frame with remote control wand, emergency stop module, dual battery pack, and reinforced patient sling. Set in a luminous, sterile yet welcoming contemporary rehabilitation suite with light oak flooring and soft ambient highlights.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS7k-zTobK5wOL5LeI2e3SpVf3aruEp6gSmS6AMCf5Lbtp9s2uRJ5UwE2-MK0HwfmzLgNPKFJVE_jJIVYDqWWwmMARXgB5QhIVIk3PV6UzqD8RCf3x_9dN3LUAC0mzl35lWBho4WnFDewSunONysdxKC6OkApqIKlQHL00g4S_VXxGFzqxQb1yUg-oCH3BtGLzOPYpy9dBNWZ6Gpt-H_m5qNwaWtCYzZ-MQ7_k5ly6TWotXgJvrBQ"
    },
    homeTags: ["Eléctrica 24V", "SWL 110 kg"],
    homeSummary: "Traslada con seguridad mediante elevación eléctrica asistida con pulsar un solo botón en el mando remoto",
    gallery: [
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
    ],
    quickSpecs: [
      {
        icon: "fitness_center",
        label: "Capacidad",
        value: "Máx. 110 kg"
      },
      {
        icon: "bolt",
        label: "Carga Rápida",
        value: "2 Horas"
      },
      {
        icon: "verified_user",
        label: "Garantía Oficial",
        value: "1 Año Directa"
      },
      {
        icon: "local_shipping",
        label: "Despacho",
        value: "A todo Chile"
      }
    ],
    detail: {
      eyebrow: "Ingeniería y Seguridad",
      title: "Diseñada para proteger al usuario y aliviar la carga física del cuidador",
      points: [
        {
          icon: "health_and_safety",
          text: "Prevención comprobada de lumbagos y lesiones osteomusculares crónicas en cuidadores y familiares"
        },
        {
          icon: "airline_seat_recline_extra",
          text: "Arnés ergonómico acolchado que distribuye el peso de manera uniforme sin puntos de presión dolorosos"
        }
      ],
      introPrefix: "La",
      introHighlight: "Grúa Eléctrica de Traslado",
      intro: "facilita la movilización segura de personas con movilidad reducida o dependencia entre distintos espacios del hogar o centros de atención. Su elevación eléctrica, accionada con control remoto, permite hacer las transferencias con mínimo esfuerzo físico",
      body: "Su funcionamiento estable y preciso ayuda a reducir el riesgo de caídas y lesiones. Ideal para transferencias entre cama, silla de ruedas, sillón, baño u otras superficies, con estructura robusta y fácil de maniobrar para hogar, rehabilitación, clínicas y establecimientos de salud"
    },
    stepsIntro: "Secuencia simple en 5 pasos para realizar un traslado rápido, digno y sin esfuerzo físico",
    steps: [
      {
        title: "Coloca el arnés",
        text: "Posiciona el arnés correctamente en el usuario, garantizando el soporte lumbar y bajo los muslos"
      },
      {
        title: "Posiciona la grúa",
        text: "Abre o ajusta la base para rodear la cama o asiento y engancha las cintas de seguridad en la percha"
      },
      {
        title: "Eleva con control",
        text: "Usa el control remoto ergonómico para elevar al usuario de forma gradual, suave y controlada"
      },
      {
        title: "Desplaza al destino",
        text: "Rueda la grúa con suavidad hacia la silla de ruedas, sillón reclinable o baño"
      },
      {
        title: "Desciende suavemente",
        text: "Desciende al usuario suavemente con el mismo control y retira las fijaciones con total holgura"
      }
    ],
    video: {
      youtubeId: "1Fu9VohTIqA",
      description: "Observa en detalle la estabilidad, la suavidad del motor de elevación y la facilidad de desplazamiento en espacios domésticos y clínicos"
    },
    benefits: [
      {
        icon: "settings_remote",
        title: "Elevación por control remoto",
        text: "Accionamiento eléctrico milimétrico sin bombear pedales ni palancas pesadas"
      },
      {
        icon: "personal_injury",
        title: "Cero esfuerzo lumbar",
        text: "Reduce significativamente el esfuerzo físico del cuidador, previniendo lesiones permanentes"
      },
      {
        icon: "motion_photos_on",
        title: "Traslados suaves y seguros",
        text: "Movimiento gradual sin tirones bruscos que infunden tranquilidad y confianza al usuario"
      },
      {
        icon: "shield",
        title: "Disminuye el riesgo de caídas",
        text: "Sujeción estructural certificada de 4 puntos que asegura al paciente durante todo el trayecto"
      },
      {
        icon: "swap_horiz",
        title: "Fácil maniobrabilidad",
        text: "Ruedas giratorias 360° de rodadura suave con frenos de alta precisión para giros en pasillos"
      },
      {
        icon: "domain",
        title: "Hogar y Clínicas",
        text: "Diseño compacto con dimensiones optimizadas tanto para recintos residenciales como centros de salud"
      }
    ],
    audience: [
      {
        icon: "elderly",
        title: "Adultos mayores",
        text: "Con debilidad motriz o sarcopenia avanzada en extremidades inferiores"
      },
      {
        icon: "accessible",
        title: "Movilidad reducida",
        text: "Personas que requieren asistencia constante para pasar de la cama a la silla"
      },
      {
        icon: "accessible_forward",
        title: "Discapacidad física",
        text: "Usuarios con paraplejía, tetraplejía o patologías neuromusculares complejas"
      },
      {
        icon: "assist_walker",
        title: "En rehabilitación",
        text: "Etapas postoperatorias de cadera o recuperación tras accidentes cerebrovasculares"
      },
      {
        icon: "transfer_within_a_station",
        title: "Dependencia parcial/total",
        text: "Pacientes encamados que necesitan cambios posturales y transferencias diarias"
      }
    ],
    specs: [
      {
        label: "Dimensiones",
        value: "Por confirmar (diseñada para puertas estándar chilenas de 70-80 cm)"
      },
      {
        label: "Peso máximo soportado",
        value: "110 kg (Carga de trabajo segura certificada)",
        emphasis: "primary"
      },
      {
        label: "Material de construcción",
        value: "Estructura de Acero de alta resistencia con acabado en pintura electrostática termoendurecida"
      },
      {
        label: "Color",
        value: "Blanco clínico antibacteriano",
        swatch: "#ffffff"
      },
      {
        label: "Accionamiento",
        value: "Elevación eléctrica mediante pistón lineal y control remoto ergonómico cableado"
      },
      {
        label: "Tiempo de carga",
        value: "2 horas de carga rápida (autonomía para múltiples ciclos diarios)"
      },
      {
        label: "Garantía",
        value: "1 año de garantía técnica directa de fábrica SillaUp",
        emphasis: "tertiary"
      },
      {
        label: "Procedencia y taller",
        value: "Fabricación chilena en Santiago (Taller y Showroom: Merced 562)"
      }
    ],
    rating: {
      score: "5.0 / 5.0",
      basis: "(Basado en 28 compras verificadas en Chile)"
    },
    reviews: [
      {
        quote: "Nos cambió la vida familiar por completo. Mi madre pesa 78 kg y mi hermana ya no podía levantarla sola sin dañarse la espalda. La grúa es silenciosa, el control remoto responde al instante y el arnés es súper seguro",
        name: "Carmen Rodríguez",
        initials: "CR",
        detail: "Comprador verificado · Providencia"
      },
      {
        quote: "Como kinesiólogo en centro de atención domiciliaria, destaco la robustez del chasis de acero. No tiene ese balanceo inestable de modelos importados chinos. Y saber que están en Merced por cualquier repuesto da una tranquilidad inmensa",
        name: "Matías Morales",
        initials: "MM",
        detail: "Kinesiólogo · Viña del Mar"
      },
      {
        quote: "Excelente atención. Fuimos al taller a verla y nos enseñaron a usarla con mucha paciencia. El despacho a Concepción llegó en 48 horas sin inconvenientes. Cien por ciento recomendados",
        name: "Gonzalo Sanhueza",
        initials: "GS",
        detail: "Comprador verificado · Concepción"
      }
    ],
    card: {
      category: "Traslado Eléctrico",
      summary: "Traslado asistido con motor eléctrico y mando ergonómico para máximo confort y cuidado postural",
      meta: "Capacidad: 110 kg"
    },
    metaDescription: "Grúa eléctrica SillaUp para traslados seguros de pacientes con control remoto, sin esfuerzo lumbar para el cuidador. Fabricación chilena."
  },
  {
    slug: "elevador-de-inodoro",
    name: "Elevador de inodoro",
    titleName: "Elevador de Inodoro",
    article: "el",
    breadcrumb: "Baño",
    category: "Baño · Asistencia Eléctrica",
    inStock: false,
    tagline: "Siéntate y levántate del inodoro con seguridad y autonomía",
    summary: "Asistencia eléctrica para sentarse y ponerse de pie del inodoro con total seguridad y autonomía, sin exigir tus rodillas ni cadera",
    price: 390000,
    image: {
      alt: "Modern medical white steel toilet lifter device designed for senior and assisted hygiene care, placed in a contemporary spotless bathroom with gentle natural daylight. Clean sanitary atmosphere with ergonomic armrests, electric piston mechanism, and sturdy Chilean engineering.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLS1R2uL0WK8P9va3sDBrxTvvG8oiP3wUagyQuT3rtnj199l6fqc5ILsX2EzQLaQfynPw6L1xOia7OyalFyU9GZFcOwmLHHXXdUAqcqiHRaRhXzpdtAFoERyr4ruqikkqKV-sv-4tilHZSQYp-Y-iIu2b4-oOBhkaGa-dRLa9hDJW3buVuYPYD0CS2uUEeCz71yt5gw6WyrlyrHQ5VedKyBXGv0ggAgOQlMTWmG1zMYtMeU2hi4nA"
    },
    homeImage: {
      alt: "Studio catalog product photography of a modern ergonomic toilet lifter assistive chair on a pure high-key white background. Steel white powder-coated structure with soft padded medical armrests and non-slip safety suction footings. Clear ambient lighting highlighting high-precision engineering and domestic warmth in soft blue and white tones.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxLwH6baDMQkdQ3RvRAUEjafYePfP7Gf2H-72wcfyTwOGod2IxvTegAgyLH1T20a8-FZBac5achCJTlYvGUQI0NtFr4SBEoxNP3ur6LSqkfKluHePWLFD3UOtDtYe92f_F0mjEac_Ys_xvp_DREJF9jSIxHzTVcWBlN14sn6yFCHxa5xFz3mltsJzsPQnQBYv9CmQuR06rx0LU3sSbETqCfaHy6E9XowMcyPaACxosmcKrONKshgI"
    },
    homeTags: ["Baño seguro", "SWL 110 kg"],
    homeSummary: "Siéntate y levántate del inodoro con mayor seguridad y autonomía sin exigir tus rodillas ni cadera",
    gallery: [
      {
        alt: "Modern medical white steel toilet lifter device designed for senior and assisted hygiene care, placed in a contemporary spotless bathroom with gentle natural daylight. Clean sanitary atmosphere with ergonomic armrests, electric piston mechanism, and sturdy Chilean engineering.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLS1R2uL0WK8P9va3sDBrxTvvG8oiP3wUagyQuT3rtnj199l6fqc5ILsX2EzQLaQfynPw6L1xOia7OyalFyU9GZFcOwmLHHXXdUAqcqiHRaRhXzpdtAFoERyr4ruqikkqKV-sv-4tilHZSQYp-Y-iIu2b4-oOBhkaGa-dRLa9hDJW3buVuYPYD0CS2uUEeCz71yt5gw6WyrlyrHQ5VedKyBXGv0ggAgOQlMTWmG1zMYtMeU2hi4nA"
      },
      {
        alt: "Studio catalog product photography of a modern ergonomic toilet lifter assistive chair on a pure high-key white background. Steel white powder-coated structure with soft padded medical armrests and non-slip safety suction footings. Clear ambient lighting highlighting high-precision engineering and domestic warmth in soft blue and white tones.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxLwH6baDMQkdQ3RvRAUEjafYePfP7Gf2H-72wcfyTwOGod2IxvTegAgyLH1T20a8-FZBac5achCJTlYvGUQI0NtFr4SBEoxNP3ur6LSqkfKluHePWLFD3UOtDtYe92f_F0mjEac_Ys_xvp_DREJF9jSIxHzTVcWBlN14sn6yFCHxa5xFz3mltsJzsPQnQBYv9CmQuR06rx0LU3sSbETqCfaHy6E9XowMcyPaACxosmcKrONKshgI"
      },
      {
        alt: "Modern clinical toilet seat lifter aid in clean white medical-grade composite with chrome handrails installed securely over a contemporary home bathroom commode.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwxcs5T6m7kLg6sh7yzhwj4y_Ph-ofD2PxhsYaREKP8mYtumFclThCtKLZVK1QuFOCnFz0esr_Xu6Z0Sma_JkWE6uGXPRHJZyNvyRCvg9bgFH8y4WdDx7tL4jEWr2gVBsToa2rvhZl03oNv8Ncd6D3bjtr4LDRg89E23u8Glp6Sm4AviTACNslL3eqa81djGv7pmDCLZuA9eL-pWd1WckYUQ_vLk5HdywkunomymcAoLokuaB42E4"
      }
    ],
    quickSpecs: [
      {
        icon: "fitness_center",
        label: "Capacidad",
        value: "Por confirmar"
      },
      {
        icon: "bolt",
        label: "Accionamiento",
        value: "Eléctrico"
      },
      {
        icon: "verified_user",
        label: "Garantía Oficial",
        value: "1 Año Directa"
      },
      {
        icon: "local_shipping",
        label: "Despacho",
        value: "A todo Chile"
      }
    ],
    detail: {
      eyebrow: "Ingeniería y Seguridad",
      title: "Diseñado para recuperar la autonomía y la privacidad en el baño",
      points: [
        {
          icon: "health_and_safety",
          text: "Ayuda a prevenir caídas al sentarse y levantarse del inodoro, uno de los traslados más delicados del día"
        },
        {
          icon: "accessibility_new",
          text: "Acompaña el movimiento de forma gradual, sin exigir las rodillas ni la cadera"
        }
      ],
      introPrefix: "El",
      introHighlight: "Elevador de Inodoro",
      intro: "asiste eléctricamente a la persona al sentarse y ponerse de pie del inodoro, acompañando el movimiento de forma suave y controlada con un control de fácil uso",
      body: "Está pensado para personas con debilidad en las piernas, dolor articular o en recuperación que quieren mantener su independencia en el baño. Reduce la necesidad de asistencia y el esfuerzo físico de quien cuida, en el hogar, centros de rehabilitación y establecimientos de salud"
    },
    stepsIntro: "Secuencia simple en 5 pasos para usar el baño con seguridad y autonomía",
    steps: [
      {
        title: "Instala el equipo",
        text: "Ubica el elevador sobre el inodoro siguiendo la guía de instalación, sin obras ni perforaciones"
      },
      {
        title: "Acércate con apoyo",
        text: "La persona se ubica de espaldas al equipo, con los pies firmes en el suelo"
      },
      {
        title: "Desciende con el control",
        text: "Con el control, el asiento acompaña el descenso de forma gradual hasta quedar sentado"
      },
      {
        title: "Usa el baño",
        text: "La persona utiliza el inodoro con normalidad, mayor independencia y privacidad"
      },
      {
        title: "Eleva para ponerte de pie",
        text: "Al terminar, el equipo eleva suavemente para facilitar ponerse de pie sin forzar las articulaciones"
      }
    ],
    benefits: [
      {
        icon: "settings_remote",
        title: "Asistencia con un botón",
        text: "Accionamiento eléctrico simple, sin palancas ni esfuerzo de brazos"
      },
      {
        icon: "personal_injury",
        title: "Cuida rodillas y cadera",
        text: "Acompaña el movimiento de sentarse y levantarse, reduciendo la carga en las articulaciones"
      },
      {
        icon: "privacy_tip",
        title: "Más autonomía y privacidad",
        text: "Permite usar el baño con menor dependencia de un cuidador"
      },
      {
        icon: "shield",
        title: "Disminuye el riesgo de caídas",
        text: "Movimiento gradual y estable en uno de los traslados más delicados del día"
      },
      {
        icon: "handyman",
        title: "Sin obras en el baño",
        text: "Se instala sobre el inodoro existente, sin perforar muros ni modificar el baño"
      },
      {
        icon: "domain",
        title: "Hogar y Clínicas",
        text: "Apto para baños residenciales y para centros de salud o rehabilitación"
      }
    ],
    audience: [
      {
        icon: "elderly",
        title: "Adultos mayores",
        text: "Con dificultad para agacharse o reincorporarse del inodoro"
      },
      {
        icon: "accessible",
        title: "Movilidad reducida",
        text: "Personas con debilidad en las piernas que necesitan apoyo para sentarse y levantarse"
      },
      {
        icon: "healing",
        title: "Dolor articular",
        text: "Usuarios con dolor o desgaste en rodillas y cadera"
      },
      {
        icon: "assist_walker",
        title: "En rehabilitación",
        text: "Recuperación postoperatoria de cadera o rodilla"
      },
      {
        icon: "volunteer_activism",
        title: "Cuidadores",
        text: "Familias que buscan reducir el esfuerzo físico al asistir en el baño"
      }
    ],
    specs: [
      {
        label: "Dimensiones",
        value: "Por confirmar"
      },
      {
        label: "Peso máximo soportado",
        value: "Por confirmar",
        emphasis: "primary"
      },
      {
        label: "Material de construcción",
        value: "Acero estructural de grado médico"
      },
      {
        label: "Color",
        value: "Por confirmar"
      },
      {
        label: "Accionamiento",
        value: "Eléctrico, con control de fácil uso"
      },
      {
        label: "Alimentación",
        value: "Batería recargable (autonomía por confirmar)"
      },
      {
        label: "Garantía",
        value: "1 año de garantía técnica directa de fábrica SillaUp",
        emphasis: "tertiary"
      },
      {
        label: "Procedencia y taller",
        value: "Fabricación chilena en Santiago (Taller y Showroom: Merced 562)"
      }
    ],
    reviews: [],
    card: {
      category: "Higiene y Baño",
      summary: "Asistencia eléctrica para sentarse y ponerse de pie del inodoro con total seguridad y autonomía",
      meta: "Accionamiento eléctrico"
    },
    metaDescription: "Elevador de inodoro SillaUp: asistencia eléctrica para sentarse y levantarse del inodoro con seguridad y autonomía. Fabricación chilena."
  },
  {
    slug: "grua-manual",
    name: "Grúa manual",
    titleName: "Grúa Manual",
    article: "la",
    breadcrumb: "Traslado",
    category: "Traslado · Manual",
    inStock: false,
    tagline: "Traslados seguros sin necesidad de electricidad",
    summary: "Traslada personas con seguridad y comodidad gracias a su sistema hidráulico manual, sin cables ni dependencia de la red eléctrica",
    price: 290000,
    image: {
      alt: "Manual patient lift crane made of pristine white tubular steel with hydraulic lever and robust medical caster wheels. Clean studio setting with neutral lighting, demonstrating assistive mobility transfer hardware for home care.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQE1EGsuBgnCAwtx593rRSzTcVfIf-YHOrw3podrn6iE4W3gFg5t-S7MJhkGGF3N_44PgvPKf-BwyDlyB0EX_AYXuPkp5giwS8WrUrrtdWGKLH3QC5gqaUIop5I0L6v2FnNV6m5kdlE9COzT66P3Hzt6zkw-JEfXQ82M7ZeQ2U2M4ShON6_Zr_aAlakKbwiUOGlJFTHMRBspRgCFKCbgMNentcJ0TCNz_paQ4UVGJLKQMpIApysnw"
    },
    homeImage: {
      alt: "Clinical product photography of a heavy-duty manual hydraulic patient transfer hoist crane. Powder-coated white steel framework with high-grade dual-caster locking wheels and an ergonomic comfort sling harness. Shot against a crisp bright backdrop with subtle blue reflections, highlighting medical grade precision, durability and dignified care.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMFjiWKuRALQEYhmQgQxvWJfXscssKvHERbvsTtiKpdq0l0sZQE-BA7HcmsYA9hK0b544Ms-ZtlYB2n5n-Z-UUwzr7ovVokkYVV8IXNcJoI2a4HjQ-B6LM_HoU-U3uR6jpqDak5uljKy8QwUD_Eyz3laWZgXB7YmUgfhKL8cWXW1vodxsNdinNg76X6D_dW95MYuAlXLSU1bHqspcd66k2peRYNCciXDa3ROK_eAbCbwK4mh6MFZ0"
    },
    homeTags: ["Hidráulica", "SWL 110 kg"],
    homeSummary: "Traslados seguros y cómodos con menor esfuerzo del cuidador, protegiendo la columna vertebral",
    gallery: [
      {
        alt: "Manual patient lift crane made of pristine white tubular steel with hydraulic lever and robust medical caster wheels. Clean studio setting with neutral lighting, demonstrating assistive mobility transfer hardware for home care.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQE1EGsuBgnCAwtx593rRSzTcVfIf-YHOrw3podrn6iE4W3gFg5t-S7MJhkGGF3N_44PgvPKf-BwyDlyB0EX_AYXuPkp5giwS8WrUrrtdWGKLH3QC5gqaUIop5I0L6v2FnNV6m5kdlE9COzT66P3Hzt6zkw-JEfXQ82M7ZeQ2U2M4ShON6_Zr_aAlakKbwiUOGlJFTHMRBspRgCFKCbgMNentcJ0TCNz_paQ4UVGJLKQMpIApysnw"
      },
      {
        alt: "Clinical product photography of a heavy-duty manual hydraulic patient transfer hoist crane. Powder-coated white steel framework with high-grade dual-caster locking wheels and an ergonomic comfort sling harness. Shot against a crisp bright backdrop with subtle blue reflections, highlighting medical grade precision, durability and dignified care.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMFjiWKuRALQEYhmQgQxvWJfXscssKvHERbvsTtiKpdq0l0sZQE-BA7HcmsYA9hK0b544Ms-ZtlYB2n5n-Z-UUwzr7ovVokkYVV8IXNcJoI2a4HjQ-B6LM_HoU-U3uR6jpqDak5uljKy8QwUD_Eyz3laWZgXB7YmUgfhKL8cWXW1vodxsNdinNg76X6D_dW95MYuAlXLSU1bHqspcd66k2peRYNCciXDa3ROK_eAbCbwK4mh6MFZ0"
      },
      {
        alt: "Manual hydraulic patient lifter crane in clinical white coated steel with ergonomic pump handle and adjustable base legs for bedroom transfer.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwRcUp_fD8M1rN62t87uVZ0XMTKiMCqFjAAkUigkI74mFFFmu0aHPRDdEMKQSx25ofPcMHZAI3Y1okAT4oZ79p0KXodzURlCIR9MfbAdIrdkzwhpEHWE5tSJUf6-6be6qX_Obqmo0RQ3AbKPZ6hV-2FHHpRyTOy0hggA85BHJmGMWHXflXKo10vj-beJ4KOTAOPWOLNWrXrWkt-bLi1RCqn1kYveMSp3IkzcTPjU_SZf39NtX248s"
      }
    ],
    quickSpecs: [
      {
        icon: "fitness_center",
        label: "Capacidad",
        value: "Máx. 110 kg"
      },
      {
        icon: "power_off",
        label: "Accionamiento",
        value: "Sin electricidad"
      },
      {
        icon: "verified_user",
        label: "Garantía Oficial",
        value: "1 Año Directa"
      },
      {
        icon: "local_shipping",
        label: "Despacho",
        value: "A todo Chile"
      }
    ],
    detail: {
      eyebrow: "Ingeniería y Seguridad",
      title: "Robusta, simple y siempre disponible, sin depender de la electricidad",
      points: [
        {
          icon: "health_and_safety",
          text: "Reduce el esfuerzo físico del cuidador y protege su columna en cada traslado"
        },
        {
          icon: "power_off",
          text: "Funciona sin electricidad: siempre disponible, incluso ante cortes de luz"
        }
      ],
      introPrefix: "La",
      introHighlight: "Grúa Manual de Traslado",
      intro: "facilita la movilización segura de personas con movilidad reducida o dependencia entre la cama, la silla de ruedas, el sillón o el baño. Su elevación se acciona con una palanca hidráulica suave, sin cables ni baterías",
      body: "Es una alternativa económica y confiable para el hogar, centros de rehabilitación y establecimientos de salud, con estructura robusta y fácil de maniobrar"
    },
    stepsIntro: "Secuencia simple en 5 pasos para realizar un traslado seguro, sin electricidad",
    steps: [
      {
        title: "Coloca el arnés",
        text: "Posiciona el arnés correctamente en el usuario, garantizando el soporte lumbar y bajo los muslos"
      },
      {
        title: "Posiciona la grúa",
        text: "Abre o ajusta la base para rodear la cama o asiento y engancha las cintas de seguridad en la percha"
      },
      {
        title: "Eleva con la palanca",
        text: "Acciona la palanca hidráulica con movimientos suaves para elevar al usuario de forma gradual"
      },
      {
        title: "Desplaza al destino",
        text: "Rueda la grúa con suavidad hacia la silla de ruedas, sillón reclinable o baño"
      },
      {
        title: "Desciende controladamente",
        text: "Libera el descenso de forma controlada y retira las fijaciones con total holgura"
      }
    ],
    benefits: [
      {
        icon: "power_off",
        title: "Sin electricidad",
        text: "Sistema hidráulico manual: sin cables, baterías ni dependencia de la red eléctrica"
      },
      {
        icon: "personal_injury",
        title: "Cero esfuerzo lumbar",
        text: "Reduce significativamente el esfuerzo físico del cuidador, previniendo lesiones"
      },
      {
        icon: "motion_photos_on",
        title: "Traslados suaves y seguros",
        text: "Elevación hidráulica gradual, sin tirones bruscos para el usuario"
      },
      {
        icon: "shield",
        title: "Disminuye el riesgo de caídas",
        text: "Sujeción mediante arnés que asegura al usuario durante todo el trayecto"
      },
      {
        icon: "swap_horiz",
        title: "Fácil maniobrabilidad",
        text: "Ruedas giratorias con bloqueo para desplazarse y posicionarse con precisión"
      },
      {
        icon: "savings",
        title: "Precio accesible",
        text: "La alternativa más económica del catálogo para traslados seguros"
      }
    ],
    audience: [
      {
        icon: "elderly",
        title: "Adultos mayores",
        text: "Con debilidad motriz en extremidades inferiores"
      },
      {
        icon: "accessible",
        title: "Movilidad reducida",
        text: "Personas que requieren asistencia constante para pasar de la cama a la silla"
      },
      {
        icon: "accessible_forward",
        title: "Discapacidad física",
        text: "Usuarios con patologías que impiden trasladarse por sí mismos"
      },
      {
        icon: "assist_walker",
        title: "En rehabilitación",
        text: "Etapas postoperatorias o de recuperación prolongada"
      },
      {
        icon: "transfer_within_a_station",
        title: "Dependencia parcial/total",
        text: "Pacientes encamados que necesitan transferencias diarias"
      }
    ],
    specs: [
      {
        label: "Dimensiones",
        value: "Por confirmar"
      },
      {
        label: "Peso máximo soportado",
        value: "110 kg",
        emphasis: "primary"
      },
      {
        label: "Material de construcción",
        value: "Acero estructural de grado médico"
      },
      {
        label: "Color",
        value: "Por confirmar"
      },
      {
        label: "Accionamiento",
        value: "Manual, mediante palanca hidráulica"
      },
      {
        label: "Alimentación",
        value: "No requiere electricidad"
      },
      {
        label: "Garantía",
        value: "1 año de garantía técnica directa de fábrica SillaUp",
        emphasis: "tertiary"
      },
      {
        label: "Procedencia y taller",
        value: "Fabricación chilena en Santiago (Taller y Showroom: Merced 562)"
      }
    ],
    reviews: [],
    card: {
      category: "Traslado Manual",
      summary: "Traslados confortables sin esfuerzo físico del cuidador ni requerimiento de cables o energía",
      meta: "Capacidad: 110 kg"
    },
    metaDescription: "Grúa manual SillaUp: traslados seguros de pacientes con sistema hidráulico, sin necesidad de electricidad. Fabricación chilena."
  },
  {
    slug: "elevador-multiuso",
    name: "Elevador multiuso",
    titleName: "Elevador Multiuso",
    article: "el",
    breadcrumb: "Bipedestación",
    category: "Bipedestación y Elevación",
    inStock: false,
    tagline: "Levántate sin esfuerzo desde cualquier asiento",
    summary: "Levántate suavemente desde sofás, sillas o el borde de la cama con apoyo progresivo, sin requerir la fuerza de otra persona",
    price: 390000,
    image: {
      alt: "Multipurpose electric sit-to-stand lifting mechanism integrated with cushioned support and white medical-grade frame. Designed for helping patients stand up easily from sofas, chairs and bed sides. Clean Chilean home environment with soft daylight.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnK0tAF5kF-QUMMMccvlp8wxZHIdMGZcniYun8riNy2qkB_Po4ToWcXE-d6nscNudZKANeijS_jZw0llLRe9Ma-c0gDwbY_A4UOwn8Oj2RrorJmKwP8ZAO5V_gYomcb_zE1i9IXcHCWF3Zzb_5uAfc7GOcxavr4pe2-SgpPLPPZOfz1ObCwcQTbSI8GJf9zH9btFziLBrg5Nle2AFXgS4zNE4wyhkBDnGXrUjaHQQ56HtRNySg95s"
    },
    homeImage: {
      alt: "Crisp studio product shot of a versatile portable multi-use chair lifting mechanism designed for domestic armchairs and dining seats. Clean white structural frame with cushioned support handles and non-slip rubber base. Shot in a bright minimalist room setting with soft natural illumination and calm therapeutic aesthetics.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83eXy5G2pvbM-gKmLB2qScL3pKJEN0rDHzd7ITH4tIwPBXCVQXo8wezCA37mgf8NEVIti4f7XetSfLnPb9Yt3qAVFMrNM3Rk12vR5ziZaGnbE2ZDtjIbjbhGICKEbhTX4fZNF2-nwRcffLlXMTRPid64BW4weWrMGkLLDhFNjZowUb018ToQ1WW7O9ZERFZR4wqnHko-0qG3YAR-to8RuEtcrPEfi8zA-Zc1DmvrNeCVp3BapzVg"
    },
    homeTags: ["Multisuperficie", "SWL 110 kg"],
    homeSummary: "Levántate con facilidad desde cualquier asiento o superficie sin requerir la fuerza de otra persona",
    gallery: [
      {
        alt: "Multipurpose electric sit-to-stand lifting mechanism integrated with cushioned support and white medical-grade frame. Designed for helping patients stand up easily from sofas, chairs and bed sides. Clean Chilean home environment with soft daylight.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnK0tAF5kF-QUMMMccvlp8wxZHIdMGZcniYun8riNy2qkB_Po4ToWcXE-d6nscNudZKANeijS_jZw0llLRe9Ma-c0gDwbY_A4UOwn8Oj2RrorJmKwP8ZAO5V_gYomcb_zE1i9IXcHCWF3Zzb_5uAfc7GOcxavr4pe2-SgpPLPPZOfz1ObCwcQTbSI8GJf9zH9btFziLBrg5Nle2AFXgS4zNE4wyhkBDnGXrUjaHQQ56HtRNySg95s"
      },
      {
        alt: "Crisp studio product shot of a versatile portable multi-use chair lifting mechanism designed for domestic armchairs and dining seats. Clean white structural frame with cushioned support handles and non-slip rubber base. Shot in a bright minimalist room setting with soft natural illumination and calm therapeutic aesthetics.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC83eXy5G2pvbM-gKmLB2qScL3pKJEN0rDHzd7ITH4tIwPBXCVQXo8wezCA37mgf8NEVIti4f7XetSfLnPb9Yt3qAVFMrNM3Rk12vR5ziZaGnbE2ZDtjIbjbhGICKEbhTX4fZNF2-nwRcffLlXMTRPid64BW4weWrMGkLLDhFNjZowUb018ToQ1WW7O9ZERFZR4wqnHko-0qG3YAR-to8RuEtcrPEfi8zA-Zc1DmvrNeCVp3BapzVg"
      }
    ],
    quickSpecs: [
      {
        icon: "fitness_center",
        label: "Capacidad",
        value: "Por confirmar"
      },
      {
        icon: "bolt",
        label: "Accionamiento",
        value: "Eléctrico"
      },
      {
        icon: "verified_user",
        label: "Garantía Oficial",
        value: "1 Año Directa"
      },
      {
        icon: "local_shipping",
        label: "Despacho",
        value: "A todo Chile"
      }
    ],
    detail: {
      eyebrow: "Ingeniería y Seguridad",
      title: "Recupera la independencia para ponerte de pie",
      points: [
        {
          icon: "health_and_safety",
          text: "Apoyo progresivo que reduce el riesgo de caídas al incorporarse"
        },
        {
          icon: "weekend",
          text: "Se adapta a sofás, sillas y otras superficies del hogar"
        }
      ],
      introPrefix: "El",
      introHighlight: "Elevador Multiuso",
      intro: "asiste eléctricamente a la persona para ponerse de pie desde distintos asientos y superficies, acompañando el movimiento de forma suave y controlada",
      body: "Está pensado para quienes tienen poca fuerza en las piernas y quieren levantarse del living, el comedor o la silla de trabajo sin depender de otra persona, reduciendo además el esfuerzo de quien asiste"
    },
    stepsIntro: "Secuencia simple en 5 pasos para ponerse de pie con seguridad y sin esfuerzo",
    steps: [
      {
        title: "Ubica el elevador",
        text: "Posiciónalo sobre el asiento o superficie que usará la persona"
      },
      {
        title: "Siéntate cómodamente",
        text: "La persona se sienta sobre el equipo con los pies bien apoyados en el suelo"
      },
      {
        title: "Eleva con el control",
        text: "Con el control, el equipo eleva gradualmente para acompañar el movimiento"
      },
      {
        title: "Ponte de pie",
        text: "La persona termina de incorporarse con estabilidad y sin forzar las piernas"
      },
      {
        title: "Desciende al sentarte",
        text: "Al volver a sentarse, el equipo acompaña el descenso de forma suave"
      }
    ],
    benefits: [
      {
        icon: "settings_remote",
        title: "Elevación con un botón",
        text: "Accionamiento eléctrico simple, sin esfuerzo de brazos ni piernas"
      },
      {
        icon: "personal_injury",
        title: "Menos esfuerzo para todos",
        text: "Reduce la fuerza necesaria para levantarse y el esfuerzo físico del cuidador"
      },
      {
        icon: "weekend",
        title: "Multisuperficie",
        text: "Úsalo en sofás, sillas y otras superficies del hogar"
      },
      {
        icon: "shield",
        title: "Disminuye el riesgo de caídas",
        text: "Movimiento gradual y estable al incorporarse"
      },
      {
        icon: "accessibility_new",
        title: "Más autonomía",
        text: "Permite levantarse sin depender de otra persona"
      },
      {
        icon: "domain",
        title: "Hogar y Clínicas",
        text: "Apto para el hogar y para centros de salud o rehabilitación"
      }
    ],
    audience: [
      {
        icon: "elderly",
        title: "Adultos mayores",
        text: "Con pérdida de fuerza muscular en las piernas"
      },
      {
        icon: "accessible",
        title: "Movilidad reducida",
        text: "Personas que necesitan ayuda para pararse desde un asiento"
      },
      {
        icon: "healing",
        title: "Dolor articular",
        text: "Usuarios con dolor o desgaste en rodillas y cadera"
      },
      {
        icon: "assist_walker",
        title: "En rehabilitación",
        text: "Recuperación tras cirugías o periodos de reposo prolongado"
      },
      {
        icon: "volunteer_activism",
        title: "Cuidadores",
        text: "Familias que buscan reducir el esfuerzo de levantar a su ser querido"
      }
    ],
    specs: [
      {
        label: "Dimensiones",
        value: "Por confirmar"
      },
      {
        label: "Peso máximo soportado",
        value: "Por confirmar",
        emphasis: "primary"
      },
      {
        label: "Material de construcción",
        value: "Acero estructural de grado médico"
      },
      {
        label: "Color",
        value: "Por confirmar"
      },
      {
        label: "Accionamiento",
        value: "Eléctrico, con control de fácil uso"
      },
      {
        label: "Alimentación",
        value: "Batería recargable (autonomía por confirmar)"
      },
      {
        label: "Garantía",
        value: "1 año de garantía técnica directa de fábrica SillaUp",
        emphasis: "tertiary"
      },
      {
        label: "Procedencia y taller",
        value: "Fabricación chilena en Santiago (Taller y Showroom: Merced 562)"
      }
    ],
    reviews: [],
    card: {
      category: "Bipedestación",
      summary: "Levántate suavemente y sin esfuerzo desde cualquier sofá, silla o cama con apoyo progresivo",
      meta: "Accionamiento eléctrico"
    },
    metaDescription: "Elevador multiuso SillaUp: ponte de pie sin esfuerzo desde sofás, sillas o la cama con asistencia eléctrica. Fabricación chilena."
  },
  {
    slug: "elevador-de-cama",
    name: "Elevador de cama",
    titleName: "Elevador de Cama",
    article: "el",
    breadcrumb: "Dormitorio",
    category: "Cuidado en Cama",
    inStock: false,
    tagline: "Convierte tu cama en una cama ajustable",
    summary: "Convierte tu cama en una cama ajustable de forma sencilla para incorporarte, comer y descansar mejor, con respaldo regulable a control remoto",
    price: 390000,
    image: {
      alt: "Electric adjustable bed backrest lifter mechanism made with clean white steel frame and padded mattress surface. Placed over a modern bedroom bed in a warm and dignified home healthcare environment with morning sunlight.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1xwEn0J2epefI5lcIi41M3fvYLi6xycur2aRCEQ2bHVJDS2f5Dn1RQRv5rSF-UAvpEUj9e95YMkEFt_uY-S0H0wwyjd3XDRZZZ04UgNlU6zVu5CoP1VFoUYJnB7u-F1hFsBy9CWM4cWfVPiA7303-SjT9OjYmyf1fB2JG2qZoNOYKSQF243eKVEBTbvQ9b1V7sRb3C89O0IUuV1V4UqGsVjqzpuc_bFKrwfW7R4AoAkqPO-5JDpQ"
    },
    homeImage: {
      alt: "High-end catalog photography of an adjustable backrest and bed lifter frame installed seamlessly on a residential mattress. Powder-coated steel structure with smooth angle adjustments and padded head support. Pristine white studio lighting with delicate blue undertones, portraying modern domestic elder care technology.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCogt2eYljZ3d-EHas-E0n-hMaARqzggVLCksVxd7RGxGZbNmwDBhe3d2K6qZ6eBD3DC99KtvmhE2hkBn9vefS2ZgTt_ReWm5uamzs-BOHeKYdzqiVt_D8O6vo2A8KJxMpbPY0vDWafwl9mn6nkJQMjnAZFASrYBE-3QnDolmGk8MEuwTZxglJY0j8iRqgtAfY1J0PDy0pmLsKATaGKxdWU2Rg_6F0UTSMkwQA_AQdufHXICiaqxVo"
    },
    homeTags: ["Dormitorio", "Graduable"],
    homeSummary: "Convierte tu cama en una cama ajustable de forma sencilla para incorporarte, comer y descansar mejor",
    gallery: [
      {
        alt: "Electric adjustable bed backrest lifter mechanism made with clean white steel frame and padded mattress surface. Placed over a modern bedroom bed in a warm and dignified home healthcare environment with morning sunlight.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1xwEn0J2epefI5lcIi41M3fvYLi6xycur2aRCEQ2bHVJDS2f5Dn1RQRv5rSF-UAvpEUj9e95YMkEFt_uY-S0H0wwyjd3XDRZZZ04UgNlU6zVu5CoP1VFoUYJnB7u-F1hFsBy9CWM4cWfVPiA7303-SjT9OjYmyf1fB2JG2qZoNOYKSQF243eKVEBTbvQ9b1V7sRb3C89O0IUuV1V4UqGsVjqzpuc_bFKrwfW7R4AoAkqPO-5JDpQ"
      },
      {
        alt: "High-end catalog photography of an adjustable backrest and bed lifter frame installed seamlessly on a residential mattress. Powder-coated steel structure with smooth angle adjustments and padded head support. Pristine white studio lighting with delicate blue undertones, portraying modern domestic elder care technology.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCogt2eYljZ3d-EHas-E0n-hMaARqzggVLCksVxd7RGxGZbNmwDBhe3d2K6qZ6eBD3DC99KtvmhE2hkBn9vefS2ZgTt_ReWm5uamzs-BOHeKYdzqiVt_D8O6vo2A8KJxMpbPY0vDWafwl9mn6nkJQMjnAZFASrYBE-3QnDolmGk8MEuwTZxglJY0j8iRqgtAfY1J0PDy0pmLsKATaGKxdWU2Rg_6F0UTSMkwQA_AQdufHXICiaqxVo"
      },
      {
        alt: "Electric bed backrest riser support mattress system placed on a domestic bed, showing motorized elevation for reading and care.",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4w_NPU8rBUY_-lnUSA5_Xdae1aD1EkRSB8JmYaGTi67YdRMNISZeiW_bEeAYYjtigJRxv6U1TJNLtpyYXYQ5QtbFoAkmlliB1j2tMaDZpK-xFiv0xzc1Gwrltz5Hhf5712fe6ozS8L1AXgsn9Q6mzqyqdXzketUcwiBqhOTjsQQtov6EykXPXv7ncNJsFdewzsQtqDx9hVqVIkmRITVGQXb0MV0w2RC8jeadT4XsaLa1C0MzWIzg"
      }
    ],
    quickSpecs: [
      {
        icon: "airline_seat_flat_angled",
        label: "Inclinación",
        value: "Por confirmar"
      },
      {
        icon: "bolt",
        label: "Accionamiento",
        value: "Eléctrico"
      },
      {
        icon: "verified_user",
        label: "Garantía Oficial",
        value: "1 Año Directa"
      },
      {
        icon: "local_shipping",
        label: "Despacho",
        value: "A todo Chile"
      }
    ],
    detail: {
      eyebrow: "Ingeniería y Seguridad",
      title: "Más comodidad y menos esfuerzo al incorporarse en la cama",
      points: [
        {
          icon: "health_and_safety",
          text: "Facilita sentarse erguido al despertar, comer o tomar medicamentos"
        },
        {
          icon: "bed",
          text: "Se instala sobre tu cama actual, sin necesidad de comprar una cama clínica"
        }
      ],
      introPrefix: "El",
      introHighlight: "Elevador de Cama",
      intro: "eleva el respaldo de forma eléctrica y gradual, permitiendo a la persona incorporarse en la cama sin esfuerzo y sin depender de la fuerza de un cuidador",
      body: "Es ideal para personas que pasan muchas horas en cama, en recuperación o con movilidad reducida, y facilita actividades como comer, leer, conversar o recibir cuidados con una postura más cómoda"
    },
    stepsIntro: "Secuencia simple en 5 pasos para incorporarse en la cama con comodidad",
    steps: [
      {
        title: "Instala sobre la cama",
        text: "Ubica el elevador sobre tu cama siguiendo la guía de instalación"
      },
      {
        title: "Recuéstate cómodamente",
        text: "La persona se acomoda en la cama con la espalda sobre el respaldo"
      },
      {
        title: "Ajusta con el control",
        text: "Eleva el respaldo gradualmente hasta la posición deseada"
      },
      {
        title: "Come, lee o descansa",
        text: "Mantén una postura cómoda para alimentarte, conversar o recibir cuidados"
      },
      {
        title: "Vuelve a la posición plana",
        text: "Desciende el respaldo suavemente para dormir o descansar"
      }
    ],
    benefits: [
      {
        icon: "settings_remote",
        title: "Ajuste con control remoto",
        text: "Regula la inclinación del respaldo con solo presionar un botón"
      },
      {
        icon: "personal_injury",
        title: "Menos esfuerzo para el cuidador",
        text: "Evita levantar a la persona manualmente para sentarla en la cama"
      },
      {
        icon: "bed",
        title: "Usa tu propia cama",
        text: "Convierte tu cama actual en ajustable, sin cambiar de cama"
      },
      {
        icon: "restaurant",
        title: "Mejor postura para comer",
        text: "Facilita alimentarse y tomar medicamentos en una posición segura"
      },
      {
        icon: "airline_seat_recline_extra",
        title: "Descanso confortable",
        text: "Encuentra la inclinación más cómoda para leer, conversar o descansar"
      },
      {
        icon: "domain",
        title: "Hogar y Clínicas",
        text: "Apto para dormitorios residenciales y centros de cuidado"
      }
    ],
    audience: [
      {
        icon: "elderly",
        title: "Adultos mayores",
        text: "Con dificultad para incorporarse en la cama"
      },
      {
        icon: "hotel",
        title: "Pacientes en cama",
        text: "Personas que pasan gran parte del día acostadas"
      },
      {
        icon: "assist_walker",
        title: "En recuperación",
        text: "Postoperatorios o convalecencias que requieren reposo"
      },
      {
        icon: "accessible",
        title: "Movilidad reducida",
        text: "Usuarios que necesitan ayuda para cambiar de postura"
      },
      {
        icon: "volunteer_activism",
        title: "Cuidadores",
        text: "Familias que buscan reducir el esfuerzo de incorporar a su ser querido"
      }
    ],
    specs: [
      {
        label: "Dimensiones",
        value: "Por confirmar"
      },
      {
        label: "Ángulo de inclinación",
        value: "Por confirmar",
        emphasis: "primary"
      },
      {
        label: "Material de construcción",
        value: "Acero estructural de grado médico"
      },
      {
        label: "Color",
        value: "Por confirmar"
      },
      {
        label: "Accionamiento",
        value: "Eléctrico, con control remoto"
      },
      {
        label: "Alimentación",
        value: "Batería recargable (autonomía por confirmar)"
      },
      {
        label: "Garantía",
        value: "1 año de garantía técnica directa de fábrica SillaUp",
        emphasis: "tertiary"
      },
      {
        label: "Procedencia y taller",
        value: "Fabricación chilena en Santiago (Taller y Showroom: Merced 562)"
      }
    ],
    reviews: [],
    card: {
      category: "Cuidado en Cama",
      summary: "Convierte tu cama en ajustable clínica con respaldo ergonómico de 0° a 75° a control remoto",
      meta: "Respaldo graduable"
    },
    metaDescription: "Elevador de cama SillaUp: convierte tu cama en ajustable con respaldo eléctrico a control remoto. Fabricación chilena."
  }
];

export const productHref = (slug: string) => `/productos/${slug}`;

export function findProduct(list: Product[], slug: string): Product {
  const product = list.find((p) => p.slug === slug);
  if (!product) throw new Error(`Producto desconocido: ${slug}`);
  return product;
}

export const getProduct = (slug: string) => findProduct(products, slug);

const clp = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

/** $390.000 */
export const formatPrice = (value: number) => clp.format(value).replace(/\s/g, "");

/** Whether an offer applies on the given day (its end date is inclusive, Chile time) */
export function isOfferActive(offer: Offer, now: Date): boolean {
  if (offer.discountPercent <= 0) return false;
  if (!offer.endsAt) return true;
  return now.toLocaleDateString("en-CA", { timeZone: "America/Santiago" }) <= offer.endsAt;
}

/** Price to pay after the offer, rounded to the nearest $10 */
export function salePrice(product: Product): number {
  if (!product.offer) return product.price;
  return Math.round((product.price * (100 - product.offer.discountPercent)) / 100 / 10) * 10;
}
