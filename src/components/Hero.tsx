"use client";
import { Button } from "./ui/button";
import Image from 'next/image';
// Floating icons implemented with emoji; no external icons or motion used here
// Animación deshabilitada por compatibilidad con framer-motion v10+

export function Hero() {
  const floatingIcons = [
    { icon: "🦷", position: "top-10 left-10", delay: 0.5 },
    { icon: "😊", position: "top-20 right-20", delay: 0.7 },
    { icon: "👨‍⚕️", position: "bottom-32 left-16", delay: 0.9 },
    { icon: "🏥", position: "bottom-20 right-24", delay: 1.1 },
    { icon: "❤️", position: "top-32 left-1/3", delay: 1.3 },
    { icon: "✨", position: "bottom-40 right-1/3", delay: 1.5 }
  ];

  return (
    <section id="inicio" className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo responsiva */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
          <Image
            src="/FondoDMas.png"
            alt="Fondo Dental"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} text-4xl z-10`}
          style={{ color: "#FE0000" }}
        >
          {item.icon}
        </div>
  ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left py-12">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Tu sonrisa
              <span className="text-purple-600 ml-2">perfecta</span>
              <span className="block text-5xl md:text-6xl mt-2">nos inspira</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">
              Cuidamos tu salud dental con la más alta calidad, tecnología avanzada y un trato humano excepcional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90">Agendar Cita</Button>
              <Button variant="outline" size="lg" className="px-6 py-3 rounded-full border-2">Ver Tratamientos</Button>
            </div>
          </div>

          <div className="relative w-full h-80 md:h-96">
            {/* keep background visible; decorative */}
          </div>
        </div>
      </div>
    </section>
  );
}
