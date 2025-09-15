import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import sucursales from '../data/sucursales'

type Props = {
  initialSelectedSucursalName?: string
}

type Sucursal = {
  nombre: string
  ciudad?: string
  colonia?: string
  [key: string]: unknown
}

type Promocion = {
  id: number
  tag: string
  title: string
  subtitle?: string
  description?: string
  locations: string[]
  services: string[]
  validUntil?: string
  spots: number
  spotsTotal: number
  conditions: string[]
}

export default function PromocionesSection({ initialSelectedSucursalName }: Props) {
  // Datos estáticos de ejemplo (puedes mover promociones a un data file)
  const stats = [
    { label: 'Promociones Activas', value: 5 },
    { label: 'Descuento Máximo', value: '40%' },
    { label: 'Pacientes Beneficiados', value: 154 },
    { label: 'Ofertas Destacadas', value: 2 }
  ]

  const promociones = useMemo<Promocion[]>(() => [
    {
      id: 1,
      tag: 'Destacada',
      title: '40% OFF',
      subtitle: 'Mes de la Sonrisa Perfecta',
      description: 'Blanqueamiento dental profesional con tecnología LED + limpieza profunda incluida',
      locations: ['Centro', 'Naco'],
      services: ['Blanqueamiento', 'Limpieza Dental'],
      validUntil: '30 de enero de 2024',
      spots: 23,
      spotsTotal: 100,
      conditions: ['Solo para nuevos pacientes', 'Válido de lunes a viernes']
    },
    {
      id: 2,
      tag: 'Destacada',
      title: '25% OFF',
      subtitle: 'Implantes Premium',
      description: 'Implantes dentales de titanio con corona de porcelana incluida',
      locations: ['Naco'],
      services: ['Implantes', 'Cirugía Oral'],
      validUntil: '28 de febrero de 2024',
      spots: 18,
      spotsTotal: 30,
      conditions: ['Evaluación previa requerida', 'Incluye seguimiento post-operatorio']
    }
  ], [])

  // (usamos directamente `sucursales` para sugerencias)

  const [filter, setFilter] = useState<string>('Destacadas')
  const [search, setSearch] = useState<string>('')
  const [selectedSucursal, setSelectedSucursal] = useState<Sucursal | null>(null)
  const [showFilterMenu, setShowFilterMenu] = useState(false)

  // helper: decide si una promoción aplica a una sucursal concreta
  function promotionAppliesToSucursal(p: Promocion, s: Sucursal | null) {
    if (!s) return false
    const tokens = [s.ciudad, s.colonia, s.nombre]
    // comparar tokens limpios con las locations de la promoción
    return p.locations.some((loc) => tokens.some(t => t && String(loc).toLowerCase().includes(String(t).toLowerCase())))
  }

  const promocionesShown = useMemo(() => {
    if (selectedSucursal) {
      return promociones.filter((p) => promotionAppliesToSucursal(p, selectedSucursal))
    }

    let results = promociones.slice()
    if (filter === 'Destacadas') results = results.filter(p => p.tag === 'Destacada')
    else if (filter === 'Todas las Sucursales') results = results
    else results = results.filter(p => p.locations.includes(filter))

    const q = search.trim().toLowerCase()
    if (q) {
      results = results.filter((p) => {
        const hay = [p.title, p.subtitle || '', p.description || '', (p.services || []).join(' '), (p.locations || []).join(' ')].join(' ').toLowerCase()
        return hay.includes(q)
      })
    }

    return results
  }, [filter, promociones, selectedSucursal, search])

  function getFirstSucursalForPromotion(p: Promocion) {
    const s = (sucursales as Sucursal[]).find((s) => promotionAppliesToSucursal(p, s))
    return s ? s.nombre : null
  }

  // Sugerencias para el input de búsqueda (máx 6) — devolvemos objetos completos de sucursal
  const suggestions = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return [] as Sucursal[]
    return (sucursales as unknown as Sucursal[])
      .filter((s) => {
        return (s.nombre || '').toLowerCase().includes(q) || (String(s.ciudad || '').toLowerCase().includes(q)) || (String(s.colonia || '').toLowerCase().includes(q))
      })
      .slice(0, 6)
  }, [search])

  // Si se pasa una sucursal inicial desde la URL, la seleccionamos
  useEffect(() => {
    if (initialSelectedSucursalName) {
      const s = (sucursales as Sucursal[]).find((x) => x.nombre === initialSelectedSucursalName)
      if (s) {
        setSelectedSucursal(s)
        setSearch(s.nombre)
        setFilter('')
      }
    }
  }, [initialSelectedSucursalName])

  return (
    <section id="promociones" className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-b from-white to-red-50 rounded-lg shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Encuentra tu Promoción Ideal</h2>
        <p className="text-sm text-slate-600">Busca y filtra entre nuestras mejores ofertas</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-red-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-semibold text-red-600">{s.value}</div>
            <div className="text-sm text-gray-500 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 justify-between mb-10">
        <div className="flex flex-col w-full sm:w-3/4">
          <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
            <span className="text-red-500 mr-3">🔍</span>
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setSelectedSucursal(null) }}
              placeholder="Buscar promociones, servicios, tratamientos..."
              className="w-full outline-none border-0 px-2 py-2"
            />
            {search && (
              <button onClick={() => { setSearch(''); setSelectedSucursal(null); setFilter('Destacadas') }} className="text-gray-400">✕</button>
            )}
          </div>

          {search && suggestions.length > 0 && (
            <ul className="mt-2 bg-white border border-gray-200 rounded max-h-48 overflow-auto z-50">
              {suggestions.map((s, i) => (
                <li key={i} className="px-3 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => { setSelectedSucursal(s); setSearch(s.nombre); setFilter(''); }}>
                  <div className="text-sm font-medium">{s.nombre}</div>
                  <div className="text-xs text-gray-500">{s.ciudad} {s.colonia ? `· ${s.colonia}` : ''}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <div className="inline-block">
            <button onClick={() => setShowFilterMenu(v => !v)} className="bg-white border rounded-full px-4 py-2 text-sm text-gray-700">{filter === 'Destacadas' ? 'Destacadas' : filter === 'Todas las Sucursales' ? 'Todas las Sucursales' : filter} ▾</button>
          </div>

          {showFilterMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white border rounded shadow-lg z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => { setFilter('Destacadas'); setShowFilterMenu(false); setSelectedSucursal(null); setSearch('') }}>Destacadas</li>
                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => { setFilter('Todas las Sucursales'); setShowFilterMenu(false); setSelectedSucursal(null); setSearch('') }}>Todas las Sucursales</li>
                <li className="border-t" />
                <li className="px-3 py-2 text-xs text-gray-500">Sucursales</li>
                {(sucursales as Sucursal[]).map((s) => (
                  <li key={s.nombre} className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">{s.nombre}</div>
                        <div className="text-xs text-gray-500">{s.ciudad}{s.colonia ? ` · ${s.colonia}` : ''}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/sucursales?selectedSucursal=${encodeURIComponent(s.nombre)}#promociones`} className="bg-red-600 text-white rounded px-3 py-1 text-xs">Ver promociones</Link>
                        <button onClick={() => { setSelectedSucursal(s); setShowFilterMenu(false); setFilter(''); setSearch(s.nombre) }} className="text-sm text-gray-500">Seleccionar</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-red-600 mb-4">Ofertas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promocionesShown.length === 0 && (
          <div className="text-center text-gray-500 col-span-full">No hay promociones para la selección actual.</div>
        )}

        {promocionesShown.map((p) => {
          const pct = Math.round((p.spots / Math.max(1, p.spotsTotal)) * 100)
          return (
            <div key={p.id} className="bg-white rounded-2xl shadow p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-sm text-gray-500">{p.tag}</div>
                  <div className="text-xl font-bold text-black">{p.title}</div>
                  <div className="text-sm text-gray-500">{p.subtitle}</div>
                </div>
                <div className="text-sm text-gray-400">Válido hasta: {p.validUntil}</div>
              </div>

              <div className="text-sm text-gray-600 mb-4">{p.description}</div>

              <div className="text-sm text-gray-700 mb-3">
                <div className="mb-1"><strong className="text-red-600">Disponible en:</strong> {p.locations.join(', ')}</div>
                <div className="mb-1"><strong className="text-red-600">Servicios:</strong> {p.services.join(', ')}</div>
              </div>

              <div className="mb-3">
                <div className="text-sm text-gray-500 mb-1">Cupos disponibles</div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-3 bg-black" style={{ width: `${pct}%` }} />
                </div>
                <div className="text-sm text-red-600 text-right mt-1">{p.spots.toLocaleString()} de {p.spotsTotal.toLocaleString()}</div>
              </div>

              <div>
                <div className="font-semibold mb-2">Condiciones:</div>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  {p.conditions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">Disponible en: {p.locations.join(', ')}</div>
                {
                  (() => {
                    const firstSucursal = getFirstSucursalForPromotion(p)
                    const url = firstSucursal ? `/sucursales?selectedSucursal=${encodeURIComponent(firstSucursal)}#promociones` : '/sucursales#promociones'
                    return (
                      <Link href={url} className="bg-red-600 text-white rounded px-3 py-2">Aprovechar Oferta</Link>
                    )
                  })()
                }
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
