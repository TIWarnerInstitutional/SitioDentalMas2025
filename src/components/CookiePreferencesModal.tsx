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
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
  <div className="bg-white w-full max-w-full sm:max-w-3xl shadow-lg p-4 sm:p-6 sm:rounded-lg">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-red-700">Administrar cookies</h3>
            <p className="text-sm text-gray-600 mt-2">Elige qué categorías de cookies permites. Puedes cambiar esto en cualquier momento.</p>
          </div>
          <div>
            <button onClick={onClose} className="text-gray-500 px-2 py-1 rounded hover:bg-gray-100">Cerrar</button>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between p-3 border rounded">
            <div className="pr-4">
              <div className="font-medium text-black">Analíticas</div>
              <div className="text-sm text-gray-600">Permite recopilar datos anónimos para mejorar el sitio.</div>
            </div>
            <div>
              <input className="w-5 h-5" type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded">
            <div className="pr-4">
              <div className="font-medium text-black">Marketing</div>
              <div className="text-sm text-gray-600">Permite personalizar contenido y promociones.</div>
            </div>
            <div>
              <input className="w-5 h-5" type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded">
            <div className="pr-4">
              <div className="font-medium text-black">Recordar formularios</div>
              <div className="text-sm text-gray-600">Guarda tus datos en formularios para facilitar futuros envíos.</div>
            </div>
            <div>
              <input className="w-5 h-5" type="checkbox" checked={formMemory} onChange={(e) => setFormMemory(e.target.checked)} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button onClick={onClose} className="w-full sm:w-auto px-4 py-2 rounded border">Cancelar</button>
          <button onClick={onSave} className="w-full sm:w-auto px-4 py-2 rounded bg-red-600 text-white">Guardar preferencias</button>
        </div>
      </div>
    </div>
  )
}
