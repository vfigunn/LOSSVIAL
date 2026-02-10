import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

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

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Nivelación y Relleno de Cancha - Barrio Obrero",
      location: "Barrio Obrero, Gualeguaychú",
      year: "2023",
      category: "Presupuesto Participativo",
      description: "Proyecto de nivelación y relleno de cancha deportiva en el marco del Presupuesto Participativo municipal. Trabajo integral que incluyó movimiento de suelos, nivelación y compactación.",
      highlights: [
        "Área de trabajo: 2,500 m²",
        "Volumen de relleno: 800 m³",
        "Beneficiarios: 150 familias",
        "Duración: 3 semanas"
      ]
    },
    {
      title: "Demolición de Tanque de Agua y Base de Hormigón – Planta Hermann",
      location: "Gualeguaychú, Entre Ríos",
      year: "2021",
      category: "Demoliciones Industriales",
      description: "Proyecto de demolición controlada de estructuras de hormigón y tanque elevado de 17 m de altura. Se utilizaron técnicas de impacto y excavación segura.",
      highlights: [
        "Altura del tanque: 17 m",
        "Volumen demolido: 450 m³",
        "Material reciclado: 60 %",
        "Duración: 3 semanas"
      ]
    },
    {
      title: "Obras de Infraestructura Urbana Municipal",
      location: "Varios sectores de Gualeguaychú",
      year: "2020-2024",
      category: "Colaboración Municipal",
      description: "Colaboración continua con el Municipio de Gualeguaychú en diversas obras de infraestructura urbana, incluyendo mantenimiento vial y mejoras en espacios públicos.",
      highlights: [
        "Múltiples sectores de la ciudad",
        "Mantenimiento vial preventivo",
        "Mejoras en espacios públicos",
        "Colaboración a largo plazo"
      ]
    },
    {
      title: "Terraplenes y Laguna Sanitaria – Granja Porcina Agropecuaria Sur",
      location: "Zona Rural, Departamento Gualeguaychú",
      year: "2023-2024",
      category: "Desarrollo Agroindustrial",
      description: "Construcción de terraplenes, nivelación y laguna sanitaria para sistema de tratamiento de efluentes. Proyecto realizado junto a la firma Agropecuaria Sur.",
      highlights: [
        "Terraplenes de 3 m de altura",
        "Movimiento de suelo: 3,800 m³",
        "Obra hidráulica de retención",
        "Duración: 6 semanas"
      ]
    },
    {
      title: "Relleno de Planta Potabilizadora",
      location: "Zona Norte, Gualeguaychú",
      year: "2024",
      category: "Infraestructura Urbana Municipal",
      description: "Trabajo de movimiento y nivelación de suelos para el relleno de la nueva planta potabilizadora. Incluyó tareas de compactación, estabilización y perfilado de superficie.",
      highlights: [
        "Área intervenida: 4,000 m²",
        "Volumen de relleno: 1,500 m³",
        "Maquinaria: motoniveladora, compactador y camiones volcadores",
        "Duración: 4 semanas"
      ]
    },
    {
      title: "Desmonte y Terraplenamiento de 40,000 m² – Emprendimiento Rural",
      location: "Zona Oeste, Gualeguaychú",
      year: "2024",
      category: "Movimiento de Suelos",
      description: "Obra integral de desmonte, limpieza, nivelación y construcción de terraplén para futura instalación agroindustrial.",
      highlights: [
        "Superficie total: 40,000 m²",
        "Movimiento de tierra: 7,000 m³",
        "Equipos utilizados: excavadoras, topadoras D6, camiones 6×4",
        "Duración: 8 semanas"
      ]
    }
  ];

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
            Conoce algunos de nuestros proyectos más importantes que han contribuido 
            al desarrollo y crecimiento de nuestra ciudad y la región.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
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
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm group/item">
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
                    variant="ghost" 
                    size="sm"
                    onClick={scrollToContact}
                    className="text-vial-yellow hover:text-vial-yellow hover:bg-vial-yellow/10 group/btn"
                  >
                    Consultar
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-vial-yellow text-vial-yellow-foreground hover:bg-vial-yellow/90 hover:scale-105 transition-all duration-300"
                >
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-black hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-105 hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <a href="#proyectos">Ver Más Proyectos</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};