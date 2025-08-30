import { Award, Users, Heart, Shield } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutUs() {
  const features = [
    {
      icon: Award,
      title: "Excelencia Profesional",
      description: "Dentistas certificados con años de experiencia y formación continua."
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada paciente recibe un tratamiento único adaptado a sus necesidades."
    },
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Nos preocupamos por tu bienestar general, no solo por tu sonrisa."
    },
    {
      icon: Shield,
      title: "Tecnología Segura",
      description: "Equipos modernos y protocolos de seguridad de última generación."
    }
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-900"
              >
                ¿Quiénes Somos?
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-1" style={{ backgroundColor: "#FE0000" }}
              ></motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Somos una clínica dental moderna comprometida con brindar la mejor atención 
                odontológica. Con más de 12 años de experiencia, nuestro equipo de profesionales 
                altamente capacitados utiliza tecnología de vanguardia para garantizar 
                tratamientos seguros y efectivos.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Nuestra misión es crear sonrisas saludables y hermosas, proporcionando una 
                experiencia cómoda y profesional en cada visita.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"
                    >
                      <Icon size={24} style={{ color: "#FE0000" }} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] rounded-xl overflow-hidden"
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY1NTE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Clínica dental moderna"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-white p-6 rounded-xl" style={{ backgroundColor: "#FE0000" }}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold"
                  >
                    1,800+
                  </motion.div>
                  <div className="text-red-100">Pacientes satisfechos</div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-12"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NjU1MTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dentista profesional"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}