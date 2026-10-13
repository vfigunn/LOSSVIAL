// Datos de la empresa: única fuente para la UI, el SEO y el JSON-LD.
// Mantenerlos idénticos a los del Perfil de Empresa de Google (NAP).

export const SITE_URL = "https://www.lossvial.com.ar";

export const BUSINESS = {
  name: "Loss Vial S.A.",
  shortName: "Loss Vial",
  foundingYear: 1994,
  saYear: 2023,
  phoneDisplay: "(03446) 63-2609",
  phoneTel: "+5493446632609",
  phoneSchema: "+54 9 3446 63-2609",
  whatsappNumber: "5493446632609",
  email: "lossvial@gmail.com",
  address: {
    street: "Blvd. Antonio Daneri 919",
    city: "Gualeguaychú",
    region: "Entre Ríos",
    postalCode: "E2820",
    country: "AR",
    countryName: "Argentina",
  },
  geo: { lat: -32.99507, lng: -58.54087 },
  mapsUrl: "https://maps.google.com/?q=Blvd.+Antonio+Daneri+919,+Gualeguaychú,+Entre+Ríos",
  hours: {
    label: "Lunes a Viernes",
    short: "Lun-Vie 9:00-13:00",
    range: "9:00 - 13:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "13:00",
  },
  social: {
    instagram: "https://www.instagram.com/lossvial",
    youtube: "https://www.youtube.com/@LossVial",
    linkedin: "https://www.linkedin.com/in/loss-vial-2baa0618",
  },
} as const;

export const SERVICE_AREAS = [
  "Gualeguaychú",
  "Pueblo General Belgrano",
  "Larroque",
  "Urdinarrain",
  "Gilbert",
  "Aldea San Antonio",
  "Ceibas",
] as const;
