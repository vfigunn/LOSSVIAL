import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Al navegar entre páginas: ir arriba, o a la sección del hash (/#contacto).
// En la carga inicial se deja que el navegador maneje el scroll.
export const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
