import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Loss Vial <span className="text-vial-yellow">S.A.</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Más de 25 años de experiencia en obras viales, movimiento de suelos y demoliciones. 
              Empresa familiar comprometida con el crecimiento de Gualeguaychú y la región.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  España 296, Gualeguaychú, Entre Ríos, Argentina
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  (03446) 42-5994 / (03446) 45-4470
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-vial-yellow flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  vialoss@hotmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-vial-yellow">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Movimiento de Suelos</li>
              <li>Obras Viales</li>
              <li>Demoliciones Civiles</li>
              <li>Alquiler de Maquinaria</li>
              <li>Transporte de Materiales</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-vial-yellow">Horarios de Atención</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-vial-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Lunes a Viernes</p>
                  <p>9:00 - 13:00</p>
                  <p>16:00 - 19:30</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-vial-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábados</p>
                  <p>9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Loss Vial S.A. Todos los derechos reservados.
            </div>
            <div className="text-sm text-primary-foreground/60">
              Empresa familiar fundada en 1994 • Sociedad Anónima desde 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};