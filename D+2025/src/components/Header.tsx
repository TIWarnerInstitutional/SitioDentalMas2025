import { Button } from "./ui/button";
import { Menu, X, Phone, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "inicio", onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const navigation = [
    { name: "Inicio", href: "inicio" },
    { name: "Quiénes Somos", href: "quienes-somos" },
    { name: "Sucursales", href: "sucursales" },
    { name: "Blog", href: "blog" },
    { name: "Franquicias", href: "franquicias" }
  ];

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

  const handleNavigation = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Banner Promo */}
      <div style={{ backgroundColor: "#FE0000" }} className="text-white py-3 px-4 animate-pulse">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
          <span className="font-medium">🎉 ¡Promoción Especial! 50% de descuento en limpieza dental</span>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
            <Clock size={16} />
            <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleNavigation("inicio")}
                  className="text-2xl font-bold"
                  style={{ color: "#FE0000" }}
                >
                  Dental+
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`px-3 py-2 text-sm transition-colors font-medium ${
                        currentPage === item.href
                          ? "font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      style={{ 
                        color: currentPage === item.href ? "#FE0000" : undefined 
                      }}
                    >
                      {item.name}
                    </button>
                    {/* Active indicator */}
                    {currentPage === item.href && (
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: "#FE0000" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Contact Info & CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone size={16} className="mr-1" style={{ color: "#FE0000" }} />
                <span>(55) 1234-5678</span>
              </div>
              
              {/* WhatsApp Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="border-green-500 text-green-600 hover:bg-green-50"
                onClick={() => window.open("https://wa.me/5512345678", "_blank")}
              >
                <MessageCircle size={16} className="mr-1" />
                WhatsApp
              </Button>
              
              {/* Reserva Cita Button */}
              <Button 
                size="sm"
                className="text-white hover:opacity-90"
                style={{ backgroundColor: "#FE0000" }}
              >
                Reservar Cita
              </Button>
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full text-left px-3 py-2 text-base font-medium ${
                    currentPage === item.href
                      ? "font-semibold"
                      : "text-gray-700"
                  }`}
                  style={{ 
                    color: currentPage === item.href ? "#FE0000" : undefined 
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => window.open("https://wa.me/5512345678", "_blank")}
                >
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="sm"
                  className="w-full text-white"
                  style={{ backgroundColor: "#FE0000" }}
                >
                  Reservar Cita
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}