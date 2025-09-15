
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
  sucursales?: Sucursal[];
};

export default function MapaSucursales({ sucursales = [] }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    // create container
    const el = containerRef.current;
    if (!el) return;

    // initialize Leaflet map imperatively (if not already)
    let map = mapRef.current;
    if (!map) {
      map = L.map(el, { center: [23.6345, -102.5528], zoom: 5, scrollWheelZoom: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
      mapRef.current = map;
    }

    // clear previous markers
    if (markersRef.current) {
      markersRef.current.clearLayers();
    } else {
      markersRef.current = L.layerGroup().addTo(map);
    }

    // add markers
    const pts: L.LatLngExpression[] = [];
    sucursales.forEach((s) => {
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
        pts.push([s.lat, s.lng]);
      }
    });

    // fit bounds if we have points
    if (pts.length > 0) {
      const bounds = L.latLngBounds(pts as L.LatLngExpression[]);
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    return () => {
      try {
        if (markersRef.current) {
          markersRef.current.clearLayers();
        }
      } catch {
        // ignore
      }
    };
  }, [sucursales]);

  const handleReset = () => {
    try {
      const map = mapRef.current;
      if (!map) return;
      // fit to all markers
      const layers = markersRef.current;
      const latlngs: L.LatLngExpression[] = [];
      layers?.eachLayer((layer: L.Layer) => {
        // Narrow to Marker by checking getLatLng at runtime
        const marker = layer as L.Marker | L.Layer;
        if (typeof (marker as L.Marker).getLatLng === 'function') {
          const pt = (marker as L.Marker).getLatLng();
          latlngs.push([pt.lat, pt.lng]);
        }
      });
      if (latlngs.length > 0) {
        map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40] });
      }
      setSelected(null);
    } catch {
      // ignore
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div ref={containerRef} style={{ width: "100%", height: 250, borderRadius: 16 }} />
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
