"use client";
import React from 'react';
import sucursales from '../data/sucursales';

type Sucursal = any;

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect?: (sucursal: Sucursal) => void;
}

export default function SucursalPickerModal({ open, onClose, onSelect }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 mx-4 z-10">
        <h3 className="text-xl font-bold mb-4 text-[#fb0000]">Selecciona una sucursal</h3>
  <p className="text-sm text-gray-600 mb-4">Haz clic en la sucursal donde quieras agendar.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-auto">
          {(sucursales as any[]).map((s: any, i: number) => (
            <a
              key={i}
              href={s.AgendaOnline || s.agenda || ''}
              onClick={(e) => {
                // prefer opening agenda in new tab; prevent default to control behavior
                e.preventDefault();
                const url = s.agenda || '';
                if (url) window.open(url, '_blank', 'noopener');
                onSelect && onSelect(s);
                onClose();
              }}
              className="block text-left p-3 rounded-lg border hover:shadow-md bg-white"
            >
              <div className="font-semibold text-sm text-[#fb0000]">{s.nombre}</div>
              <div className="text-xs text-gray-500">{s.ciudad} {s.colonia ? `· ${s.colonia}` : ''}</div>
            </a>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 bg-[#fb0000] text-white rounded">Cerrar</button>
        </div>
      </div>
    </div>
  );
}
