// src/components/Navbar.jsx

import { Home, Briefcase, Award, Star, Mail } from 'lucide-react';

const Navbar = () => {
	const navLinks = [
		{ href: '#home', label: 'Home', icon: <Home size={18} /> },
		{ href: '#experience', label: 'Experience', icon: <Briefcase size={18} /> },
		{ href: '#skills', label: 'Skills', icon: <Star size={18} /> },
		{ href: '#certificates', label: 'Certificates', icon: <Award size={18} /> },
		{ href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
			<div className="container mx-auto px-4 flex justify-center items-center h-16">
				<ul className="flex items-center space-x-4 sm:space-x-8">
					{navLinks.map((link) => (
						<li key={link.href}>
							{/* --- UPDATED: Hover color changed from purple to cyan --- */}
							<a
								href={link.href}
								className="flex flex-col sm:flex-row items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
							>
								{link.icon}
								<span className="text-xs sm:text-sm font-medium">
									{link.label}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
