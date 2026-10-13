import { BUSINESS, SERVICE_AREAS } from "./business";
import type { Faq } from "./services";

export const HOME_FAQS: Faq[] = [
  {
    question: "¿Qué servicios ofrece Loss Vial S.A.?",
    answer:
      "Movimiento de suelos y excavaciones, obras civiles y viales, demoliciones, alquiler de maquinaria con operador y venta de tierra para relleno. También realizamos zanjeo, desmonte, lagunas y tajamares.",
  },
  {
    question: "¿En qué zonas trabajan?",
    answer: `En ${SERVICE_AREAS.join(", ")} y la zona rural del departamento Gualeguaychú, Entre Ríos.`,
  },
  {
    question: "¿Cómo pido un presupuesto?",
    answer: `La forma más rápida es escribirnos por WhatsApp al ${BUSINESS.phoneDisplay} contándonos qué trabajo necesita, dónde es y, si puede, con algunas fotos. El presupuesto es sin compromiso.`,
  },
  {
    question: "¿Trabajan para particulares?",
    answer:
      "Sí. Trabajamos para particulares, empresas, establecimientos rurales y organismos públicos: desde la nivelación de un lote para construir una vivienda hasta obras de varias hectáreas.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: `${BUSINESS.hours.label} de 9:00 a 13:00 en ${BUSINESS.address.street}, ${BUSINESS.address.city}. Por WhatsApp puede escribirnos en cualquier momento.`,
  },
];
