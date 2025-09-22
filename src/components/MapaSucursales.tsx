
"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
type Sucursal = {
  nombre?: string;
  lat?: number;
  lng?: number;
  direccion?: string;
  imagen?: string;
};

type Props = {
  allSucursales?: Sucursal[];
  visibleSucursales?: Sucursal[];
  focusCoords?: { lat: number; lng: number } | null;
  focusDistance?: string | null;
  userLocation?: { lat: number; lng: number } | null;
  onMapClick?: (loc: { lat: number; lng: number }) => void;
  onReset?: (() => void) | null;
  containerHeight?: number | null;
};
export default function MapaSucursales({ allSucursales = [], visibleSucursales = [], focusCoords = null, focusDistance = null, userLocation = null, onMapClick, onReset = null, containerHeight = null }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);
  const markersListRef = useRef<L.Marker[]>([]);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routeRef = useRef<L.Polyline | null>(null);
  const allPointsRef = useRef<L.LatLngExpression[]>([]);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // if no explicit containerHeight prop, set the container's pixel height
    if (!containerHeight) {
      try {
            const parent = el.parentElement as HTMLElement | null;
        const h = parent ? parent.clientHeight : el.clientHeight;
        if (h && h > 0) el.style.height = `${h}px`;
      } catch {}
    }

    // initialize Leaflet map if needed
    let map = mapRef.current;
    if (!map) {
      map = L.map(el, { center: [23.6345, -102.5528], zoom: 5, scrollWheelZoom: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      mapRef.current = map;
      // ensure the map resizes correctly when inside responsive containers
  setTimeout(() => { try { if (map) map.invalidateSize(); } catch {} }, 200);
    }

    // clear or create markers layer
    if (markersRef.current) {
      markersRef.current.clearLayers();
    } else {
      markersRef.current = L.layerGroup().addTo(map);
    }

    // add markers (use visibleSucursales so search filters affect the map)
  const pts: L.LatLngExpression[] = [];
    markersListRef.current = [];
    const source = (visibleSucursales && visibleSucursales.length) ? visibleSucursales : allSucursales;
    source.forEach((s) => {
      if (typeof s.lat === "number" && typeof s.lng === "number") {
        const pinIcon = L.icon({
          iconUrl: "/PinMapa.png",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        });

        const m = L.marker([s.lat, s.lng] as L.LatLngExpression, { icon: pinIcon })
          .bindPopup(`<strong>${s.nombre}</strong><br/>${s.direccion}`)
          .on("click", () => {
            if (map) {
              map.flyTo([s.lat!, s.lng!], 15, { duration: 0.5 });
              setSelected({ lat: s.lat!, lng: s.lng! });
            }
          });

        markersRef.current?.addLayer(m);
        markersListRef.current.push(m);
        pts.push([s.lat, s.lng]);
      }
    });
    // store all points from the full dataset for reset; if allSucursales empty, fallback to pts
    try {
      if (allSucursales && allSucursales.length) {
        allPointsRef.current = (allSucursales as Sucursal[]).filter(s => typeof s.lat === 'number' && typeof s.lng === 'number').map(s => [s.lat!, s.lng!] as L.LatLngExpression);
      } else {
        allPointsRef.current = pts.slice();
      }
    } catch {}

    // add or update user location marker (if present)
    if (userLocation && map) {
      try {
            if (userMarkerRef.current) {
          try { userMarkerRef.current.remove(); } catch {}
        }
        const userIcon = L.divIcon({ className: 'user-location-icon', html: `<div style="width:14px;height:14px;background:#1f2937;border-radius:50%;border:3px solid #ef4444"></div>` });
        userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng] as L.LatLngExpression, { icon: userIcon }).addTo(map);
        userMarkerRef.current.bindPopup('<strong>Tu ubicación</strong>');
      } catch {}
    }

    // if focusCoords is provided, find the nearest marker and open its popup with street zoom
    if (focusCoords && map) {
      try {
        // immediately center on provided focus coordinates (gives immediate visual feedback)
        try { map.flyTo([focusCoords.lat, focusCoords.lng], 13, { duration: 0.4 }); } catch {}
        let nearestMarker: L.Marker | null = null;
        let minDist = Infinity;
        markersListRef.current.forEach((m) => {
          try {
            const pt = (m as any).getLatLng();
            const dLat = pt.lat - focusCoords.lat;
            const dLng = pt.lng - focusCoords.lng;
            const dist = Math.sqrt(dLat * dLat + dLng * dLng);
            if (dist < minDist) {
              minDist = dist;
              nearestMarker = m;
            }
          } catch {
            // ignore
          }
        });
        if (nearestMarker) {
          const pt = (nearestMarker as any).getLatLng();
          // ensure selected is set so parent reset button can appear
          try { setSelected({ lat: pt.lat, lng: pt.lng }); } catch {}
          map.flyTo([pt.lat, pt.lng], 16, { duration: 0.6 });
          try {
              if (focusDistance) {
              const popup = (nearestMarker as any).getPopup ? (nearestMarker as any).getPopup() : null;
              const base = popup ? popup.getContent() : '';
              (nearestMarker as any).bindPopup(base + `<br/><small>Distancia: ${focusDistance}</small>`);
            }
          } catch {}
          (nearestMarker as any).openPopup();
          setSelected({ lat: pt.lat, lng: pt.lng });

          // if we have a userLocation prop, request a driving route (OSRM) and draw it; fallback to straight line
          try {
            if (userLocation) {
              (async () => {
                if (routeRef.current) {
                  try { routeRef.current.remove(); } catch {}
                  routeRef.current = null;
                }
                const from = `${userLocation.lng},${userLocation.lat}`;
                const to = `${pt.lng},${pt.lat}`;
                const url = `https://router.project-osrm.org/route/v1/driving/${from};${to}?overview=full&geometries=geojson`;
                try {
                  const res = await fetch(url);
                  if (!res.ok) throw new Error('routing failed');
                  const data = await res.json();
                  const coords = data.routes && data.routes[0] && data.routes[0].geometry && data.routes[0].geometry.coordinates;
                  if (coords && coords.length) {
                    const latlngs = coords.map((c: any) => [c[1], c[0]] as L.LatLngExpression);
                    routeRef.current = L.polyline(latlngs, { color: '#ef4444', weight: 5, opacity: 0.95 }).addTo(map);
                    try { map.fitBounds(L.latLngBounds(latlngs), { padding: [60, 60] }); } catch {}
                  } else {
                    throw new Error('no route');
                  }
                } catch {
                  const latlngs: L.LatLngExpression[] = [[userLocation.lat, userLocation.lng], [pt.lat, pt.lng]];
                  routeRef.current = L.polyline(latlngs, { color: '#ef4444', weight: 4, opacity: 0.9, dashArray: '' }).addTo(map);
                  try { map.fitBounds(L.latLngBounds(latlngs as L.LatLngExpression[]), { padding: [60, 60] }); } catch {}
                }
              })();
            }
          } catch {}
        }
        else {
          // no nearby marker found, but still set selected so Reset button is available
          try { setSelected({ lat: focusCoords.lat, lng: focusCoords.lng }); } catch {}
        }
      } catch {
        // ignore
      }
    }

    // fit bounds if we have visible points and no explicit focusCoords
    if (pts.length > 0 && !focusCoords) {
      const bounds = L.latLngBounds(pts as L.LatLngExpression[]);
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    // attach click handler if provided
    const clickHandler = (e: L.LeafletMouseEvent) => {
      if (onMapClick) onMapClick({ lat: e.latlng.lat, lng: e.latlng.lng });
    };
    if (onMapClick && map) map.on('click', clickHandler);

    // update container height on window resize (when no explicit containerHeight)
    const resizeHandler = () => {
      try {
        const el2 = containerRef.current;
        if (!el2) return;
        if (!containerHeight) {
          const parent = el2.parentElement as HTMLElement | null;
          const h = parent ? parent.clientHeight : el2.clientHeight;
          if (h && h > 0) el2.style.height = `${h}px`;
        }
  try { if (map) map.invalidateSize(); } catch {}
      } catch {}
    };
    window.addEventListener('resize', resizeHandler);

  return () => {
      try {
        if (markersRef.current) {
          markersRef.current.clearLayers();
        }
        markersListRef.current = [];
        if (userMarkerRef.current) {
          try { userMarkerRef.current.remove(); } catch {}
        }
        if (routeRef.current) {
          try { routeRef.current.remove(); } catch {}
        }
        // remove click listener
        try {
          const m = mapRef.current;
            if (m && onMapClick) m.off('click', clickHandler);
          try { window.removeEventListener('resize', resizeHandler); } catch {}
        } catch {}
      } catch {
        // ignore
      }
    };
  }, [allSucursales, visibleSucursales, focusCoords, userLocation, onMapClick, containerHeight, focusDistance]);

  // when containerHeight changes, invalidate size so tiles & view update
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    try {
      // small delay to allow layout
      setTimeout(() => { try { map.invalidateSize(); } catch {} }, 120);
    } catch {}
  }, [containerHeight]);

  const handleReset = () => {
    try {
      const map = mapRef.current;
      if (!map) return;
      // clear any drawn route
      try { if (routeRef.current) { routeRef.current.remove(); routeRef.current = null; } } catch {}
      // close any open popup
      try { map.closePopup(); } catch {}
      // reset selected marker
      setSelected(null);
      // move back to general view (country-level)
      try { map.setView([23.6345, -102.5528], 5); } catch {}
      // call parent reset to clear filters/state
      try { if (onReset) onReset(); } catch {}
    } catch {
      // ignore
    }
  };

  return (
    <div style={{ position: "relative" }}>
  <div ref={containerRef} style={{ width: "100%", height: containerHeight ? `${containerHeight}px` : '410px', borderRadius: 16 }} />
      {selected && (
        <div style={{ position: "absolute", right: 12, top: 12, zIndex: 1000 }}>
          <button
            onClick={handleReset}
            className="bg-white text-red-600 font-semibold rounded px-4 py-2 shadow"
          >
            Regresar al mapa
          </button>
        </div>
      )}
    </div>
  );
}
