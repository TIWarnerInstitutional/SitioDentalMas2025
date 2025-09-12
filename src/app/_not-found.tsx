import Link from "next/link";
export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh' }} className="flex items-center justify-center bg-gradient-to-br from-[#e60012] via-[#fff] to-[#e60012] px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-4">
          <circle cx="12" cy="12" r="10" fill="#e60012" />
          <text x="12" y="16" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">404</text>
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#e60012]">Página no encontrada</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">Lo sentimos, la página que buscas no existe o fue movida.<br />Por favor verifica la URL o regresa al inicio.</p>
  <Link href="/" className="bg-[#e60012] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition w-full max-w-xs">Volver al inicio</Link>
      </div>
    </main>
  );
}
