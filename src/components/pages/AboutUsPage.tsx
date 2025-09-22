"use client";
// Componente AboutUsPage local
import { AboutUs } from "../AboutUs";
import { useState } from 'react';
import SucursalPickerModal from '../SucursalPickerModal';
import Image from "next/image";
import { Heart, Users, Zap, ShieldCheck, Award, Smile, Target, CheckCircle } from "lucide-react";
export function AboutUsPage() {
	const [showAgendarModal, setShowAgendarModal] = useState(false);
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
				{ value: '+100,000', label: 'Pacientes atendidos' },
				{ value: '10', label: 'Años de experiencia' },
				{ value: '99%', label: 'Satisfacción del cliente' },
				{ value: '30', label: 'Sucursales en Mexico' },
			];
			const certifications = [
				'Certificación COFEPRIS',
				'Miembro de la Asociación Dental Mexicana',
				'10 Años de Experiencia en Odontología',
				'Protocolos de Bioseguridad COVID-19',
				'Acreditación en Capacitación Continua del Personal',
			];

			return (
				<div className="min-h-screen bg-gray-50 text-gray-900">
					<section className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 to-white">
						<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
							<div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-6 border border-pink-200">Clínica Dental de Confianza</div>
							<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 text-center mb-4">
								Conoce a <span className="text-red-600 relative">Dental+<span className="block h-1 bg-red-400 w-40 mx-auto mt-3 rounded"></span></span>
							</h1>
							<p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-6">
								Más de 10 años transformando sonrisas con pasión, dedicación y la tecnología más avanzada
							</p>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
								<span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm text-sm"><Heart className="text-red-500" size={16} /> 10+ Años</span>
								<span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm text-sm"><Users className="text-pink-500" size={16} /> Miles de Pacientes</span>
								<span className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm text-sm"><Zap className="text-yellow-400" size={16} /> Tecnología Avanzada</span>
							</div>
						</div>
					</section>
										<AboutUs />

											{/* Historia */}
											<section className="py-20 bg-white">
												<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
													<div>
														<h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
														<p className="text-lg text-gray-600 leading-relaxed mb-6">
															Dental+ nació en 2015 con una visión clara: revolucionar la atención dental en México combinando tecnología de vanguardia con un trato humano excepcional. Desde nuestros inicios en una pequeña clínica en el centro de la Ciudad de Chiapas, hemos crecido hasta convertirnos en una de las cadenas dentales más confiables del país.
														</p>
														<p className="text-lg text-gray-600 leading-relaxed mb-6">
															Nuestro compromiso siempre ha sido el mismo: ofrecer tratamientos dentales de la más alta calidad, accesibles para todas las familias mexicanas, con un enfoque integral que va más allá de la salud bucal para mejorar la calidad de vida de nuestros pacientes.
														</p>
														<div className="grid grid-cols-2 gap-4 mt-6">
															<div>
																<h3 className="font-semibold text-red-600">Misión</h3>
																<p>Restablecer la salud bucal de nuestros pacientes con servicios odontológicos de alta calidad y precios justos, garantizando un trato digno en instalaciones cómodas y limpias.</p>
															</div>
															<div>
																<h3 className="font-semibold text-red-600">Visión</h3>
																<p>Ser la empresa líder en el país, ofreciendo servicios y productos odontológicos de alta calidad, accesibles para todos.</p>
															</div>
														</div>
													</div>
													<div className="flex justify-center">
														<Image src="/images/QuienesSomos/FondoHistoria.png" alt="Consultorio Dental+" width={600} height={600} className="rounded-xl shadow-lg" />
													</div>
												</div>
											</section>

											{/* Nuestros Valores */}
											<section className="py-16 bg-gray-50">
												<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
													<h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Nuestros Valores</h2>
													<p className="text-lg text-center text-gray-600 mb-10">Los principios que guían cada una de nuestras acciones y definen quiénes somos</p>
													<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
														<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
															<span className="inline-block bg-red-50 rounded-full p-3 mb-4"><ShieldCheck className="text-red-500" size={28} /></span>
															<h3 className="font-bold text-lg mb-2 text-center">Confianza</h3>
															<p className="text-gray-600 text-center text-sm">Nos comprometemos a transmitir siempre en nuestros pacientes sentimientos de seguridad y confianza en cada consulta o tratamiento que se realicen con nosotros.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
															<span className="inline-block bg-blue-50 rounded-full p-3 mb-4"><Award className="text-blue-500" size={28} /></span>
															<h3 className="font-bold text-lg mb-2 text-center">Profesionalismo</h3>
															<p className="text-gray-600 text-center text-sm">Nuestro equipo de especialistas brinda un servicio de excelencia, respaldado por su amplia experiencia y formación continua.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
															<span className="inline-block bg-green-50 rounded-full p-3 mb-4"><Zap className="text-green-500" size={28} /></span>
															<h3 className="font-bold text-lg mb-2 text-center">Innovación</h3>
															<p className="text-gray-600 text-center text-sm">Implementamos tecnología de vanguardia y los métodos más avanzados para ofrecer tratamientos de alta precisión y confort.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
															<span className="inline-block bg-pink-50 rounded-full p-3 mb-4"><Smile className="text-pink-500" size={28} /></span>
															<h3 className="font-bold text-lg mb-2 text-center">Empatia</h3>
															<p className="text-gray-600 text-center text-sm">Priorizamos un trato humano y personalizado, escuchando y entendiendo las necesidades de cada paciente para ofrecerle la mejor solución.</p>
														</div>
														<div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
															<span className="inline-block bg-purple-50 rounded-full p-3 mb-4"><Target className="text-purple-600" size={28} /></span>
															<h3 className="font-bold text-lg mb-2 text-center">Calidad</h3>
															<p className="text-gray-600 text-center text-sm">Aseguramos resultados duraderos y la máxima satisfacción, utilizando materiales de primera y aplicando los más altos estándares en todos nuestros procedimientos.</p>
														</div>
													</div>
												</div>
											</section>

					{/* Sección de valores y features */}

					{/* Equipo de especialistas */}
					<section className="py-12">
						<h2 className="text-2xl font-bold text-center mb-8">Nuestro Equipo de Especialistas</h2>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="grid gap-8 md:grid-cols-3">
								{[
									{
										id: 'odontologia',
										title: 'Odontología Integral',
										subtitle: 'Equipo de atención general',
										avatar: '/images/QuienesSomos/EquipoIntegral.jpg',
										bullets: ['Diagnóstico y tratamientos integrales', 'Limpiezas y revisiones periódicas', 'Restauraciones dentales'],
									},
									{
										id: 'ortodoncia',
										title: 'Ortodoncia',
										subtitle: 'Especialistas en alineación dental',
										avatar: '/images/QuienesSomos/EquipoOrto.jpg',
										bullets: ['Ortodoncia tradicional y estética', 'Tratamientos personalizados', 'Acompañamiento constante para lograr los mejores resultados'],
									},
									{
										id: 'implantologia',
										title: 'Implantología y Rehabilitación Oral',
										subtitle: 'Equipo experto en implantes',
										avatar: '/images/QuienesSomos/EquipoImplantes.jpg',
										bullets: ['Colocación de implantes dentales', 'Cirugía oral especializada', 'Rehabilitación funcional y estética'],
									},
								].map((s) => (
									<div key={s.id} className="bg-white rounded-lg shadow p-6 transform transition hover:scale-[1.02] hover:shadow-lg flex flex-col h-full">
														<div className="flex justify-center">
															<span className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">Especialistas</span>
														</div>
										<div className="flex-1 flex flex-col items-center gap-3 mb-4 text-center">
															<Image src={s.avatar} alt={`${s.title} avatar`} width={120} height={120} className="rounded-full bg-gray-50 p-3" />
															<div>
																<h3 className="font-semibold text-xl">{s.title}</h3>
																<p className="text-sm text-gray-500">{s.subtitle}</p>
															</div>
														</div>
										<p className="text-sm text-gray-600 mb-3 text-center">{s.title === 'Odontología Integral' ? 'Profesionales certificados y altamente capacitados en atención dental general y preventiva:' : s.title === 'Ortodoncia' ? 'Especialistas en la alineación y corrección de la posición de los dientes y maxilares:' : 'Equipo experto en reemplazo y restauración dental:'}</p>
										<ul className="text-sm pl-0 grid gap-2 mb-4">
															{s.bullets.map((b, i) => (
																<li key={i} className="flex items-start gap-2">
																	<CheckCircle className="text-red-500 mt-1" size={16} />
																	<span className="text-gray-700">{b}</span>
																</li>
															))}
														</ul>
										<div className="mt-auto flex items-center justify-center gap-6">
													<button onClick={() => setShowAgendarModal(true)} className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition text-sm font-medium">Agendar Consulta</button>
													<a href="/sucursales" className="text-sm text-gray-600 hover:underline">Ver sucursales</a>
												</div>
									</div>
								))}
							</div>
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
								<button onClick={() => setShowAgendarModal(true)} className="bg-red-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-red-700 transition">Agendar Consulta Gratuita</button>
							</section>

							<SucursalPickerModal open={showAgendarModal} onClose={() => setShowAgendarModal(false)} onSelect={() => {}} />

							{/* Footer eliminado, ahora solo se usa el global */}
						</div>
					);
}
