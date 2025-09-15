"use client"
import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
  analytics: boolean
  marketing: boolean
  formMemory: boolean
  setAnalytics: (v: boolean) => void
  setMarketing: (v: boolean) => void
  setFormMemory: (v: boolean) => void
  onSave: () => void
}

export default function CookiePreferencesModal({ open, onClose, analytics, marketing, formMemory, setAnalytics, setMarketing, setFormMemory, onSave }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full shadow-lg p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-red-700">Administrar cookies</h3>
            <p className="text-sm text-gray-600 mt-2">Elige qué categorías de cookies permites. Puedes cambiar esto en cualquier momento.</p>
          </div>
          <div>
            <button onClick={onClose} className="text-gray-500">Cerrar</button>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between p-4 border rounded">
            <div>
              <div className="font-medium">Analíticas</div>
              <div className="text-sm text-gray-600">Permite recopilar datos anónimos para mejorar el sitio.</div>
            </div>
            <div>
              <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded">
            <div>
              <div className="font-medium">Marketing</div>
              <div className="text-sm text-gray-600">Permite personalizar contenido y promociones.</div>
            </div>
            <div>
              <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded">
            <div>
              <div className="font-medium">Recordar formularios</div>
              <div className="text-sm text-gray-600">Guarda tus datos en formularios para facilitar futuros envíos.</div>
            </div>
            <div>
              <input type="checkbox" checked={formMemory} onChange={(e) => setFormMemory(e.target.checked)} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
          <button onClick={onSave} className="px-4 py-2 rounded bg-red-600 text-white">Guardar preferencias</button>
        </div>
      </div>
    </div>
  )
}
