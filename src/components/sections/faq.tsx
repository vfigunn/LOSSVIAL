import { Badge } from "@/components/ui/badge";
import { HOME_FAQS } from "@/data/faqs";
import { FaqList } from "./faq-list";

export const FaqSection = () => (
  <section id="preguntas-frecuentes" className="py-20 bg-muted/30">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Preguntas Frecuentes</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Preguntas frecuentes sobre nuestros servicios
        </h2>
      </div>
      <FaqList faqs={HOME_FAQS} />
    </div>
  </section>
);
