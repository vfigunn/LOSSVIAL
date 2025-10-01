import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Loss Vial S.A.",
          "description": "Empresa especializada en obras viales, movimiento de suelos y demoliciones en Gualeguaychú, Entre Ríos",
          "foundingDate": "1994",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "España 296",
            "addressLocality": "Gualeguaychú",
            "addressRegion": "Entre Ríos",
            "addressCountry": "AR"
          },
          "telephone": "(03446) 42-5994",
          "email": "vialoss@hotmail.com",
          "url": "https://lossvial.com",
          "openingHours": [
            "Mo-Fr 09:00-13:00",
            "Mo-Fr 16:00-19:30", 
            "Sa 09:00-13:00"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -33.0094,
              "longitude": -58.5119
            },
            "geoRadius": "50000"
          },
          "services": [
            "Obras viales",
            "Movimiento de suelos",
            "Demoliciones civiles",
            "Alquiler de maquinaria"
          ]
        })}
      </script>
    </div>
  );
};

export default Index;
