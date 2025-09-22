"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, Award, Shield } from "lucide-react";
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
  { name: "Preguntas Frecuentes", href: "/#faq" }
];

import sucursales from '../data/sucursales';

// take first 3 sucursales for footer display (can change order in data file)
const footerLocations = (sucursales as any[]).slice(0, 3);

const certifications = [
  { icon: Award, text: "Certificado COFEPRIS" },
  { icon: Shield, text: "Protocolos de Bioseguridad COVID-19" },
  { icon: Award, text: "Miembro ADM" }
];

export function Footer() {
  const TikTok = ({ size = 20, className = "", ...props }: { size?: number; className?: string } & React.SVGProps<SVGSVGElement>) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M12 2v8.18a3.82 3.82 0 1 0 3.82 3.82V7.5h2.36V3.75H12z" fill="currentColor" />
    </svg>
  );
  const WhatsApp = ({ size = 20, className = "", ...props }: { size?: number; className?: string } & React.SVGProps<SVGSVGElement>) => (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path fill="currentColor" d="M380.9 97.1C339.7 55.9 288.7 32 234.4 32 131.7 32 46.4 117.3 46.4 219.9c0 39 10.3 76.9 29.8 110.5L32 480l154.4-42.1c31.6 17.3 67.4 26.3 103.9 26.3 102.7 0 188-85.3 188-190 0-54.4-28.3-104.4-75.4-143.6zM317.7 341.2c-10.8 30.5-43 57.4-103.6 34.1-70.2-25.3-121.9-92.7-129.9-100.9-8.1-8.1-43.6-58.8-43.6-112.4 0-82.5 55.6-121.7 80.4-121.7 31.2 0 53.7 0 77.2 20.9 23.6 20.9 31.9 49.9 40.1 79.4 8.1 29.6 27.2 42 54.1 59.9 12.9 8.1 21.9 20.9 13.8 35.7-8.2 14.9-17.6 29.6-29.6 43.6-12 14-24.8 21.2-45 16.1-20.1-5-41.7-14.4-70.2-36-28.6-21.6-43.8-38.1-61.1-56.2-17.4-18.1-29.8-30.9-21.7-48.6 8.1-17.7 35.4-28 59.6-28 24.2 0 41.7 14.9 61.1 33.7 19.4 18.8 37.7 40.7 57 57.8 19.4 17.1 49.9 31.9 66.8 39.8 16.9 7.9 34 4 44.8-18.8 10.8-22.9 12.9-41.7 9.7-48.6-3.2-6.9-14.9-20.9-29.6-30.9-14.8-10-35-22.9-49.9-27.9-14.9-5-25.2-3.2-33.4 2.4-8.2 5.6-23.7 19.4-30.9 25.9-7.1 6.5-13.8 7.9-20.9 5-7.1-3-13.1-7.9-21.1-16.1-8-8.1-15.2-16.9-23.3-16.9-7.9 0-14.4 7.9-17.2 12.9-2.8 4.9-9.7 18.8 0 35 9.7 16.1 30.9 37.7 45 49.9 14.1 12.1 68.3 88.6 127 111.5 58.7 22.9 86.6 11.8 101.5-19.4 14.9-31.2 14.9-48.6 9.7-56-5-7.4-18.8-12.1-30.9-4.2z" />
    </svg>
  );
  const socialLinks = [
    { icon: WhatsApp, label: "WhatsApp", href: "https://wa.me/525532183670" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dentalmas.mx" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dentalmas.mx" },
    { icon: TikTok, label: "TikTok", href: "https://www.tiktok.com/@dentalmas.mx" }
  ];
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
           {/* <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Ingresa tu email" className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500" />
                <Button className="bg-red-500 hover:bg-red-600 whitespace-nowrap">Recibir Ofertas</Button>
              </div>
              <p className="text-gray-400 text-sm">Recibe promociones exclusivas y consejos de salud dental</p>
            </div>*/}
          </div>
        </section>
        {/* Main Content */}
        <section className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-red-500 mb-4">Dental+</h2>
                <p className="text-gray-300 leading-relaxed mb-6">Transformando sonrisas desde 2015. Somos la clínica dental líder en México con tecnología de vanguardia y los mejores especialistas certificados internacionalmente.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><Phone size={18} /></div>
                  <div>
                    <p className="font-semibold">Línea de Telefono</p>
                    <p className="text-red-400">(55) 3218-3670</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"><Mail size={18} /></div>
                  <div>
                    <p className="font-semibold">Email General</p>
                    <p className="text-gray-300">Contacto@clinicasdentalmas.com</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4">Síguenos en redes sociales</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.label} href={social.href} target={social.href.startsWith('http') ? "_blank" : undefined} rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300">
                        {social.label === 'WhatsApp' ? (
                          <img src="/icon-whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                        ) : (
                          <Icon size={20} className="text-white" />
                        )}
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
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-red-400 transition-colors group inline-block"
                      onClick={(e) => {
                        try {
                          const href = link.href || '';
                          // handle hashes both `#id` and `/#id`
                          if (href.startsWith('#') || href.startsWith('/#')) {
                            e.preventDefault();
                            const id = href.split('#')[1];
                            if (window.location.pathname === '/') {
                              // attempt to scroll, with small retries if element isn't yet available
                              let attempts = 0;
                              const tryScroll = () => {
                                const el = document.getElementById(id || '');
                                if (el) {
                                  // compute offset from header if present
                                  const header = document.querySelector('header');
                                  const headerHeight = header && (header as HTMLElement).offsetHeight ? (header as HTMLElement).offsetHeight : 72;
                                  const extra = 16; // small gap
                                  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - extra;
                                  window.scrollTo({ top, behavior: 'smooth' });
                                } else if (attempts < 10) {
                                  attempts += 1;
                                  setTimeout(tryScroll, 100);
                                }
                              };
                              tryScroll();
                            } else {
                              // navigate to home with hash
                              window.location.href = href.startsWith('/#') ? href : `/#${id}`;
                            }
                          }
                        } catch (err) {
                          // ignore
                        }
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Información Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/terminos-y-condiciones" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Términos y Condiciones</a>
                  </li>
                  <li>
                    <a href="/aviso-de-privacidad" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Aviso de Privacidad</a>
                  </li>
                  <li>
                    <a href="/politica-de-cookies" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Política de Cookies</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Locations */}
            <div>
              <div className="space-y-6">
                {footerLocations.map((s: any) => (
                  <div key={s.nombre} className="space-y-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                    <h4 className="font-semibold text-red-400">{s.nombre}</h4>
                    <div className="flex items-start space-x-2">
                      <MapPin size={14} className="text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{s.direccion}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={14} className="text-gray-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{s.telefono}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} className="text-gray-400 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{s.horario}</p>
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
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-sm text-center">
                © 2025 Dental+. Todos los derechos reservados. | Desarrollado con ❤️ en México
              </div>
            {/*  <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>COFEPRIS: 123456789</span>
                <span>•</span>
                <span>ISO 9001:2015</span>
                <span>•</span>
                <span>NOM-013-SSA2</span>
              </div>*/}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
