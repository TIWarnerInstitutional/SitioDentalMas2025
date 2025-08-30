import { CreditCard, Banknote, Calendar, Shield, Check } from "lucide-react";
import { Button } from "./ui/button";

export function PaymentOptions() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Tarjetas de Crédito y Débito",
      description: "Aceptamos todas las tarjetas principales",
      options: ["Visa", "Mastercard", "American Express", "Débito"]
    },
    {
      icon: Banknote,
      title: "Efectivo",
      description: "Pago directo en cualquiera de nuestras sucursales",
      options: ["Descuento del 5% por pago en efectivo"]
    },
    {
      icon: Calendar,
      title: "Transferencia Bancaria",
      description: "Transferencias SPEI y depósitos bancarios",
      options: ["BBVA", "Santander", "Banorte", "HSBC"]
    }
  ];

  const financingPlans = [
    {
      title: "Plan Básico",
      duration: "3-6 meses",
      interest: "Sin intereses",
      features: [
        "Hasta $15,000 MXN",
        "Pagos quincenales o mensuales",
        "Aprobación inmediata",
        "Sin enganche"
      ],
      highlight: false
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Formas de Pago y Financiamiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos múltiples opciones de pago y planes de financiamiento flexibles 
            para que puedas acceder al tratamiento dental que necesitas.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Métodos de Pago Aceptados
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-red-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <ul className="space-y-1">
                    {method.options.map((option, i) => (
                      <li key={i} className="text-sm text-gray-500">{option}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Financing Plans */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Planes de Financiamiento
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {financingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative border rounded-xl p-8 ${
                  plan.highlight 
                    ? 'border-red-500 bg-red-50 transform scale-105' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-3xl font-bold text-red-500 mb-1">{plan.duration}</div>
                  <p className="text-gray-600">{plan.interest}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-white border border-red-500 text-red-500 hover:bg-red-50'
                  }`}
                >
                  Solicitar Financiamiento
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Shield size={32} className="text-green-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Pagos 100% Seguros</h3>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Todos los pagos están protegidos con cifrado SSL de 256 bits. 
            Tu información financiera está completamente segura y nunca es almacenada en nuestros servidores.
          </p>
        </div>
      </div>
    </section>
  );
}