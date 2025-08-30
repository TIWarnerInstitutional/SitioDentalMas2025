import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
    acceptTerms: false
  });

  const services = [
    "Consulta general",
    "Limpieza dental",
    "Blanqueamiento",
    "Ortodoncia",
    "Implantes dentales",
    "Endodoncia",
    "Cirugía oral",
    "Odontopediatría",
    "Emergencia dental"
  ];

  const locations = [
    "Sucursal Centro",
    "Sucursal Polanco", 
    "Sucursal Santa Fe"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }
    
    // Simular envío del formulario
    toast.success("¡Formulario enviado exitosamente! Te contactaremos pronto.");
    console.log("Form data:", formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: "",
      acceptTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agenda tu Cita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para programar tu cita. 
            O llámanos directamente para atención inmediata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Solicitar Cita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="(55) 1234-5678"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Servicio de interés</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Sucursal preferida</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una sucursal" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Cuéntanos más detalles sobre tu caso o pregunta..."
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Acepto los{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    términos y condiciones
                  </a>{" "}
                  y el{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    aviso de privacidad
                  </a>
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 text-white py-6"
                disabled={!formData.acceptTerms}
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                    <p className="text-gray-600">Centro: (55) 1234-5678</p>
                    <p className="text-gray-600">Polanco: (55) 8765-4321</p>
                    <p className="text-gray-600">Santa Fe: (55) 5555-0123</p>
                    <p className="text-red-500 text-sm font-medium">Emergencias 24/7: (55) 911-DENT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@dentalplus.mx</p>
                    <p className="text-gray-600">citas@dentalplus.mx</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 15:00</p>
                    <p className="text-gray-600">Domingos: Solo emergencias</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">¿Necesitas atención inmediata?</h4>
              <div className="space-y-3">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  <Phone size={16} className="mr-2" />
                  Llamar Ahora
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail size={16} className="mr-2" />
                  Enviar WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}