import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>404 - Página no encontrada</h1>
      <p style={{marginBottom: '2rem'}}>La página que buscas no existe o fue movida.</p>
      <Link href="/" style={{color: '#2563eb', textDecoration: 'underline'}}>Volver al inicio</Link>
    </div>
  );
}
