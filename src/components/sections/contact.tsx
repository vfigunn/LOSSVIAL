import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building2
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "El nombre es requerido" }).max(100, { message: "Máximo 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Máximo 255 caracteres" }),
  phone: z.string().trim().optional(),
  subject: z.string().trim().nonempty({ message: "El asunto es requerido" }).max(150, { message: "Máximo 150 caracteres" }),
  message: z.string().trim().nonempty({ message: "El mensaje es requerido" }).max(1000, { message: "Máximo 1000 caracteres" })
});

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hola Loss Vial S.A., me contacto desde su sitio web.\n\n` +
        `Nombre: ${validatedData.name}\n` +
        `Email: ${validatedData.email}\n` +
        `Teléfono: ${validatedData.phone || 'No proporcionado'}\n` +
        `Asunto: ${validatedData.subject}\n\n` +
        `Mensaje: ${validatedData.message}`
      );
      
      window.open(`https://wa.me/5493446425994?text=${whatsappMessage}`, '_blank');

      toast({
        title: "Mensaje enviado correctamente",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Error en el formulario",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error al enviar mensaje",
          description: "Por favor, intente nuevamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-vial-yellow text-vial-yellow-foreground">Contacto</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Póngase en contacto con nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para ayudarle con su próximo proyecto. 
            Contáctenos para solicitar un presupuesto sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building2 className="h-5 w-5" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                    <p className="text-muted-foreground text-sm">
                      España 296<br />
                      Gualeguaychú, Entre Ríos<br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Teléfonos</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+5493446425994" className="hover:text-vial-yellow transition-colors">
                        (03446) 42-5994
                      </a><br />
                      <a href="tel:+5493446454470" className="hover:text-vial-yellow transition-colors">
                        (03446) 45-4470
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:vialoss@hotmail.com" className="hover:text-vial-yellow transition-colors">
                        vialoss@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-vial-yellow/20 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-vial-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horarios</h4>
                    <p className="text-muted-foreground text-sm">
                      <strong>Lunes a Viernes:</strong><br />
                      9:00 - 13:00 / 16:00 - 19:30<br />
                      <strong>Sábados:</strong><br />
                      9:00 - 13:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Solicitar Presupuesto</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Su nombre completo"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="su.email@ejemplo.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(03446) 123456"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Motivo de consulta"
                        required
                        maxLength={150}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa su proyecto o consulta..."
                      className="min-h-[120px]"
                      required
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formData.message.length}/1000 caracteres
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-vial-yellow hover:bg-vial-yellow/90 text-vial-yellow-foreground shadow-vial"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, será redirigido a WhatsApp para completar el contacto.
                    Sus datos no se almacenan en nuestros servidores.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="bg-muted/30 p-6 text-center border-b">
                <h3 className="text-xl font-bold text-primary mb-2">Nuestra Ubicación</h3>
                <p className="text-muted-foreground">
                  Nos encontramos en el corazón de Gualeguaychú, sirviendo a toda la región de Entre Ríos
                </p>
              </div>
              <div className="relative h-96 bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-vial-yellow mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    <strong>España 296, Gualeguaychú, Entre Ríos</strong><br />
                    Mapa interactivo disponible próximamente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};