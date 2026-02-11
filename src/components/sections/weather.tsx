
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const WeatherSection = () => {
  useEffect(() => {
    // The Windguru script expects to find the container and inject content
    // We can directly use the logic from the provided script but adapted
    
    const containerId = "wg_fwdg_1176650_117_1770822001490";
    const scriptId = "windguru-script-" + containerId;

    if (!document.getElementById(scriptId)) {
        const arg = ["s=1176650" ,"m=117","uid=wg_fwdg_1176650_117_1770822001490" ,"wj=knots" ,"tj=c" ,"waj=m" ,"tij=cm" ,"odh=0" ,"doh=24" ,"fhours=240" ,"hrsm=3" ,"vt=forecasts" ,"lng=es" ,"p=WINDSPD,GUST,MWINDSPD,SMER,TMP,WCHILL,APCP1s,RH"];
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://www.windguru.cz/js/widget.php?"+(arg.join("&"));
        script.async = true;
        document.body.appendChild(script);
    }

    return () => {
        // Cleanup if navigating away? Windguru might leave global pollution, but removing script tag is good practice
        // However, removing the script tag doesn't undo the execution.
        // The widget likely modifies the DOM inside the container.
        const script = document.getElementById(scriptId);
        if (script) {
            script.remove();
        }
    };
  }, []);

  return (
    <section id="clima" className="py-20 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Clima</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Utiliza nuestra estación meteorológica
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
