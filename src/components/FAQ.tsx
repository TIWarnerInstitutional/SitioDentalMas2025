"use client";

"use client";
import { useState, useEffect } from "react";
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
  },
  {
    question: "¿Cómo puedo programar una cita?",
    answer: "Puedes agendar tu cita de dos maneras: en línea o por teléfono. Para hacerlo en línea, visita nuestra página web, selecciona la clínica más cercana a ti y elige la fecha y hora que prefieras. Si prefieres hablar con alguien, puedes contactar a un agente por teléfono y te ayudará a programar tu cita.",
    icon: <MessageCircle className="text-white" size={22} />, color: "bg-blue-500"
  }
];

export function FAQ() {
  const [open, setOpen] = useState(-1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", question: "" });
  const phoneNumber = "+5215535872711"; // Updated phone number

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
        } catch {
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
    } catch {
      // final fallback: do nothing
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Avoid adding script multiple times
    if (document.getElementById('hs-forms-embed-script')) return;
    const s = document.createElement('script');
    s.id = 'hs-forms-embed-script';
    s.src = 'https://js.hsforms.net/forms/embed/50291038.js';
    s.defer = true;
    document.body.appendChild(s);
    return () => {
      // keep the script if other parts of the app use it, but remove if desired
      const existing = document.getElementById('hs-forms-embed-script');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);

  return (
    <section id="faq" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Copos de nieve decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl sm:text-3xl text-red-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <li key={`${faq.question}-${idx}`}>
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
                
                <div>
                  {/* HubSpot form embed - script injected client-side to avoid SSR issues */}
<div className="hs-form-frame" data-region="na1" data-form-id="8d9ac1d8-3e9a-40e1-8740-8ba94a35922c" data-portal-id="50291038"></div>
                </div>
                <div className="mt-6 text-sm text-gray-700">
                  <div className="font-semibold mb-2">También puedes contactarnos:</div>
                  <div className="flex items-center gap-2 mb-1"><Phone size={16} className="text-red-500" /> +5215535872711</div>
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
