import Image from "next/image";
import sucursales from "../../data/sucursales";

export default function SucursalesPage() {

  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-2">
          Nuestras <span className="text-red-600">Sucursales</span>
        </h1>
        <p className="text-lg text-gray-600">3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-16">
        {sucursales.map((s: any, i: number) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image src={s.imagen} alt={s.nombre} width={350} height={250} className="rounded-xl shadow-lg object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">{s.nombre}</h2>
                <span className="text-yellow-500 font-bold">★ {s.rating}</span>
                <span className="text-xs text-gray-500">({s.reviews})</span>
              </div>
              <p className="text-sm text-gray-700 mb-1 font-semibold">{s.direccion}</p>
              <p className="text-sm text-red-600 font-semibold mb-1">{s.telefono}</p>
              <div className="text-xs mb-2">
                <div>{s.horario}</div>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Servicios Disponibles:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {s.servicios.map((serv: string, idx: number) => (
                    <span key={idx} className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium border border-gray-200">{serv}</span>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Características:</span>
                <ul className="list-none mt-1 text-xs space-y-1">
                  {s.caracteristicas.map((c: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2"><span className="text-red-500">●</span> {c}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Cómo llegar:</span>
                <ul className="list-none mt-1 text-xs space-y-1">
                  {s.comoLlegar.map((c: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2"><span className="text-blue-500">→</span> {c}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-red-700 transition">{s.btn}</button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded font-semibold shadow hover:bg-gray-100 transition">{s.mapBtn}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

  // ...existing code...
    </main>
  );
}
