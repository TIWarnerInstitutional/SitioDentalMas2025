import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, CheckCircle, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { benefits, requirements, includesPackage, successStories, stats, investmentBreakdown } from '../data/franchiseData';

export function FranchisePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
              Franquicias <span style={{ color: "#FE0000" }}>Dental+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Únete a la red de clínicas dentales más exitosa de México y transforma tu futuro profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 text-lg"
                style={{ backgroundColor: "#FE0000" }}
              >
                Solicitar Información
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2"
              >
                Descargar Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: "#FE0000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir Dental+?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te ofrecemos un modelo de negocio comprobado con el respaldo de una marca líder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#FE0000" }}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Inversión y Retorno</h2>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Desglose de Inversión</h3>
                <div className="space-y-4">
                  {investmentBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-gray-900">{item.amount}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total aproximado</span>
                      <span style={{ color: "#FE0000" }}>$800,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">💰 Rentabilidad Proyectada</h4>
                <p className="text-green-700">
                  <strong>ROI promedio:</strong> 35-45% anual<br/>
                  <strong>Recuperación:</strong> 24-36 meses<br/>
                  <strong>Ingresos mensuales promedio:</strong> $120,000 - $200,000
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Clínica dental moderna"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements & Package */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos del Franquiciatario</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#FE0000" }} />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Package Includes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">El Paquete Incluye</h3>
              <div className="space-y-4">
                {includesPackage.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#FE0000" }} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Historias de Éxito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a algunos de nuestros franquiciatarios exitosos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600 text-sm">{story.location}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-2xl font-bold" style={{ color: "#FE0000" }}>+{story.growth}</div>
                      <div className="text-gray-500 text-xs">crecimiento</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">"{story.testimonial}"</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{story.timeWithFranchise} con Dental+</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para comenzar tu franquicia?
              </h2>
              <p className="text-xl text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input id="name" type="text" required />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="city">Ciudad de interés</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guadalajara">Guadalajara</SelectItem>
                      <SelectItem value="monterrey">Monterrey</SelectItem>
                      <SelectItem value="puebla">Puebla</SelectItem>
                      <SelectItem value="queretaro">Querétaro</SelectItem>
                      <SelectItem value="tijuana">Tijuana</SelectItem>
                      <SelectItem value="otra">Otra ciudad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="investment">Capital disponible</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="800k-1m">$800,000 - $1,000,000</SelectItem>
                      <SelectItem value="1m-1.5m">$1,000,000 - $1,500,000</SelectItem>
                      <SelectItem value="1.5m+">Más de $1,500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Experiencia en salud</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dentist">Soy dentista</SelectItem>
                      <SelectItem value="health">Experiencia en sector salud</SelectItem>
                      <SelectItem value="business">Experiencia empresarial</SelectItem>
                      <SelectItem value="none">Sin experiencia previa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Mensaje adicional</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos sobre tus objetivos y expectativas..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full text-white text-lg py-6"
                style={{ backgroundColor: "#FE0000" }}
              >
                Enviar Solicitud
              </Button>

              <p className="text-center text-sm text-gray-500">
                Al enviar este formulario, aceptas que nos pongamos en contacto contigo para brindarte información sobre nuestras franquicias.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: "#FE0000" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Tu futuro profesional comienza aquí
            </h2>
            <p className="text-xl text-red-100">
              Únete a la familia Dental+ y construye un negocio próspero con nuestra marca líder
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50"
              >
                Llamar al (55) 1234-5678
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Descargar Brochure PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}