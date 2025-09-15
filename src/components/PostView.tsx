import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import posts from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';

type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  author?: string;
  category?: string;
  content?: string;
}

function readingTime(text = '') {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export default function PostView({ post }: { post: Post }) {
  // compute similar and recommended
  const similar = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  const recommended = posts.filter(p => p.id !== post.id).slice(0).sort((a,b) => {
    // crude sort by id desc as proxy for newest (our data lacks ISO dates)
    return b.id - a.id;
  }).slice(0,3);
  return (
    <main className="bg-gray-50 min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link href="/blog" className="inline-block text-sm text-red-600 hover:underline mb-4">← Volver al blog</Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-6">
                <div>
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">{post.title}</h1>
                  <div className="mt-2 text-sm text-gray-500 flex items-center gap-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              {post.image && (
                <div className="px-6">
                  <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-auto object-cover rounded-md shadow-md" />
                </div>
              )}

              <div className="px-6 py-8">
                <div className="prose prose-lg max-w-none">
                  <div className="text-sm text-gray-500 mb-3">Lectura: {readingTime(post.content)}</div>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize, rehypeHighlight]}>{post.content || ''}</ReactMarkdown>
                </div>

                <div className="mt-8 bg-red-50 border border-red-100 p-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">¿Listo para tu mejor sonrisa?</h4>
                    <p className="text-gray-600 text-sm">Agenda tu cita con nuestros especialistas y recibe una consulta inicial.</p>
                  </div>
                  <div>
                    <Link href="/sucursales" className="inline-block bg-red-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-red-700">Agendar Cita</Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">{post.author?.split(' ')[0][0] || 'A'}</div>
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="text-xs text-gray-500">Autor del artículo</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">Especialista en {post.category?.toLowerCase()}. Comprometido con la salud bucal y la educación del paciente.</p>
              </div>

              {/* Artículos similares */}
              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-3">Artículos similares</h4>
                <div className="space-y-3">
                  {similar.length === 0 && <div className="text-sm text-gray-500">No hay artículos similares.</div>}
                  {similar.map(s => (
                    <Link key={s.id} href={`/blog/${s.slug}`} className="flex items-center gap-3">
                      <Image src={s.image} alt={s.title} width={80} height={56} className="w-20 h-14 object-cover rounded" />
                      <div className="text-sm text-gray-800">{s.title}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recomendados */}
              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-3">Recomendados</h4>
                <div className="space-y-3">
                  {recommended.map(r => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="flex items-center gap-3">
                      <Image src={r.image} alt={r.title} width={80} height={56} className="w-20 h-14 object-cover rounded" />
                      <div className="text-sm text-gray-800">{r.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
