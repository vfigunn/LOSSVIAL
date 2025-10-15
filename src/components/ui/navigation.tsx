import { useState } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar con información de contacto */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(03446) 63-2609</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>lossvial@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Lun-Vie 9:00-13:00 </span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            <a href="#" className=""><img src="./public/assets/logo.jpg" alt="" className="h-16 w-35 ml-8"/></a>

          </h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-vial-yellow transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-vial-yellow transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-vial-yellow transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="text-foreground hover:text-vial-yellow transition-colors"
          >
            Proyectos
          </button>
          <Button
            variant="default"
            onClick={() => scrollToSection("contacto")}
            className="bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground shadow-vial"
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
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden">
            <div className="container py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left py-2 text-foreground hover:text-vial-yellow"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block w-full text-left py-2 text-foreground hover:text-vial-yellow"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left py-2 text-foreground hover:text-vial-yellow"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="block w-full text-left py-2 text-foreground hover:text-vial-yellow"
              >
                Proyectos
              </button>
              <Button
                variant="default"
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground"
              >
                Contacto
              </Button>
              <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(03446) 42-5994</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>vialoss@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};