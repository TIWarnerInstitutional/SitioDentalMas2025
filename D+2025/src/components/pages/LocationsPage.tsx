import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { LocationCard } from '../sections/LocationCard';
import { locations } from '../data/locationsData';

export function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
              Nuestras <span style={{ color: "#FE0000" }}>Sucursales</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {locations.map((location, index) => (
              <LocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cobertura en la CDMX</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégicamente ubicadas para brindarte el mejor servicio sin importar dónde te encuentres
            </p>
          </motion.div>

          {/* Map placeholder - In a real app, this would be an interactive map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl p-12 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <MapPin size={64} className="mx-auto mb-6" style={{ color: "#FE0000" }} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mapa Interactivo
              </h3>
              <p className="text-gray-600 mb-8">
                Encuentra la sucursal más cercana a tu ubicación y planifica tu visita
              </p>
              <Button 
                size="lg"
                variant="outline"
                className="border-2"
                style={{ borderColor: "#FE0000", color: "#FE0000" }}
              >
                Ver Mapa Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" style={{ backgroundColor: "#FE0000" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              ¿No sabes cuál sucursal elegir?
            </h2>
            <p className="text-xl text-red-100">
              Nuestro equipo te ayudará a encontrar la ubicación perfecta según tus necesidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-red-600 border-white hover:bg-red-50"
              >
                Llamar al (55) 1234-5678
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Chat en Línea
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}