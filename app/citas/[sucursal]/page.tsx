"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import sucursales from '@/data/sucursales';

export default function CitaSucursalPage() {
  const params = useParams();
  const sucursalSlug = params?.sucursal as string;

  useEffect(() => {
    if (!sucursalSlug) {
      window.location.href = '/cita';
      return;
    }

    // Buscar la sucursal por slug
    const sucursal = sucursales.find((s: any) => {
      const slug = s.nombre
        .replace(/dental más /gi, '') // Remover "dental más" primero
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remover acentos
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      return slug === sucursalSlug.toLowerCase();
    });

    if (sucursal && (sucursal as any).AgendaOnline) {
      // Track conversión para Google Ads y Analytics
      if (typeof window !== 'undefined') {
        // Google Analytics event
        if ((window as any).gtag) {
          (window as any).gtag('event', 'cita_click', {
            event_category: 'Conversión',
            event_label: sucursal.nombre,
            sucursal_nombre: sucursal.nombre,
            sucursal_ciudad: (sucursal as any).ciudad,
            page_path: `/citas/${sucursalSlug}`
          });

          // Conversion event para Google Ads
          (window as any).gtag('event', 'conversion', {
            send_to: 'AW-XXXXXXXXX/XXXXXX', // Reemplazar con tu ID de conversión
            event_category: 'Agendar Cita',
            event_label: sucursal.nombre
          });
        }

        // Facebook Pixel (si lo tienes)
        if ((window as any).fbq) {
          (window as any).fbq('track', 'Schedule', {
            content_name: sucursal.nombre,
            content_category: 'Cita'
          });
        }
      }

      // Redirigir al link de agenda inmediatamente
      window.location.href = (sucursal as any).AgendaOnline;
    } else {
      // Si no se encuentra la sucursal, redirigir al selector
      window.location.href = '/cita';
    }
  }, [sucursalSlug]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirigiendo a tu agenda...</h1>
        <p className="text-gray-600">
          Te estamos llevando a la página de reservación de tu sucursal.
        </p>
      </div>
    </div>
  );
}
