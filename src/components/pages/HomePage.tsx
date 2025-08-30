"use client";
import { AboutUs } from "../AboutUs";
import { Locations } from "../Locations";
import { Blog } from "../Blog";
import { Testimonials } from "../Testimonials";
import { PaymentOptions } from "../PaymentOptions";
import { FAQ } from "../FAQ";
import { MapPin, CreditCard, Calendar, Banknote } from "lucide-react";
import SucursalesHero from "../SucursalesHero";

export default function HomePage() {
	return (
		<div className="bg-white">
			{/* Header principal */}
			{/* ...el resto del código permanece igual... */}

			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-red-50 to-white text-center py-20">
				<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Dental <span className="text-red-500">+</span></h1>
				<p className="text-xl md:text-2xl text-gray-700 mb-8">Tu mejor sonrisa comienza aquí: atención profesional, tecnología avanzada y resultados que te harán sonreír.</p>
				<div className="flex gap-4 justify-center">
					<button className="bg-red-500 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-red-600">Agenda tu cita</button>
					<button className="border border-red-500 text-red-500 px-8 py-4 rounded font-semibold text-lg hover:bg-red-50">Ver tratamientos</button>
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
