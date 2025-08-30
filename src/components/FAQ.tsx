"use client";

"use client";
import { useState } from "react";
import { HelpCircle, Clock, Heart, Users, Shield, Star, CreditCard, Phone, Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cada cuánto debo visitar al dentista?",
    answer: "Recomendamos visitas cada 6 meses para limpiezas y revisiones preventivas. Sin embargo, algunos pacientes pueden necesitar visitas más frecuentes dependiendo de su salud bucal específica.",
    icon: <Clock className="text-white" size={22} />, color: "bg-blue-500"
  },
  {
    question: "¿Los tratamientos dentales duelen?",
    answer: "Utilizamos anestesia local y técnicas modernas que minimizan las molestias. La mayoría de nuestros pacientes reportan muy poco o ningún dolor durante los procedimientos. También ofrecemos sedación consciente para pacientes con ansiedad.",
    icon: <Heart className="text-white" size={22} />, color: "bg-red-500"
  },
  {
    question: "¿Qué incluye una consulta de primera vez?",
    answer: "La primera consulta incluye: examen clínico completo, radiografías digitales, evaluación de encías, diagnóstico detallado y plan de tratamiento personalizado. Todo esto sin costo adicional.",
    icon: <Users className="text-white" size={22} />, color: "bg-green-500"
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Sí, trabajamos con los principales seguros médicos y de gastos médicos mayores. Te ayudamos con la gestión de reembolsos y autorizaciones necesarias.",
    icon: <Shield className="text-white" size={22} />, color: "bg-purple-500"
  },
  {
    question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
    answer: "El tiempo varía según cada caso, pero generalmente oscila entre 12 a 24 meses. Con nuestra ortodoncia invisible, muchos casos se resuelven en 12-18 meses con excelentes resultados.",
    icon: <Clock className="text-white" size={22} />, color: "bg-orange-500"
  },
  {
    question: "¿Qué garantía ofrecen en sus tratamientos?",
    answer: "Ofrecemos garantía de hasta 5 años en implantes dentales, 2 años en coronas y prótesis, y garantía de por vida en ortodoncia (con uso adecuado de retenedores). Todos nuestros tratamientos están respaldados.",
    icon: <Star className="text-white" size={22} />, color: "bg-yellow-500"
  },
  {
    question: "¿Puedo financiar mi tratamiento?",
    answer: "Sí, ofrecemos planes de financiamiento flexibles desde 3 hasta 24 meses, algunos sin intereses. También aceptamos tarjetas de crédito y efectivo con descuentos especiales.",
    icon: <CreditCard className="text-white" size={22} />, color: "bg-blue-500"
  },
  {
    question: "¿Atienden emergencias dentales?",
    answer: "Sí, contamos con atención de urgencias dentales los 7 días de la semana en todas nuestras sucursales.",
    icon: <Phone className="text-white" size={22} />, color: "bg-indigo-500"
  }
];

export function FAQ() {
  const [open, setOpen] = useState(-1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", question: "" });

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-red-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <HelpCircle className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl">Encuentra respuestas rápidas a tus dudas más comunes. Si necesitas información específica, envíanos tu consulta y te responderemos personalmente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Preguntas frecuentes */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">Preguntas Más Frecuentes</h3>
              <p className="text-sm text-gray-500 mb-4">Hemos recopilado las preguntas que más nos hacen nuestros pacientes</p>
              <ul className="space-y-3">
                {faqs.map((faq, idx) => (
                  <li key={faq.question}>
                    <button
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 focus:outline-none"
                      onClick={() => setOpen(open === idx ? -1 : idx)}
                    >
                      <span className={`rounded-full p-2 ${faq.color}`}>{faq.icon}</span>
                      <span className="font-medium text-gray-900 text-left flex-1">{faq.question}</span>
                      <span className="ml-auto text-gray-400">{open === idx ? "▲" : "▼"}</span>
                    </button>
                    {open === idx && (
                      <div className="bg-gray-50 rounded-lg p-4 mt-2 text-gray-700 text-sm border border-gray-100">{faq.answer}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <div className="bg-red-50 rounded-xl p-4 border border-red-200 flex flex-col gap-2">
                <div className="font-semibold text-red-600 mb-1 flex items-center gap-2"><HelpCircle size={20} /> ¿Necesitas información adicional?</div>
                <p className="text-sm text-gray-700">Nuestro equipo está disponible para resolver cualquier duda específica sobre tu caso.</p>
                <div className="flex gap-2 mt-2">
                  <button className="bg-red-500 text-white px-4 py-2 rounded font-semibold text-sm">Llamar Ahora</button>
                  <button className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded font-semibold text-sm">Chat en Vivo</button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="flex flex-col h-full justify-between">
            <div className="bg-white rounded-xl shadow p-8 self-stretch flex flex-col justify-between h-full">
              <div>
                <h3 className="font-semibold text-lg mb-2">¿Tienes alguna pregunta específica?</h3>
                <p className="text-sm text-gray-500 mb-4">Envíanos tu consulta y te responderemos en menos de 24 horas</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Nombre completo *</label>
                      <input type="text" placeholder="Tu nombre completo" className="border rounded px-4 py-2 w-full" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Teléfono</label>
                      <input type="text" placeholder="(55) 1234-5678" className="border rounded px-4 py-2 w-full" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Correo electrónico *</label>
                    <input type="email" placeholder="tui@email.com" className="border rounded px-4 py-2 w-full" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Tema de consulta</label>
                    <select className="border rounded px-4 py-2 w-full" value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}>
                      <option value="">Selecciona el tema de tu consulta</option>
                      {faqs.map((faq, idx) => (
                        <option key={idx} value={faq.question}>{faq.question}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Tu pregunta *</label>
                    <textarea placeholder="Describe tu consulta o pregunta específica..." className="border rounded px-4 py-2 w-full min-h-[80px]" value={form.question} onChange={e => setForm(f => ({ ...f, question: e.target.value }))} />
                  </div>
                  <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded font-semibold w-full flex items-center justify-center gap-2"><HelpCircle size={18} /> Enviar Consulta</button>
                  <div className="text-xs text-gray-500 text-center">Te responderemos en menos de 24 horas</div>
                </form>
                <div className="mt-6 text-sm text-gray-700">
                  <div className="font-semibold mb-2">También puedes contactarnos:</div>
                  <div className="flex items-center gap-2 mb-1"><Phone size={16} className="text-red-500" /> (55) 1234-5678</div>
                  <div className="flex items-center gap-2 mb-1"><Mail size={16} className="text-red-500" /> info@dentalplus.mx</div>
                  <div className="flex items-center gap-2"><MessageCircle size={16} className="text-red-500" /> Chat en línea disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
