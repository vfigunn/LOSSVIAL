import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Building2, Construction, Wrench } from "lucide-react";
import movimientoSuelos from "../../../public/assets/movimiento-suelos.jpeg";
import demoliciones from "../../../public/assets/demoliciones.png";
import obrasViales from "../../../public/assets/obras-viales.jpeg";
import alquilerMaquinaria from "../../../public/assets/alquiler-maquinaria.png";

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Truck,
      title: "Movimiento de Suelos y Excavaciones",
      description: "Servicios especializados en nivelaciones, rellenos y limpieza de terrenos con maquinaria de última generación.",
      image: movimientoSuelos,
      features: [
        "Nivelaciones de terrenos",
        "Rellenos y compactación",
        "Limpieza de terrenos",
        "Excavaciones profundas",
        "Preparación de fundaciones"
      ]
    },
    {
      icon: Building2,
      title: "Demoliciones Civiles Urbanas",
      description: "Demoliciones seguras y controladas de estructuras civiles en áreas urbanas, con todas las medidas de seguridad.",
      image: demoliciones,
      features: [
        "Demolición de estructuras",
        "Retiro de escombros",
        "Medidas de seguridad",
        "Permisos municipales",
        "Limpieza post-demolición"
      ]
    },
    {
      icon: Construction,
      title: "Obras Viales",
      description: "Construcción y mantenimiento de infraestructura vial: calles, cordones cuneta, badenes y más.",
      image: obrasViales,
      features: [
        "Apertura de calles",
        "Cordones cuneta",
        "Construcción de badenes",
        "Mantenimiento vial",
        "Señalización urbana"
      ]
    },
    {
      icon: Wrench,
      title: "Alquiler de Maquinaria y Transporte",
      description: "Alquiler de maquinaria especializada y servicios de transporte de materiales para construcción.",
      image: alquilerMaquinaria,
      features: [
        "Alquiler de excavadoras",
        "Transporte de materiales",
        "Operadores certificados",
        "Mantenimiento incluido",
        "Disponibilidad 24/7"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Soluciones integrales en construcción vial
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en obras viales, 
            movimiento de suelos y demoliciones para satisfacer todas sus necesidades de construcción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-construction transition-all duration-300 hover:-translate-y-2 group" 
            >
              {service.image && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={`Servicio de ${service.title} - Loss Vial S.A.`}
                    className="w-full max-h-38 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow rounded-lg">
                      <service.icon className="h-6 w-6 text-vial-yellow-foreground" />
                    </div>
                  </div>
                </div>
              )}
              
              <CardHeader className={service.image ? "" : "pt-8"}>
                {!service.image && (
                  <div className="inline-flex items-center justify-center w-12 h-2 bg-vial-yellow/20 rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-vial-yellow" />
                  </div>
                )}
                <CardTitle className="text-xl text-primary group-hover:text-vial-yellow transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-vial-yellow rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-vial-yellow group-hover:text-vial-yellow-foreground group-hover:border-vial-yellow transition-colors"
                  onClick={scrollToContact}
                >
                  Solicitar Presupuesto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-vial rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-vial-yellow-foreground mb-4">
              ¿Necesita un servicio específico?
            </h3>
            <p className="text-vial-yellow-foreground/90 mb-6 text-lg">
              Contamos con más de 30 años de experiencia y la maquinaria necesaria 
              para llevar a cabo cualquier proyecto de construcción vial.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-white/90 shadow-lg"
            >
              Consultar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};