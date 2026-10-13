import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { MapPin, Calendar } from "lucide-react";

// Animaciones solo con CSS: el contenido prerenderizado se ve desde el primer pintado,
// sin ocultarse y volver a aparecer cuando carga el JavaScript.
const fadeUp = "animate-in fade-in slide-in-from-bottom-6 fill-mode-both [animation-duration:700ms]";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.webp"
          alt="Maquinaria vial de Loss Vial S.A. trabajando en movimiento de suelos en Gualeguaychú"
          width={1600}
          height={800}
          decoding="async"
          {...{ fetchpriority: "high" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="pt-32 md:pt-40 relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className={`mb-6 ${fadeUp}`}>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
              Loss Vial <span className="text-vial-yellow">S.A.</span>
            </span>
            <span className="block text-2xl md:text-4xl font-bold leading-tight">
              Movimiento de suelos y obras civiles en{" "}
              <span className="text-vial-yellow">Gualeguaychú</span>
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto ${fadeUp} [animation-delay:150ms]`}>
            Más de <strong className="text-vial-yellow">30 años</strong> acompañando el crecimiento de la ciudad y la región.
            Excavaciones, nivelación y relleno de terrenos, obras viales, demoliciones,
            alquiler de maquinaria y venta de tierra.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${fadeUp} [animation-delay:300ms]`}>
            <WhatsAppButton size="lg" label="Solicitar presupuesto por WhatsApp" className="px-8 py-4" />
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
            <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 ${fadeUp} [animation-delay:500ms]`}>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-vial-yellow" />
              </div>
              <p className="font-semibold text-lg mb-2">Desde 1994</p>
              <p className="text-gray-200 text-sm">Empresa familiar con experiencia consolidada</p>
            </div>

            <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 ${fadeUp} [animation-delay:700ms]`}>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-vial-yellow" />
              </div>
              <p className="font-semibold text-lg mb-2">Gualeguaychú</p>
              <p className="text-gray-200 text-sm">Raíces locales, compromiso regional</p>
            </div>

            <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.03] transition-all duration-300 ${fadeUp} [animation-delay:1000ms]`}>
              <div className="flex items-center justify-center mb-4">
                <div className="h-8 w-8 bg-vial-yellow rounded flex items-center justify-center">
                  <span className="text-vial-yellow-foreground font-bold text-sm">S.A.</span>
                </div>
              </div>
              <p className="font-semibold text-lg mb-2">Formalizada 2023</p>
              <p className="text-gray-200 text-sm">Sociedad Anónima constituida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
