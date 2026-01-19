"use client";
import Image from 'next/image';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { SeasonalBackground } from './SeasonalDecorations';
import { CURRENT_SEASON } from '../config/season';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SucursalPickerModal from './SucursalPickerModal';

export function BannerMes() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAgendarModal, setShowAgendarModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const leftTreatments = [
    {
      name: "Ortodoncia",
      image: "/images/Inicio/Testimonials1.jpg",
      discount: "50%",
      badge: "Ortodoncia",
      borderColor: "from-blue-400 to-blue-500",
      bgColor: "bg-red-500"
    },
    {
      name: "Limpieza",
      image: "/images/Inicio/Testimonials3.jpg",
      discount: "30%",
      badge: "Limpieza dental",
      borderColor: "from-cyan-400 to-cyan-500",
      bgColor: "bg-cyan-500"
    },
    {
      name: "Blanqueamiento",
      image: "/images/Inicio/Testimonials1.jpg",
      discount: "25%",
      badge: "Alineadores",
      borderColor: "from-red-400 to-red-500",
      bgColor: "bg-red-500"
    }
  ];

  const rightTreatments = [
    {
      name: "Implantes",
      image: "/images/Inicio/Testimonials3.jpg",
      discount: "20%",
      badge: "Implantes",
      borderColor: "from-orange-400 to-orange-500",
      bgColor: "bg-red-500"
    },
    {
      name: "Coronas",
      image: "/images/Inicio/Testimonials1.jpg",
      discount: "35%",
      badge: "Endodoncia",
      borderColor: "from-green-400 to-green-500",
      bgColor: "bg-green-500"
    },
    {
      name: "Prótesis",
      image: "/images/Inicio/Testimonials3.jpg",
      discount: "40%",
      badge: "Coronas dentales",
      borderColor: "from-yellow-400 to-yellow-500",
      bgColor: "bg-green-500"
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-red-50 via-white to-green-50 overflow-hidden py-6 sm:py-8 md:py-10">
      {/* Decoraciones de fondo */}
      <SeasonalBackground season={CURRENT_SEASON} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full mb-3 text-xs font-bold shadow-lg">
            <span>🎉 Ofertas Especiales 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4">
            <span className="text-gray-900">Regala </span>
            <span className="text-red-600">sonrisas</span>
            <span className="text-gray-900"> esta Navidad</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-5">
            Aprovecha nuestros descuentos especiales en todos los tratamientos dentales
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              className="bg-white hover:bg-gray-50 px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg border-2 border-gray-300" 
              style={{color: '#000000'}}
              onClick={() => router.push('/sucursales')}
            >
              Ver Sucursales
            </Button>
            <Link href="/cita">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg"
              >
                Agendar Cita
              </Button>
            </Link>
          </div>
        </div>

        {/* Layout responsive unificado */}
        <div className="relative">
          <div className="relative max-w-6xl mx-auto">
            {/* Layout que se adapta: columna en móvil, fila en desktop */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6">
              {/* Grupo izquierdo - Cards (solo 2 en móvil) */}
              <div className="flex flex-row lg:flex-col gap-2 relative justify-center w-full lg:w-auto lg:rotate-[-4deg]">
                {leftTreatments.slice(0, isMobile ? 2 : 3).map((treatment, idx) => (
                  <div key={idx} className="relative group hover:scale-105 lg:hover:rotate-0 transition-all duration-300 hover:z-20 cursor-pointer w-full max-w-[150px] lg:max-w-none" 
                       style={{marginTop: !isMobile && idx > 0 ? '-10px' : '0'}}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${treatment.borderColor} rounded-2xl lg:rounded-[2rem] blur-lg opacity-60`}></div>
                    <div className={`relative ${treatment.bgColor} rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl border-4 lg:border-[5px] border-white w-full lg:w-[150px]`}>
                      <div className="absolute top-2 lg:top-3 left-2 lg:left-3 bg-yellow-400 text-black px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[9px] lg:text-[10px] font-black flex items-center gap-1 shadow-md z-10">
                        <span>⭐</span> {treatment.discount} OFF
                      </div>
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image src={treatment.image} alt={treatment.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute bottom-2 lg:bottom-3 left-2 lg:left-3 right-2 lg:right-3 bg-white/95 backdrop-blur-sm px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg shadow-lg">
                        <p className="text-gray-900 text-[10px] lg:text-xs font-bold text-center flex items-center justify-center gap-1">
                          <span>🦷</span> {treatment.badge}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Central - Responsive */}
              <div 
                className="relative group cursor-pointer w-full max-w-[95%] sm:max-w-md lg:max-w-[460px] mx-auto my-4 lg:my-0"
                onClick={() => router.push('/sucursales#promociones')}
              >
                {/* Efectos de luz de fondo */}
                <div className="absolute -inset-4 lg:-inset-6">
                  <div className="absolute top-0 left-0 w-32 lg:w-48 h-32 lg:h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-gradient-to-tl from-red-600/20 to-rose-500/20 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative h-full flex items-center justify-center">
                  {/* Card principal */}
                  <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl lg:rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.15)] lg:shadow-[0_20px_70px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_80px_rgba(220,38,38,0.25)] transition-all duration-700 overflow-hidden group-hover:scale-[1.02] group-hover:-translate-y-2 w-full">
                    
                    {/* Franja decorativa superior */}
                    <div className="absolute top-0 left-0 right-0 h-1 lg:h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
                    
                    {/* Patrón geométrico */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                      backgroundImage: 'linear-gradient(30deg, #dc2626 12%, transparent 12.5%, transparent 87%, #dc2626 87.5%, #dc2626), linear-gradient(150deg, #dc2626 12%, transparent 12.5%, transparent 87%, #dc2626 87.5%, #dc2626)',
                      backgroundSize: '40px 40px'
                    }}></div>
                    
                    {/* Badge flotante */}
                    <div className="absolute -top-2.5 lg:-top-3 left-4 lg:left-8 bg-gradient-to-r from-red-600 to-red-700 px-3 lg:px-5 py-1.5 lg:py-2 rounded-lg lg:rounded-xl shadow-xl z-10 border-2 border-white">
                      <span className="text-white text-[9px] lg:text-xs font-black uppercase tracking-wider">🎉 Ofertas 2026</span>
                    </div>
                    
                    {/* Contenido - Solo Información */}
                    <div className="relative h-full">
                      {/* Información */}
                      <div className="flex flex-col justify-center px-5 lg:px-10 py-6 lg:py-8">
                        <div className="inline-flex items-center gap-1.5 lg:gap-2 mb-2.5 lg:mb-4">
                          <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-red-600 rounded-full"></div>
                          <span className="text-red-600 text-[9px] lg:text-xs font-bold uppercase tracking-wide">Oferta Limitada</span>
                        </div>
                        
                        <h3 className="text-gray-900 text-2xl sm:text-3xl lg:text-2xl font-black leading-tight mb-1 lg:mb-2 tracking-tight">
                          BLANQUEAMIENTO 
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-5">
                          + Limpieza Dental Ultrasónica
                        </p>
                        
                        <div className="space-y-1.5 lg:space-y-2 mb-4 lg:mb-5">
                          <div className="flex items-center gap-2 text-gray-700 text-[11px] sm:text-xs lg:text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="font-medium">Resultados inmediatos y duraderos</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 text-[11px] sm:text-xs lg:text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="font-medium">Tecnología de última generación</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700 text-[11px] sm:text-xs lg:text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="font-medium">100% seguro e indoloro</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-500 text-[10px] lg:text-[11px]">
                          <svg className="w-3 lg:w-3.5 h-3 lg:h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-semibold">Válido hasta 31 Enero 2026</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-tr-full"></div>
                  </div>
                </div>
              </div>

              {/* Grupo derecho - Cards (solo 2 en móvil) */}
              <div className="flex flex-row lg:flex-col gap-2 relative justify-center w-full lg:w-auto lg:rotate-[4deg]">
                {rightTreatments.slice(0, isMobile ? 2 : 3).map((treatment, idx) => (
                  <div key={idx} className="relative group hover:scale-105 lg:hover:rotate-0 transition-all duration-300 hover:z-20 cursor-pointer w-full max-w-[150px] lg:max-w-none" 
                       style={{marginTop: !isMobile && idx > 0 ? '-10px' : '0'}}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${treatment.borderColor} rounded-2xl lg:rounded-[2rem] blur-lg opacity-60`}></div>
                    <div className={`relative ${treatment.bgColor} rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl border-4 lg:border-[5px] border-white w-full lg:w-[150px]`}>
                      <div className="absolute top-2 lg:top-3 left-2 lg:left-3 bg-yellow-400 text-black px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[9px] lg:text-[10px] font-black flex items-center gap-1 shadow-md z-10">
                        <span>⭐</span> {treatment.discount} OFF
                      </div>
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image src={treatment.image} alt={treatment.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute bottom-2 lg:bottom-3 left-2 lg:left-3 right-2 lg:right-3 bg-white/95 backdrop-blur-sm px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg shadow-lg">
                        <p className="text-gray-900 text-[10px] lg:text-xs font-bold text-center flex items-center justify-center gap-1">
                          <span>🦷</span> {treatment.badge}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
      <SucursalPickerModal open={showAgendarModal} onClose={() => setShowAgendarModal(false)} />
    </section>
  );
}
