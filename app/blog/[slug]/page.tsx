import React from 'react';
import posts from '../../../src/data/blogPosts';
import PostView from '../../../src/components/PostView';

type Props = { params: { slug: string | string[] } };

function normalize(s: string) {
  try { return decodeURIComponent(s || '').trim(); }
  catch { return String(s || '').trim(); }
}

export default function BlogArticlePage({ params }: Props) {
  const raw = Array.isArray(params.slug) ? params.slug.join('/') : (params.slug || '');
  const slug = normalize(raw);

  const post = posts.find((p: any) => {
    if (!p || !p.slug) return false;
    if (p.slug === slug) return true;
    if (p.slug.toLowerCase() === slug.toLowerCase()) return true;
    const simplified = String(p.slug).normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, '-');
    if (simplified.toLowerCase() === slug.toLowerCase()) return true;
    return false;
  });

  if (!post) return <div className="max-w-4xl mx-auto p-8">Post no encontrado.</div>;

  return <PostView post={post} />;
}
