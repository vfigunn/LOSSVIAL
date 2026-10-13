import { Phone } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Contacto siempre visible: botón flotante en escritorio y barra inferior en celular.
export const WhatsAppFloating = () => (
  <>
    {/* Escritorio */}
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir presupuesto por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 hidden md:flex items-center rounded-full bg-whatsapp text-white shadow-lg hover:bg-whatsapp-dark hover:shadow-xl transition-all duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp-brand opacity-60 motion-safe:animate-ping-slow pointer-events-none" />
      <span className="relative flex items-center justify-center w-14 h-14">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span className="relative max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:max-w-[200px] group-hover:pr-5 group-focus-visible:max-w-[200px] group-focus-visible:pr-5">
        Pedir presupuesto
      </span>
    </a>

    {/* Celular */}
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex items-center justify-center gap-2 h-12 rounded-lg bg-primary text-primary-foreground font-semibold active:scale-[0.98] transition-transform"
        >
          <Phone className="h-5 w-5" />
          Llamar
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-12 rounded-lg bg-whatsapp text-white font-semibold active:scale-[0.98] transition-transform"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  </>
);
