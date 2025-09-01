import { MapPin, Phone, Clock, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Locations() {
  const locations = [
    {
      id: 1,
      name: "Sucursal Centro",
      address: "Av. Juárez #123, Centro Histórico, CDMX",
      phone: "(55) 1234-5678",
      hours: "Lun-Vie: 9:00-19:00, Sáb: 9:00-14:00"
    },
    {
      id: 2,
      name: "Sucursal Polanco",
      address: "Av. Presidente Masaryk #456, Polanco, CDMX",
      phone: "(55) 8765-4321",
      hours: "Lun-Vie: 8:00-20:00, Sáb: 9:00-15:00"
    },
    {
      id: 3,
      name: "Sucursal Santa Fe",
      address: "Av. Santa Fe #789, Santa Fe, CDMX",
      phone: "(55) 5555-0123",
      hours: "Lun-Vie: 9:00-19:00, Sáb: 10:00-14:00"
    }
  ];

  return (
    <section id="sucursales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY1NTQwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                }}
              >
                {/* Map overlay */}
                <div className="absolute inset-0 bg-blue-50/70"></div>
                
                {/* Location pins */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ backgroundColor: "#FE0000" }}></div>
                </div>
                <div className="absolute top-2/3 left-1/2">
                  <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ backgroundColor: "#FE0000" }}></div>
                </div>
                <div className="absolute top-1/3 right-1/4">
                  <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse" style={{ backgroundColor: "#FE0000" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Encuentra una Clínica Dental cerca de ti
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Elige entre +30 clínicas para Cuidar tu Salud Dental
              </p>
            </div>

            {/* Search Form */}
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Escribe tu ciudad, código postal o colonia"
                  className="pl-4 pr-12 py-3 text-base border-gray-300 rounded-lg placeholder:text-gray-700"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Escribe tu ciudad, código postal o colonia"
                  className="pl-4 pr-12 py-3 text-base border-gray-300 rounded-lg placeholder:text-gray-700"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <Button 
                className="w-full py-3 text-base font-semibold rounded-lg text-white hover:opacity-90"
                style={{ backgroundColor: "#FE0000" }}
              >
                Ver todas nuestras clínicas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}