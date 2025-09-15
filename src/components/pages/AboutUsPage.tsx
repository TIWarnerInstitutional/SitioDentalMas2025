// Componente AboutUsPage local
import { AboutUs } from "../AboutUs";
import Image from "next/image";
export function AboutUsPage() {
			// Datos para secciones nuevas
			const team = [
				{
					name: 'Dra. María Rodríguez',
					title: 'Ortodoncia y Rehabilitación en Implantología',
					experience: '10 años de experiencia',
					university: 'Universidad Nacional Autónoma de México',
					specialties: ['Implantes dentales', 'Cirugía oral', 'Rehabilitación oral'],
				},
				{
					name: 'Dr. Carlos Mendoza',
					title: 'Especialista en Endodoncia',
					experience: '10 años de experiencia',
					university: 'Universidad de México',
					specialties: ['Endodoncia avanzada', 'Urgencias endodónticas', 'Ortodoncia interceptiva'],
				},
				{
					name: 'Dra. Ana López',
					title: 'Especialista en Ortodoncia',
					experience: '10 años de experiencia',
					university: 'Universidad La Salle',
					specialties: ['Tratamientos de conducta', 'Manejo de niños', 'Prevención'],
				},
			];
			const achievements = [
				{ value: '2,500+', label: 'Pacientes atendidos' },
				{ value: '15+', label: 'Años de experiencia' },
				{ value: '98%', label: 'Satisfacción del cliente' },
				{ value: '3', label: 'Sucursales en CDMX' },
			];
			const certifications = [
				'Certificación COFEPRIS',
				'ISO 9001:2015 Calidad',
				'Miembro de la Asociación Dental Mexicana',
				'Certificación en Bioseguridad',
				'Acreditación internacional en Implantología',
				'Certificación en Ortodoncia Invisible',
			];

			return (
				<div className="min-h-screen bg-gray-50 text-gray-900">
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
											{/* Historia */}
											<section className="py-20 bg-white">
												<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
													<div>
														<h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
														<p className="text-lg text-gray-600 leading-relaxed mb-6">
															Dental+ nació en 2009 con una visión clara: revolucionar la atención dental en México combinando tecnología de vanguardia con un trato humano excepcional. Desde nuestros inicios en una pequeña clínica en el centro de la Ciudad de México, hemos crecido hasta convertirnos en una de las cadenas dentales más confiables del país.
														</p>
														<p className="text-lg text-gray-600 leading-relaxed mb-6">
															Nuestro compromiso siempre ha sido el mismo: ofrecer tratamientos dentales de la más alta calidad, accesibles para todas las familias mexicanas, con un enfoque integral que va más allá de la salud bucal para mejorar la calidad de vida de nuestros pacientes.
														</p>
														<div className="grid grid-cols-2 gap-4 mt-6">
															<div>
																<h3 className="font-semibold text-red-600">Misión</h3>
																<p>Brindar la mejor atención odontológica con tecnología de vanguardia, calidez y valores.</p>
															</div>
															<div>
																<h3 className="font-semibold text-red-600">Visión</h3>
																<p>Ser la clínica dental líder en innovación y excelencia en salud bucal.</p>
															</div>
														</div>
													</div>
													<div className="flex justify-center">
														<Image src="/images/ui/hero-placeholder.svg" alt="Consultorio Dental+" width={400} height={300} className="rounded-xl shadow-lg" />
													</div>
												</div>
											</section>

											{/* Nuestros Valores */}
											<section className="py-16 bg-gray-50">
												<div className="max-w-5xl mx-auto px-4">
													<h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Nuestros Valores</h2>
													<p className="text-lg text-center text-gray-600 mb-10">Los principios que guían cada una de nuestras acciones y definen quiénes somos</p>
													<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
														<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
															<span className="inline-block bg-red-50 rounded-full p-3 mb-4"><svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="15" stroke="#FE0000" strokeWidth="2"/><path d="M16 23s-6-4.5-6-8a6 6 0 0 1 12 0c0 3.5-6 8-6 8Z" stroke="#FE0000" strokeWidth="2"/></svg></span>
															<h3 className="font-bold text-lg mb-2 text-center">Compromiso con el paciente</h3>
															<p className="text-gray-600 text-center text-sm">Cada paciente es único y merece un trato personalizado y cuidadoso.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
															<span className="inline-block bg-blue-50 rounded-full p-3 mb-4"><svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="15" stroke="#3B82F6" strokeWidth="2"/><path d="M16 10v8" stroke="#3B82F6" strokeWidth="2"/><circle cx="16" cy="22" r="2" fill="#3B82F6"/></svg></span>
															<h3 className="font-bold text-lg mb-2 text-center">Excelencia profesional</h3>
															<p className="text-gray-600 text-center text-sm">Mantenemos los más altos estándares de calidad en todos nuestros servicios.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
															<span className="inline-block bg-green-50 rounded-full p-3 mb-4"><svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="15" stroke="#10B981" strokeWidth="2"/><path d="M10 18c0-2 2-4 6-4s6 2 6 4" stroke="#10B981" strokeWidth="2"/><circle cx="12" cy="14" r="2" fill="#10B981"/><circle cx="20" cy="14" r="2" fill="#10B981"/></svg></span>
															<h3 className="font-bold text-lg mb-2 text-center">Trabajo en equipo</h3>
															<p className="text-gray-600 text-center text-sm">Colaboramos para brindar la mejor experiencia y resultados a nuestros pacientes.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
															<span className="inline-block bg-purple-50 rounded-full p-3 mb-4"><svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="15" stroke="#A21CAF" strokeWidth="2"/><circle cx="16" cy="16" r="6" stroke="#A21CAF" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="#A21CAF"/></svg></span>
															<h3 className="font-bold text-lg mb-2 text-center">Innovación constante</h3>
															<p className="text-gray-600 text-center text-sm">Utilizamos la tecnología más avanzada para ofrecer tratamientos de vanguardia.</p>
														</div>
													</div>
												</div>
											</section>

					{/* Sección de valores y features */}
					<AboutUs />

					{/* Equipo de especialistas */}
					<section className="py-12">
						<h2 className="text-2xl font-bold text-center mb-8">Nuestro Equipo de Especialistas</h2>
						<div className="flex flex-wrap justify-center gap-8">
							{team.map((member, i) => (
								<div key={i} className="bg-white rounded-lg shadow p-6 w-72">
									<div className="h-32 w-full bg-gray-200 rounded mb-4 flex items-center justify-center">
										<span className="text-gray-400">Foto profesional</span>
									</div>
									<h3 className="font-semibold text-lg mb-1">{member.name}</h3>
									<p className="text-sm text-red-600 mb-1">{member.title}</p>
									<p className="text-xs mb-1">{member.experience}</p>
									<p className="text-xs mb-2">{member.university}</p>
									<ul className="text-xs list-disc pl-4">
										{member.specialties.map((spec, j) => (
											<li key={j}>{spec}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					{/* Logros */}
					<section className="py-12 bg-red-600 text-white text-center">
						<h2 className="text-2xl font-bold mb-8">Nuestros Logros</h2>
						<div className="flex flex-wrap justify-center gap-12">
							{achievements.map((a, i) => (
								<div key={i} className="flex flex-col items-center">
									<span className="text-4xl font-bold mb-2">{a.value}</span>
									<span className="text-lg">{a.label}</span>
								</div>
							))}
						</div>
					</section>

					{/* Certificaciones */}
					<section className="py-12 bg-white">
						<h2 className="text-2xl font-bold text-center mb-8">Certificaciones y Reconocimientos</h2>
						<div className="flex flex-wrap justify-center gap-6">
							{certifications.map((c, i) => (
								<div key={i} className="bg-gray-100 rounded-lg shadow p-4 w-64 flex items-center gap-2">
									<span className="text-red-600 text-2xl">&#128276;</span>
									<span className="text-sm">{c}</span>
								</div>
							))}
						</div>
					</section>

							{/* Llamado a la acción */}
							<section className="py-12 text-center">
								<h2 className="text-2xl font-bold mb-4">¿Listo para conocer la diferencia Dental+?</h2>
								<p className="mb-6">Agenda tu consulta gratuita y descubre por qué miles de pacientes confían en nosotros</p>
								<button className="bg-red-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-red-700 transition">Agendar Consulta Gratuita</button>
							</section>

							{/* Footer eliminado, ahora solo se usa el global */}
						</div>
					);
}
