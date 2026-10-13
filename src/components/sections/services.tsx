import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { SERVICES, servicePath } from "@/data/services";
import { serviceWaMessage } from "@/lib/whatsapp";

export const ServicesSection = () => {
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
    <section id="servicios" className="py-20 bg-background" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Movimiento de suelos, obras civiles y más en Gualeguaychú
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales para particulares, empresas, campos y municipios: excavaciones,
            nivelación y relleno de terrenos, obras viales, demoliciones, alquiler de maquinaria
            y venta de tierra en Gualeguaychú y alrededores.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <Card
              key={service.slug}
              data-animate={String(index * 120)}
              className="flex flex-col shadow-card hover:shadow-construction transition-all duration-300 hover:-translate-y-2 group overflow-hidden border-transparent hover:border-vial-yellow/20"
            >
              <Link to={servicePath(service.slug)} className="relative block overflow-hidden" tabIndex={-1} aria-hidden="true">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow rounded-lg shadow-vial group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-vial-yellow-foreground" />
                  </div>
                </div>
              </Link>

              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-vial-yellow transition-colors duration-300">
                  <Link to={servicePath(service.slug)}>{service.name}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.summary}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center text-sm group/item">
                      <div className="w-2 h-2 bg-vial-yellow rounded-full mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto grid grid-cols-1 gap-2">
                  <WhatsAppButton message={serviceWaMessage(service.waName)} label="Pedir presupuesto" className="w-full" />
                  <Button asChild variant="outline" className="w-full group/more">
                    <Link to={servicePath(service.slug)}>
                      Más sobre {service.shortName.toLowerCase()}
                      <ArrowRight className="h-4 w-4 group-hover/more:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Otro trabajo */}
          <Card
            data-animate={String(SERVICES.length * 120)}
            className="flex flex-col justify-center bg-gradient-primary text-primary-foreground shadow-construction overflow-hidden"
          >
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-vial-yellow rounded-full mb-5 shadow-vial">
                <MessageCircleQuestion className="h-7 w-7 text-vial-yellow-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">¿Necesita otro trabajo?</h3>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed">
                Zanjeo, desmonte, lagunas, tajamares, terraplenes y más. Cuéntenos su proyecto
                y le respondemos con un presupuesto sin compromiso.
              </p>
              <WhatsAppButton label="Consultar por WhatsApp" className="w-full" />
            </CardContent>
          </Card>
        </div>

        {/* CTA Banner */}
        <div className="text-center" data-animate="0">
          <div className="bg-gradient-vial rounded-2xl p-10 text-center max-w-4xl mx-auto shadow-vial hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-vial-yellow-foreground mb-4">
              ¿Necesita un servicio específico?
            </h3>
            <p className="text-vial-yellow-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
              Contamos con más de 30 años de experiencia y la maquinaria necesaria
              para llevar a cabo cualquier proyecto de movimiento de suelos y obra vial.
            </p>
            <WhatsAppButton
              size="lg"
              label="Consultar ahora por WhatsApp"
              className="shadow-lg hover:shadow-xl hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
