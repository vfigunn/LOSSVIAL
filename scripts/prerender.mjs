// Genera HTML estático por ruta a partir del build cliente (dist/) y del build SSR (dist-ssr/),
// para que Google y las vistas previas de WhatsApp reciban el contenido sin ejecutar JavaScript.
// También genera dist/404.html y dist/sitemap.xml.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render, buildHead, PAGES, NOT_FOUND_META, pageUrl } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html no tiene los marcadores <!--app-head--> / <!--app-html-->");
}

// Reemplazo con función para que los "$" del contenido no se interpreten como patrones.
const renderPage = (url, meta) =>
  template
    .replace("<!--app-head-->", () => buildHead(meta))
    .replace("<!--app-html-->", () => render(url));

const outFile = (routePath) => (routePath === "/" ? "index.html" : `${routePath.slice(1)}.html`);

for (const meta of PAGES) {
  const file = outFile(meta.path);
  await fs.writeFile(path.join(distDir, file), renderPage(meta.path, meta));
  console.log(`prerender: ${meta.path} -> dist/${file}`);
}

await fs.writeFile(path.join(distDir, "404.html"), renderPage("/404", NOT_FOUND_META));
console.log("prerender: 404 -> dist/404.html");

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (meta) => `  <url>
    <loc>${pageUrl(meta.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${meta.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`prerender: sitemap.xml (${PAGES.length} URLs)`);

await fs.rm(ssrDir, { recursive: true, force: true });
