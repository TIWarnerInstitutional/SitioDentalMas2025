"use client";
import Link from 'next/link'
import { useState } from 'react'
import { AboutUs } from "../AboutUs";
// sucursales data imported elsewhere where needed
// import sucursales from '../../data/sucursales'
import SucursalPickerModal from '../SucursalPickerModal';
import { Blog } from "../Blog";
import { Testimonials } from "../Testimonials";
import { PaymentOptions } from "../PaymentOptions";
import { FAQ } from "../FAQ";
// icon set kept for future use
import { FaTooth, FaSmile, FaUsers, FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import Image from "next/image";
import TreatmentsShowcase from "../TreatmentsShowcase";
import SucursalesHero from "../SucursalesHero";

export default function HomePage() {
	const [showAgendarModal, setShowAgendarModal] = useState(false)
    // animated icons temporarily unused
	const _animatedIcons = [] as unknown[];
	// prevent unused import warnings for icons
	void FaTooth; void FaSmile; void FaUsers; void FaCalendarAlt; void FaHeartbeat;
	return (
		<div className="bg-white">
			{/* Header principal */}
			{/* ...el resto del código permanece igual... */}

			{/* Hero Section */}
			<section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center p-0 m-0 bg-transparent" style={{background: 'transparent'}}>
				{/* Imagen de fondo única */}
				<Image src="/FondoDMas.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" fill priority />
				{/* Hero content: responsive container (center on mobile, right on desktop) */}
				<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
					<div className="grid grid-cols-12 items-center h-full">
						{/* content: left on desktop, centered on mobile */}
						<div className="col-span-12 md:col-span-6 lg:col-span-5 md:col-start-2 lg:col-start-2 flex flex-col justify-center text-center md:text-left">
							<div className="max-w-md md:max-w-md lg:max-w-lg pr-4 lg:pr-8 xl:pr-12">
								<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-extrabold leading-tight text-white max-w-lg">
									<div className="break-words">Tu sonrisa</div>
									<div style={{ color: '#FFBF00' }} className="inline-block break-words">perfecta</div>
									<div className="text-white break-words">nos inspira</div>
								</h1>
									<p className="mt-4 text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-white/90 leading-relaxed font-medium max-w-lg">
										Cuidamos tu salud dental con la más alta calidad, tecnología avanzada y un trato humano excepcional.
									</p>
									<div className="mt-6 flex flex-col sm:flex-row gap-4 md:justify-start">
										<button onClick={() => setShowAgendarModal(true)} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-lg text-lg font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2z"/></svg>
											Agendar Cita
										</button>
										<Link href="/sucursales" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-white px-6 py-3 rounded-2xl shadow-sm text-lg font-medium border border-white/30 hover:bg-white/10">
											Ver Sucursales
										</Link>
									</div>
								</div>
							</div>
						</div>
				</div>
			</section>

			{/* Showcase de tratamientos tipo tabs animados con título, descripción y paginación */}
			<div className="w-full flex justify-center -mt-55">
				<div className="max-w-4xl w-full">
					<TreatmentsShowcase />
				</div>
			</div>

			{/* ¿Quiénes Somos? */}
			<AboutUs />

			{/* Sucursales hero (solo primera parte) */}
			<SucursalesHero />



			{/* Blog */}
			<Blog />
			{/* Testimonios */}
			<Testimonials />
			
			{/* Formas de Pago y Financiamiento */}
			<PaymentOptions />
			{/* Preguntas Frecuentes */}
			<FAQ />

			<SucursalPickerModal
			  open={showAgendarModal}
			  onClose={() => setShowAgendarModal(false)}
							onSelect={(_s) => {
								// currently do nothing on select; keep href empty as requested
							}}
			/>
		</div>
		);

	}
