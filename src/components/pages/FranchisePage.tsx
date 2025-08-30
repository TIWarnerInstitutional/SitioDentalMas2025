import { motion } from 'framer-motion';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// import { Award, CheckCircle, Star } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Textarea } from '../ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { benefits, requirements, includesPackage, successStories, stats, investmentBreakdown } from '../data/franchiseData';

export default function FranchisePage() {
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
								Franquicias <span style={{ color: "#FE0000" }}>Dental+</span>
							</h1>
							<p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								Únete a la red de clínicas dentales más exitosa de México y transforma tu futuro profesional
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								{/* <Button size="lg" className="text-white px-8 py-4 text-lg" style={{ backgroundColor: "#FE0000" }}>Solicitar Información</Button> */}
								{/* <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">Descargar Brochure</Button> */}
							</div>
						</div>
					</motion.div>
				</div>
			</section>
			{/* ...existing code for stats, benefits, requirements, etc... */}
		</div>
	);
}
