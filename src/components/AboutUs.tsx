"use client";
import { Award, Users, Heart, Shield } from "lucide-react";
import Image from "next/image";

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
          <div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">¿Quiénes Somos?</h2>
                </div>
                <div>
                  <div className="h-1" style={{ backgroundColor: "#FE0000" }}></div>
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Somos una clínica dental moderna comprometida con brindar la mejor atención odontológica. Con más de 12 años de experiencia, nuestro equipo de profesionales altamente capacitados utiliza tecnología de vanguardia para garantizar tratamientos seguros y efectivos.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nuestra misión es crear sonrisas saludables y hermosas, proporcionando una experiencia cómoda y profesional en cada visita.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex flex-col items-center text-center">
                      <div className="mb-3">
                        <Icon size={32} className="text-[#FE0000]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-[#FE0000]">{feature.title}</h3>
                      <p className="text-base text-black">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Imagenes y botón de pacientes satisfechos */}
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Consultorio dental" className="rounded-xl w-full h-40 object-cover" width={400} height={160} />
              <Image src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80" alt="Dentista trabajando" className="rounded-xl w-full h-40 object-cover" width={400} height={160} />
            </div>
            <div className="mt-4 w-full flex flex-col items-center">
              <button className="bg-red-500 text-white text-2xl font-bold px-8 py-6 rounded-xl shadow-lg w-full max-w-xs">1,800+<br /><span className="text-base font-normal">Pacientes satisfechos</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
