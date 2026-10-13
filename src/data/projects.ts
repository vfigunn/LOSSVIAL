import type { ServiceSlug } from "./services";

export interface Project {
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  highlights: string[];
  services: ServiceSlug[];
}

export const PROJECTS: Project[] = [
  {
    title: "Nivelación y Relleno de Cancha - Barrio Obrero",
    location: "Barrio Obrero, Gualeguaychú",
    year: "2023",
    category: "Presupuesto Participativo",
    description: "Proyecto de nivelación y relleno de cancha deportiva en el marco del Presupuesto Participativo municipal. Trabajo integral que incluyó movimiento de suelos, nivelación y compactación.",
    highlights: [
      "Área de trabajo: 2,500 m²",
      "Volumen de relleno: 800 m³",
      "Beneficiarios: 150 familias",
      "Duración: 3 semanas",
    ],
    services: ["movimiento-de-suelos-gualeguaychu", "venta-de-tierra-y-relleno-gualeguaychu"],
  },
  {
    title: "Demolición de Tanque de Agua y Base de Hormigón – Planta Hermann",
    location: "Gualeguaychú, Entre Ríos",
    year: "2021",
    category: "Demoliciones Industriales",
    description: "Proyecto de demolición controlada de estructuras de hormigón y tanque elevado de 17 m de altura. Se utilizaron técnicas de impacto y excavación segura.",
    highlights: [
      "Altura del tanque: 17 m",
      "Volumen demolido: 450 m³",
      "Material reciclado: 60 %",
      "Duración: 3 semanas",
    ],
    services: ["demoliciones-gualeguaychu"],
  },
  {
    title: "Obras de Infraestructura Urbana Municipal",
    location: "Varios sectores de Gualeguaychú",
    year: "2020-2024",
    category: "Colaboración Municipal",
    description: "Colaboración continua con el Municipio de Gualeguaychú en diversas obras de infraestructura urbana, incluyendo mantenimiento vial y mejoras en espacios públicos.",
    highlights: [
      "Múltiples sectores de la ciudad",
      "Mantenimiento vial preventivo",
      "Mejoras en espacios públicos",
      "Colaboración a largo plazo",
    ],
    services: ["obras-civiles-gualeguaychu", "alquiler-de-maquinaria-gualeguaychu"],
  },
  {
    title: "Terraplenes y Laguna Sanitaria – Granja Porcina Agropecuaria Sur",
    location: "Zona Rural, Departamento Gualeguaychú",
    year: "2023-2024",
    category: "Desarrollo Agroindustrial",
    description: "Construcción de terraplenes, nivelación y laguna sanitaria para sistema de tratamiento de efluentes. Proyecto realizado junto a la firma Agropecuaria Sur.",
    highlights: [
      "Terraplenes de 3 m de altura",
      "Movimiento de suelo: 3,800 m³",
      "Obra hidráulica de retención",
      "Duración: 6 semanas",
    ],
    services: ["movimiento-de-suelos-gualeguaychu", "obras-civiles-gualeguaychu"],
  },
  {
    title: "Relleno de Planta Potabilizadora",
    location: "Zona Norte, Gualeguaychú",
    year: "2024",
    category: "Infraestructura Urbana Municipal",
    description: "Trabajo de movimiento y nivelación de suelos para el relleno de la nueva planta potabilizadora. Incluyó tareas de compactación, estabilización y perfilado de superficie.",
    highlights: [
      "Área intervenida: 4,000 m²",
      "Volumen de relleno: 1,500 m³",
      "Maquinaria: motoniveladora, compactador y camiones volcadores",
      "Duración: 4 semanas",
    ],
    services: [
      "movimiento-de-suelos-gualeguaychu",
      "obras-civiles-gualeguaychu",
      "venta-de-tierra-y-relleno-gualeguaychu",
      "alquiler-de-maquinaria-gualeguaychu",
    ],
  },
  {
    title: "Desmonte y Terraplenamiento de 40,000 m² – Emprendimiento Rural",
    location: "Zona Oeste, Gualeguaychú",
    year: "2024",
    category: "Movimiento de Suelos",
    description: "Obra integral de desmonte, limpieza, nivelación y construcción de terraplén para futura instalación agroindustrial.",
    highlights: [
      "Superficie total: 40,000 m²",
      "Movimiento de tierra: 7,000 m³",
      "Equipos utilizados: excavadoras, topadoras D6, camiones 6×4",
      "Duración: 8 semanas",
    ],
    services: ["movimiento-de-suelos-gualeguaychu", "alquiler-de-maquinaria-gualeguaychu"],
  },
];
