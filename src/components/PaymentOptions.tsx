
import { CreditCard, Banknote, Calendar, Check } from "lucide-react";

const paymentMethods = [
  {
    icon: <CreditCard size={32} className="text-red-500 mb-2" />,
    title: "Tarjetas de Crédito y Débito",
    description: "Aceptamos todas las tarjetas principales",
    options: ["Visa", "Mastercard", "American Express", "Débito"]
  },
  {
    icon: <Banknote size={32} className="text-red-500 mb-2" />,
    title: "Efectivo",
  description: "Pago directo en nuestras clínicas",
    options: ["Descuento del 5% por pago en efectivo"]
  },
  {
    icon: <Calendar size={32} className="text-red-500 mb-2" />,
    title: "Transferencia Bancaria",
    description: "Transferencias SPEI y depósitos bancarios",
    options: ["BBVA", "Santander", "Banorte", "HSBC"]
  }
];

const plans = [
  {
    title: "Aprobación Rápida",
    duration: "15 minutos",
    interest: "Obtén tu respuesta de crédito en tiempo récord",
    features: [
      "Proceso 100% digital",
      "Sin papeleo físico",
      "Respuesta inmediata",
      "Validación automática"
    ],

  },
  {
    title: "Plan Avanzado",
    duration: "6-12 meses",
    interest: "Interés preferencial",
    features: [
      "Hasta $50,000 MXN",
      "Pagos mensuales cómodos",
      "Tasa del 12% anual",
      "Enganche del 20%"
    ],
    highlight: true
  },
  {
    title: "Plan Premium",
    duration: "12-24 meses",
    interest: "Tasa competitiva",
    features: [
      "Hasta $100,000 MXN",
      "Tratamientos integrales",
      "Tasa del 15% anual",
      "Enganche del 30%"
    ],
    highlight: false
  }
];

export function PaymentOptions() {
  return (
    <section id="pagos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Formas de Pago y Financiamiento</h2>
        <p className="text-gray-600 text-center mb-8">Ofrecemos múltiples opciones de pago y planes de financiamiento flexibles para que puedas acceder al tratamiento dental que necesitas.</p>

        {/* Métodos de pago */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {paymentMethods.map(pm => (
            <div key={pm.title} className="bg-white rounded-xl border border-gray-200 shadow p-6 flex flex-col items-center">
              {pm.icon}
              <h3 className="font-semibold text-lg mb-1 text-gray-900">{pm.title}</h3>
              <p className="text-gray-700 text-sm mb-2 text-center">{pm.description}</p>
              <ul className="text-xs text-gray-500 text-center">
                {pm.options.map(opt => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Planes de financiamiento */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Planes de Financiamiento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div key={plan.title} className={`bg-white rounded-xl border shadow p-6 flex flex-col items-center ${plan.highlight ? "border-2 border-red-500 relative" : "border-gray-200"}`}>
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">Más Popular</span>
              )}
              <h4 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-red-500" : "text-gray-900"}`}>{plan.title}</h4>
              <div className={`text-2xl font-bold mb-1 ${plan.highlight ? "text-red-500" : "text-gray-900"}`}>{plan.duration}</div>
              <div className="text-sm mb-2 text-gray-700">{plan.interest}</div>
              <ul className="text-sm text-gray-600 mb-4 list-none">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 mb-1"><Check className="text-green-500" size={16} /> {f}</li>
                ))}
              </ul>
              {plan.extra && (
                <div className="w-full text-center mb-4">
                  <div className="text-sm font-semibold text-gray-900">{plan.extra.subtitle}</div>
                  <div className="text-lg font-bold text-red-500">{plan.extra.range}</div>
                  <ul className="text-xs text-gray-600 mt-2">
                    {plan.extra.details.map(d => (
                      <li key={d} className="mb-1">{d}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className={`mt-auto px-4 py-2 rounded-full font-semibold border ${plan.highlight ? "bg-red-500 text-white border-red-500" : "bg-white text-red-500 border-red-500"}`}>Solicitar Financiamiento</button>
            </div>
          ))}
        </div>

        {/* Pagos seguros removed per request */}
      </div>
    </section>
  );
}
