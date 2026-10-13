import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, MapPin } from "lucide-react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-animate") || "0";
            setTimeout(() => {
              el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Quiénes Somos</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Una empresa familiar con tradición en obras civiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Loss Vial S.A. nació como una empresa familiar en 1994, con el compromiso de brindar 
            servicios de calidad en obras civiles y movimiento de suelos en Gualeguaychú y la región.
          </p>
        </div>

        {/* Historia + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-animate="100">
            <h3 className="text-2xl font-bold text-primary mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada en <strong className="text-vial-yellow">1994</strong>, Loss Vial comenzó como un emprendimiento 
                familiar con raíces profundas en Gualeguaychú, Entre Ríos. Durante más de 30 años, 
                hemos sido testigos y protagonistas del crecimiento de nuestra ciudad.
              </p>
              <p>
                En <strong className="text-vial-yellow">2023</strong>, dimos un paso importante al formalizar 
                nuestra empresa como <strong>Sociedad Anónima</strong>, reafirmando nuestro compromiso 
                con la excelencia y la transparencia en todos nuestros proyectos.
              </p>
              <p>
                Hoy somos reconocidos como una empresa líder en movimiento de suelos, obras civiles
                y demoliciones en Gualeguaychú y alrededores, con un equipo de profesionales comprometidos
                y maquinaria de última generación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card data-animate="200" className="shadow-card hover:shadow-construction hover:scale-[1.03] transition-all duration-300 border-transparent hover:border-vial-yellow/30">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Clock className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">+30 Años</h4>
                <p className="text-sm text-muted-foreground">de experiencia en el sector</p>
              </CardContent>
            </Card>

            <Card data-animate="300" className="shadow-card hover:shadow-construction hover:scale-[1.03] transition-all duration-300 border-transparent hover:border-vial-yellow/30">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Empresa Familiar</h4>
                <p className="text-sm text-muted-foreground">con valores sólidos</p>
              </CardContent>
            </Card>

            <Card data-animate="400" className="shadow-card hover:shadow-construction hover:scale-[1.03] transition-all duration-300 border-transparent hover:border-vial-yellow/30">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Award className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">S.A. 2023</h4>
                <p className="text-sm text-muted-foreground">Sociedad Anónima formalizada</p>
              </CardContent>
            </Card>

            <Card data-animate="500" className="shadow-card hover:shadow-construction hover:scale-[1.03] transition-all duration-300 border-transparent hover:border-vial-yellow/30">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <MapPin className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Gualeguaychú</h4>
                <p className="text-sm text-muted-foreground">raíces locales fuertes</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video */}
        <div className="flex justify-center mb-16" data-animate="0">
          <div className="relative w-full max-w-[1050px] rounded-xl overflow-hidden shadow-construction">
            <video
              className="rounded-xl w-full h-auto"
              width="1050"
              height="590"
              controls
              preload="none"
              poster="/assets/video-poster.webp"
              aria-label="Video institucional de Loss Vial S.A."
            >
              <source src="/assets/Loss_vial.mp4" type="video/mp4" />
              Su navegador no puede reproducir este video.
            </video>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <h3 data-animate="0" className="text-2xl md:text-3xl font-bold text-primary mb-10">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-animate="100" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-vial">
                <Users className="h-8 w-8 text-vial-yellow-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">Compromiso</h4>
              <p className="text-muted-foreground">
                Nos comprometemos con cada proyecto, cumpliendo plazos y superando expectativas.
              </p>
            </div>

            <div data-animate="250" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-vial">
                <Award className="h-8 w-8 text-vial-yellow-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">Confianza</h4>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y la honestidad.
              </p>
            </div>

            <div data-animate="400" className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-vial">
                <Clock className="h-8 w-8 text-vial-yellow-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">Experiencia</h4>
              <p className="text-muted-foreground">
                Más de 30 años nos respaldan como líderes en obras civiles y movimiento de suelos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};