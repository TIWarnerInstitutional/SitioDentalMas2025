import { Award, Users, Heart, Shield, Calendar, Star, Target, CheckCircle } from 'lucide-react';

export const teamMembers = [
  {
    name: "Dra. María Rodríguez",
    role: "Directora General y Especialista en Implantología",
    experience: "15 años de experiencia",
    education: "Universidad Nacional Autónoma de México",
    specialties: ["Implantes dentales", "Cirugía oral", "Rehabilitación oral"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRlbnRpc3R8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Ortodoncia",
    experience: "12 años de experiencia",
    education: "Universidad Intercontinental",
    specialties: ["Ortodoncia invisible", "Brackets tradicionales", "Ortodoncia interceptiva"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NjU1MjEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Dra. Ana López",
    role: "Especialista en Endodoncia",
    experience: "10 años de experiencia",
    education: "Universidad La Salle",
    specialties: ["Tratamientos de conducto", "Endodoncia microscópica", "Retratamientos"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const values = [
  {
    icon: Heart,
    title: "Compromiso con el paciente",
    description: "Cada paciente es único y merece un trato personalizado y cuidadoso.",
    color: "text-red-600"
  },
  {
    icon: Shield,
    title: "Excelencia profesional",
    description: "Mantenemos los más altos estándares de calidad en todos nuestros servicios.",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "Colaboramos para brindar la mejor experiencia y resultados a nuestros pacientes.",
    color: "text-green-600"
  },
  {
    icon: Target,
    title: "Innovación constante",
    description: "Utilizamos la tecnología más avanzada para ofrecer tratamientos de vanguardia.",
    color: "text-purple-600"
  }
];

export const achievements = [
  {
    number: "2,500+",
    label: "Pacientes atendidos",
    icon: Users
  },
  {
    number: "15+",
    label: "Años de experiencia",
    icon: Calendar
  },
  {
    number: "98%",
    label: "Satisfacción del cliente",
    icon: Star
  },
  {
    number: "3",
    label: "Sucursales en CDMX",
    icon: Award
  }
];

export const certifications = [
  "Certificación COFEPRIS",
  "ISO 9001:2015 Calidad",
  "Miembro de la Asociación Dental Mexicana",
  "Certificación en Bioseguridad",
  "Acreditación Internacional en Implantología",
  "Certificación en Ortodoncia Invisible"
];