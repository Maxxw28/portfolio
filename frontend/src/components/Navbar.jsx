import { useState } from 'react';
import {
	Home,
	UserCircle,
	FileUser,
	Briefcase,
	Award,
	Star,
	Mail,
	Menu,
	X,
} from 'lucide-react';

const Navbar = ({ activeSection }) => {
	const [isOpen, setIsOpen] = useState(false);

	// --- THIS IS THE CORRECTED ARRAY ---
	// The 'icon' property has been added back to each link.
	const navLinks = [
		{ href: '#home', label: 'Home', id: 'home', icon: <Home size={18} /> },
		{
			href: '#about',
			label: 'About',
			id: 'about',
			icon: <UserCircle size={18} />,
		},
		{
			href: '#journey',
			label: 'Journey',
			id: 'journey',
			icon: <FileUser size={18} />,
		},
		{
			href: '#experience',
			label: 'Experience',
			id: 'experience',
			icon: <Briefcase size={18} />,
		},
		{
			href: '#skills',
			label: 'Skills',
			id: 'skills',
			icon: <Star size={18} />,
		},
		{
			href: '#certificates',
			label: 'Certificates',
			id: 'certificates',
			icon: <Award size={18} />,
		},
		{
			href: '#contact',
			label: 'Contact',
			id: 'contact',
			icon: <Mail size={18} />,
		},
	];

	// The NavLink component correctly uses the icon property again.
	const NavLink = ({ id, href, label, icon, onClick }) => {
		const isActive = activeSection === id;
		return (
			<li>
				<a
					href={href}
					onClick={onClick}
					className={`flex flex-col sm:flex-row items-center gap-2 transition-colors duration-300 p-2 ${
						isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
					}`}
				>
					{icon}
					<span className="text-xs sm:text-sm font-medium">{label}</span>
				</a>
			</li>
		);
	};

	// The MobileNavLink also correctly uses the icon property again.
	const MobileNavLink = ({ id, href, label, icon, onClick }) => {
		const isActive = activeSection === id;
		return (
			<li>
				<a
					href={href}
					onClick={onClick}
					className={`flex items-center gap-4 w-full text-lg p-4 transition-colors duration-300 ${
						isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
					}`}
				>
					{icon}
					<span className="font-medium">{label}</span>
				</a>
			</li>
		);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
			<div className="container mx-auto px-4 relative">
				{/* Desktop Navigation */}
				<div className="hidden md:flex justify-center items-center h-16">
					<ul className="flex items-center space-x-2 lg:space-x-4">
						{navLinks.map((link) => (
							<NavLink key={link.id} {...link} />
						))}
					</ul>
				</div>

				{/* Mobile Header */}
				<div className="md:hidden flex justify-between items-center h-16">
					<a
						href="#home"
						onClick={() => setIsOpen(false)}
						className="text-white font-bold text-xl"
					>
						<span className="text-cyan-400">M.</span>
						<span className="text-purple-400">W.</span> Portfolio
					</a>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-white focus:outline-none"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Panel */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/40 backdrop-blur-lg ${
					isOpen ? 'max-h-screen' : 'max-h-0'
				}`}
			>
				<ul className="flex flex-col px-4 py-2">
					{navLinks.map((link) => (
						<MobileNavLink
							key={link.id}
							{...link}
							onClick={() => setIsOpen(false)}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
