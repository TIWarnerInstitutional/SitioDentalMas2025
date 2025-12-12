"use client";
import Image from 'next/image'
import { Button } from "./ui/button";
import { Menu, X, Phone, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import SucursalPickerModal from './SucursalPickerModal';
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [waImageOk, setWaImageOk] = useState(true);
  const [showAgendarModal, setShowAgendarModal] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Sucursales", href: "/sucursales" },
    { name: "Blog", href: "/blog" },
    // { name: "Franquicias", href: "/franquicias" }
  ];
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 30 * 60; // Reset to 30 minutes
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Banner Promo */}
      <Link href="/sucursales#promociones" aria-label="Ver promociones" className="block w-full bg-red-600 text-white py-3 animate-pulse">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm px-4">
          <span className="font-medium">🎉 ¡Promoción especial! Obtén un cupón por tiempo ilimitado</span>
          <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-red-600">
            <Clock size={16} />
            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </Link>
      {/* Header */}
  <header className="bg-white shadow-sm border-b sticky top-0 z-[9999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" aria-label="Dental+ home" className="inline-block">
                  <Image src="/LogoD+.png" alt="Dental+" width={160} height={40} className="object-contain" priority />
                </Link>
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.name} className="relative">
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm transition-colors font-medium ${isActive ? "font-semibold" : "text-gray-700 hover:text-gray-900"}`}
                        style={{ color: isActive ? "#FE0000" : undefined }}
                      >
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </nav>
            {/* Contact Info & CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone size={16} className="mr-1" style={{ color: "#FE0000" }} />
                <span>+5215535872711</span>
              </div>
              {/* WhatsApp Button */}
              <Button 
                size="sm"
                className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md flex items-center"
                onClick={() => window.open("https://wa.me/5215535872711", "_blank")}
              >
                {waImageOk ? (
                  <img src="/icon-whatsapp.svg" alt="WhatsApp" className="w-4 h-4 mr-2" onError={() => setWaImageOk(false)} />
                ) : (
                  <MessageCircle size={16} className="mr-2 text-white" />
                )}
                <span className="font-medium">WhatsApp</span>
              </Button>
              {/* Reserva Cita Button */}
              <Link href="/cita">
                <Button 
                  size="sm"
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold"
                >
                  Reservar Cita
                </Button>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
                style={{ color: isMenuOpen ? "#FE0000" : undefined }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[10000] bg-white overflow-auto">
            <div className="max-w-lg mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" aria-label="Dental+ home" className="inline-block">
                  <Image src="/LogoD+.png" alt="Dental+" width={140} height={36} className="object-contain" />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col divide-y divide-gray-100 bg-white rounded-md shadow-sm">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block w-full text-left px-4 py-4 text-lg font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 space-y-3">
                <Button
                  size="sm"
                  className="w-full bg-green-500 text-white hover:bg-green-600 px-4 py-3 rounded-md flex items-center justify-center"
                  onClick={() => window.open("https://wa.me/5215535872711", "_blank")}
                >
                  {waImageOk ? (
                    <img src="/icon-whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-3" onError={() => setWaImageOk(false)} />
                  ) : (
                    <MessageCircle size={18} className="mr-3 text-white" />
                  )}
                  <span className="font-medium">WhatsApp</span>
                </Button>

                <Link href="/cita" className="w-full">
                  <Button
                    size="sm"
                    className="w-full text-white bg-red-600 hover:bg-red-700 px-4 py-3 rounded-md font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Reservar Cita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <SucursalPickerModal open={showAgendarModal} onClose={() => setShowAgendarModal(false)} />
    </>
  );
}
