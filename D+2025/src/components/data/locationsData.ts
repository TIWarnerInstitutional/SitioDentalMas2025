import { Train, Bus, Car } from 'lucide-react';

export const locations = [
  {
    id: 1,
    name: "Centro Histórico",
    address: "Av. Juárez #123, Centro Histórico, CDMX",
    phone: "(55) 1234-5678",
    email: "centro@dentalplus.mx",
    hours: {
      weekdays: "Lunes a Viernes: 8:00 AM - 8:00 PM",
      saturday: "Sábados: 9:00 AM - 5:00 PM",
      sunday: "Domingos: 10:00 AM - 3:00 PM"
    },
    image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Consulta General",
      "Limpieza Dental",
      "Blanqueamiento",
      "Ortodoncia",
      "Implantes Dentales",
      "Endodoncia",
      "Cirugía Oral",
      "Odontopediatría"
    ],
    features: [
      "Estacionamiento gratuito",
      "Acceso para personas con discapacidad",
      "Tecnología 3D",
      "Laboratorio in-house",
      "Rayos X digitales",
      "Área de niños"
    ],
    transport: [
      { type: "metro", icon: Train, text: "Metro Bellas Artes (2 min caminando)" },
      { type: "bus", icon: Bus, text: "Múltiples rutas de transporte público" },
      { type: "car", icon: Car, text: "Estacionamiento disponible" }
    ],
    rating: 4.9,
    reviews: 247
  },
  {
    id: 2,
    name: "Polanco",
    address: "Av. Presidente Masaryk #456, Polanco, CDMX",
    phone: "(55) 8765-4321",
    email: "polanco@dentalplus.mx",
    hours: {
      weekdays: "Lunes a Viernes: 7:00 AM - 9:00 PM",
      saturday: "Sábados: 8:00 AM - 6:00 PM",
      sunday: "Domingos: 9:00 AM - 4:00 PM"
    },
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjYXJlJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY1NTIxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Consulta General",
      "Limpieza Dental",
      "Blanqueamiento Premium",
      "Ortodoncia Invisible",
      "Implantes Dentales",
      "Endodoncia Microscópica",
      "Cirugía Estética",
      "Periodoncia"
    ],
    features: [
      "Valet parking",
      "Acceso VIP",
      "Tecnología láser",
      "Sedación consciente",
      "Tomografía 3D",
      "Sala de espera premium"
    ],
    transport: [
      { type: "metro", icon: Train, text: "Metro Polanco (5 min caminando)" },
      { type: "bus", icon: Bus, text: "Múltiples rutas de metrobús" },
      { type: "car", icon: Car, text: "Valet parking incluido" }
    ],
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: "Santa Fe",
    address: "Av. Santa Fe #789, Santa Fe, CDMX",
    phone: "(55) 5555-0123",
    email: "santafe@dentalplus.mx",
    hours: {
      weekdays: "Lunes a Viernes: 8:00 AM - 8:00 PM",
      saturday: "Sábados: 9:00 AM - 5:00 PM",
      sunday: "Domingos: 10:00 AM - 3:00 PM"
    },
    image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NTY1NTIxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Consulta General",
      "Limpieza Dental",
      "Blanqueamiento",
      "Ortodoncia",
      "Implantes Dentales",
      "Endodoncia",
      "Odontopediatría",
      "Urgencias"
    ],
    features: [
      "Centro comercial integrado",
      "Múltiples especialidades",
      "Tecnología avanzada",
      "Laboratorio express",
      "Área familiar",
      "Servicio de urgencias"
    ],
    transport: [
      { type: "metro", icon: Train, text: "Metro Observatorio + transporte" },
      { type: "bus", icon: Bus, text: "Múltiples rutas de autobús" },
      { type: "car", icon: Car, text: "Estacionamiento del centro comercial" }
    ],
    rating: 4.7,
    reviews: 156
  }
];