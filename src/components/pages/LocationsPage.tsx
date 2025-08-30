import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
// import { Button } from '../ui/button';
// import { LocationCard } from '../sections/LocationCard';
// import { locations } from '../data/locationsData';

export function LocationsPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="text-center space-y-8">
							<h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
								Nuestras <span style={{ color: "#FE0000" }}>Sucursales</span>
							</h1>
							<p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								3 ubicaciones estratégicas en la Ciudad de México para estar siempre cerca de ti
							</p>
						</div>
					</motion.div>
				</div>
			</section>
			{/* ...existing code for locations grid and map... */}
		</div>
	);
}
