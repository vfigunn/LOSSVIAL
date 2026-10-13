import { useEffect } from "react";
import { buildHead } from "./head";
import type { PageMeta } from "./pages";

// En producción el <head> ya viene prerenderizado; esto lo mantiene al día
// cuando se navega entre páginas sin recargar (y en desarrollo).
export const Seo = ({ meta }: { meta: PageMeta }) => {
  useEffect(() => {
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    document.head.insertAdjacentHTML("beforeend", buildHead(meta));
  }, [meta]);

  return null;
};
