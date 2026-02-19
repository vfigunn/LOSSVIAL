import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { MachinesCarouselSection } from "@/components/sections/machines-carousel";
import { SocialSection } from "@/components/sections/social";
import { ProjectsSection } from "@/components/sections/projects";
import { WeatherSection } from "@/components/sections/weather";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MachinesCarouselSection />
        <SocialSection />
        <ProjectsSection />
        <WeatherSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Loss Vial S.A.",
          "description": "Empresa especializada en obras civiles, movimiento de suelos y demoliciones en Gualeguaychú, Entre Ríos",
          "foundingDate": "1994",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Blvd. Antonio Daneri 919",
            "addressLocality": "Gualeguaychú",
            "addressRegion": "Entre Ríos",
            "addressCountry": "AR"
          },
          "telephone": "(03446) 63-2609",
          "email": "lossvial@gmail.com",
          "url": "https://lossvial.com.ar",
          "openingHours": [
            "Mo-Fr 09:00-13:00"
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
            "Obras civiles",
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
