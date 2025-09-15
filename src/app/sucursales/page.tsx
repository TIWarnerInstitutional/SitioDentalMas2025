"use client";

import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import sucursales, { Sucursal } from "../../data/sucursales";
import dynamic from "next/dynamic";
import Image from 'next/image';
import SucursalesStats from '../../components/SucursalesStats';
import PromocionesSection from '../../components/PromocionesSection';

const MapaSucursales = dynamic(() => import("../../components/MapaSucursales"), { ssr: false });

export default function SucursalesPage() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = !q ? (sucursales as Sucursal[]) : (sucursales as Sucursal[]).filter((s) => {
      return (
        (s.nombre && s.nombre.toLowerCase().includes(q)) ||
        (s.ciudad && s.ciudad.toLowerCase().includes(q)) ||
        (s.direccion && s.direccion.toLowerCase().includes(q)) ||
        (s.colonia && s.colonia.toLowerCase().includes(q))
      );
    });
    return base;
  }, [query]);
  return (
    <main className="bg-[#fff6f6] min-h-screen pb-12">
      <section className="max-w-5xl mx-auto pt-16 pb-8 px-4">
        <h1 className="text-5xl font-light text-center mb-2">
          Nuestras <span className="font-bold text-red-600">Sucursales</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti
        </p>
        <div className="bg-red-600 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <h2 className="text-white text-2xl font-semibold mb-2">Encuentra una Clínica Dental cerca de ti</h2>
            <p className="text-white mb-4">Elige entre +30 clínicas para Cuidar tu Salud Dental</p>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Escribe tu ciudad, código postal o colonia..."
              className="w-full p-3 rounded mb-3 outline-none"
            />
            {/* 'Ver todas' button moved below the cards */}
          </div>
          <div className="flex-1 w-full min-h-[250px]">
            <MapaSucursales key={pathname} sucursales={filtered} />
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {((showAll ? filtered : filtered.slice(0, 3)) as Sucursal[]).map((sucursal: Sucursal, idx: number) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-0 overflow-hidden flex flex-col">
            <div className="relative h-36 bg-gray-100">
              {sucursal.imagen ? (
                <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                  <Image src={sucursal.imagen} alt={sucursal.nombre} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-2xl" />
              )}
              <span className="absolute right-3 top-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Abierto ahora</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-red-600 mb-1 leading-tight">{sucursal.nombre}</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-3">
                    <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431L23.6 9.587l-5.4 5.264L19.335 24 12 19.897 4.665 24l1.135-9.149L.4 9.587l7.932-1.569z"/></svg>
                    <span className="font-medium text-yellow-600">4.5</span>
                    <span className="text-xs text-gray-400">(120)</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-600">
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center w-8 shrink-0 pt-1 gap-2">
                    <Image src="/PinMapa.png" alt="pin" className="w-5 h-5" width={20} height={20} />
                    <Image src="/phone.svg" alt="phone" className="w-5 h-5" width={20} height={20} />
                    <Image src="/clock.svg" alt="clock" className="w-5 h-5" width={20} height={20} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3 text-sm">{sucursal.direccion}</div>
                    <div className="mb-2 text-red-600 font-semibold text-sm">{sucursal.telefono}</div>
                    <div className="text-xs text-gray-500">{sucursal.horario}</div>
                  </div>
                </div>
              </div>

                <div className="mt-3">
                <span className="font-semibold text-xs text-gray-700">Servicios Disponibles:</span>
                <div className="flex flex-wrap gap-3 mt-3">
                  {sucursal.servicios?.map((servicio: string, i: number) => (
                    <span key={i} className="bg-red-50 text-red-700 rounded-full px-3 py-1 text-xs font-medium shadow-sm">{servicio}</span>
                  ))}
                </div>
              </div>

                <div className="mt-3">
                <div className="text-gray-400 text-sm mb-3 flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-400"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8 2 4 5 4 9c0 7 8 13 8 13s8-6 8-13c0-4-4-7-8-7z" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-xs text-gray-400">Estacionamiento</span></div>
                  <div className="flex items-center gap-2 text-gray-400"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5v14" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-xs text-gray-400">WiFi</span></div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-red-700 shadow-sm">Agendar Cita</button>
                  <a
                    href={sucursal.mapsUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver en Google Maps"
                    className="w-9 h-9 bg-white rounded-md border border-gray-200 flex items-center justify-center shadow-sm"
                    style={{boxShadow: '0 2px 6px rgba(0,0,0,0.06)'}}
                  >
                    <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15 11H9L12 2z" fill="#ef4444"/><path d="M4 22L12 13L20 22H4z" fill="#ef4444"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      {filtered.length > 3 && (
        <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="bg-white border border-red-600 text-red-600 font-semibold rounded px-6 py-3 hover:bg-red-50"
          >
            {showAll ? "Mostrar menos" : "Ver todas"}
          </button>
        </div>
      )}

  {/* Nueva sección de estadísticas similar a la maquetación solicitada */}
  <SucursalesStats />

  {/* Sección de promociones añadida */}
  <PromocionesSection />

  <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">¿No encuentras una sucursal cerca?</h2>
        <p className="mb-4">Próximamente abriremos nuevas ubicaciones. Suscríbete a nuestro newsletter para ser el primero en conocer nuestras nuevas clínicas.</p>
        <button className="bg-red-600 text-white font-semibold rounded p-3 w-full hover:bg-red-700 transition">
          Notificarme nuevas ubicaciones
        </button>
      </section>
    </main>
  );
}
