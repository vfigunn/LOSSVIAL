import { Building2, Construction, Shovel, Truck, Wrench, type LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "movimiento-de-suelos-gualeguaychu"
  | "obras-civiles-gualeguaychu"
  | "demoliciones-gualeguaychu"
  | "alquiler-de-maquinaria-gualeguaychu"
  | "venta-de-tierra-y-relleno-gualeguaychu";

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  icon: LucideIcon;
  /** Nombre comercial del servicio (cards, schema). */
  name: string;
  /** Nombre corto para menús, footer y el select del formulario. */
  shortName: string;
  /** Cómo se nombra el servicio dentro del mensaje de WhatsApp. */
  waName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Resumen corto para la card de la home. */
  summary: string;
  image: { src: string; width: number; height: number; alt: string };
  features: string[];
  sections: { heading: string; body: string }[];
  faqs: Faq[];
}

export const SERVICES: Service[] = [
  {
    slug: "movimiento-de-suelos-gualeguaychu",
    icon: Truck,
    name: "Movimiento de Suelos y Excavaciones",
    shortName: "Movimiento de suelos",
    waName: "movimiento de suelos",
    metaTitle: "Movimiento de Suelos en Gualeguaychú | Excavaciones | Loss Vial S.A.",
    metaDescription:
      "Movimiento de suelos en Gualeguaychú y alrededores: excavaciones, nivelación, relleno y compactación, desmonte, zanjeo, lagunas y tajamares. Pida su presupuesto por WhatsApp.",
    h1: "Movimiento de suelos en Gualeguaychú",
    intro:
      "En Loss Vial S.A. realizamos movimiento de suelos y excavaciones en Gualeguaychú y la zona desde 1994. Preparamos terrenos para viviendas, loteos, galpones, obras públicas y emprendimientos rurales, con maquinaria Caterpillar y personal con más de 30 años de experiencia.",
    summary:
      "Excavaciones, nivelación, relleno y compactación, desmonte, zanjeo, lagunas y tajamares con maquinaria de última generación.",
    image: {
      src: "/assets/movimiento-suelos.webp",
      width: 960,
      height: 720,
      alt: "Movimiento de suelos y excavación de laguna realizada por Loss Vial S.A. en Gualeguaychú",
    },
    features: [
      "Excavaciones y preparación de fundaciones",
      "Nivelación de terrenos",
      "Relleno y compactación",
      "Limpieza de terrenos y desmonte",
      "Zanjeo, canales y desagües",
      "Lagunas, tajamares y terraplenes",
    ],
    sections: [
      {
        heading: "Excavaciones y preparación de fundaciones",
        body: "Realizamos excavaciones para fundaciones, sótanos, cisternas, piletas y redes de servicios. Trabajamos con excavadoras de distinto porte para adaptarnos tanto a lotes urbanos como a obras de gran volumen, cuidando los niveles que pide el proyecto.",
      },
      {
        heading: "Nivelación, relleno y compactación de terrenos",
        body: "Elevamos y nivelamos terrenos bajos o anegables para que queden listos para construir. Aportamos la tierra necesaria, la distribuimos con motoniveladora y la compactamos por capas para lograr una base firme y estable.",
      },
      {
        heading: "Limpieza de terrenos y desmonte",
        body: "Limpiamos lotes, quintas y campos: desmonte, destronque y retiro de vegetación y residuos, para preparar el terreno para un loteo, una obra o un nuevo uso productivo.",
      },
      {
        heading: "Zanjeo, canales y desagües",
        body: "Abrimos zanjas, canales y desagües para el escurrimiento del agua de lluvia en zonas urbanas y rurales, y realizamos el zanjeo necesario para el tendido de cañerías y servicios.",
      },
      {
        heading: "Lagunas, tajamares y terraplenes rurales",
        body: "Construimos lagunas, tajamares, represas y terraplenes para establecimientos agropecuarios e industriales del departamento Gualeguaychú, como la laguna sanitaria y los terraplenes de 3 m que realizamos para Agropecuaria Sur.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un movimiento de suelos en Gualeguaychú?",
        answer:
          "Depende de la superficie, el volumen de tierra a mover, el tipo de suelo y el acceso al terreno. Envíenos por WhatsApp la ubicación, las medidas aproximadas y algunas fotos, y le preparamos un presupuesto sin compromiso.",
      },
      {
        question: "¿Trabajan en terrenos particulares o solo en obras grandes?",
        answer:
          "En ambos. Hacemos desde la nivelación de un lote para construir una vivienda hasta obras de varias hectáreas, como el desmonte y terraplenamiento de 40.000 m² que realizamos en la zona oeste de Gualeguaychú.",
      },
      {
        question: "¿Hacen trabajos en campos y zonas rurales?",
        answer:
          "Sí. Construimos lagunas, tajamares, terraplenes y canales, y realizamos desmontes y zanjeo en establecimientos rurales de Gualeguaychú y alrededores.",
      },
      {
        question: "¿También proveen la tierra para el relleno?",
        answer:
          "Sí. Podemos proveer y transportar la tierra para el relleno con camiones volcadores, y luego distribuirla, nivelarla y compactarla.",
      },
    ],
  },
  {
    slug: "obras-civiles-gualeguaychu",
    icon: Construction,
    name: "Obras Civiles y Viales",
    shortName: "Obras civiles y viales",
    waName: "una obra civil o vial",
    metaTitle: "Obras Civiles y Viales en Gualeguaychú | Loss Vial S.A.",
    metaDescription:
      "Obras civiles y viales en Gualeguaychú: apertura de calles, cordón cuneta, badenes, desagües pluviales, alcantarillas y mantenimiento vial. Más de 30 años de experiencia.",
    h1: "Obras civiles y viales en Gualeguaychú",
    intro:
      "Ejecutamos obras civiles y viales para municipios, empresas, loteos y particulares en Gualeguaychú y la región. Desde 2020 colaboramos con el Municipio de Gualeguaychú en obras de infraestructura urbana, mantenimiento vial y mejoras en espacios públicos.",
    summary:
      "Apertura de calles, cordón cuneta, badenes, desagües pluviales y mantenimiento vial para municipios, loteos y empresas.",
    image: {
      src: "/assets/obras-viales.webp",
      width: 960,
      height: 720,
      alt: "Obra vial de apertura de calle y cordón cuneta en Gualeguaychú, Entre Ríos",
    },
    features: [
      "Apertura de calles",
      "Cordón cuneta",
      "Construcción de badenes",
      "Desagües pluviales y alcantarillas",
      "Mantenimiento vial",
      "Señalización urbana",
    ],
    sections: [
      {
        heading: "Apertura y mantenimiento de calles",
        body: "Abrimos calles en loteos y barrios: limpieza, movimiento de suelos, perfilado con motoniveladora y compactación. También realizamos el mantenimiento de calles y caminos.",
      },
      {
        heading: "Cordón cuneta y badenes",
        body: "Ejecutamos cordón cuneta y badenes para ordenar el escurrimiento del agua y mejorar la transitabilidad de las calles, incluyendo la preparación previa del terreno.",
      },
      {
        heading: "Desagües pluviales, zanjas y alcantarillas",
        body: "Construimos desagües pluviales, zanjas y alcantarillas para evitar anegamientos en zonas urbanas, loteos y caminos rurales.",
      },
      {
        heading: "Infraestructura urbana y obras públicas",
        body: "Trabajamos junto al Municipio de Gualeguaychú en obras de infraestructura urbana y espacios públicos, como el relleno de la nueva planta potabilizadora y la nivelación de la cancha del Barrio Obrero.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajan con municipios, empresas y particulares?",
        answer:
          "Sí. Colaboramos de forma continua con el Municipio de Gualeguaychú y también trabajamos para empresas, desarrolladores de loteos y particulares.",
      },
      {
        question: "¿Pueden abrir las calles de un loteo?",
        answer:
          "Sí. Realizamos la apertura de calles en loteos y barrios: limpieza, movimiento de suelos, perfilado y compactación, además de desagües y cordón cuneta si el proyecto lo requiere.",
      },
      {
        question: "¿Cómo pido un presupuesto para una obra civil o vial?",
        answer:
          "Escríbanos por WhatsApp con la ubicación, una descripción del trabajo y, si los tiene, planos o fotos. Con esos datos preparamos un presupuesto sin compromiso.",
      },
    ],
  },
  {
    slug: "demoliciones-gualeguaychu",
    icon: Building2,
    name: "Demoliciones Civiles Urbanas",
    shortName: "Demoliciones",
    waName: "una demolición",
    metaTitle: "Demoliciones en Gualeguaychú | Retiro de Escombros | Loss Vial S.A.",
    metaDescription:
      "Demoliciones seguras y controladas en Gualeguaychú: viviendas, galpones, estructuras de hormigón y tanques. Retiro de escombros y limpieza del terreno. Pida su presupuesto.",
    h1: "Demoliciones en Gualeguaychú",
    intro:
      "Realizamos demoliciones civiles seguras y controladas en zonas urbanas y rurales de Gualeguaychú. Nos encargamos de todo el proceso: demolición, retiro de escombros y limpieza final, para que el terreno quede listo para construir.",
    summary:
      "Demoliciones seguras y controladas de viviendas, galpones y estructuras de hormigón, con retiro de escombros incluido.",
    image: {
      src: "/assets/demoliciones.webp",
      width: 960,
      height: 714,
      alt: "Excavadora de Loss Vial S.A. realizando una demolición en Gualeguaychú",
    },
    features: [
      "Demolición de estructuras",
      "Retiro de escombros",
      "Medidas de seguridad",
      "Permisos municipales",
      "Limpieza post-demolición",
    ],
    sections: [
      {
        heading: "Demolición de viviendas, galpones y estructuras",
        body: "Demolemos casas, galpones, muros y construcciones en desuso, en lotes urbanos y en el campo, trabajando con excavadora para hacerlo de forma rápida y controlada.",
      },
      {
        heading: "Demoliciones de hormigón e industriales",
        body: "Tenemos experiencia en estructuras de hormigón de gran porte, como la demolición del tanque de agua elevado de 17 m y su base en la Planta Hermann, con 450 m³ de material demolido.",
      },
      {
        heading: "Retiro de escombros y limpieza del terreno",
        body: "Cargamos y retiramos los escombros con camiones volcadores y dejamos el terreno limpio y nivelado. Siempre que es posible, recuperamos el material para su reutilización.",
      },
      {
        heading: "Seguridad y permisos municipales",
        body: "Planificamos cada demolición con las medidas de seguridad necesarias para vecinos, transeúntes y construcciones linderas, y le orientamos en la gestión de los permisos municipales.",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta demoler una casa en Gualeguaychú?",
        answer:
          "Depende de la superficie, los materiales (mampostería, hormigón, techos), el acceso y el volumen de escombros. Envíenos fotos y la ubicación por WhatsApp y le preparamos un presupuesto sin compromiso.",
      },
      {
        question: "¿Se encargan de retirar los escombros?",
        answer:
          "Sí. El retiro de escombros y la limpieza posterior del terreno forman parte de nuestro servicio de demolición.",
      },
      {
        question: "¿Necesito un permiso municipal para demoler?",
        answer:
          "En general las demoliciones requieren autorización municipal. Antes de empezar le orientamos sobre los permisos necesarios para su caso.",
      },
    ],
  },
  {
    slug: "alquiler-de-maquinaria-gualeguaychu",
    icon: Wrench,
    name: "Alquiler de Maquinaria y Transporte",
    shortName: "Alquiler de maquinaria",
    waName: "alquiler de maquinaria",
    metaTitle: "Alquiler de Maquinaria en Gualeguaychú | Excavadoras | Loss Vial S.A.",
    metaDescription:
      "Alquiler de maquinaria vial con operador en Gualeguaychú: excavadoras, motoniveladora, minicargadora Caterpillar y camiones volcadores para transporte de materiales.",
    h1: "Alquiler de maquinaria en Gualeguaychú",
    intro:
      "Alquilamos maquinaria vial y de movimiento de suelos con operadores, para obras de cualquier escala en Gualeguaychú y la zona. Nuestra flota Caterpillar y los camiones para transporte de materiales están disponibles para su proyecto.",
    summary:
      "Excavadoras, motoniveladora y minicargadora Caterpillar con operador, más camiones para transporte de materiales.",
    image: {
      src: "/assets/alquiler-maquinaria.webp",
      width: 526,
      height: 395,
      alt: "Excavadora CAT 320 cargando un camión volcador, alquiler de maquinaria en Gualeguaychú",
    },
    features: [
      "Alquiler de excavadoras",
      "Motoniveladora y minicargadora",
      "Transporte de materiales",
      "Operadores certificados",
      "Mantenimiento incluido",
      "Disponibilidad 24/7",
    ],
    sections: [
      {
        heading: "Alquiler con operador",
        body: "Todas las máquinas se alquilan con operadores certificados y el mantenimiento incluido, así usted no tiene que preocuparse por el manejo ni las reparaciones: solo por el avance de su obra.",
      },
      {
        heading: "Transporte de materiales",
        body: "Con nuestros camiones volcadores transportamos tierra, materiales de construcción y escombros dentro de Gualeguaychú y hacia las localidades cercanas.",
      },
    ],
    faqs: [
      {
        question: "¿Alquilan las máquinas con operador?",
        answer:
          "Sí. Trabajamos con operadores certificados y el mantenimiento de las máquinas está incluido.",
      },
      {
        question: "¿Qué máquinas tienen disponibles?",
        answer:
          "Motoniveladora CAT 120, minicargadora CAT 126, excavadora hidráulica CAT 24063 y excavadora CAT 320, además de camiones volcadores para transporte.",
      },
      {
        question: "¿Cómo consulto la disponibilidad?",
        answer:
          "Escríbanos por WhatsApp indicando el tipo de trabajo, la ubicación y las fechas. Le confirmamos la disponibilidad y le enviamos un presupuesto.",
      },
    ],
  },
  {
    slug: "venta-de-tierra-y-relleno-gualeguaychu",
    icon: Shovel,
    name: "Venta de Tierra y Relleno",
    shortName: "Venta de tierra y relleno",
    waName: "tierra para relleno",
    metaTitle: "Venta de Tierra para Relleno en Gualeguaychú | Loss Vial S.A.",
    metaDescription:
      "Venta y transporte de tierra para relleno en Gualeguaychú y alrededores. Entrega con camión volcador, relleno, nivelación y compactación de terrenos y retiro de escombros.",
    h1: "Venta de tierra y relleno en Gualeguaychú",
    intro:
      "Proveemos y transportamos tierra para relleno de terrenos en Gualeguaychú y localidades cercanas. Si lo necesita, también hacemos el desparramo, la nivelación y la compactación, para que el terreno quede listo para construir.",
    summary:
      "Tierra para relleno entregada con camión volcador, con desparramo, nivelación y compactación si lo necesita.",
    image: {
      src: "/assets/alquiler-maquinaria.webp",
      width: 526,
      height: 395,
      alt: "Excavadora cargando tierra para relleno en un camión volcador en Gualeguaychú",
    },
    features: [
      "Tierra para relleno",
      "Entrega con camión volcador",
      "Desparramo y nivelación",
      "Compactación",
      "Retiro de escombros",
    ],
    sections: [
      {
        heading: "Tierra para relleno de terrenos",
        body: "Proveemos tierra para elevar lotes bajos o anegables, rellenar pozos y preparar la base de viviendas, galpones, canchas y calles.",
      },
      {
        heading: "Entrega con camiones volcadores",
        body: "Llevamos la tierra hasta su terreno en Gualeguaychú y alrededores con camiones volcadores, coordinando los viajes según el volumen que necesite.",
      },
      {
        heading: "Relleno, nivelación y compactación",
        body: "Además de entregar la tierra, podemos hacer el trabajo completo: desparramo, nivelación con motoniveladora y compactación por capas, como en el relleno de 1.500 m³ de la nueva planta potabilizadora.",
      },
      {
        heading: "Retiro de escombros",
        body: "Retiramos escombros y sobrantes de obra con nuestros camiones y dejamos el lugar limpio.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántos metros cúbicos de tierra necesito para rellenar mi terreno?",
        answer:
          "Se calcula multiplicando la superficie por la altura a rellenar. Por ejemplo, un lote de 10 × 30 m que necesita subir 30 cm requiere unos 90 m³ de tierra, más un margen por la compactación. Si no está seguro, le ayudamos a calcularlo.",
      },
      {
        question: "¿Hacen el relleno completo o solo entregan la tierra?",
        answer:
          "Las dos opciones: podemos solo entregar la tierra o hacer el trabajo completo de relleno, nivelación y compactación.",
      },
      {
        question: "¿Entregan fuera de Gualeguaychú?",
        answer:
          "Sí. Trabajamos en Gualeguaychú y alrededores: Pueblo General Belgrano, Larroque, Urdinarrain, Gilbert, Aldea San Antonio y Ceibas, entre otras localidades. Consúltenos por su zona.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const servicePath = (slug: ServiceSlug) => `/${slug}`;
