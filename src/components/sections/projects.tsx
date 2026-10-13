import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";
import { MapPin, Calendar, Users, Instagram } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { PROJECTS } from "@/data/projects";
import { projectWaMessage, waLink } from "@/lib/whatsapp";

export const ProjectsSection = () => {
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
      { threshold: 0.1 }
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
    <section id="proyectos" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Proyectos Destacados</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Construyendo el futuro de Gualeguaychú
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conozca algunas de las obras de movimiento de suelos, demoliciones e infraestructura
            que realizamos en Gualeguaychú y la región.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.title}
              data-animate={String(index * 100)}
              className="shadow-card hover:shadow-construction transition-all duration-300 hover:-translate-y-2 group overflow-hidden border-transparent hover:border-vial-yellow/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-vial-yellow/20 text-vial-yellow">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-vial-yellow transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-vial-yellow" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-primary text-sm">Datos destacados:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-sm group/item">
                        <div className="w-2 h-2 bg-vial-yellow rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-vial-yellow" />
                    <span className="text-sm">Completado</span>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-whatsapp hover:text-whatsapp-dark hover:bg-whatsapp/10"
                  >
                    <a href={waLink(projectWaMessage(project.title))} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4" />
                      Consultar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center" data-animate="0">
          <Card className="bg-gradient-primary text-primary-foreground shadow-construction max-w-4xl mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-10">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-vial-yellow" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Tiene un proyecto en mente?</h3>
              <p className="text-primary-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
                Desde pequeñas obras hasta grandes proyectos de infraestructura, 
                estamos preparados para hacer realidad su visión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton size="lg" label="Solicitar presupuesto" className="hover:scale-105" />
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-105 hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    Ver más obras en Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};