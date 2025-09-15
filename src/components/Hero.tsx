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
            src="https://images.unsplash.com/photo-1729870992116-5f1f59feb4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY1NTQwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fondo Dental"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-white/85"></div>
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
        <div className="text-center space-y-12">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span style={{ color: "#FE0000" }}>Dental</span>
              <span className="text-4xl lg:text-6xl ml-2" style={{ color: "#FE0000" }}>+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Tu mejor sonrisa comienza aquí: atención profesional,<br />
              tecnología avanzada y resultados que te harán sonreír.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-white px-8 py-4 text-lg font-semibold rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FE0000" }}
            >
              Agenda tu cita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 border-gray-300"
            >
              Ver tratamientos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
