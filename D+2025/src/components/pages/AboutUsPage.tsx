import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award } from 'lucide-react';
import { Button } from '../ui/button';
import { TeamSection } from '../sections/TeamSection';
import { values, achievements, certifications } from '../data/aboutUsData';

export function AboutUsPage() {
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
              Conoce a <span style={{ color: "#FE0000" }}>Dental+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Más de 15 años transformando sonrisas con pasión, dedicación y la tecnología más avanzada
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Dental+ nació en 2009 con una visión clara: revolucionar la atención dental en México 
                  combinando tecnología de vanguardia con un trato humano excepcional. Desde nuestros 
                  inicios en una pequeña clínica en el centro de la Ciudad de México, hemos crecido 
                  hasta convertirnos en una de las cadenas dentales más confiables del país.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nuestro compromiso siempre ha sido el mismo: ofrecer tratamientos dentales de la más 
                  alta calidad, accesibles para todas las familias mexicanas, con un enfoque integral 
                  que va más allá de la salud bucal para mejorar la calidad de vida de nuestros pacientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#FE0000" }}>Misión</h3>
                  <p className="text-gray-600">
                    Transformar sonrisas y mejorar la calidad de vida de nuestros pacientes 
                    a través de tratamientos dentales excepcionales y tecnología de vanguardia.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#FE0000" }}>Visión</h3>
                  <p className="text-gray-600">
                    Ser la red de clínicas dentales líder en México, reconocida por su 
                    excelencia, innovación y compromiso con la salud bucal.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Moderna clínica dental"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada una de nuestras acciones y definen quiénes somos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 ${value.color}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Achievements */}
      <section className="py-20" style={{ backgroundColor: "#FE0000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Nuestros Logros</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Números que reflejan nuestro compromiso y excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-red-100">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificaciones y Reconocimientos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avalados por las instituciones más prestigiosas del sector dental
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FE0000" }}>
                  <Award size={24} className="text-white" />
                </div>
                <span className="font-medium text-gray-900">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              ¿Listo para conocer la diferencia Dental+?
            </h2>
            <p className="text-xl text-gray-600">
              Agenda tu consulta gratuita y descubre por qué miles de pacientes confían en nosotros
            </p>
            <Button 
              size="lg" 
              className="text-white px-8 py-4 text-lg"
              style={{ backgroundColor: "#FE0000" }}
            >
              Agendar Consulta Gratuita
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}