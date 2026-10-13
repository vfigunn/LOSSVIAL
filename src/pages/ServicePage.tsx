import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2, ChevronRight, Clock, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FaqList } from "@/components/sections/faq-list";
import { ServiceAreasSection } from "@/components/sections/service-areas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { BUSINESS } from "@/data/business";
import { MACHINES } from "@/data/machines";
import { PROJECTS } from "@/data/projects";
import { SERVICES, servicePath, type Service } from "@/data/services";
import { serviceWaMessage } from "@/lib/whatsapp";
import { getPageMeta } from "@/seo/pages";

const STEPS = [
  {
    title: "Nos escribe por WhatsApp",
    text: "Cuéntenos qué necesita, dónde es la obra y, si puede, envíenos fotos o medidas aproximadas.",
  },
  {
    title: "Le enviamos el presupuesto",
    text: "Analizamos el trabajo y le pasamos un presupuesto claro y sin compromiso.",
  },
  {
    title: "Ejecutamos la obra",
    text: "Coordinamos la fecha y realizamos el trabajo con nuestra maquinaria y personal con experiencia.",
  },
];

const ServicePage = ({ service }: { service: Service }) => {
  const meta = getPageMeta(servicePath(service.slug))!;
  const waMessage = serviceWaMessage(service.waName);
  const relatedProjects = PROJECTS.filter((p) => p.services.includes(service.slug));
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);
  const showFleet = service.slug === "alquiler-de-maquinaria-gualeguaychu";

  return (
    <SiteLayout meta={meta}>
      {/* Encabezado */}
      <section className="bg-gradient-primary text-primary-foreground pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container">
          <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-primary-foreground/70">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:text-vial-yellow transition-colors">Inicio</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li>
                <Link to={{ pathname: "/", hash: "servicios" }} className="hover:text-vial-yellow transition-colors">Servicios</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="text-primary-foreground">{service.shortName}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-vial-yellow rounded-xl shadow-vial mb-6">
              <service.icon className="h-7 w-7 text-vial-yellow-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{service.h1}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8">{service.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton size="lg" message={waMessage} label="Pedir presupuesto por WhatsApp" />
              <Button asChild size="lg" variant="outline" className="border-white/60 bg-transparent text-primary-foreground hover:bg-white hover:text-primary">
                <a href={`tel:${BUSINESS.phoneTel}`}>
                  <Phone className="h-5 w-5" />
                  Llamar al {BUSINESS.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 md:py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                decoding="async"
                className="w-full h-64 md:h-72 object-cover rounded-xl shadow-construction"
              />
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Qué incluye el servicio</h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-vial-yellow mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {service.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{section.heading}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{section.body}</p>
              </div>
            ))}

            {showFleet && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Nuestra flota Caterpillar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {MACHINES.map((machine) => (
                    <Card key={machine.name} className="overflow-hidden shadow-card">
                      <div className="bg-white p-6 flex items-center justify-center h-48">
                        <img
                          src={machine.image}
                          alt={`${machine.description} Caterpillar ${machine.name} disponible para alquiler en Gualeguaychú`}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <CardContent className="p-4 border-t border-border">
                        <h3 className="font-bold text-primary">{machine.name}</h3>
                        <p className="text-sm text-muted-foreground">{machine.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* CTA intermedio */}
            <div className="rounded-2xl bg-gradient-vial p-8 text-center shadow-vial">
              <h2 className="text-2xl md:text-3xl font-bold text-vial-yellow-foreground mb-3">
                ¿Necesita {service.shortName.toLowerCase()} en Gualeguaychú?
              </h2>
              <p className="text-vial-yellow-foreground/90 mb-6 max-w-xl mx-auto">
                Escríbanos con la ubicación y lo que necesita, y le respondemos con un presupuesto sin compromiso.
              </p>
              <WhatsAppButton size="lg" message={waMessage} label="Pedir presupuesto por WhatsApp" />
            </div>

            {/* Cómo trabajamos */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Cómo trabajamos</h2>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-vial-yellow text-vial-yellow-foreground font-bold mb-4">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Proyectos relacionados */}
            {relatedProjects.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Obras realizadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProjects.map((project) => (
                    <Card key={project.title} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <Badge variant="secondary" className="bg-vial-yellow/20 text-primary">{project.category}</Badge>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-vial-yellow" />
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-4 w-4 text-vial-yellow" />
                          {project.location}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Preguntas frecuentes */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Preguntas frecuentes</h2>
              <FaqList faqs={service.faqs} />
            </div>
          </div>

          {/* Columna lateral */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Card className="shadow-construction border-vial-yellow/30">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-2">Pida su presupuesto</h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    Respuesta directa por WhatsApp, sin formularios.
                  </p>
                  <WhatsAppButton message={waMessage} label="Escribir por WhatsApp" className="w-full mb-3" />
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${BUSINESS.phoneTel}`}>
                      <Phone className="h-4 w-4" />
                      {BUSINESS.phoneDisplay}
                    </a>
                  </Button>
                  <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-vial-yellow mt-0.5 shrink-0" />
                      {BUSINESS.hours.label}, {BUSINESS.hours.range}
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-vial-yellow mt-0.5 shrink-0" />
                      {BUSINESS.address.street}, {BUSINESS.address.city}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-primary mb-4">Otros servicios</h2>
                  <ul className="space-y-1">
                    {otherServices.map((other) => (
                      <li key={other.slug}>
                        <Link
                          to={servicePath(other.slug)}
                          className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-muted hover:text-vial-yellow transition-colors"
                        >
                          <other.icon className="h-4 w-4 text-vial-yellow shrink-0" />
                          <span className="flex-1">{other.shortName} en Gualeguaychú</span>
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      <div className="bg-muted/30">
        <ServiceAreasSection compact />
      </div>
    </SiteLayout>
  );
};

export default ServicePage;
