import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Scroll effect — shrink navbar + add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.id), "contacto"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
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
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <a href="tel:+5493446632609" className="flex items-center gap-2 hover:text-vial-yellow transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>(03446) 63-2609</span>
            </a>
            <a href="mailto:lossvial@gmail.com" className="flex items-center gap-2 hover:text-vial-yellow transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span>lossvial@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-4 w-4" />
            <span>Lun-Vie 9:00-13:00</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-md shadow-md border-border"
            : "bg-card/95 backdrop-blur-sm border-border"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <img
                src="/assets/logo.jpg"
                alt="Loss Vial S.A."
                className={`rounded-lg shadow-md ring-1 ring-vial-yellow/30 group-hover:shadow-lg group-hover:ring-vial-yellow/60 group-hover:scale-105 transition-all duration-300 ${isScrolled ? "h-11 my-2" : "h-20 my-3"}`}
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  activeSection === item.id
                    ? "text-vial-yellow"
                    : "text-foreground hover:text-vial-yellow"
                }`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-vial-yellow rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-3/4"
                      : "w-0 group-hover:w-1/2"
                  }`}
                />
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contacto")}
              className={`ml-4 bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground shadow-vial hover:shadow-lg transition-all duration-300 ${
                activeSection === "contacto" ? "ring-2 ring-vial-yellow/50" : ""
              }`}
            >
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </Button>
        </div>

        {/* Mobile menu — animated */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 space-y-1 border-t border-border">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-vial-yellow bg-vial-yellow/10 font-medium"
                    : "text-foreground hover:text-vial-yellow hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contacto")}
              className="w-full mt-2 bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground"
            >
              Contacto
            </Button>
            <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <a href="tel:+5493446632609" className="flex items-center gap-2 hover:text-vial-yellow transition-colors">
                <Phone className="h-4 w-4" />
                <span>(03446) 63-2609</span>
              </a>
              <a href="mailto:lossvial@gmail.com" className="flex items-center gap-2 hover:text-vial-yellow transition-colors">
                <Mail className="h-4 w-4" />
                <span>lossvial@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};