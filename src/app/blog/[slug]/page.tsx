import React from "react";
import posts from "../../../data/blogPosts";
import PostView from "../../../components/PostView";

type Params = { params: { slug: string } };

function normalizeSlug(s: string) {
  try {
    return decodeURIComponent(String(s || '')).trim().toLowerCase();
  } catch {
    return String(s || '').trim().toLowerCase();
  }
}

function removeDiacritics(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[\s]+/g, '-');
}

export default function PostPage({ params }: Params) {
  const raw = params.slug;
  const slug = normalizeSlug(raw);

  // (debug logs removed)

  // direct match (case-insensitive)
  const postBySlug = posts.find(p => (p.slug || '').toLowerCase() === slug);
  if (postBySlug) return <PostView post={postBySlug} />;

  // fallback: numeric id in the URL
  const id = Number(slug);
  if (!isNaN(id)) {
    const postById = posts.find(p => p.id === id);
    if (postById) return <PostView post={postById} />;
  }

  // fallback: try removing diacritics and replacing spaces with hyphens
  try {
    const simplified = removeDiacritics(slug);
    const postBySimplified = posts.find(p => (p.slug || '') === simplified);
    if (postBySimplified) return <PostView post={postBySimplified} />;
  } catch {
    // ignore normalization errors
  }

  return <div className="max-w-4xl mx-auto p-8">Post no encontrado.</div>;
}
