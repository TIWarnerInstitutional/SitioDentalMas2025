
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    age: 32,
    treatment: "Ortodoncia Invisible",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
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
    image: "https://randomuser.me/api/portraits/men/32.jpg",
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
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    testimonial: "El blanqueamiento profesional superó mis expectativas. Mis dientes se ven naturales pero notablemente más blancos. ¡Ahora sonrío con total confianza!",
    before: "Dientes amarillentos por café",
    after: "Sonrisa radiante y natural"
  }
];

const metrics = [
  { value: "98%", label: "Satisfacción del paciente" },
  { value: "1,200+", label: "Tratamientos exitosos" },
  { value: "12+", label: "Años de experiencia" },
  { value: <span className="flex items-center gap-1">5 <Star className="text-yellow-400" size={18} /></span>, label: "Calificación promedio" }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Lo que dicen nuestros pacientes</h2>
        <p className="text-gray-600 text-center mb-8">Casos reales de transformación dental. Conoce las experiencias de quienes confiaron en nosotros para mejorar su sonrisa y calidad de vida.</p>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border" />
                <div>
                  <span className="font-semibold text-sm text-gray-900">{t.name}</span>
                  <span className="block text-xs text-gray-500">{t.age} años</span>
                  <span className="block text-xs text-red-500 font-semibold">{t.treatment}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-2 text-sm">“{t.testimonial}”</blockquote>
              <div className="flex gap-4 text-xs text-gray-500 mt-2">
                <div>
                  <span className="font-semibold">Antes:</span> {t.before}
                </div>
                <div>
                  <span className="font-semibold">Después:</span> {t.after}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="text-2xl font-bold text-red-500">
              {m.value}
              <div className="text-sm font-normal text-gray-700 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
