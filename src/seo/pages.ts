import { BUSINESS, SERVICE_AREAS, SITE_URL } from "@/data/business";
import { HOME_FAQS } from "@/data/faqs";
import { SERVICES, servicePath, type Faq, type Service } from "@/data/services";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  /** Imagen a precargar (LCP). */
  preloadImage?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;
const OG_IMAGE_ALT = "Loss Vial S.A. - Movimiento de suelos y obras civiles en Gualeguaychú";
const ORG_ID = `${SITE_URL}/#organization`;

export const pageUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const areaServed = SERVICE_AREAS.map((name) => ({
  "@type": "City",
  name,
  containedInPlace: { "@type": "State", name: "Entre Ríos" },
}));

const organization = {
  "@type": "GeneralContractor",
  "@id": ORG_ID,
  name: BUSINESS.name,
  alternateName: BUSINESS.shortName,
  description:
    "Empresa familiar de Gualeguaychú con más de 30 años de experiencia en movimiento de suelos, excavaciones, obras civiles y viales, demoliciones, alquiler de maquinaria y venta de tierra para relleno.",
  url: pageUrl("/"),
  logo: `${SITE_URL}/favicon/web-app-manifest-512x512.png`,
  image: [OG_IMAGE, `${SITE_URL}/assets/movimiento-suelos.webp`, `${SITE_URL}/assets/obras-viales.webp`],
  telephone: BUSINESS.phoneSchema,
  email: BUSINESS.email,
  foundingDate: String(BUSINESS.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  hasMap: BUSINESS.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS.hours.days,
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
  ],
  areaServed,
  sameAs: Object.values(BUSINESS.social),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS.phoneSchema,
    contactType: "customer service",
    areaServed: "AR",
    availableLanguage: "es",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Loss Vial S.A.",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: pageUrl(servicePath(s.slug)) },
    })),
  },
};

const faqPage = (faqs: Faq[], path: string) => ({
  "@type": "FAQPage",
  "@id": `${pageUrl(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const HOME_META: PageMeta = {
  path: "/",
  title: "Movimiento de Suelos y Obras Civiles en Gualeguaychú | Loss Vial S.A.",
  description:
    "Movimiento de suelos, excavaciones, obras civiles, demoliciones, alquiler de maquinaria y venta de tierra en Gualeguaychú, Entre Ríos. +30 años de experiencia. Presupuesto por WhatsApp.",
  ogImage: OG_IMAGE,
  ogImageAlt: OG_IMAGE_ALT,
  preloadImage: "/assets/hero.webp",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: pageUrl("/"),
        name: BUSINESS.name,
        inLanguage: "es-AR",
        publisher: { "@id": ORG_ID },
      },
      faqPage(HOME_FAQS, "/"),
    ],
  },
};

const serviceMeta = (service: Service): PageMeta => {
  const path = servicePath(service.slug);
  const url = pageUrl(path);
  return {
    path,
    title: service.metaTitle,
    description: service.metaDescription,
    ogImage: OG_IMAGE,
    ogImageAlt: OG_IMAGE_ALT,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        organization,
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: service.name,
          serviceType: service.shortName,
          description: service.metaDescription,
          url,
          image: `${SITE_URL}${service.image.src}`,
          provider: { "@id": ORG_ID },
          areaServed,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: pageUrl("/") },
            { "@type": "ListItem", position: 2, name: service.shortName, item: url },
          ],
        },
        faqPage(service.faqs, path),
      ],
    },
  };
};

export const SERVICE_METAS: PageMeta[] = SERVICES.map(serviceMeta);

export const PAGES: PageMeta[] = [HOME_META, ...SERVICE_METAS];

export const getPageMeta = (path: string) => PAGES.find((p) => p.path === path);

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Página no encontrada | Loss Vial S.A.",
  description: "La página que busca no existe. Conozca nuestros servicios de movimiento de suelos y obras civiles en Gualeguaychú.",
  ogImage: OG_IMAGE,
  ogImageAlt: OG_IMAGE_ALT,
  noindex: true,
};
