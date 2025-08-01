// src/components/Hero.jsx

import { Mail, Github, Gitlab } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
	return (
		<section
			id="home"
			className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4"
		>
			<Fade direction="down" triggerOnce cascade damping={0.1}>
				<img
					src="https://placehold.co/150x150/6e28d9/ffffff?text=MW"
					alt="Maksymilian Wyżykowski"
					className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-purple-500 hover:border-cyan-400 transition-colors duration-300 shadow-lg"
				/>
				<h1 className="text-5xl font-bold mt-6">Maksymilian Wyżykowski</h1>
				<p className="mt-4 text-lg max-w-2xl mx-auto">
					An ambitious and experienced frontend developer passionate about
					building modern, responsive, and user-friendly web applications.
				</p>

				{/* --- NEW ANIMATED GRADIENT BUTTON --- */}
				<div className="mt-10">
					<a href="#experience" className="btn-animated-gradient">
						View My Work
					</a>
				</div>

				<div className="flex justify-center gap-6 mt-12">
					<a
						href="mailto:your-email@example.com"
						className="text-purple-400 hover:text-cyan-400 transition-colors"
					>
						<Mail size={32} />
					</a>
					<a
						href="https://github.com/your-username"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-400 hover:text-cyan-400 transition-colors"
					>
						<Github size={32} />
					</a>
					<a
						href="https://gitlab.com/your-username"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-400 hover:text-cyan-400 transition-colors"
					>
						<Gitlab size={32} />
					</a>
				</div>
			</Fade>
		</section>
	);
};

export default Hero;
