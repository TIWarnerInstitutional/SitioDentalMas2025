"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import sucursales from "../data/sucursales";

const pinIcon = L.icon({
  iconUrl: "/PinMapa.png",
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});


import { Sucursal } from "../types/Sucursal";

type Props = {
  search?: string;
  selected?: Sucursal | null;
  setSelected?: (s: Sucursal | null) => void;
  hideList?: boolean;
  preview?: boolean;
};

export default function MapaSucursales({ search = "", selected, setSelected, hideList, preview }: Props) {
  const [mapCenter, setMapCenter] = useState<[number, number]>([23.6345, -102.5528]); // México
  const [mapZoom, setMapZoom] = useState(5);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  const filtered = sucursales.filter(clinica => {
    const s = search.trim().toLowerCase();
    if (!s) return true;
    return (
      clinica.nombre?.toLowerCase().includes(s) ||
      clinica.direccion?.toLowerCase().includes(s) ||
      clinica.ciudad?.toLowerCase().includes(s) ||
      clinica.colonia?.toLowerCase().includes(s) ||
      clinica.cp?.toString().includes(s)
    );
  });

  // Componente interno para controlar el zoom animado
  function ZoomToSucursal({ selected }: { selected: Sucursal | null | undefined }) {
    const map = useMap();
    useEffect(() => {
      if (selected && typeof selected.lat === "number" && typeof selected.lng === "number") {
  map.flyTo([selected.lat, selected.lng], 16, { animate: true, duration: 2 });
        setIsZoomed(true);
      }
    }, [selected, map]);
    // Si se deselecciona, regresa al centro original
    useEffect(() => {
      if (!selected && isZoomed) {
  map.flyTo(mapCenter, mapZoom, { animate: true, duration: 2 });
        setIsZoomed(false);
      }
    }, [selected, isZoomed, map, mapCenter, mapZoom]);
    return null;
  }

  if (!isClient) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <MapContainer center={mapCenter as [number, number]} zoom={mapZoom} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // @ts-ignore
          attribution="&copy; OpenStreetMap contributors"
        />
        <ZoomToSucursal selected={selected} />
        {filtered.map((clinica, i) => {
          if (typeof clinica.lat !== "number" || typeof clinica.lng !== "number") return null;
          return (
            <Marker
              key={i}
              position={[clinica.lat, clinica.lng] as [number, number]}
              // @ts-ignore
              icon={pinIcon}
              eventHandlers={{
                click: () => {
                  if (setSelected) setSelected(clinica);
                },
              }}
            >
              <Popup>
                <div className="font-bold text-red-600">{clinica.nombre}</div>
                <div className="text-xs text-gray-700">{clinica.direccion}</div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      {isZoomed && selected && (
        <button
          className="absolute top-4 right-4 z-[1000] bg-white text-red-600 px-4 py-2 rounded shadow font-semibold border border-red-600 hover:bg-red-50 transition"
          onClick={() => {
            if (setSelected) setSelected(null);
          }}
        >
          Regresar al mapa
        </button>
      )}
    </div>
  );
}
