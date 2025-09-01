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
					{ id: 3, Icon: FaUsers, x: -130, y: 40 },
					{ id: 4, Icon: FaCalendarAlt, x: -50, y: 40 },
					{ id: 5, Icon: FaHeartbeat, x: 60, y: 40 },
					{ id: 2, Icon: FaSmile, x: 130, y: 40 },
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

			{/* Footer */}
			<footer className="bg-gray-900 text-gray-100 mt-20">
				<div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
					<div>
						<span className="text-2xl font-bold text-red-500 mb-2 block">Dental+</span>
						<p className="text-sm mb-4">Clínica Dental en CDMX<br />Av. Ejemplo #123<br />Tel: (55) 1234-5678</p>
						<div className="flex gap-3 mt-2">
							<a href="#" className="hover:text-red-400">Instagram</a>
							<a href="#" className="hover:text-red-400">Facebook</a>
							<a href="#" className="hover:text-red-400">WhatsApp</a>
						</div>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Nuestros Servicios</h3>
						<ul className="text-sm space-y-1">
							<li>Ortodoncia</li>
							<li>Implantes</li>
							<li>Blanqueamiento</li>
							<li>Odontopediatría</li>
							<li>Prótesis</li>
							<li>Cirugía</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Enlaces Rápidos</h3>
						<ul className="text-sm space-y-1">
							<li><a href="#quienes-somos" className="hover:text-red-400">¿Quiénes Somos?</a></li>
							<li><a href="#sucursales" className="hover:text-red-400">Sucursales</a></li>
							<li><a href="#blog" className="hover:text-red-400">Blog</a></li>
							<li><a href="#testimonios" className="hover:text-red-400">Testimonios</a></li>
							<li><a href="#pagos" className="hover:text-red-400">Pagos</a></li>
							<li><a href="#faq" className="hover:text-red-400">FAQ</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Nuestras Sucursales</h3>
						<ul className="text-sm space-y-1">
							<li>Centro Histórico</li>
							<li>Polanco</li>
							<li>Santa Fe</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 text-center py-4 text-xs text-gray-400">
					&copy; 2025 Dental+. Todos los derechos reservados.
				</div>
			</footer>
		</div>
	);
}
