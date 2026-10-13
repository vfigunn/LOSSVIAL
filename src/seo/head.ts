import { BUSINESS } from "@/data/business";
import { pageUrl, type PageMeta } from "./pages";

const escapeAttr = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON dentro de <script>: evitar que un "</script>" del contenido cierre el tag.
const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

/**
 * Tags de <head> que cambian por página. Se usan en el prerender (string en el HTML)
 * y en el cliente (Seo.tsx) al navegar. Todos llevan data-seo para poder reemplazarlos.
 */
export const buildHead = (meta: PageMeta) => {
  const url = pageUrl(meta.path);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  const tags = [
    `<title data-seo>${title}</title>`,
    `<meta data-seo name="description" content="${description}" />`,
  ];

  if (meta.noindex) {
    tags.push(`<meta data-seo name="robots" content="noindex, follow" />`);
  } else {
    tags.push(
      `<meta data-seo name="robots" content="index, follow, max-image-preview:large" />`,
      `<link data-seo rel="canonical" href="${url}" />`,
    );
  }

  tags.push(
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:locale" content="es_AR" />`,
    `<meta data-seo property="og:site_name" content="${escapeAttr(BUSINESS.name)}" />`,
    `<meta data-seo property="og:title" content="${title}" />`,
    `<meta data-seo property="og:description" content="${description}" />`,
    `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${meta.ogImage}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${title}" />`,
    `<meta data-seo name="twitter:description" content="${description}" />`,
    `<meta data-seo name="twitter:image" content="${meta.ogImage}" />`,
  );

  if (meta.preloadImage) {
    tags.push(`<link data-seo rel="preload" as="image" href="${meta.preloadImage}" fetchpriority="high" />`);
  }
  if (meta.jsonLd) {
    tags.push(`<script data-seo type="application/ld+json">${serializeJsonLd(meta.jsonLd)}</script>`);
  }

  return tags.join("\n    ");
};
