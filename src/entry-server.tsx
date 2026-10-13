/* eslint-disable react-refresh/only-export-components -- entrada del build SSR, no participa de fast refresh */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { SITE_URL } from "./data/business";
import { buildHead } from "./seo/head";
import { NOT_FOUND_META, PAGES, pageUrl } from "./seo/pages";

// Punto de entrada del build SSR usado por scripts/prerender.mjs.
export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

export { buildHead, NOT_FOUND_META, PAGES, pageUrl, SITE_URL };
