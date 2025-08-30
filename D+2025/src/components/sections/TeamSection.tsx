import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';
import { teamMembers } from '../data/aboutUsData';

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Equipo de Especialistas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales altamente calificados comprometidos con tu salud bucal
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg mb-3" style={{ color: "#FE0000" }}>{member.role}</p>
                <p className="text-gray-600 mb-4">{member.experience}</p>
                <p className="text-gray-600 mb-4">{member.education}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Especialidades:</h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="mr-2" style={{ color: "#FE0000" }} />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}