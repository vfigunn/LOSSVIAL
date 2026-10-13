import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { SERVICE_AREAS } from "@/data/business";

export const ServiceAreasSection = ({ compact = false }: { compact?: boolean }) => (
  <section id="zonas" className={compact ? "py-14" : "py-20 bg-background"}>
    <div className="container">
      <div className="mx-auto max-w-4xl text-center">
        {!compact && <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Cobertura</Badge>}
        <h2 className={compact ? "text-2xl md:text-3xl font-bold text-primary mb-4" : "text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"}>
          Zonas donde trabajamos
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Desde nuestra base en Gualeguaychú realizamos movimiento de suelos, obras civiles, demoliciones
          y entregas de tierra en la ciudad, las localidades cercanas y la zona rural del departamento.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-vial-yellow/40 bg-vial-yellow/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <MapPin className="h-4 w-4 text-vial-yellow" />
              {area}
            </li>
          ))}
          <li className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
            Zona rural del departamento Gualeguaychú
          </li>
        </ul>
        <p className="text-muted-foreground mb-6">¿Su obra está en otra localidad? Consúltenos igual.</p>
        <WhatsAppButton label="Consultar por mi zona" />
      </div>
    </div>
  </section>
);
