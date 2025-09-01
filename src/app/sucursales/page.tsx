"use client";

import Image from "next/image";
import sucursales from "../../data/sucursales";
import MapaSucursalesClient from "../../components/MapaSucursalesClient";
import React, { useState } from "react";

function estaAbierto(horario: string) {
  // Ejemplo simple: Lun-Vie: 9:00-18:00, Sáb: 9:00-14:00
  // Solo verifica si hoy está dentro de algún rango
  if (!horario) return false;
  const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const hoy = dias[new Date().getDay()];
  const partes = horario.split(",");
  for (const parte of partes) {
    if (parte.includes(hoy)) {
      const match = parte.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
      if (match) {
        const [_, ini, fin] = match;
        const ahora = new Date();
        const hIni = parseInt(ini.split(":")[0]), mIni = parseInt(ini.split(":")[1]);
        const hFin = parseInt(fin.split(":")[0]), mFin = parseInt(fin.split(":")[1]);
        const tIni = hIni * 60 + mIni;
        const tFin = hFin * 60 + mFin;
        const tAhora = ahora.getHours() * 60 + ahora.getMinutes();
        if (tAhora >= tIni && tAhora <= tFin) return true;
      }
    }
  }
  return false;
}

export default function SucursalesPage() {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedSucursal, setSelectedSucursal] = useState(null);
  const filtered = sucursales.filter((s: any) => {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    return (
      s.nombre?.toLowerCase().includes(term) ||
      s.direccion?.toLowerCase().includes(term) ||
      s.ciudad?.toLowerCase().includes(term) ||
      s.colonia?.toLowerCase().includes(term) ||
      s.cp?.toString().includes(term)
    );
  });

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-2">
          Nuestras <span className="text-red-600">Sucursales</span>
        </h1>
        <p className="text-lg text-gray-600">3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti</p>
      </section>
      {/* Sección de mapa y búsqueda con diseño igual a la imagen */}
      <section className="max-w-6xl mx-auto mb-12 rounded-2xl shadow-lg bg-[#e60012] p-8 flex flex-col md:flex-row gap-8 items-center" style={{ minHeight: 340 }}>
        <div className="flex-1 flex flex-col justify-center text-white">
          <h2 className="text-2xl font-semibold mb-2">Encuentra una Clínica Dental cerca de ti</h2>
          <p className="mb-4 text-base">Elige entre +30 clínicas para Cuidar tu Salud Dental</p>
          <input type="text" placeholder="Escribe tu ciudad, código postal o colonia..." className="w-full rounded-lg px-4 py-3 mb-4 text-gray-900 placeholder:text-gray-700 bg-white" value={search} onChange={e => setSearch(e.target.value)} />
          {/* Mostrar promociones debajo de la barra de búsqueda */}
          {search.trim() && filtered.length > 0 && (
            <div className="w-full mt-2 flex flex-col gap-2 items-start">
              {filtered.map((s: any, idx: number) => (
                <div key={idx} className="w-full px-2 py-2 bg-white rounded-lg shadow flex items-center gap-2 border border-red-100 max-w-md md:max-w-lg lg:max-w-xl mx-auto md:mx-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 shrink-0">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H21L17 12L19 18L12 14L5 18L7 12L3 8H9L12 2Z" fill="#fe0000"/></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 leading-tight">¡Promoción exclusiva en <span className='font-bold text-gray-900'>{s.nombre}</span>!</div>
                    <div className="text-base font-bold text-blue-700 mt-0.5 leading-tight">{s.promocion}</div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-tight">Vigencia: <span className="font-semibold text-gray-700">{s.vigencia || 'Consulta condiciones en sucursal'}</span></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg flex items-center justify-center border-4 border-white mt-6" style={{ width: 520, height: 340, padding: 0 }}>
            <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden" style={{ width: 500, height: 320, padding: 0 }}>
              <MapaSucursalesClient search={search} selected={selectedSucursal} setSelected={setSelectedSucursal} />
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAll ? filtered : filtered.slice(0, 3)).map((s: any, i: number) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="relative w-full h-48 mb-4 rounded-xl bg-gray-200 flex items-center justify-center">
                {s.imagen && <Image src={s.imagen} alt={s.nombre} width={350} height={180} className="rounded-xl object-cover w-full h-full" />}
                {estaAbierto(s.horario) && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded bg-green-500 text-white text-xs font-bold shadow">Abierto ahora</span>
                )}
              </div>
              <h2 className="text-lg font-bold mb-1">{s.nombre}</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-300 font-bold">★ {s.rating}</span>
                <span className="text-xs text-gray-500">({s.reviews})</span>
              </div>
              <p className="text-sm text-gray-700 mb-1 font-semibold">{s.direccion}</p>
              <p className="text-sm text-red-600 font-semibold mb-1">{s.telefono}</p>
              <div className="text-xs mb-2">{s.horario}</div>
              <div className="mb-2">
                <span className="font-semibold">Servicios Disponibles:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {s.servicios.map((serv: string, idx: number) => (
                    <span key={idx} className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium border border-gray-200">{serv}</span>
                  ))}
                </div>
              </div>
              {s.promocion && (
                <>
                  <div className="mb-2">
                    <span className="font-semibold">Promoción:</span>
                    <div className="text-[#e60012] font-semibold text-base mt-1">{s.promocion}</div>
                  </div>
                  <div className="mb-2 flex gap-4 items-center flex-wrap">
                    {s.caracteristicas?.map((c: string, idx: number) => (
                      <span key={idx} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        {c.toLowerCase().includes('estacionamiento') && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="#b0b7c3" strokeWidth="2" fill="none"/>
                            <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#b0b7c3">P</text>
                          </svg>
                        )}
                        {c.toLowerCase().includes('wifi') && (
                          <svg className="w-5 h-5" fill="none" stroke="#b0b7c3" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                            <path d="M12 20h.01"/>
                          </svg>
                        )}
                        {c.toLowerCase().includes('sala de espera cómoda') && (
                          <svg className="w-5 h-5" fill="none" stroke="#b0b7c3" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="4" y="10" width="16" height="8" rx="2" fill="#b0b7c3" />
                            <rect x="7" y="6" width="10" height="6" rx="2" fill="#b0b7c3" />
                          </svg>
                        )}
                        {c.toLowerCase().includes('accesibilidad para discapacitados') && (
                          <svg className="w-5 h-5" fill="none" stroke="#b0b7c3" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="7" r="2" fill="#b0b7c3" />
                            <path d="M12 9v4" stroke="#b0b7c3" strokeWidth="2" />
                            <path d="M12 13l-2 4" stroke="#b0b7c3" strokeWidth="2" />
                            <path d="M12 13l2 4" stroke="#b0b7c3" strokeWidth="2" />
                          </svg>
                        )}
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>
                </>
              )}
              <div className="flex gap-2 mt-4">
                <button className="bg-[#e60012] text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition text-sm w-full flex items-center justify-center">{s.btn}</button>
                <a href={s.mapsUrl} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 text-gray-700 w-11 h-11 rounded-lg flex items-center justify-center shadow hover:bg-gray-100 transition">
                  <Image src="/IconMaps.png" alt="Google Maps" width={28} height={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showAll && filtered.length > 3 && (
          <>
            <div className="flex justify-center mt-4 mb-4">
              <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded font-semibold shadow hover:bg-gray-200 transition" onClick={() => setShowAll(true)}>
                Ver todas las sucursales
              </button>
            </div>
            <section className="bg-[#f8f9fa] rounded-2xl p-8 mt-2 mb-8 max-w-5xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-center mb-2">¿No encuentras una sucursal cerca?</h2>
              <p className="text-gray-700 text-center mb-6">Próximamente abriremos nuevas ubicaciones. Suscríbete a nuestro newsletter para ser el primero en conocer nuestras nuevas clínicas.</p>
              <button className="bg-[#e60012] text-white px-6 py-3 rounded font-semibold shadow hover:bg-red-700 transition w-full max-w-xl">Notificarme nuevas ubicaciones</button>
            </section>
            {/* PromoBanner Section */}
            <section className="relative overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-8">
                      <div className="flex items-center gap-3">
                        <span className="bg-yellow-400 text-yellow-900 px-4 py-2 text-sm rounded-full flex items-center gap-2 font-semibold">
                          {/* Sparkles icon */}
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4m0 12v4m8-8h-4m-12 0H2m16.24-6.24l-2.83 2.83M6.24 17.76l-2.83 2.83m0-16.97l2.83 2.83M17.76 17.76l2.83 2.83"/></svg>
                          OFERTA LIMITADA
                        </span>
                        <span className="text-red-200 text-sm">Válida hasta fin de mes</span>
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-4xl lg:text-6xl leading-tight">
                          <span className="block">¡Primera</span>
                          <span className="block text-yellow-300">Consulta</span>
                          <span className="block">GRATIS!</span>
                        </h2>
                        <p className="text-xl text-red-100 max-w-lg">Incluye revisión completa, limpieza básica y plan de tratamiento personalizado</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            {/* Heart icon */}
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 7 16.5 5 13.5C3 10.5 5.5 7 9 7C10.5 7 12 8.5 12 8.5C12 8.5 13.5 7 15 7C18.5 7 21 10.5 19 13.5C17 16.5 12 21 12 21Z"/></svg>
                          </div>
                          <span className="text-red-100">Sin dolor garantizado</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            {/* Shield icon */}
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7v5c0 5.25 3.75 10.25 10 13 6.25-2.75 10-7.75 10-13V7l-10-5z"/></svg>
                          </div>
                          <span className="text-red-100">15 años de experiencia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            {/* Clock icon */}
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          </div>
                          <span className="text-red-100">Citas mismo día</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            {/* Sparkles icon */}
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4m0 12v4m8-8h-4m-12 0H2m16.24-6.24l-2.83 2.83M6.24 17.76l-2.83 2.83m0-16.97l2.83 2.83M17.76 17.76l2.83 2.83"/></svg>
                          </div>
                          <span className="text-red-100">Tecnología de punta</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-yellow-400 text-yellow-900 text-lg px-8 py-4 h-auto rounded font-bold flex items-center group hover:bg-yellow-300 transition">
                          Agendar Consulta GRATIS
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                        </button>
                        <button className="border-2 border-white text-white text-lg px-8 py-4 h-auto rounded font-bold hover:bg-white hover:text-red-600 transition">
                          Llamar Ahora: (55) 1234-5678
                        </button>
                      </div>
                      <div className="flex items-center gap-6 pt-4">
                        <div className="text-center">
                          <div className="text-2xl text-yellow-300">15K+</div>
                          <div className="text-xs text-red-200">Pacientes Felices</div>
                        </div>
                        <div className="w-px h-8 bg-white/30"></div>
                        <div className="text-center">
                          <div className="text-2xl text-yellow-300">98%</div>
                          <div className="text-xs text-red-200">Satisfacción</div>
                        </div>
                        <div className="w-px h-8 bg-white/30"></div>
                        <div className="text-center">
                          <div className="text-2xl text-yellow-300">3</div>
                          <div className="text-xs text-red-200">Ubicaciones</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="relative w-80 h-80 mx-auto">
                        <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
                        <div className="absolute inset-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
                        <div className="absolute inset-8 bg-white/30 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl text-white mb-2">🦷</div>
                            <div className="text-white text-lg">Tu sonrisa</div>
                            <div className="text-yellow-300 text-xl">perfecta</div>
                            <div className="text-white text-lg">te espera</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4m0 12v4m8-8h-4m-12 0H2m16.24-6.24l-2.83 2.83M6.24 17.76l-2.83 2.83m0-16.97l2.83 2.83M17.76 17.76l2.83 2.83"/></svg>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 7 16.5 5 13.5C3 10.5 5.5 7 9 7C10.5 7 12 8.5 12 8.5C12 8.5 13.5 7 15 7C18.5 7 21 10.5 19 13.5C17 16.5 12 21 12 21Z"/></svg>
                      </div>
                      <div className="absolute top-1/2 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7v5c0 5.25 3.75 10.25 10 13 6.25-2.75 10-7.75 10-13V7l-10-5z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
