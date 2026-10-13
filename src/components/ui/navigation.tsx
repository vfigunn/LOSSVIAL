import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";
import { BUSINESS } from "@/data/business";
import { SERVICES, servicePath } from "@/data/services";
import { waLink } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Scroll effect — shrink navbar + add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver (solo en la home)
  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  // En la home hace scroll suave; en otras páginas deja que el Link navegue a /#seccion.
  const handleSectionClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      setIsMenuOpen(false);
      if (!isHome) return;
      const element = document.getElementById(sectionId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [isHome]
  );

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (id: string) => isHome && activeSection === id;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar con información de contacto */}
      <div
        className={`bg-primary text-primary-foreground hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 py-0" : "max-h-20 py-2"
        }`}
      >
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 hover:text-vial-yellow transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-vial-yellow transition-colors duration-300">
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-vial-yellow transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span>{BUSINESS.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-4 w-4" />
            <span>{BUSINESS.hours.short}</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav
        aria-label="Principal"
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-md shadow-md border-border"
            : "bg-card/95 backdrop-blur-sm border-border"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group" aria-label="Loss Vial S.A. - Inicio">
              <img
                src="/assets/logo-nav.webp"
                alt="Loss Vial S.A."
                width={320}
                height={229}
                className={`w-auto rounded-lg shadow-md ring-1 ring-vial-yellow/30 group-hover:shadow-lg group-hover:ring-vial-yellow/60 group-hover:scale-105 transition-all duration-300 ${isScrolled ? "h-11 my-2" : "h-20 my-3"}`}
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative group/nav">
                <Link
                  to={{ pathname: "/", hash: item.id }}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isActive(item.id)
                      ? "text-vial-yellow"
                      : "text-foreground hover:text-vial-yellow"
                  }`}
                >
                  {item.label}
                  {item.id === "servicios" && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />
                  )}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-vial-yellow rounded-full transition-all duration-300 ${
                      isActive(item.id)
                        ? "w-3/4"
                        : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>

                {/* Submenú de servicios */}
                {item.id === "servicios" && (
                  <div className="invisible opacity-0 translate-y-1 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-focus-within/nav:translate-y-0 absolute left-0 top-full pt-2 transition-all duration-200">
                    <ul className="w-72 rounded-xl border border-border bg-card p-2 shadow-construction">
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={servicePath(service.slug)}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                              pathname === servicePath(service.slug)
                                ? "bg-vial-yellow/15 text-primary font-semibold"
                                : "text-foreground hover:bg-muted hover:text-vial-yellow"
                            }`}
                          >
                            <service.icon className="h-4 w-4 text-vial-yellow shrink-0" />
                            {service.shortName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <WhatsAppButton label="Pedir presupuesto" className="ml-4" />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </Button>
        </div>

        {/* Mobile menu — animated */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[calc(100vh-6rem)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 space-y-1 border-t border-border">
            {NAV_ITEMS.map((item) => (
              <div key={item.id}>
                <Link
                  to={{ pathname: "/", hash: item.id }}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.id)
                      ? "text-vial-yellow bg-vial-yellow/10 font-medium"
                      : "text-foreground hover:text-vial-yellow hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
                {item.id === "servicios" && (
                  <ul className="ml-4 border-l-2 border-vial-yellow/40 pl-2 space-y-0.5">
                    {SERVICES.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={servicePath(service.slug)}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-muted-foreground hover:text-vial-yellow hover:bg-muted transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-vial-yellow shrink-0" />
                          {service.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <WhatsAppButton label="Pedir presupuesto por WhatsApp" className="w-full mt-2" />
            <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 hover:text-vial-yellow transition-colors">
                <Phone className="h-4 w-4" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-vial-yellow transition-colors">
                <Mail className="h-4 w-4" />
                <span>{BUSINESS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
