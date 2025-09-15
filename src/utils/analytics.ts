export function initializeAnalytics() {
  // Placeholder: en producción inicializa GA/Google Tag Manager u otra herramienta
  if (typeof window !== 'undefined') {
    ;(window as unknown as { dentalmasAnalyticsInitialized?: boolean }).dentalmasAnalyticsInitialized = true
  }
}

export const trackDentalEvents = {
  contactFormStart: () => {
    if (typeof window !== 'undefined') {
      // placeholder event
      ;(window as unknown as { dentalmasLastEvent?: string }).dentalmasLastEvent = 'contactFormStart'
    }
  }
}
