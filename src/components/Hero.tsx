"use client";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Users, Activity, Heart, Zap } from "lucide-react";
// import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function Hero() {
  const floatingIcons = [
    { icon: "🦷", position: "top-10 left-10", delay: 0.5 },
    { icon: "😊", position: "top-20 right-20", delay: 0.7 },
    { icon: "👨‍⚕️", position: "bottom-32 left-16", delay: 0.9 },
    { icon: "🏥", position: "bottom-20 right-24", delay: 1.1 },
    { icon: "❤️", position: "top-32 left-1/3", delay: 1.3 },
    { icon: "✨", position: "bottom-40 right-1/3", delay: 1.5 }
  ];

  return (
    <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1729870992116-5f1f59feb4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTY1NTQwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: item.delay }}
          className={`absolute ${item.position} text-4xl z-10`}
          style={{ color: "#FE0000" }}
        >
          {item.icon}
        </motion.div>
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center space-y-12">
          {/* Main heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span style={{ color: "#FE0000" }}>Dental</span>
              <span className="text-4xl lg:text-6xl ml-2" style={{ color: "#FE0000" }}>+</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Tu mejor sonrisa comienza aquí: atención profesional,<br />
              tecnología avanzada y resultados que te harán sonreír.
            </p>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="text-white px-8 py-4 text-lg font-semibold rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#FE0000" }}
            >
              Agenda tu cita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 border-gray-300"
            >
              Ver tratamientos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
