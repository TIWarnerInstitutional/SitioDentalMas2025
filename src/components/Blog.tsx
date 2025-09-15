"use client";
import { useState, useEffect } from "react";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Todo", "Implantología", "Ortodoncia", "Cuidado Dental", "Psicología Dental", "Emergencias"
];

import posts from "../data/blogPosts";

type BlogProps = {
  showAll?: boolean;
}

export function Blog({ showAll = false }: BlogProps) {
  const [selected, setSelected] = useState("Todo");
  const [page, setPage] = useState(1);
  const pageSize = 6; // posts per page when showing all
  const filtered = selected === "Todo" ? posts : posts.filter(p => p.category === selected);

  // helper: parse dates written like '28 Agosto 2024' (Spanish month names)
  function parseSpanishDate(dateStr: string) {
    if (!dateStr) return new Date(0);
    const months: Record<string, number> = {
      "enero": 0, "febrero": 1, "marzo": 2, "abril": 3, "mayo": 4, "junio": 5,
      "julio": 6, "agosto": 7, "septiembre": 8, "octubre": 9, "noviembre": 10, "diciembre": 11
    };
    // try to extract day, month name, year
    const m = dateStr.trim().toLowerCase().match(/(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})/i);
    if (!m) {
      // fallback to Date.parse
      const d = Date.parse(dateStr);
      return isNaN(d) ? new Date(0) : new Date(d);
    }
    const day = Number(m[1]);
    const monthName = m[2];
    const year = Number(m[3]);
    const month = months[monthName] ?? 0;
    return new Date(year, month, day);
  }

  // sort filtered by date descending (most recent first)
  const filteredSorted = [...filtered].sort((a, b) => {
    const da = parseSpanishDate(a.date);
    const db = parseSpanishDate(b.date);
    return db.getTime() - da.getTime();
  });

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / pageSize));
  // clamp page
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const visible = showAll ? filteredSorted.slice((currentPage - 1) * pageSize, currentPage * pageSize) : filteredSorted.slice(0,3);

  // Reset to page 1 when category or showAll changes to ensure pagination applies per-category
  useEffect(() => {
    setPage(1);
  }, [selected, showAll]);

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
          {visible.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-0 overflow-hidden flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative block">
                <Image src={post.image} alt={post.title} width={600} height={320} className="w-full h-44 object-cover" />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold shadow">{post.category}</div>
              </Link>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-2"><Link href={`/blog/${post.slug}`} className="hover:underline text-gray-900">{post.title}</Link></h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                </div>
                <div className="mt-4">
                  <Link href={`/blog/${post.slug}`} className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700">Leer más</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {!showAll && (
          <div className="flex justify-center">
            <Link href="/blog" className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-red-50">Ver todos los artículos</Link>
          </div>
        )}

        {/* Pagination controls when showing all */}
        {showAll && totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-3 py-1 rounded border bg-white"
              disabled={currentPage === 1}
            >Prev</button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`px-3 py-1 rounded ${pageNum === currentPage ? 'bg-red-600 text-white' : 'bg-white'}`}
                >{pageNum}</button>
              );
            })}

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="px-3 py-1 rounded border bg-white"
              disabled={currentPage === totalPages}
            >Next</button>
          </div>
        )}
      </div>
    </section>
  );
}
