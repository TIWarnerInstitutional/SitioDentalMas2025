"use client";
import { Button } from "./ui/button";
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SucursalPickerModal from './SucursalPickerModal';

export function Hero() {
  const [showAgendarModal, setShowAgendarModal] = useState(false);
  const router = useRouter();

  return (
    <>
    <section id="inicio" className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-600">
      {/* Overlay decorativo con ondas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#f3f4f6" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-left pt-8 sm:pt-12 lg:pt-0 space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              Tu sonrisa
              <br />
              <span className="text-yellow-400">perfecta</span>
              <br />
              nos inspira
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Cuidamos tu salud dental con la más alta calidad, tecnología avanzada y un trato humano excepcional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/cita">
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all text-base sm:text-lg font-semibold shadow-lg w-full sm:w-auto"
                >
                  📅 Agendar Cita
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all text-base sm:text-lg font-semibold w-full sm:w-auto"
                onClick={() => router.push('/sucursales')}
              >
                Ver Sucursales
              </Button>
            </div>
          </div>

          {/* Imagen del doctor - Oculta en móviles pequeños */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden sm:block">
            <div className="absolute bottom-0 right-0 lg:right-12 w-full max-w-[400px] lg:max-w-[500px] h-full">
              <Image
                src="/images/Inicio/doctor-hero.png"
                alt="Doctor Dental Más"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <SucursalPickerModal open={showAgendarModal} onClose={() => setShowAgendarModal(false)} />
    </>
  );
}
