import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { SERVICES, servicePath } from "@/data/services";
import { NOT_FOUND_META } from "@/seo/pages";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout meta={NOT_FOUND_META}>
      <section className="container py-24 md:py-32 text-center">
        <p className="text-6xl font-bold text-vial-yellow mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Página no encontrada</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          La página que busca no existe o fue movida. Estos son nuestros servicios en Gualeguaychú:
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-10">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Button asChild variant="outline">
                <Link to={servicePath(service.slug)}>{service.shortName}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="vial" size="lg">
            <Link to="/">Volver al inicio</Link>
          </Button>
          <WhatsAppButton size="lg" />
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
