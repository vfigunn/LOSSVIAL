import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Linkedin, ArrowUp, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";
import { BUSINESS, SERVICE_AREAS } from "@/data/business";
import { SERVICES, servicePath } from "@/data/services";
import { waLink } from "@/lib/whatsapp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Yellow decorative separator */}
      <div className="h-1 bg-gradient-vial"></div>

      <footer className="bg-primary text-primary-foreground relative pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <img
                src="/assets/banner-logo.webp"
                alt="Loss Vial S.A."
                width={400}
                height={175}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto rounded-lg shadow-md ring-1 ring-vial-yellow/30 mb-4"
              />
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Más de 30 años de experiencia en movimiento de suelos, obras civiles y demoliciones en
                Gualeguaychú. Empresa familiar comprometida con el crecimiento de la ciudad y la región:{" "}
                {SERVICE_AREAS.slice(1).join(", ")}.
              </p>
              <div className="space-y-3">
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link">
                  <MapPin className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region}, {BUSINESS.address.countryName}
                  </span>
                </a>
                <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-3 group/link">
                  <Phone className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link">
                  <WhatsAppIcon className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    WhatsApp: {BUSINESS.budgetPhoneDisplay}
                  </span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 group/link">
                  <Mail className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    {BUSINESS.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-vial-yellow">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={servicePath(service.slug)}
                      className="group/svc flex items-center gap-0 hover:text-vial-yellow transition-all duration-300"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover/svc:opacity-100 group-hover/svc:ml-0 transition-all duration-300 text-vial-yellow" />
                      <span>{service.shortName} en Gualeguaychú</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="font-semibold mb-4 text-vial-yellow">Horarios de Atención</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-vial-yellow mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{BUSINESS.hours.label}</p>
                    <p>{BUSINESS.hours.range}</p>
                  </div>
                </div>
              </div>

              <h4 className="mt-8 font-semibold mb-3 text-vial-yellow">Nuestras Redes</h4>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href={BUSINESS.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href={BUSINESS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5 text-vial-yellow" />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60" suppressHydrationWarning>
                © {currentYear} Loss Vial S.A. Todos los derechos reservados.
              </div>
              <div className="text-sm text-primary-foreground/60">
                Empresa familiar fundada en 1994 • Sociedad Anónima desde 2023
              </div>
            </div>
          </div>

        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className={`fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 md:bottom-24 md:right-7 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-vial-yellow text-vial-yellow-foreground shadow-vial hover:shadow-lg hover:scale-110 transition-all duration-300 ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </footer>
    </>
  );
};