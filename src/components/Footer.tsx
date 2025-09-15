import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Clock, Award, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const services = [
  { name: "Consulta General", popular: false },
  { name: "Limpieza Dental", popular: true },
  { name: "Blanqueamiento", popular: true },
  { name: "Ortodoncia Invisible", popular: true },
  { name: "Implantes Dentales", popular: false },
  { name: "Endodoncia", popular: false },
  { name: "Cirugía Oral", popular: false },
  { name: "Odontopediatría", popular: false }
];

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Quiénes Somos", href: "/quienes-somos" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonios", href: "/#testimonios" },
  { name: "Preguntas Frecuentes", href: "/#preguntas" }
];

const locations = [
  {
    name: "Centro",
    address: "Av. Juárez #123, Centro Histórico, CDMX",
    phone: "(55) 1234-5678",
    hours: "Lun-Vie: 9:00-19:00"
  },
  {
    name: "Polanco",
    address: "Av. Presidente Masaryk #456, Polanco, CDMX",
    phone: "(55) 8765-4321",
    hours: "Lun-Vie: 8:00-20:00"
  },
  {
    name: "Santa Fe",
    address: "Av. Santa Fe #789, Santa Fe, CDMX",
    phone: "(55) 5555-0123",
    hours: "Lun-Vie: 9:00-19:00"
  }
];

const certifications = [
  { icon: Award, text: "Certificado COFEPRIS" },
  { icon: Shield, text: "ISO 9001:2015" },
  { icon: Award, text: "Miembro ADA" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <section className="border-b border-gray-700 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">¿Listo para tu mejor sonrisa?</h3>
              <p className="text-gray-300 leading-relaxed">Agenda tu cita hoy mismo y descubre por qué somos la clínica dental más confiable de la Ciudad de México.</p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Ingresa tu email" className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500" />
                <Button className="bg-red-500 hover:bg-red-600 whitespace-nowrap">Recibir Ofertas</Button>
              </div>
              <p className="text-gray-400 text-sm">Recibe promociones exclusivas y consejos de salud dental</p>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <section className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-red-500 mb-4">Dental+</h2>
                <p className="text-gray-300 leading-relaxed mb-6">Transformando sonrisas desde 2012. Somos la clínica dental líder en México con tecnología de vanguardia y los mejores especialistas certificados internacionalmente.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><Phone size={18} /></div>
                  <div>
                    <p className="font-semibold">Línea de Emergencias 24/7</p>
                    <p className="text-red-400">(55) 911-DENT</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><Mail size={18} /></div>
                  <div>
                    <p className="font-semibold">Email General</p>
                    <p className="text-gray-300">info@dentalplus.mx</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4">Síguenos en redes sociales</p>
                <div className="flex space-x-3">
                  {[{ icon: Facebook, label: "Facebook" }, { icon: Instagram, label: "Instagram" }, { icon: Twitter, label: "Twitter" }, { icon: Linkedin, label: "LinkedIn" }].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.label} href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300">
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Nuestros Servicios</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <div className="text-gray-300 hover:text-red-400 transition-colors flex items-center group">
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      {service.popular && (<span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">Popular</span>)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <div className="text-gray-300 hover:text-red-400 transition-colors group">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">{link.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Información Legal</h4>
                <ul className="space-y-2">
                  {["Términos y Condiciones", "Aviso de Privacidad", "Política de Cookies"].map((item) => (
                    <li key={item}>
                      <div className="text-gray-400 hover:text-red-400 transition-colors text-sm">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Locations */}
            <div>
              <div className="space-y-6">
                {locations.map((location) => (
                  <div key={location.name} className="space-y-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <h4 className="font-semibold text-red-400">{location.name}</h4>
                    <div className="flex items-start space-x-2">
                      <MapPin size={14} className="text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={14} className="text-gray-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} className="text-gray-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{location.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div className="border-t border-gray-700 py-8 col-span-full">
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div key={cert.text} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><Icon size={20} /></div>
                      <div>
                        <p className="font-semibold text-white">{cert.text}</p>
                        <p className="text-gray-400 text-sm">Certificación Oficial</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* Bottom Bar */}
        <section>
          <div className="border-t border-gray-700 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Dental+. Todos los derechos reservados. | Desarrollado con ❤️ en México
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>COFEPRIS: 123456789</span>
                <span>•</span>
                <span>ISO 9001:2015</span>
                <span>•</span>
                <span>NOM-013-SSA2</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
