import MapaSucursalesClient from "../../components/MapaSucursalesClient";
"use client";



import { Sucursal } from "../../types/Sucursal";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import sucursales from "../../data/sucursales";

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
  const [selectedSucursal, setSelectedSucursal] = useState<Sucursal | null>(null);
  const filtered = sucursales.filter((s: Sucursal) => {
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
    <main className="bg-gray-50 text-gray-900 relative" style={{ minHeight: '100vh' }}>
      <section className="w-full flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ minHeight: 420 }}>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src="/FondoPrincipal.jpg"
            alt="Fondo Principal"
            fill
            sizes="100vw"
            className="object-cover w-full h-full"
            style={{ zIndex: 0, opacity: 0.18 }}
            priority
          />
        </div>
        <div className="w-full max-w-6xl mx-auto py-12 px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-2">
            Nuestras <span className="text-red-600">Sucursales</span>
          </h1>
          <p className="text-lg text-gray-600">3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti</p>
        </div>
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
                {filtered.map((s: Sucursal, idx: number) => (
                  <div
                    key={idx}
                    style={{ background: "#fe0000", color: "#fff", borderRadius: "8px", padding: "8px", width: "100%", display: "flex", alignItems: "center", gap: "8px", maxWidth: "512px", margin: "0 auto", boxShadow: "none", opacity: 1, transition: "none" }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 2L15 8H21L17 12L19 18L12 14L5 18L7 12L3 8H9L12 2Z" fill="#fe0000"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white leading-tight">¡Promoción exclusiva en <span className='font-bold text-white'>{s.nombre}</span>!</div>
                      <div className="text-base font-bold text-white mt-0.5 leading-tight">{s.promocion}</div>
                      <div className="text-xs text-white mt-0.5 leading-tight">Vigencia: <span className="font-semibold text-white">{s.vigencia || 'Consulta condiciones en sucursal'}</span></div>
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
          {(showAll ? filtered : filtered.slice(0, 3)).map((s: Sucursal, i: number) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[16/9] mb-4 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
                  {s.imagen && (
                    <Image
                      src={s.imagen}
                      alt={s.nombre}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="rounded-xl object-cover w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                  {estaAbierto(s.horario ?? "") && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded bg-green-500 text-white text-xs font-bold shadow">Abierto ahora</span>
                  )}
                </div>
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
          <div className="flex justify-center mt-4 mb-4">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded font-semibold shadow hover:bg-gray-200 transition" onClick={() => setShowAll(true)}>
              Ver todas las sucursales
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
