import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Quiénes Somos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Una empresa familiar con tradición en obras civiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Loss Vial S.A. nació como una empresa familiar en 1994, con el compromiso de brindar 
            servicios de calidad en obras civiles y movimiento de suelos en Gualeguaychú y la región.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fundada en <strong className="text-vial-yellow">1994</strong>, Loss Vial comenzó como un emprendimiento 
                familiar con raíces profundas en Gualeguaychú, Entre Ríos. Durante más de 25 años, 
                hemos sido testigos y protagonistas del crecimiento de nuestra ciudad.
              </p>
              <p>
                En <strong className="text-vial-yellow">2023</strong>, dimos un paso importante al formalizar 
                nuestra empresa como <strong>Sociedad Anónima</strong>, reafirmando nuestro compromiso 
                con la excelencia y la transparencia en todos nuestros proyectos.
              </p>
              <p>
                Hoy somos reconocidos como una empresa líder en obras civiles, movimiento de suelos 
                y demoliciones, con un equipo de profesionales comprometidos y maquinaria de última generación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Clock className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">+30 Años</h4>
                <p className="text-sm text-muted-foreground">de experiencia en el sector</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Empresa Familiar</h4>
                <p className="text-sm text-muted-foreground">con valores sólidos</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vial-yellow/20 rounded-lg mb-4">
                  <Award className="h-6 w-6 text-vial-yellow" />
                </div>
                <h4 className="font-semibold text-primary mb-2">S.A. 2023</h4>
                <p className="text-sm text-muted-foreground">Sociedad Anónima formalizada</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
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

        {/* Valores */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4">
                <Users className="h-8 w-8 text-vial-yellow-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">Compromiso</h4>
              <p className="text-muted-foreground">
                Nos comprometemos con cada proyecto, cumpliendo plazos y superando expectativas.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4">
                <Award className="h-8 w-8 text-vial-yellow-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-primary mb-3">Confianza</h4>
              <p className="text-muted-foreground">
                Construimos relaciones duraderas basadas en la transparencia y la honestidad.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vial rounded-full mb-4">
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