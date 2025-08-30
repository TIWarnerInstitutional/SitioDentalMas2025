// Componente AboutUsPage local
import { AboutUs } from "../AboutUs";
export function AboutUsPage() {
		return (
			<div className="min-h-screen bg-white">
				<section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-8">
							Conoce a <span style={{ color: "#FE0000" }}>Dental+</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
							Más de 15 años transformando sonrisas con pasión, dedicación y la tecnología más avanzada
						</p>
					</div>
				</section>
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
										<p className="text-lg text-gray-600 leading-relaxed mb-6">
											Dental+ nació en 2009 con una visión clara: revolucionar la atención dental en México combinando tecnología de vanguardia con un trato humano excepcional. Desde nuestros inicios en una pequeña clínica en el centro de la Ciudad de México, hemos crecido hasta convertirnos en una de las cadenas dentales más confiables del país.
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							Nuestro compromiso siempre ha sido el mismo: ofrecer tratamientos dentales de la más alta calidad, accesibles para todas las familias mexicanas, con un enfoque integral que va más allá de la salud bucal para mejorar la calidad de vida de nuestros pacientes.
						</p>
					</div>
				</section>
				{/* Sección real de AboutUs con animaciones y features */}
				<AboutUs />
			</div>
		);
}
