export default function PoliticaCookies() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FE0000] text-center">Política de Cookies</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos que se almacenan en su navegador y nos permiten recordar preferencias y mejorar nuestras funciones.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Tipos de cookies</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento del sitio.</li>
            <li><strong>Cookies de rendimiento:</strong> recogen información sobre cómo utiliza el sitio para mejorar la experiencia.</li>
            <li><strong>Cookies publicitarias:</strong> utilizadas para mostrar contenido relevante y anuncios.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#FE0000]">Cómo controlar las cookies</h2>
          <p>
            Puede configurar su navegador para bloquear o eliminar cookies. Tenga en cuenta que algunas funciones del sitio pueden dejar de funcionar correctamente si bloquea cookies esenciales.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Contacto</h2>
          <p>
            Si tiene dudas sobre nuestra política de cookies, escríbanos a <strong>Contacto@clinicasdentalmas.com</strong>.
          </p>

          <p className="text-sm text-gray-500">Última actualización: Septiembre 2025</p>
        </div>
      </div>
    </main>
  );
}
