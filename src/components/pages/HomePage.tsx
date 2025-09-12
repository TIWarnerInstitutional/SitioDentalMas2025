"use client";
import { AboutUs } from "../AboutUs";
import { Locations } from "../Locations";
import { Blog } from "../Blog";
import { Testimonials } from "../Testimonials";
import { PaymentOptions } from "../PaymentOptions";
import { FAQ } from "../FAQ";
import { FaTooth, FaSmile, FaUsers, FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";
import SucursalesHero from "../SucursalesHero";
import TreatmentsMarquee from "../TreatmentsMarquee";
import TreatmentsTabs from "../TreatmentsTabs";
import TreatmentsShowcase from "../TreatmentsShowcase";
import { Footer } from "../Footer";

export default function HomePage() {
	return (
		<div className="bg-white">
			{/* Header principal */}
			{/* ...el resto del código permanece igual... */}

			{/* Hero Section */}
			<section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center p-0 m-0 bg-transparent" style={{background: 'transparent'}}>
				{/* Imagen de fondo única */}
				<img src="/15.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
				{/* Íconos animados alrededor con color personalizado */}
				{[
					{ id: 1, Icon: FaTooth, x: -170, y: -172 },
					{ id: 3, Icon: FaUsers, x: -130, y: 70 },
					{ id: 4, Icon: FaCalendarAlt, x: -50, y: 70 },
					{ id: 5, Icon: FaHeartbeat, x: 60, y: 70 },
					{ id: 2, Icon: FaSmile, x: 130, y: 70 },
				].map(({ id, Icon, x, y }) => (
					<motion.div
						key={id}
						initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
						animate={{ opacity: 1, x, y, scale: 1 }}
						transition={{ duration: 1, delay: id * 0.2, type: "spring" }}
						style={{ position: "absolute", color: id === 1 ? "#FE0000" : "#fff", fontSize: "2.5rem", zIndex: 2 }}
					>
						<Icon />
					</motion.div>
				))}
				{/* Contenido central */}
				<div className="relative flex flex-col items-center justify-center w-full h-full z-10 mt-0" style={{top: '-100px'}}>
					<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
						Dental<span className="text-[#FE0000]">+</span>
					</h1>
					<p className="text-lg md:text-xl text-white mb-6 max-w-xl px-4 text-center drop-shadow-lg">
						Tu mejor sonrisa comienza aquí: atención profesional, tecnología avanzada y resultados que te harán sonreír.
					</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
						<button className="bg-[#FE0000] hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-lg text-lg w-full md:w-auto font-bold">
							Agenda tu cita
						</button>
						<button className="bg-white hover:bg-gray-200 text-[#FE0000] px-6 py-3 rounded-2xl shadow-lg text-lg w-full md:w-auto font-bold border border-[#FE0000]">
							Ver tratamientos
						</button>
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

			{/* Mapa de Sucursales */}
			<SucursalesHero />

			{/* Blog */}
			<Blog />
			{/* Testimonios */}
			<Testimonials />
			{/* Formas de Pago y Financiamiento */}
			<PaymentOptions />
			{/* Preguntas Frecuentes */}
			<FAQ />
		</div>
	);
}
