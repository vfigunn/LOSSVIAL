import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2
} from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
import { DEFAULT_WA_MESSAGE, waLink } from "@/lib/whatsapp";

const OTHER_SERVICE = "Otro trabajo";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    details: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute("data-animate") || "0";
            setTimeout(() => {
              el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Arma el mensaje y abre WhatsApp: no hay envío por servidor.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [DEFAULT_WA_MESSAGE, "", `Nombre: ${formData.name.trim()}`];
    if (formData.service) lines.push(`Servicio: ${formData.service}`);
    if (formData.details.trim()) lines.push(`Detalle: ${formData.details.trim()}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="py-20 bg-background" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16" data-animate="0">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Contacto</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Póngase en contacto con nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para ayudarle con su próximo proyecto. 
            Contáctenos para solicitar un presupuesto sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6" data-animate="100">
            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building2 className="h-5 w-5 text-vial-yellow" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3 group/item">
                  <div className="flex items-center justify-center w-10 h-10 bg-whatsapp/15 rounded-lg flex-shrink-0">
                    <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-whatsapp transition-colors">
                        {BUSINESS.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0 group-hover/item:bg-vial-yellow/30 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Teléfono</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-vial-yellow transition-colors">
                        {BUSINESS.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0 group-hover/item:bg-vial-yellow/30 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                    <p className="text-muted-foreground text-sm">
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.region}<br />
                      {BUSINESS.address.countryName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0 group-hover/item:bg-vial-yellow/30 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href={`mailto:${BUSINESS.email}`} className="hover:text-vial-yellow transition-colors">
                        {BUSINESS.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group/item">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0 group-hover/item:bg-vial-yellow/30 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horarios</h4>
                    <p className="text-muted-foreground text-sm">
                      <strong>{BUSINESS.hours.label}:</strong><br />
                      {BUSINESS.hours.range}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-animate="200">
            <Card className="shadow-card hover:shadow-construction transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Solicitar Presupuesto</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Contacto directo */}
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-whatsapp/30 bg-whatsapp/5 p-5">
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-primary">¿Más rápido? Escríbanos directo por WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Le respondemos con un presupuesto sin compromiso.</p>
                  </div>
                  <WhatsAppButton label="Abrir WhatsApp" className="w-full sm:w-auto shrink-0" />
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  O complete estos datos y le armamos el mensaje:
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Su nombre"
                        required
                        maxLength={100}
                        className="focus:border-vial-yellow focus:ring-vial-yellow/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-vial-yellow"
                      >
                        <option value="">Seleccione un servicio</option>
                        {SERVICES.map((service) => (
                          <option key={service.slug} value={service.shortName}>
                            {service.shortName}
                          </option>
                        ))}
                        <option value={OTHER_SERVICE}>{OTHER_SERVICE}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Detalle (opcional)</Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Ubicación, medidas aproximadas, plazos..."
                      className="min-h-[96px] focus:border-vial-yellow focus:ring-vial-yellow/30"
                      maxLength={600}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 [&_svg]:size-5"
                  >
                    <WhatsAppIcon />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Se abrirá WhatsApp con su mensaje listo para enviar. Sus datos no se almacenan en este sitio.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12" data-animate="0">
          <div className="bg-muted/30 p-6 text-center rounded-t-xl border-b">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Nuestra Ubicación</h3>
            <p className="text-muted-foreground">
              Nos encontramos en el corazón de Gualeguaychú, sirviendo a toda la región de Entre Ríos
            </p>
          </div>
          <div className="bg-white rounded-b-xl shadow-construction overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.330214529101!2d-58.5408700239565!3d-32.99506857433655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007e99a2bef41%3A0x99123b9952f1df77!2sBlvd.%20Antonio%20Daneri%20919%2C%20E2820%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1760565184183!5m2!1ses-419!2sar" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Loss Vial S.A. en Gualeguaychú, Entre Ríos"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
