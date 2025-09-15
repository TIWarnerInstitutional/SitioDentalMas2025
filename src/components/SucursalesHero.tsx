"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import sucursales from "../data/sucursales";

const MapaSucursales = dynamic(() => import("./MapaSucursales"), { ssr: false });

export default function SucursalesHero() {
  const [query, setQuery] = useState("");

  type Sucursal = { nombre?: string; ciudad?: string; direccion?: string; colonia?: string };
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sucursales as Sucursal[];
    return (sucursales as Sucursal[]).filter((s: Sucursal) => {
      return (
        (s.nombre && s.nombre.toLowerCase().includes(q)) ||
        (s.ciudad && s.ciudad.toLowerCase().includes(q)) ||
        (s.direccion && s.direccion.toLowerCase().includes(q)) ||
        (s.colonia && s.colonia.toLowerCase().includes(q))
      );
    });
  }, [query]);

  return (
    <section className="max-w-5xl mx-auto pt-8 pb-8 px-4">
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
          {filtered.length > 3 && (
            <Link
              href="/sucursales"
              className="w-full bg-white text-red-600 font-semibold rounded p-3 hover:bg-red-50 transition block text-center"
            >
              Ver todas nuestras clínicas
            </Link>
          )}
        </div>
        <div className="flex-1 w-full min-h-[250px]">
          <MapaSucursales sucursales={filtered} />
        </div>
      </div>
    </section>
  );
}
