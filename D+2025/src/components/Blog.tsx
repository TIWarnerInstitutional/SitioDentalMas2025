import { Calendar, ArrowRight, User, Clock, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Blog() {
  const featuredArticle = {
    id: 1,
    title: "La Revolución de los Implantes Dentales: Todo lo que Debes Saber en 2024",
    excerpt: "Los avances en tecnología de implantes dentales han transformado completamente la odontología moderna. Descubre las últimas innovaciones, técnicas de vanguardia y por qué los implantes son la mejor solución para reemplazar dientes perdidos.",
    image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NTY1NTIxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "28 Agosto 2024",
    readTime: "8 min",
    author: "Dr. María Rodríguez",
    category: "Implantología",
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "10 Alimentos que Fortalecen tus Dientes Naturalmente",
      excerpt: "Una dieta equilibrada no solo beneficia tu salud general, sino que también puede fortalecer significativamente tus dientes y encías.",
      image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBwcmV2ZW50aW9uJTIwY2FyZSUyMHRpcHN8ZW58MXx8fHwxNzU2NTUyMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "25 Agosto 2024",
      readTime: "5 min",
      author: "Dr. Carlos Mendoza",
      category: "Nutrición Dental",
      trending: true
    },
    {
      id: 3,
      title: "Ortodoncia Invisible vs. Brackets Tradicionales: ¿Cuál Elegir?",
      excerpt: "Comparamos las ventajas y desventajas de cada tratamiento ortodóntico para ayudarte a tomar la mejor decisión.",
      image: "https://images.unsplash.com/photo-1581585004042-bca38021ce1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5lJTIwYnJ1c2hpbmclMjB0ZWV0aHxlbnwxfHx8fDE3NTY1NTE2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "22 Agosto 2024",
      readTime: "6 min",
      author: "Dra. Ana López",
      category: "Ortodoncia"
    },
    {
      id: 4,
      title: "Cómo Superar el Miedo al Dentista: Guía Completa",
      excerpt: "Técnicas efectivas para manejar la ansiedad dental y hacer que tu visita al dentista sea una experiencia cómoda y relajada.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjYXJlJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTY1NTIxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "20 Agosto 2024",
      readTime: "4 min",
      author: "Dr. Roberto Silva",
      category: "Psicología Dental"
    },
    {
      id: 5,
      title: "Emergencias Dentales: Qué Hacer en Cada Situación",
      excerpt: "Guía práctica para manejar emergencias dentales comunes hasta que puedas recibir atención profesional.",
      image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50aXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NTUyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "18 Agosto 2024",
      readTime: "7 min",
      author: "Dra. Patricia Vega",
      category: "Emergencias"
    },
    {
      id: 6,
      title: "Blanqueamiento Dental Profesional: Antes y Después",
      excerpt: "Resultados reales de nuestros pacientes y todo lo que necesitas saber sobre el blanqueamiento dental profesional.",
      image: "https://images.unsplash.com/photo-1584516151140-f79fde30d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB3aGl0ZW5pbmclMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NTUxNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "15 Agosto 2024",
      readTime: "5 min",
      author: "Dr. Luis García",
      category: "Estética Dental"
    }
  ];

  const categories = ["Todos", "Implantología", "Ortodoncia", "Estética Dental", "Prevención", "Emergencias"];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Blog de Salud Dental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre consejos profesionales, las últimas tendencias en odontología y 
            todo lo que necesitas saber para mantener una sonrisa saludable.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "hover:opacity-90" : "hover:bg-red-50 hover:text-red-600 hover:border-red-200"}
              style={index === 0 ? { backgroundColor: "#FE0000" } : {}}
            >
              {category}
            </Button>
          ))}
        </motion.div>



        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {article.trending && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-100">
                      <TrendingUp size={12} className="mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock size={12} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={14} className="mr-1" />
                    {article.author}
                  </div>
                  <Button variant="ghost" className="text-red-500 hover:text-red-600 p-0 h-auto group">
                    Leer más
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="text-xs text-gray-400 mt-2">
                  {article.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>



        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="px-8 py-4 border-2 hover:bg-red-50 hover:border-red-200">
            Ver todos los artículos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}