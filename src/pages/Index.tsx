import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { MachinesCarouselSection } from "@/components/sections/machines-carousel";
import { SocialSection } from "@/components/sections/social";
import { ProjectsSection } from "@/components/sections/projects";
import { ServiceAreasSection } from "@/components/sections/service-areas";
import { WeatherSection } from "@/components/sections/weather";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { HOME_META } from "@/seo/pages";

const Index = () => {
  return (
    <SiteLayout meta={HOME_META}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MachinesCarouselSection />
      <SocialSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <WeatherSection />
      <FaqSection />
      <ContactSection />
    </SiteLayout>
  );
};

export default Index;
