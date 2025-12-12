"use client";
import React from 'react';
import sucursales from '../data/sucursales';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SucursalPickerModal({ open, onClose }: Props) {
  if (!open) return null;

  const handleSucursalClick = (s: any) => {
    // Generar slug de la sucursal - normalizar para remover acentos
    const slug = s.nombre
      .replace(/dental más /gi, '') // Remover "dental más" primero
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    // Track event en Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_sucursal', {
        event_category: 'Engagement',
        event_label: s.nombre,
        sucursal_nombre: s.nombre,
        sucursal_ciudad: s.ciudad
      });
    }

    // Navegar primero a la ruta de tracking /citas/[sucursal]
    window.location.href = `/citas/${slug}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 mx-4 z-10">
        <h3 className="text-xl font-bold mb-4 text-[#fb0000]">Selecciona una sucursal</h3>
        <p className="text-sm text-gray-600 mb-4">Haz clic en la sucursal donde quieras agendar.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-auto">
          {(sucursales as any[]).map((s: any, i: number) => (
            <button
              key={i}
              onClick={() => handleSucursalClick(s)}
              className="block text-left p-3 rounded-lg border hover:shadow-md bg-white hover:bg-red-50 transition-colors"
            >
              <div className="font-semibold text-sm text-[#fb0000]">{s.nombre}</div>
              <div className="text-xs text-gray-500">{s.ciudad} {s.colonia ? `· ${s.colonia}` : ''}</div>
            </button>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-[#fb0000] text-white rounded hover:bg-red-700 transition-colors">Cerrar</button>
        </div>
      </div>
    </div>
  );
}
