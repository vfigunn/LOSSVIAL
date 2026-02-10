import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Linkedin, ArrowUp, ChevronRight } from "lucide-react";

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

      <footer className="bg-primary text-primary-foreground relative">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <img
              src="/assets/logo.jpg"
              alt="Loss Vial S.A."
              className="h-16 rounded-lg shadow-md ring-1 ring-vial-yellow/30 mb-4"
            />
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Más de 30 años de experiencia en obras civiles, movimiento de suelos y demoliciones. 
                Empresa familiar comprometida con el crecimiento de Gualeguaychú y la región.
              </p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=Blvd.+Antonio+Daneri+919,+Gualeguaychú" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link">
                  <MapPin className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    Blvd. Antonio Daneri 919, Gualeguaychú, Entre Ríos, Argentina
                  </span>
                </a>
                <a href="tel:+5493446632609" className="flex items-center gap-3 group/link">
                  <Phone className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    (03446) 63-2609 
                  </span>
                </a>
                <a href="mailto:lossvial@gmail.com" className="flex items-center gap-3 group/link">
                  <Mail className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 group-hover/link:text-vial-yellow transition-colors duration-300">
                    lossvial@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-vial-yellow">Servicios</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {[
                  "Movimiento de Suelos",
                  "Obras Civiles",
                  "Demoliciones",
                  "Alquiler de Maquinaria",
                  "Transporte de Materiales",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#servicios"
                      className="group/svc flex items-center gap-0 hover:text-vial-yellow transition-all duration-300"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-4 group-hover/svc:opacity-100 group-hover/svc:ml-0 transition-all duration-300 text-vial-yellow" />
                      <span>{service}</span>
                    </a>
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
                    <p className="font-medium">Lunes a Viernes</p>
                    <p>9:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <h4 className="mt-8 font-semibold mb-3 text-vial-yellow">Nuestras Redes</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/lossvial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href="https://www.youtube.com/@LossVial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/loss-vial-2baa0618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-vial-yellow" />
                </a>
                <a
                  href={`https://wa.me/5493446632609?text=${encodeURIComponent("Hola, vengo desde la página web y me gustaría comunicarme con usted.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-vial-yellow/20 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5 text-vial-yellow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60">
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
          className={`fixed bottom-32 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-vial-yellow text-vial-yellow-foreground shadow-vial hover:shadow-lg hover:scale-110 transition-all duration-300 ${
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