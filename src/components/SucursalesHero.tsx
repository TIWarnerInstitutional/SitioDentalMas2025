"use client";

import React from "react";
import SucursalesSection from "./SucursalesSection";

export default function SucursalesHero() {
  return (
    <section className="max-w-6xl mx-auto pt-8 pb-8 px-4">
      <div className="rounded-2xl p-8 flex flex-col gap-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-800">
            <span className="text-gray-600">Nuestras</span> <span className="font-bold text-red-600">Sucursales</span>
          </h1>
          <p className="mt-3 text-gray-600">Elige entre más de 30 clínicas para cuidar tu salud dental. Encuentra la ubicación más conveniente para ti.</p>
        </div>
        <div className="mt-4">
          <SucursalesSection hideCards={true} />
        </div>
      </div>
    </section>
  );
}
