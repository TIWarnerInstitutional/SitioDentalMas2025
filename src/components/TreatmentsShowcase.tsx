import React, { useState, useEffect } from "react";

const treatments = [
  { name: "Ortodoncia" },
  { name: "Protesis" },
  { name: "Extracciones" },
  { name: "Carillas" },
  { name: "Blanqueamientos" },
  { name: "Limpieza Dental" }
];

const ToothIcon = () => (
  <svg className="hidden md:inline-block w-7 h-7 md:w-8 md:h-8 text-[#FE0000] align-middle mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V21a1 1 0 0 0 2 0v-4h2v4a1 1 0 0 0 2 0v-6.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
  </svg>
);

export default function TreatmentsShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % treatments.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="w-full flex flex-col items-center py-4 md:py-16 mt-0 md:mt-12">
      {/* Header con muela SVG y texto alineado */}
      <div className="flex items-center justify-center w-full mb-2 mt-2">
        <ToothIcon />
        <span className="text-2xl md:text-3xl font-extrabold text-[#FE0000] ml-1">Dental+</span>
      </div>
      {/* Eliminar íconos de equipos, solo mostrar tabs de tratamientos */}
      <div className="w-full flex flex-col items-center pt-6 pb-4">
        <div className="flex gap-4 justify-center flex-wrap mb-2">
          {treatments.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`transition-all font-medium text-base md:text-lg focus:outline-none pb-1 ${active === i ? "text-[#FE0000]" : "text-gray-500"}`}
              style={{ position: "relative" }}
            >
              {t.name}
              {active === i && (
                <span
                  className="block h-[2px] w-full bg-[#FE0000] mt-1 animate-slidein"
                  style={{ borderRadius: 2 }}
                ></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
