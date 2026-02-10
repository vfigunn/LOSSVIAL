import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import heroImage from "/assets/LOSSVIALBanner.jpg";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    if (!elements) return;

    elements.forEach((el) => {
      const delay = el.getAttribute("data-animate") || "0";
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(24px)";

      setTimeout(() => {
        htmlEl.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        htmlEl.style.opacity = "1";
        htmlEl.style.transform = "translateY(0)";
      }, parseInt(delay));
    });
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maquinaria vial Loss Vial S.A. trabajando en obras de construcción"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div ref={sectionRef} className="pt-40 relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 data-animate="0" className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            Loss Vial <span className="text-vial-yellow">S.A.</span>
          </h1>
          <p data-animate="100" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Más de <span className="text-vial-yellow">30 años</span> acompañando el crecimiento de{" "}
            <span className="text-vial-yellow">Gualeguaychú</span>
          </p>
          
          <p data-animate="300" className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Especialistas en obras civiles y movimiento de suelos. 
            Construyendo infraestructura de calidad para nuestra comunidad.
          </p>

          <div data-animate="500" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground font-semibold px-8 py-4 shadow-vial group hover:shadow-lg transition-shadow duration-300"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white hover:font-bold hover:shadow-lg hover:shadow-black px-8 py-4 transition-colors duration-300"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Key points */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div data-animate="700" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-vial-yellow" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Desde 1994</h3>
              <p className="text-gray-200 text-sm">Empresa familiar con experiencia consolidada</p>
            </div>
            
            <div data-animate="850" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-vial-yellow" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Gualeguaychú</h3>
              <p className="text-gray-200 text-sm">Raíces locales, compromiso regional</p>
            </div>
            
            <div data-animate="1000" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="h-8 w-8 bg-vial-yellow rounded flex items-center justify-center">
                  <span className="text-vial-yellow-foreground font-bold text-sm">S.A.</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Formalizada 2023</h3>
              <p className="text-gray-200 text-sm">Sociedad Anónima constituida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};