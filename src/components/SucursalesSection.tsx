"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image';
import sucursales from "../data/sucursales";

type SucursalLocal = {
  nombre?: string;
  lat?: number;
  lng?: number;
  direccion?: string;
  imagen?: string;
  ciudad?: string;
  colonia?: string;
  telefono?: string;
  servicios?: string[];
  [key: string]: any;
};

const MapaSucursales = dynamic(() => import("./MapaSucursales"), { ssr: false });

type Props = {
  hideCards?: boolean;
};

export default function SucursalesSection({ hideCards = false }: Props) {
  const [query, setQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [focusCoords, setFocusCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [focusDistanceText, setFocusDistanceText] = useState<string | null>(null);
  const [userAccuracy, setUserAccuracy] = useState<number | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Haversine distance (km)
  const haversine = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRad = (v: number) => (v * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let base: SucursalLocal[] = sucursales as SucursalLocal[];
    // If we have a user location, compute distance and sort/filter by proximity
    if (userLocation) {
      base = base
        .map((s) => {
          const lat = typeof s.lat === 'number' ? s.lat : NaN;
          const lng = typeof s.lng === 'number' ? s.lng : NaN;
          const dist = !Number.isNaN(lat) && !Number.isNaN(lng) ? haversine(userLocation.lat, userLocation.lng, lat, lng) : Infinity;
          return { ...s, __distanceKm: dist } as SucursalLocal & { __distanceKm?: number };
        })
        .filter((s) => (s as any).__distanceKm !== Infinity)
        .sort((a, b) => ((a as any).__distanceKm || 0) - ((b as any).__distanceKm || 0));
      // Optionally apply a max distance (e.g., 200 km) if desired
    }

    if (!q) return base;
    return base.filter((s) => {
      return (
        (s.nombre && s.nombre.toLowerCase().includes(q)) ||
        (s.ciudad && s.ciudad.toLowerCase().includes(q)) ||
        (s.direccion && s.direccion.toLowerCase().includes(q)) ||
        (s.colonia && s.colonia.toLowerCase().includes(q))
      );
    });
  }, [query, userLocation]);

  // derive main cities from actual sucursales data (group by ciudad)
  const cities = useMemo(() => {
    const map: Record<string, { sumLat: number; sumLng: number; count: number; samples: { lat: number; lng: number }[] }> = {};
    (sucursales as SucursalLocal[]).forEach((s) => {
      const city = (s.ciudad || s.nombre || '').toString().trim();
      if (!city) return;
      const lat = typeof s.lat === 'number' ? s.lat : NaN;
      const lng = typeof s.lng === 'number' ? s.lng : NaN;
      if (!map[city]) map[city] = { sumLat: 0, sumLng: 0, count: 0, samples: [] };
      if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
        map[city].sumLat += lat;
        map[city].sumLng += lng;
        map[city].count += 1;
        map[city].samples.push({ lat, lng });
      }
    });
    const arr: { name: string; coords: { lat: number; lng: number }; count: number; sample?: { lat: number; lng: number } }[] = [];
    Object.keys(map).forEach((k) => {
      const entry = map[k];
      if (entry.count > 0) {
        arr.push({ name: k, coords: { lat: entry.sumLat / entry.count, lng: entry.sumLng / entry.count }, count: entry.count, sample: entry.samples[0] });
      }
    });
    // sort by count desc so bigger cities appear first
    arr.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
    return arr;
  }, []);

  return (
    <section className="max-w-5xl mx-auto pt-8 pb-8 px-4">
      <div className="md:flex md:items-stretch md:gap-8">
        <div className="md:w-1/2">
          <div className="bg-white rounded-2xl p-6 shadow-sm h-full" style={{ minHeight: 415 }}>
            <h2 className="text-gray-900 text-2xl font-semibold mb-2">Buscar Clínica</h2>
            <p className="text-gray-600 mb-4">Ingresa tu ubicación para encontrar la clínica más cercana</p>
            <div className="relative mb-3">
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  // clear any focused city so map re-fits to the typed results
                  try { setFocusCoords(null); setFocusDistanceText(null); } catch {}
                }}
                placeholder="Escribe tu ciudad, código postal o colonia..."
                className="w-full pl-11 pr-3 h-12 text-sm rounded border border-gray-200 bg-white text-gray-700 placeholder-gray-400 shadow-sm outline-none"
              />
            </div>
            <div className="mt-3">
              <button
                className="w-full bg-red-600 text-white font-semibold rounded p-3 hover:bg-red-700 transition flex items-center justify-center gap-3"
                onClick={() => {
                  if (!navigator.geolocation) {
                    setLocationError("Geolocalización no soportada en este navegador.");
                    return;
                  }
                  setLoadingLocation(true);
                  setLocationError(null);
                  setFocusDistanceText(null);
                  // use watchPosition to get a more accurate fix; accept when accuracy <= 50m or after timeout
                  let bestPos: GeolocationPosition | null = null;
                  let watchId: number | null = null;
                  let fallbackId: number | null = null;
                  const acceptPosition = (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;
                    setUserAccuracy(pos.coords.accuracy ?? null);
                    setUserLocation({ lat: latitude, lng: longitude });
                    // find nearest sucursal
                    try {
                      let nearest: SucursalLocal | null = null;
                      let minDist = Infinity;
                      (sucursales as SucursalLocal[]).forEach((s) => {
                        const lat = typeof s.lat === 'number' ? s.lat : NaN;
                        const lng = typeof s.lng === 'number' ? s.lng : NaN;
                        if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
                          const d = haversine(latitude, longitude, lat, lng);
                          if (d < minDist) {
                            minDist = d;
                            nearest = s as SucursalLocal;
                          }
                        }
                      });
                        if (nearest && typeof (nearest as any).lat === 'number' && typeof (nearest as any).lng === 'number') {
                          setFocusCoords({ lat: (nearest as any).lat, lng: (nearest as any).lng });
                        if (minDist < 1) {
                          setFocusDistanceText(`${Math.round(minDist * 1000)} m`);
                        } else {
                          setFocusDistanceText(`${minDist.toFixed(1)} km`);
                        }
                      } else {
                        setFocusDistanceText(null);
                      }
                    } catch {
                      setFocusDistanceText(null);
                    }
                    // clear fallback timer if set
                    if (fallbackId !== null) {
                      try { clearTimeout(fallbackId); } catch {}
                      fallbackId = null;
                    }
                    setLoadingLocation(false);
                  };

                  try {
                    // First try a quick, coarse fix (fast) to compute route quickly
                    navigator.geolocation.getCurrentPosition(
                      (pos) => {
                        bestPos = pos;
                        acceptPosition(pos);
                        // also start a background watch to refine accuracy silently
                        try {
                          watchId = navigator.geolocation.watchPosition(
                            (wpos) => {
                              if (!bestPos || (wpos.coords.accuracy && bestPos.coords.accuracy && wpos.coords.accuracy < bestPos.coords.accuracy)) {
                                bestPos = wpos;
                                // update userLocation and distance when improved
                                setUserAccuracy(wpos.coords.accuracy ?? null);
                                setUserLocation({ lat: wpos.coords.latitude, lng: wpos.coords.longitude });
                                // recalc nearest and distance but do not interrupt the map focus
                                try {
                                  let nearest: SucursalLocal | null = null;
                                  let minDist = Infinity;
                                  (sucursales as SucursalLocal[]).forEach((s) => {
                                    const lat = typeof s.lat === 'number' ? s.lat : NaN;
                                    const lng = typeof s.lng === 'number' ? s.lng : NaN;
                                    if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
                                      const d = haversine(wpos.coords.latitude, wpos.coords.longitude, lat, lng);
                                      if (d < minDist) {
                                        minDist = d;
                                        nearest = s as SucursalLocal;
                                      }
                                    }
                                  });
                                  if (nearest && typeof (nearest as any).lat === 'number' && typeof (nearest as any).lng === 'number') {
                                    setFocusDistanceText(minDist < 1 ? `${Math.round(minDist * 1000)} m` : `${minDist.toFixed(1)} km`);
                                  }
                                } catch {}
                              }
                            },
                            () => {
                              // ignore watch errors silently
                            },
                            { enableHighAccuracy: true, maximumAge: 0 }
                          );
                        } catch {}
                      },
                            (_err) => {
                        // if quick getCurrentPosition fails, fallback to watchPosition strategy
                        try {
                          watchId = navigator.geolocation.watchPosition(
                            (pos) => {
                              if (!bestPos || (pos.coords.accuracy && bestPos.coords.accuracy && pos.coords.accuracy < bestPos.coords.accuracy)) {
                                bestPos = pos;
                              }
                              if (pos.coords.accuracy && pos.coords.accuracy <= 50) {
                                if (watchId !== null) navigator.geolocation.clearWatch(watchId);
                                acceptPosition(pos);
                              }
                            },
                            (e) => {
                                    if (watchId !== null) navigator.geolocation.clearWatch(watchId);
                                    setLocationError(e?.message || "No se pudo obtener la ubicación.");
                                    setLoadingLocation(false);
                                  },
                            { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
                          );
                        } catch {
                          setFocusDistanceText(null);
                        }
                      },
                      { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }
                    );
                    // fallback: after 12s, accept best available or error
                    fallbackId = window.setTimeout(() => {
                      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
                      if (bestPos) {
                        acceptPosition(bestPos);
                      } else {
                        setLocationError("No se obtuvo una ubicación precisa. Intenta de nuevo o revisa permisos.");
                        setLoadingLocation(false);
                      }
                    }, 12000);
                  } catch {
                    setLocationError("Error al solicitar geolocalización.");
                    setLoadingLocation(false);
                  }
                }}
                aria-label="Buscar Clínicas Cercanas"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" fill="currentColor" />
                  <circle cx="12" cy="10" r="2.5" fill="#fff" />
                </svg>
                {loadingLocation ? "Obteniendo ubicación..." : "Buscar Clínicas Cercanas"}
              </button>
            </div>
            {locationError && (
              <div className="mt-2">
                <div className="text-sm text-red-600">{locationError}</div>
                <button
                  className="mt-2 bg-red-50 text-red-600 border border-red-200 px-3 py-2 rounded"
                  onClick={() => {
                    setLocationError(null);
                    // retry: clear previous state
                    setFocusCoords(null);
                    setFocusDistanceText(null);
                    setUserLocation(null);
                  }}
                >
                  Reintentar
                </button>
              </div>
            )}
            {(focusDistanceText || userAccuracy !== null) && (
              <div className="mt-3 text-sm text-gray-600">
                {focusDistanceText && <div>La clínica más cercana está a <strong>{focusDistanceText}</strong></div>}
                {userAccuracy !== null && <div>Precisión del GPS: {Math.round(userAccuracy)} m</div>}
              </div>
            )}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Ciudades Principales</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {cities.slice(0, 4).map((c) => (
                  <li key={c.name}>
                    <button
                      className="text-left w-full hover:underline flex items-center justify-between"
                      onClick={() => {
                        setQuery(c.name);
                        // prefer a real sample coordinate (actual branch) so the map zooms exactly to a marker
                        const target = c.sample && typeof c.sample.lat === 'number' && typeof c.sample.lng === 'number' ? c.sample : c.coords;
                        // force a state change even if the same city is clicked twice
                        try {
                          setFocusCoords(null);
                          setTimeout(() => setFocusCoords(target), 50);
                        } catch {
                          setFocusCoords(target as any);
                        }
                      }}
                    >
                      <span>{c.name}</span>
                      <span className="text-xs text-gray-400">{c.count} sucursal{c.count > 1 ? 'es' : ''}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-red-50 border border-red-100 text-red-700 rounded-lg p-4 text-sm">
                <div className="font-semibold">¿No encuentras tu ciudad?</div>
                <div>Estamos expandiendo constantemente. Contáctanos para más información.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-7/12 mt-6 md:mt-0 h-full">
          <div className="bg-white rounded-2xl p-4 shadow-sm h-full" style={{ minHeight: 415 }}>
            <div className="w-full rounded-lg overflow-hidden h-full">
                <div style={{ width: '100%', height: '100%', minHeight: 415 }}>
                <MapaSucursales
                  allSucursales={sucursales as any}
                  visibleSucursales={filtered as any}
                  focusCoords={focusCoords}
                  focusDistance={focusDistanceText}
                  userLocation={userLocation}
                  onReset={() => {
                    // clear focus and city filter so the map can show all branches
                    try {
                      setFocusCoords(null);
                      setQuery("");
                      setFocusDistanceText(null);
                    } catch {}
                  }}
                />
              </div>
              {/* Statistics row below the map */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 px-2 text-center items-center">
                <div>
                  <div className="text-red-600 font-extrabold text-lg sm:text-xl md:text-2xl leading-none">30</div>
                  <div className="text-sm text-gray-500 mt-2">Clínicas</div>
                </div>
                <div>
                  <div className="text-red-600 font-extrabold text-lg sm:text-xl md:text-2xl leading-none">+10</div>
                  <div className="text-sm text-gray-500 mt-2">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-red-600 font-extrabold text-lg sm:text-xl md:text-2xl leading-none">100000K</div>
                  <div className="text-sm text-gray-500 mt-2">Sonrisas Transformadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!hideCards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {filtered.slice(0, 3).map((sucursal: SucursalLocal, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-0 overflow-hidden flex flex-col">
            <div className="relative h-36 bg-gray-100">
                  {sucursal.imagen ? (
                <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                  <Image src={sucursal.imagen || ''} alt={sucursal.nombre || ''} className="object-cover" fill sizes="(max-width: 768px) 100vw, 33vw" />
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
                  {typeof (sucursal as any).__distanceKm === 'number' && (
                    <div className="text-xs text-gray-500">A {((sucursal as any).__distanceKm).toFixed(1)} km</div>
                  )}
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
                  {sucursal.servicios?.map((servicio, i) => (
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
                    href={(sucursal as any).agenda || '#'}
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
        ))}
      </div>
      )}

      {/* Removed 'Ver todas' button per design request */}
    </section>
  );
}
