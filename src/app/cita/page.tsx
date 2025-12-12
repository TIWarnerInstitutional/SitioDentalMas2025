"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SucursalPickerModal from '@/components/SucursalPickerModal';

export default function CitaPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Mostrar el modal inmediatamente
    setShowModal(true);
    
    // Track page view para Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Agendar Cita',
        page_location: window.location.href,
        page_path: '/cita'
      });
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    // Redirigir al home cuando cierren el modal
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Agendar tu Cita</h1>
        <p className="text-gray-600">Selecciona tu sucursal preferida...</p>
      </div>
      <SucursalPickerModal open={showModal} onClose={handleClose} />
    </div>
  );
}
