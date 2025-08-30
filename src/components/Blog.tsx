"use client";
import { useState } from "react";
import { Calendar, User, Clock } from "lucide-react";

const categories = [
  "Todo", "Implantología", "Ortodoncia", "Cuidado Dental", "Psicología Dental", "Emergencias"
];

const posts = [
  {
    id: 1,
    title: "10 Alimentos que Fortalecen tus Dientes Naturalmente",
    excerpt: "Una dieta equilibrada no solo beneficia tu salud general, sino que también puede fortalecer significativamente tus dientes y encías.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    date: "28 Agosto 2024",
    author: "Dr. Carlos Mendoza",
    category: "Nutrición Dental",
    tag: "Trending"
  },
  {
    id: 2,
    title: "Ortodoncia Invisible vs. Brackets Tradicionales: ¿Cuál Elegir?",
    excerpt: "Comparamos las ventajas y desventajas de cada tratamiento ortodóntico para ayudarte a tomar la mejor decisión.",
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80",
    date: "25 Agosto 2024",
    author: "Dra. Ana López",
    category: "Ortodoncia",
    tag: "Ortodoncia"
  },
  {
    id: 3,
    title: "Cómo Superar el Miedo al Dentista: Guía Completa",
    excerpt: "Técnicas efectivas para manejar la ansiedad dental y hacer que tu visita al dentista sea una experiencia cómoda y relajada.",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e8e7b1a2b?auto=format&fit=crop&w=400&q=80",
    date: "22 Agosto 2024",
    author: "Dr. Roberto Silva",
    category: "Psicología Dental",
    tag: "Psicología Dental"
  },
  {
    id: 4,
    title: "Emergencias Dentales: Qué Hacer en Cada Situación",
    excerpt: "Guía práctica para manejar emergencias dentales comunes hasta que puedas recibir atención profesional.",
    image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?auto=format&fit=crop&w=400&q=80",
    date: "20 Agosto 2024",
    author: "Dra. Patricia Vega",
    category: "Emergencias",
    tag: "Emergencias"
  },
  {
    id: 5,
    title: "Blanqueamiento Dental Profesional: Antes y Después",
    excerpt: "Conoce los beneficios del blanqueamiento profesional y todo lo que debes saber antes de iniciar el tratamiento.",
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=400&q=80",
    date: "18 Agosto 2024",
    author: "Dra. Ana López",
    category: "Cuidado Dental",
    tag: "Cuidado Dental"
  }
];

export function Blog() {
  const [selected, setSelected] = useState("Todo");
  const filtered = selected === "Todo" ? posts : posts.filter(p => p.category === selected);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">Blog de Salud Dental</h2>
        <p className="text-gray-600 text-center mb-8">Descubre consejos profesionales, las últimas tendencias en odontología y todo lo que necesitas saber para mantener una sonrisa saludable.</p>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${selected === cat ? "bg-red-500 text-white border-red-500" : "bg-white text-gray-700 border-gray-300 hover:bg-red-50"}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filtered.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="relative">
                <img src={post.image} alt={post.title} className="rounded-lg w-full h-40 object-cover mb-4" />
                {/* Etiqueta superior izquierda */}
                {post.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">{post.tag}</span>
                )}
              </div>
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              </div>
              <div className="mt-2 text-right">
                <a href="#" className="text-red-500 text-sm font-semibold hover:underline">Leer más</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-red-50">Ver todos los artículos</button>
        </div>
      </div>
    </section>
  );
}
