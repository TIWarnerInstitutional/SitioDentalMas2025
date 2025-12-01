"use client";
import { useState } from 'react'
import { AboutUs } from "../AboutUs";
import SucursalPickerModal from '../SucursalPickerModal';
import { Blog } from "../Blog";
import { Testimonials } from "../Testimonials";
import { PaymentOptions } from "../PaymentOptions";
import { FAQ } from "../FAQ";
import { FaTooth, FaSmile, FaUsers, FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import SucursalesHero from "../SucursalesHero";
import { BannerMes } from "../BannerMes";

export default function HomePage() {
	const [showAgendarModal, setShowAgendarModal] = useState(false)
    // animated icons temporarily unused
	const _animatedIcons = [] as unknown[];
	// prevent unused import warnings for icons
	void FaTooth; void FaSmile; void FaUsers; void FaCalendarAlt; void FaHeartbeat;
	return (
		<div className="bg-white relative">
			{/* Hero Section */}
	

		

		{/* Promoción de Navidad */}
		<BannerMes />
		
		{/* Espaciador */}
		<div className="py-8 md:py-12"></div>
		
		{/* ¿Quiénes Somos? */}
		<AboutUs />			{/* Sucursales hero (solo primera parte) */}
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
