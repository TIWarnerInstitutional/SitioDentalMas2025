"use client";

import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import sucursales, { Sucursal } from "../../data/sucursales";
// dynamic import removed — map is rendered inside SucursalesSection
import Image from 'next/image';
import SucursalesStats from '../../components/SucursalesStats';
import PromocionesSection from '../../components/PromocionesSection';
import SucursalesSection from '../../components/SucursalesSection';

// dynamic import intentionally not used on this page; map component rendered inside SucursalesSection

export default function SucursalesPage() {
  const _pathname = usePathname();
  const [query, _setQuery] = useState("");
  const [showAll, setShowAll] = useState(true);

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

  // Helpers to parse horario strings like "Lun-Vie: 9:00-18:00, Sáb: 9:00-14:00"
  const dayMap: Record<string, number> = {
    lun: 1, mar: 2, mie: 3, mié: 3, jue: 4, vie: 5, sab: 6, sáb: 6, dom: 0
  };

  function parseDaysPart(part: string): number[] {
    part = part.trim();
    // Examples: "Lun-Vie" or "Sáb" or "Dom"
    const rangeMatch = part.match(/([A-Za-záéíóúñ]+)\s*-\s*([A-Za-záéíóúñ]+)/i);
    if (rangeMatch) {
      const a = rangeMatch[1].toLowerCase().slice(0,3);
      const b = rangeMatch[2].toLowerCase().slice(0,3);
      if (dayMap[a] === undefined || dayMap[b] === undefined) return [];
      const start = dayMap[a];
      const end = dayMap[b];
      const days: number[] = [];
      let d = start;
      while (true) {
        days.push(d);
        if (d === end) break;
        d = (d + 1) % 7;
      }
      return days;
    }
    // Single day
    const key = part.toLowerCase().slice(0,3);
    if (dayMap[key] !== undefined) return [dayMap[key]];
    return [];
  }

  function parseTimeToMinutes(t: string) {
    const [h, m] = t.split(":").map(x => parseInt(x, 10));
    if (Number.isNaN(h)) return null;
    return (h * 60) + (Number.isNaN(m) ? 0 : m);
  }

  function parseHorario(horario?: string) {
    if (!horario || typeof horario !== 'string') return [];
    // Normalize spaces and replace non-breaking spaces
    horario = horario.replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim();
    // Split by commas but keep day-time groups together; we will split by ',' then handle
    const parts = horario.split(',').map(p => p.trim()).filter(Boolean);
    const schedule: Array<{ days: number[]; ranges: Array<{start: number; end: number}> }> = [];
    for (const p of parts) {
      const colonIndex = p.indexOf(':');
      if (colonIndex === -1) continue;
      const daysPartRaw = p.slice(0, colonIndex).trim();
      const timesRaw = p.slice(colonIndex + 1).trim();
      if (!daysPartRaw || !timesRaw) continue;
      const days = parseDaysPart(daysPartRaw);
      // times can be like "9:00-18:00" or "10:00-14:00 y 15:00-19:00"
      const ranges = timesRaw.split(/\s*(?:y|and|&|,)\s*/i).map(r => r.trim()).filter(Boolean).map(r => {
        const [s, e] = r.split(/[\-–—]/).map(x => x && x.trim());
        const start = parseTimeToMinutes(s || '0:00');
        const end = parseTimeToMinutes(e || '0:00');
        return (start !== null && end !== null) ? { start, end } : null;
      }).filter(Boolean) as Array<{start: number; end: number}>;
      if (days.length && ranges.length) schedule.push({ days, ranges });
    }
    return schedule;
  }

  function isOpenNow(horario?: string) {
    try {
      const schedule = parseHorario(horario);
      if (!schedule.length) return false;
      const now = new Date();
      const day = now.getDay(); // 0 sun ... 6 sat
      const minutes = now.getHours() * 60 + now.getMinutes();
      for (const item of schedule) {
        if (!item.days.includes(day)) continue;
        for (const r of item.ranges) {
          if (r.start <= r.end) {
            if (r.start <= minutes && minutes <= r.end) return true;
          } else {
            // Overnight range like 22:00-02:00
            if (minutes >= r.start || minutes <= r.end) return true;
          }
        }
      }
      return false;
    } catch {
      return false;
    }
  }
  return (
  <main className="bg-[#fff6f6] min-h-screen pb-12" style={{ color: '#000' }}>
      <section className="max-w-5xl mx-auto pt-16 pb-8 px-4">
        <h1 className="text-5xl font-light text-center mb-2">
          <span className="text-gray-600">Nuestras</span> <span className="font-bold text-red-600">Sucursales</span>
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
Elige entre más de 30 clínicas para cuidar tu salud dental. Encuentra la ubicación más conveniente para ti.

        </p>
        {/* Use the shared SucursalesSection component (handles layout and map) */}
        <SucursalesSection />
      </section>
      <section className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  {((showAll ? filtered : filtered.slice(0, 3)) as Sucursal[]).map((sucursal: Sucursal, idx: number) => {
          const parsed = parseHorario(sucursal.horario);
          const openNow = isOpenNow(sucursal.horario);
          if (typeof window !== 'undefined') {
            try {
              Promise.resolve().then(() => console.debug('Sucursal horario parse', sucursal.nombre, parsed, 'isOpen', openNow));
            } catch {}
          }
          const showDebug = typeof window !== 'undefined' && window.location && window.location.search && window.location.search.includes('debug=1');
          return (
          <div key={idx} className="bg-white rounded-2xl shadow p-0 overflow-hidden flex flex-col">
            <div className="relative h-36 bg-gray-100">
              {sucursal.imagen ? (
                <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                  <Image src={sucursal.imagen} alt={sucursal.nombre} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-2xl" />
              )}
              {openNow ? (
                <span className="absolute right-3 top-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Abierto ahora</span>
              ) : (
                <span className="absolute right-3 top-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">No disponible</span>
              )}
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
                    {showDebug && (
                      <pre className="text-xs text-gray-400 mt-2">{JSON.stringify({ parsed, openNow }, null, 2)}</pre>
                    )}
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
                  <div className="flex items-center gap-2 text-gray-400"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5v14" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="text-xs text-gray-400">WiFi</span></div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    className="flex-1 bg-red-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-red-700 shadow-sm text-center"
                    href={(sucursal as any).AgendaOnline || (sucursal as any).agenda || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Cita
                  </a>
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
          )
        })}
        </div>
      </section>
      {filtered.length > 3 && (
        <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-block text-gray-600 border border-gray-200 rounded px-6 py-3 hover:bg-gray-50"
            aria-expanded={showAll}
          >
            {showAll ? 'Ver menos' : 'Ver todas'}
          </button>
        </div>
      )}

  {/* Nueva sección de estadísticas similar a la maquetación solicitada */}
  <SucursalesStats />

  {/* Sección de promociones añadida */}
  <PromocionesSection />

  <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">¿No encuentras una sucursal cerca?</h2>
        <p className="mb-4">Estamos expandiendo constantemente. Contáctanos para más información.</p>
        <a
          href={"https://wa.me/525532183670?text=" + encodeURIComponent("Hola, deseo recibir información sobre nuevas sucursales y ser contactado.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white font-semibold rounded p-3 w-full inline-block text-center hover:bg-red-700 transition"
        >
          Contactarme
        </a>
      </section>
    </main>
  );
}
