import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      age: 32,
      treatment: "Ortodoncia Invisible",
      image: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWwlMjBzbWlsZXxlbnwxfHx8fDE3NTY0ODU2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Increíble experiencia con la ortodoncia invisible. En 18 meses logré la sonrisa que siempre quise. El equipo fue muy profesional y el tratamiento fue completamente indoloro.",
      before: "Dientes apiñados",
      after: "Sonrisa perfectamente alineada"
    },
    {
      id: 2,
      name: "Carlos Ramírez",
      age: 45,
      treatment: "Implantes Dentales",
      image: "https://images.unsplash.com/photo-1703759354716-b777fd195508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpc2ZpZWQlMjBjdXN0b21lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjU1MTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Después de perder varios dientes, los implantes me devolvieron la confianza. El proceso fue más rápido de lo esperado y ahora puedo comer y sonreír sin preocupaciones.",
      before: "Pérdida de 3 molares",
      after: "Función masticatoria restaurada al 100%"
    },
    {
      id: 3,
      name: "Ana Martínez",
      age: 28,
      treatment: "Blanqueamiento Profesional",
      image: "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxlfGVufDF8fHx8MTc1NjU1MTcyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "El blanqueamiento profesional superó mis expectativas. Mis dientes se ven naturales pero notablemente más blancos. ¡Ahora sonrío con total confianza!",
      before: "Dientes amarillentos por café",
      after: "Sonrisa radiante y natural"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reales de transformación dental. Conoce las experiencias de quienes 
            confiaron en nosotros para mejorar su sonrisa y calidad de vida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 rounded-full overflow-hidden"
                >
                  <ImageWithFallback 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.age} años</p>
                  <p className="text-red-500 text-sm font-medium">{testimonial.treatment}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote size={24} className="text-red-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Before/After */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Antes:</p>
                    <p className="text-gray-600">{testimonial.before}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Después:</p>
                    <p className="text-gray-600">{testimonial.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "98%", label: "Satisfacción del paciente" },
            { number: "1,200+", label: "Tratamientos exitosos" },
            { number: "12+", label: "Años de experiencia" },
            { number: "5⭐", label: "Calificación promedio" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-red-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}