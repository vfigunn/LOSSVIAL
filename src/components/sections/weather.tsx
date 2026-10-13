
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const WeatherSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // El widget de Windguru es pesado: se inyecta recién cuando la sección se acerca a la pantalla.
  useEffect(() => {
    const containerId = "wg_fwdg_1176650_117_1770822001490";
    const scriptId = "windguru-script-" + containerId;

    const loadWidget = () => {
      if (document.getElementById(scriptId)) return;
      const arg = ["s=1176650" ,"m=117","uid=wg_fwdg_1176650_117_1770822001490" ,"wj=knots" ,"tj=c" ,"waj=m" ,"tij=cm" ,"odh=0" ,"doh=24" ,"fhours=240" ,"hrsm=3" ,"vt=forecasts" ,"lng=es" ,"p=WINDSPD,GUST,MWINDSPD,SMER,TMP,WCHILL,APCP1s,RH"];
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.windguru.cz/js/widget.php?"+(arg.join("&"));
      script.async = true;
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadWidget();
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      // Removing the script tag doesn't undo the execution, but avoids duplicates on remount.
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <section id="clima" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Clima</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Utilice nuestra estación meteorológica
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             Consulte el pronóstico detallado y las condiciones actuales directamente desde nuestra estación.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8">
            {/* The ID must match what's in the script */}
             <div className="rounded-xl shadow-2xl drop-shadow-xl/50 bg-white dark:bg-card w-full max-w-5xl">
              <div id="wg_fwdg_1176650_117_1770822001490"></div>
            </div>

            <Button asChild variant="outline" className="gap-2">
              <a href="https://www.windguru.cz/station/3887" target="_blank" rel="noopener noreferrer">
                Ver pronóstico completo
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
        </div>
        
      </div>
    </section>
  );
};
