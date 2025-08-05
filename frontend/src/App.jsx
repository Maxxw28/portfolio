import { useState, useEffect } from 'react'; // 1. Add useEffect
import Navbar from './components/Navbar';
// We no longer import ObservedSection
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	const [activeSection, setActiveSection] = useState('home');

	// --- 2. ADD THIS ENTIRE useEffect BLOCK ---
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section[id]');

			// Check if the user has scrolled to the bottom of the page
			const isAtBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

			if (isAtBottom) {
				// If at the bottom, forcefully set the last section as active
				setActiveSection(sections[sections.length - 1].id);
				return; // Exit the function early
			}

			// If not at the bottom, use the regular logic
			let currentSectionId = '';
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (window.scrollY >= sectionTop - 150) {
					currentSectionId = section.id;
				}
			});

			setActiveSection(currentSectionId);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="antialiased text-white">
			<Navbar activeSection={activeSection} />

			<main className="pt-16 overflow-x-hidden">
				{/* --- 3. IMPORTANT: Each section component now needs its 'id' prop directly on itself --- */}
				{/* We have removed the ObservedSection wrapper */}
				<Hero />
				<AboutMe />
				<Journey />
				<Experience />
				<Skills />
				<Certificates />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}

export default App;
