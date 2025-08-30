"use client";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapaSucursales"), { ssr: false });

export default function SucursalesHero() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Mapa a la izquierda */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center relative">
            <DynamicMap
              search={search}
              selected={selected}
              setSelected={setSelected}
              hideList
              preview
            />
          </div>
        </div>
        {/* Info y búsqueda a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#fe0000' }}>
            Encuentra una Clinica Dental <br /> cerca de ti
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Elige entre +30 clínicas para Cuidar tu Salud Dental
          </p>
          <div className="w-full flex flex-col items-center mb-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Escribe tu ciudad, código postal o colonia."
                className="w-full px-6 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#002B5C] text-lg"
              />
            </div>
            <span className="text-sm text-gray-500 mt-2">
              Escribe tu ciudad, código postal o colonia
            </span>
          </div>
          <Link
            href="/sucursales"
            className={`mt-4 px-8 py-3 rounded-xl border border-[#fe0000] font-semibold transition ${selected ? 'bg-white text-[#fe0000] hover:bg-[#fe0000] hover:text-white' : 'bg-[#fe0000] text-white hover:bg-white hover:text-[#fe0000]'}`}
          >
            Ver todas nuestras clínicas
          </Link>
        </div>
      </div>
    </section>
  );
}
