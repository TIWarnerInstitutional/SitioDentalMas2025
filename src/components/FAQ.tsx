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
    question: "¿Qué incluye la consulta de valoración inicial?",
    answer: "Realizamos una revisión completa con el especialista, quien evaluará tu caso y te presentará un plan de tratamiento totalmente personalizado, resolviendo todas tus dudas.",
    icon: <Users className="text-white" size={22} />, color: "bg-green-500"
  },
  {
    question: "¿Qué tratamientos ofrecen?",
    answer: "Ofrecemos una amplia variedad de tratamientos diseñados para cuidar y transformar tu sonrisa: ortodoncia (brackets convencionales y de autoligado), alineadores transparentes, blanqueamientos, limpiezas profesionales, endodoncia, prótesis, implantes dentales ¡y mucho más! ",
    icon: <Shield className="text-white" size={22} />, color: "bg-purple-500"
  },
  {
    question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
    answer: "El tiempo varía según las necesidades de cada paciente . En la mayoría de los casos, los resultados comienzan a notarse entre los 18 y 24 meses.",
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
  answer: "Sí, atendemos urgencias dentales el mismo día.Te recomendamos comunicarte con nosotros lo antes posible para brindarte atención inmediata. Puedes agendar tu cita en línea de manera rápida o, si lo prefieres, contactar a uno de nuestros asesores para que te ayude a coordinar tu atención.",
    icon: <Phone className="text-white" size={22} />, color: "bg-indigo-500"
  }
];

export function FAQ() {
  const [open, setOpen] = useState(-1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", question: "" });
  const phoneNumber = "+525512345678"; // (55) 1234-5678 formatted for tel: links

  const openChat = () => {
    if (typeof window === 'undefined') return;
    try {
      const w = window as any;
      const attemptFns = [
        () => w.HubSpotConversations?.widget?.open?.(),
        () => w.hsConversations?.widget?.open?.(),
        () => w.hubspot?.conversations?.widget?.open?.(),
        () => w.HubSpotConversations?.open?.(),
      ];
      for (const fn of attemptFns) {
        try {
          const res = fn();
          if (res !== undefined) return;
        } catch (e) {
          // ignore and continue
        }
      }

      // Fallback: try to find a visible chat toggle/button injected by the script and click it
      const selectors = [
        '[id^="hubspot-messages-"], .hubspot-messages-iframe-container, .hubspot-conversations-iframe, .hbspt-chat-widget, .chat-widget, button[data-testid*="hs-messages"], button[aria-label*="chat" i]'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel) as HTMLElement | null;
        if (el) {
          // If it's a container, try finding a button inside
          const btn = el.querySelector('button') as HTMLElement | null;
          (btn || el).click();
          return;
        }
      }
    } catch (err) {
      // final fallback: do nothing
      // console.warn('Unable to open chat widget', err);
    }
  };

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
              <h3 className="font-semibold text-gray-600 mb-2">Preguntas Más Frecuentes</h3>
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
                  <a
                    href={`tel:${phoneNumber}`}
                    onClick={() => { if (typeof window !== 'undefined') { window.location.href = `tel:${phoneNumber}` } }}
                    aria-label={`Llamar al ${phoneNumber}`}
                    className="bg-red-500 text-white px-4 py-2 rounded font-semibold text-sm inline-flex items-center justify-center"
                  >
                    Llamar Ahora
                  </a>
                  <button onClick={openChat} className="bg-white border border-red-500 text-red-500 px-4 py-2 rounded font-semibold text-sm">Chat en Vivo</button>
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
                  <div className="flex items-center gap-2 mb-1"><Phone size={16} className="text-red-500" /> (55) 3218-3670</div>
                  <div className="flex items-center gap-2 mb-1"><Mail size={16} className="text-red-500" /> Contacto@clinicasdentalmas.com</div>
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
