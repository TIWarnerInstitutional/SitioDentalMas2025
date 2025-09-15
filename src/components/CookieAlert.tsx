"use client"
import React, { useEffect, useState } from 'react'
import { initializeAnalytics } from '../utils/analytics'
import CookiePreferencesModal from './CookiePreferencesModal'

type Decision = 'accepted' | 'rejected' | 'essential-only' | null

const LOCAL_KEY = 'dentalmas-cookies-decision'
const CHATBOT_KEY = 'chatbot-memory-enabled'
const FORM_KEY = 'form-memory-enabled'

function saveDecision(decision: Decision) {
  try {
    if (decision === null) return localStorage.removeItem(LOCAL_KEY)
    localStorage.setItem(LOCAL_KEY, decision)
  } catch (e) {
    // ignore
  }
}

function getDecision(): Decision {
  try {
    const v = localStorage.getItem(LOCAL_KEY)
    if (!v) return null
    return v as Decision
  } catch (e) {
    return null
  }
}

export default function CookieAlert() {
  const [open, setOpen] = useState(false)
  const [decision, setDecision] = useState<Decision>(null)
  const [chatbotMemory, setChatbotMemory] = useState<boolean>(true)
  const [formMemory, setFormMemory] = useState<boolean>(true)
  const [marketing, setMarketing] = useState<boolean>(true)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const d = getDecision()
    setDecision(d)
    if (!d) setOpen(true)

    // hydrate toggles from localStorage
    try {
      const cb = localStorage.getItem(CHATBOT_KEY)
      const fm = localStorage.getItem(FORM_KEY)
      if (cb !== null) setChatbotMemory(cb === 'true')
      if (fm !== null) setFormMemory(fm === 'true')
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (decision === 'accepted') {
      initializeAnalytics()
    }
  }, [decision])

  function acceptAll() {
    setDecision('accepted')
    saveDecision('accepted')
    try {
      localStorage.setItem(CHATBOT_KEY, 'true')
      localStorage.setItem(FORM_KEY, 'true')
    } catch {
      // ignore
    }
    setChatbotMemory(true)
    setFormMemory(true)
    setOpen(false)
  }

  function acceptEssential() {
    setDecision('essential-only')
    saveDecision('essential-only')
    try {
      localStorage.setItem(CHATBOT_KEY, 'false')
      localStorage.setItem(FORM_KEY, 'false')
    } catch {
      // ignore
    }
    setChatbotMemory(false)
    setFormMemory(false)
    setOpen(false)
  }

  function savePreferences() {
    setDecision('accepted')
    saveDecision('accepted')
    try {
      localStorage.setItem(CHATBOT_KEY, chatbotMemory ? 'true' : 'false')
      localStorage.setItem(FORM_KEY, formMemory ? 'true' : 'false')
      localStorage.setItem('marketing-enabled', marketing ? 'true' : 'false')
    } catch {
      // ignore
    }
    if (chatbotMemory || formMemory || marketing) initializeAnalytics()
    setOpen(false)
    setModalOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-[95%] bg-white border-t-4 border-red-600 rounded-md shadow-md p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold text-red-700">Aviso de Cookies</h3>
            <p className="text-sm text-gray-700 mt-2">Usamos cookies para mejorar tu experiencia en DentalMas. Algunas son esenciales y otras nos ayudan a personalizar y analizar el sitio. Puedes aceptar todas, solo las básicas o administrar tus preferencias. Más información en nuestra <a href="/politica-de-cookies" className="text-red-600 underline">Política de cookies</a>.</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            <button onClick={acceptEssential} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm">Solo básicas</button>
            <button onClick={acceptAll} className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">Aceptar todas ✨</button>
          </div>

          <div>
            <button onClick={() => setModalOpen(true)} className="border-2 border-red-600 text-red-600 px-4 py-2 rounded-full">Administrar las cookies</button>
          </div>
        </div>
      </div>
      <CookiePreferencesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        analytics={chatbotMemory}
        marketing={marketing}
        formMemory={formMemory}
        setAnalytics={setChatbotMemory}
        setMarketing={setMarketing}
        setFormMemory={setFormMemory}
        onSave={savePreferences}
      />
    </div>
  )
}
