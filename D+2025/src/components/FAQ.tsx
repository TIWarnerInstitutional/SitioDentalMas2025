import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MessageCircle, Send, HelpCircle, Clock, Shield, Users, Star, Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from 'motion/react';

export function FAQ() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const faqs = [
    {
      question: "¿Cada cuánto debo visitar al dentista?",
      answer: "Recomendamos visitas cada 6 meses para limpiezas y revisiones preventivas. Sin embargo, algunos pacientes pueden necesitar visitas más frecuentes dependiendo de su salud bucal específica.",
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      question: "¿Los tratamientos dentales duelen?",
      answer: "Utilizamos anestesia local y técnicas modernas que minimizan las molestias. La mayoría de nuestros pacientes reportan muy poco o ningún dolor durante los procedimientos. También ofrecemos sedación consciente para pacientes con ansiedad.",
      icon: Heart,
      color: "bg-red-500"
    },
    {
      question: "¿Qué incluye una consulta de primera vez?",
      answer: "La primera consulta incluye: examen clínico completo, radiografías digitales, evaluación de encías, diagnóstico detallado y plan de tratamiento personalizado. Todo esto sin costo adicional.",
      icon: Users,
      color: "bg-green-500"
    },
    {
      question: "¿Aceptan seguros médicos?",
      answer: "Sí, trabajamos con los principales seguros médicos y de gastos médicos mayores. Te ayudamos con la gestión de reembolsos y autorizaciones necesarias.",
      icon: Shield,
      color: "bg-purple-500"
    },
    {
      question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
      answer: "El tiempo varía según cada caso, pero generalmente oscila entre 12 a 24 meses. Con nuestra ortodoncia invisible, muchos casos se resuelven en 12-18 meses con excelentes resultados.",
      icon: Clock,
      color: "bg-orange-500"
    },
    {
      question: "¿Qué garantía ofrecen en sus tratamientos?",
      answer: "Ofrecemos garantía de hasta 5 años en implantes dentales, 2 años en coronas y prótesis, y garantía de por vida en ortodoncia (con uso adecuado de retenedores). Todos nuestros tratamientos están respaldados.",
      icon: Star,
      color: "bg-yellow-500"
    },
    {
      question: "¿Puedo financiar mi tratamiento?",
      answer: "Sí, ofrecemos planes de financiamiento flexibles desde 3 hasta 24 meses, algunos sin intereses. También aceptamos tarjetas de crédito y efectivo con descuentos especiales.",
      icon: HelpCircle,
      color: "bg-pink-500"
    },
    {
      question: "¿Atienden emergencias dentales?",
      answer: "Sí, contamos con servicio de urgencias dentales. Llama a cualquiera de nuestras sucursales y te atenderemos el mismo día. Para emergencias fuera de horario, tenemos un número de contacto 24/7.",
      icon: Phone,
      color: "bg-indigo-500"
    }
  ];

  const subjects = [
    "Consulta General",
    "Tratamiento de Ortodoncia",
    "Implantes Dentales",
    "Blanqueamiento Dental",
    "Emergencia Dental",
    "Información de Precios",
    "Segundas Opiniones",
    "Otro"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Consulta enviada! Te responderemos en menos de 24 horas.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FE0000" }}>
              <HelpCircle size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas rápidas a tus dudas más comunes. Si necesitas información específica, 
            envíanos tu consulta y te responderemos personalmente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Preguntas Más Frecuentes
              </h3>
              <p className="text-gray-600">
                Hemos recopilado las preguntas que más nos hacen nuestros pacientes
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="bg-white border-2 border-gray-100 rounded-2xl px-6 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-red-500 transition-colors py-6">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`w-12 h-12 ${faq.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent size={20} className="text-white" />
                          </motion.div>
                          <span className="flex-1">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-6 ml-16">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200"
            >
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <HelpCircle size={20} style={{ color: "#FE0000" }} />
                ¿Necesitas información adicional?
              </h4>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está disponible para resolver cualquier duda específica sobre tu caso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="flex-1 justify-start hover:bg-red-50 hover:border-red-300">
                    <Phone size={16} className="mr-2" style={{ color: "#FE0000" }} />
                    Llamar Ahora
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="flex-1 justify-start hover:bg-red-50 hover:border-red-300">
                    <MessageCircle size={16} className="mr-2" style={{ color: "#FE0000" }} />
                    Chat en Vivo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                ¿Tienes alguna pregunta específica?
              </h3>
              <p className="text-gray-600">
                Envíanos tu consulta y te responderemos en menos de 24 horas
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="faq-name">Nombre completo *</Label>
                  <Input
                    id="faq-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Tu nombre completo"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="faq-phone">Teléfono</Label>
                  <Input
                    id="faq-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(55) 1234-5678"
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="faq-email">Correo electrónico *</Label>
                <Input
                  id="faq-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="tu@email.com"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="faq-subject">Tema de consulta</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                    <SelectValue placeholder="Selecciona el tema de tu consulta" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="faq-message">Tu pregunta *</Label>
                <Textarea
                  id="faq-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  placeholder="Describe tu consulta o pregunta específica..."
                  rows={5}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-lg group"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar Consulta
              </Button>

              <div className="text-center text-sm text-gray-500">
                Te responderemos en menos de 24 horas
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">También puedes contactarnos:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone size={18} className="text-red-500" />
                  <span>(55) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={18} className="text-red-500" />
                  <span>info@dentalplus.mx</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MessageCircle size={18} className="text-red-500" />
                  <span>Chat en línea disponible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}