import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MapPin, Phone, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface LocationCardProps {
  location: {
    id: number;
    name: string;
    address: string;
    phone: string;
    hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    image: string;
    services: string[];
    features: string[];
    transport: Array<{
      icon: any;
      text: string;
    }>;
    rating: number;
    reviews: number;
  };
  index: number;
}

export function LocationCard({ location, index }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
    >
      {/* Image */}
      <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src={location.image}
            alt={`Sucursal ${location.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Sucursal {location.name}
            </h2>
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-400 fill-current" />
              <span className="font-semibold">{location.rating}</span>
              <span className="text-gray-500">({location.reviews} reseñas)</span>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="mt-1 flex-shrink-0" style={{ color: "#FE0000" }} />
              <span>{location.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} style={{ color: "#FE0000" }} />
              <span>{location.phone}</span>
            </div>
            <div className="flex items-start space-x-3">
              <Clock size={20} className="mt-1 flex-shrink-0" style={{ color: "#FE0000" }} />
              <div>
                <div>{location.hours.weekdays}</div>
                <div>{location.hours.saturday}</div>
                <div>{location.hours.sunday}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Disponibles</h3>
          <div className="flex flex-wrap gap-2">
            {location.services.map((service) => (
              <Badge key={service} variant="outline" className="text-gray-700">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Características</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {location.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle size={16} style={{ color: "#FE0000" }} />
                <span className="text-gray-600 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transport */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cómo Llegar</h3>
          <div className="space-y-3">
            {location.transport.map((transport, idx) => {
              const Icon = transport.icon;
              return (
                <div key={idx} className="flex items-center space-x-3">
                  <Icon size={18} className="text-gray-500" />
                  <span className="text-gray-600 text-sm">{transport.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            className="text-white"
            style={{ backgroundColor: "#FE0000" }}
          >
            Agendar Cita en {location.name}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 hover:bg-gray-50"
          >
            Ver en Mapa
          </Button>
        </div>
      </div>
    </motion.div>
  );
}