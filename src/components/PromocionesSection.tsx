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
    { label: 'Promociones Activas', value: 1 },
    { label: 'Descuento Máximo', value: 'Gratis' },
    { label: 'Pacientes Beneficiados', value: '+500k' },
    { label: 'Ofertas Destacadas', value: 1 }
  ]

  const [promocionesState, setPromocionesState] = useState<Promocion[]>([])

  useEffect(() => {
    // Load promotions from localStorage if available, otherwise seed from data/promociones.json
    async function loadLocal() {
      try {
        if (typeof window === 'undefined') return
        const raw = localStorage.getItem('promociones_seed')
        if (raw) {
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed)) {
            const allLocations = (sucursales as Sucursal[]).map(s => s.nombre).filter(Boolean) as string[]
            const promos = parsed.map((p: any) => ({ ...p, locations: (p.locations && p.locations.length) ? p.locations : allLocations }))
            setPromocionesState(promos)
            return
          }
        }

        // seed from data file (resolve via dynamic import so this runs on client)
        try {
          const mod = await import('../data/promociones.json')
          const seed = Array.isArray(mod.default) ? mod.default : mod
          const allLocations = (sucursales as Sucursal[]).map(s => s.nombre).filter(Boolean) as string[]
          const promos = seed.map((p: any) => ({ ...p, locations: (p.locations && p.locations.length) ? p.locations : allLocations }))
          setPromocionesState(promos)
          try { localStorage.setItem('promociones_seed', JSON.stringify(promos)) } catch (e) {}
        } catch (e) {
          console.error('Failed to load local promociones seed', e)
        }
      } catch (e) {
        console.error('Failed to load promociones from localStorage', e)
      }
    }
    loadLocal()
  }, [])

  // Cupones (un código por promoción, el mismo para todos los cupones de esa oferta)
  const promoCodes: Record<number, string> = {
    1: 'DMASFREE'
  }

  const [modalVisible, setModalVisible] = useState(false)
  const [modalCode, setModalCode] = useState<string>('')
  const [modalTitle, setModalTitle] = useState<string>('')
  const [claimedPromos, setClaimedPromos] = useState<number[]>([])

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return
      const raw = localStorage.getItem('claimed_promos')
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setClaimedPromos(parsed.map((n:any) => Number(n)).filter(n => !Number.isNaN(n)))
      }
    } catch (e) {}
  }, [])

  function markClaimed(id: number) {
    try {
      setClaimedPromos(prev => {
        if (prev.includes(id)) return prev
        const next = [...prev, id]
        try { localStorage.setItem('claimed_promos', JSON.stringify(next)) } catch (e) {}
        return next
      })
    } catch (e) {}
  }

  async function handleRedeem(id: number, code: string, title?: string) {
    // Local-only redeem: decrement spots in local state and persist in localStorage; prevent double-claim per browser
    if (!claimedPromos.includes(id)) {
      try {
        setPromocionesState(prev => {
          const next = prev.map(p => {
            if (p.id === id) return { ...p, spots: Math.max(0, (p.spots || 0) - 1) }
            return p
          })
          try { localStorage.setItem('promociones_seed', JSON.stringify(next)) } catch (e) {}
          return next
        })
        markClaimed(id)
      } catch (e) {
        console.error('local redeem failed', e)
      }
    }
    setModalCode(code)
    setModalTitle(title || '')
    setModalVisible(true)
    try { if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }) } catch (e) {}
  }

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
      return promocionesState.filter((p) => promotionAppliesToSucursal(p, selectedSucursal))
    }

    let results = promocionesState.slice()
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
  }, [filter, promocionesState, selectedSucursal, search])

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

  {promocionesShown.slice(0, 2).map((p) => {
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
                <div className="mb-1"><strong className="text-red-600">Disponible en:</strong> {p.locations.length === (sucursales as Sucursal[]).length ? 'Todas las sucursales' : p.locations.join(', ')}</div>
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
                <div className="text-sm text-gray-500">Disponible en: {p.locations.length === (sucursales as Sucursal[]).length ? 'Todas las sucursales' : p.locations.join(', ')}</div>
                {
                  (() => {
                    const firstSucursal = getFirstSucursalForPromotion(p)
                    const code = promoCodes[p.id] || 'CUPON'
                    return (
                      claimedPromos.includes(p.id) ? (
                        <button disabled className="bg-gray-300 text-gray-600 rounded px-3 py-2">Cupón reclamado</button>
                      ) : (
                        <button onClick={() => handleRedeem(p.id, code, p.title)} className="bg-red-600 text-white rounded px-3 py-2">Aprovechar Oferta</button>
                      )
                    )
                  })()
                }
              </div>
            </div>
          )
        })}
      </div>
      {/* Modal de cupón */}
      {modalVisible && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
          <div className="relative z-[100000] bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-4">
            <h3 className="text-xl font-bold mb-2">¡Felicidades!</h3>
            <p className="mb-4">Has obtenido un cupón para <strong>{modalTitle}</strong>. Presenta este código en nuestras sucursales o indícale a un asesor que tienes un cupón.</p>
            <div className="bg-gray-100 rounded p-3 text-center mb-4">
              <div className="text-sm text-gray-500">Código</div>
              <div className="text-2xl font-mono font-semibold mt-1">{modalCode}</div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => { navigator.clipboard?.writeText(modalCode); try { const id = Object.keys(promoCodes).find(k => promoCodes[Number(k)] === modalCode); if (id) markClaimed(Number(id)); } catch(e){} }} className="flex-1 bg-green-600 text-white rounded px-4 py-2">Copiar código</button>
              <button onClick={() => setModalVisible(false)} className="flex-1 bg-gray-200 rounded px-4 py-2">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
