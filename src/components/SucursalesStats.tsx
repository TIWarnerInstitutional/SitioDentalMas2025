import React, { useState } from 'react'
import sucursales from '../data/sucursales'

function numberFromReviews(rev?: string) {
  if (!rev) return 0
  const n = parseInt(rev.replace(/\D/g, ''), 10)
  return Number.isNaN(n) ? 0 : n
}

type Sucursal = {
  nombre: string
  pacientesAtendidos?: number
  reviews?: string
  satisfaccion?: number | string
  rating?: number | string
  servicios?: string[]
  especialistas?: number
  tiempoPromedio?: number
  tratamientosExitosos?: number
  crecimientoAnual?: string
}

export default function SucursalesStats() {
  const totalSucursales = (sucursales as Sucursal[]).length
  const totalPacientes = (sucursales as Sucursal[]).reduce((acc, s) => acc + (s.pacientesAtendidos || numberFromReviews(String(s.reviews))), 0)
  const ratings = (sucursales as Sucursal[]).map((s) => parseFloat(String(s.satisfaccion || s.rating)) || 0)
  const avgRating = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0
  const satisfPercent = Math.round((avgRating / 5) * 100)
  const uniqueServicios = new Set((sucursales as Sucursal[]).flatMap((s) => s.servicios || [])).size

  const [showAll, setShowAll] = useState(false)

  const source = showAll ? (sucursales as Sucursal[]) : (sucursales as Sucursal[]).slice(0, 3)
  const topBranches = source.map((s, i) => ({
    nombre: s.nombre,
    pacientes: s.pacientesAtendidos || numberFromReviews(String(s.reviews)),
    satisf: s.satisfaccion ? Number(s.satisfaccion) : Math.round(((parseFloat(String(s.rating)) || 0) / 5) * 100),
    especialistas: s.especialistas || (s.servicios || []).length || Math.max(4, Math.round(uniqueServicios / Math.max(1, totalSucursales))),
    tiempo: s.tiempoPromedio || [25, 22, 28][i] || 25,
    tratamientosExitosos: s.tratamientosExitosos || 0,
    crecimientoAnual: s.crecimientoAnual || '+0%'
  }))

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-light text-center text-red-600 mb-2">Resultados Que Hablan Por Sí Solos</h2>
      <p className="text-center text-gray-500 mb-8">Nuestras estadísticas demuestran nuestro compromiso con la excelencia en cada sucursal</p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-10">
        <div className="bg-red-600 text-white rounded-2xl p-8 flex flex-col items-start gap-4">
          <div className="w-10 h-10 bg-red-700/30 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="text-3xl font-semibold">{totalPacientes.toLocaleString()}</div>
          <div className="text-sm opacity-90">Pacientes Atendidos</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-red-600">{satisfPercent}%</div>
          <div className="text-sm text-gray-500 mt-2">Satisfacción Promedio</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-red-600">{uniqueServicios}</div>
          <div className="text-sm text-gray-500 mt-2">Especialistas</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-red-600">{totalSucursales}</div>
          <div className="text-sm text-gray-500 mt-2">Sucursales</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topBranches.map((b, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-red-600 font-semibold mb-4">{b.nombre}</h3>

            <div className="text-sm text-gray-600 mb-2 flex items-center justify-between">
              <span>Pacientes Atendidos</span>
              <span className="text-red-600 font-semibold">{b.pacientes.toLocaleString()}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div className="h-2 bg-black rounded-full" style={{ width: `${Math.min(100, Math.max(6, (b.pacientes / Math.max(1, totalPacientes)) * 100))}%` }} />
            </div>

            <div className="text-sm text-gray-600 mb-2 flex items-center justify-between">
              <span>Satisfacción</span>
              <span className="text-red-600 font-semibold">{b.satisf}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div className="h-2 bg-black rounded-full" style={{ width: `${b.satisf}%` }} />
            </div>

            <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 text-red-600 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Tiempo Promedio</span>
                <span className="text-red-600 font-semibold">{b.tiempo} min</span>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-6 h-6 text-red-600 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 11V7a4 4 0 0 0-8 0v4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="11" width="20" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Especialistas</span>
                <span className="text-red-600 font-semibold">{b.especialistas}</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-center text-gray-500">Tratamientos Exitosos</div>
            <div className="text-3xl text-red-600 font-semibold text-center mt-2">{(b.tratamientosExitosos || 0).toLocaleString()}</div>
          </div>
        ))}
      </div>
      {sucursales.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="bg-white border border-red-600 text-red-600 font-semibold rounded px-6 py-3 hover:bg-red-50"
          >
            {showAll ? 'Mostrar menos' : 'Ver todas'}
          </button>
        </div>
      )}
    </section>
  )
}
