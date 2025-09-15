export default function AvisoPrivacidad() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FE0000] text-center">Aviso de Privacidad</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            En Dental Más valoramos su privacidad. La presente Política describe cómo recopilamos, usamos, conservamos y protegemos sus datos personales cuando usted utiliza nuestros servicios o visita nuestro sitio web.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Responsable del tratamiento</h2>
          <p>
            Dental Más (en adelante, &quot;nosotros&quot;), con domicilio en la dirección de nuestras clínicas y correo electrónico <strong>contacto@dentalmas.com</strong>, es responsable del tratamiento de sus datos personales.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Datos que recopilamos</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Nombre completo, teléfono y correo electrónico.</li>
            <li>Datos médicos y antecedentes odontológicos necesarios para la prestación de servicios.</li>
            <li>Información de facturación y pagos.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#FE0000]">Finalidades</h2>
          <p>
            Sus datos se utilizan para: (i) brindar y mejorar servicios odontológicos; (ii) comunicación sobre citas y tratamientos; (iii) facturación; (iv) cumplimiento de obligaciones legales.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Derechos ARCO y contacto</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos (derechos ARCO). Para ejercerlos, comuníquese al correo <strong>contacto@dentalmas.com</strong> o al teléfono <strong>56 21567557</strong>.
          </p>

          <h2 className="text-2xl font-bold text-[#FE0000]">Transferencias</h2>
          <p>
            Sus datos pueden ser compartidos con terceros únicamente cuando sea necesario para la prestación de los servicios (laboratorios, aseguradoras) o por obligación legal. En caso de transferencias, se garantizará un nivel de protección adecuado.
          </p>

          <p className="text-sm text-gray-500">Última actualización: Septiembre 2025</p>
        </div>
      </div>
    </main>
  );
}
