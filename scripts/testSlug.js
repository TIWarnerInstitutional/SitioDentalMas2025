const posts = require('./blogPosts');
function normalize(s){
  try { return decodeURIComponent(String(s||'')).trim().toLowerCase(); }
  catch { return String(s||'').trim().toLowerCase(); }
}
function removeDiacritics(s){
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[\s]+/g, '-');
}
console.log('first post slug raw:', posts[0].slug);
const examples = [
  'alimentos-que-fortalecen-tus-dientes',
  'Alimentos-que-fortalecen-tus-dientes',
  'alimentos que fortalecen tus dientes',
  posts[0].slug
];
examples.forEach(t => {
  let norm = normalize(t);
  let simp;
  try { simp = removeDiacritics(norm); } catch(e) { simp = 'ERR'; }
  console.log(JSON.stringify(t), '=> norm:', norm, '| simp:', simp);
});
console.log('posts.map slugs:');
console.log(posts.map(p=>p.slug));
console.log('posts.map simplified:');
console.log(posts.map(p=>{try{return removeDiacritics(normalize(p.slug))}catch{return 'ERR'}}));
