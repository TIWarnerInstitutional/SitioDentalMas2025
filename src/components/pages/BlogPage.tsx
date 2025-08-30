"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { ImageWithFallback } from '../figma/ImageWithFallback';
// import { Search, Calendar, User, Clock, Filter, TrendingUp, BookOpen, Eye } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Badge } from '../ui/badge';
// import { Card, CardContent } from '../ui/card';
// import { categories, featuredPost, blogPosts, popularPosts } from '../data/blogData';

export function BlogPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	// const filteredPosts = blogPosts.filter(post => {
	//   const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
	//                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
	//   const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
	//   return matchesSearch && matchesCategory;
	// });

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
								Blog <span style={{ color: "#FE0000" }}>Dental+</span>
							</h1>
							<p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
								Descubre consejos profesionales, las últimas tendencias y todo lo que necesitas saber sobre salud dental
							</p>
						</div>
					</motion.div>
				</div>
			</section>
			{/* ...existing code for categories, posts, etc... */}
		</div>
	);
}
