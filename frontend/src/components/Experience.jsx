// src/components/Experience.jsx

import { ArrowUpRight } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
	const projects = [
		{
			title: 'SuiteControl Hotel Management System',
			role: 'Project Manager & Frontend Developer',
			date: 'Sep 2023 - Jun 2024',
			imageUrl: '/images/suiteControlLogo.png', // Replace with your project image
			responsibilities: [
				"I managed the group's work during the period of application creation and development",
				'I developed the frontend, I connected libraries such as react-hook-form, react-router-dom',
				'I developed most of the styles visible throughout the site. I am responsible for the main design of the home page and the hotel dashboard.',
				'I tested and developed most of the visible functionalities such as: managing hotel rooms, managing reservations, managing users, managing hotel services, managing hotel staff',
			],
			tech: ['React', 'Javascript', 'Tailwind CSS', 'Firebase', 'SCSS'],
			link: 'https://suitecontrol-e74ea.web.app/',
		},
		{
			title: 'BoomBat web gaming platform',
			role: 'Frontend Developer',
			date: 'Jul 2025 - Aug 2025',
			imageUrl: '/images/boombat.png', // Replace with your project image
			responsibilities: [
				'I developed the frontend of the platform, I connected libraries such as react-router-dom',
				'I added many pages connected to mongodb such as the user panel, the game panel, the game settings panel',
				'I created the project structure and routes to which I added security measures such as authentication and authorization',
				'I was responsible for the styles and main design of the pages, I adapted the dedicated colors in line with the color palette',
			],
			tech: ['MongoDB', 'Javascript', 'Tailwind CSS', 'React', 'Express js'],
			link: 'http://localhost:5174', // Replace with your project link
		},
	];

	return (
		<section id="experience" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">Work Experience</h2>
			</Fade>
			<div className="grid grid-cols-1 lg:grid-cols-1 gap-16 max-w-4xl mx-auto">
				<Fade direction="up" cascade damping={0.2} triggerOnce>
					{projects.map((project, index) => (
						// --- UPDATED: Shadow hover effect now uses cyan ---
						<a
							href={project.link}
							key={index}
							target="_blank"
							rel="noopener noreferrer"
							className="block transform hover:shadow-2xl hover:shadow-cyan-800/40 transition-shadow duration-300 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-purple-800/50 overflow-hidden"
						>
							<div className="lg:flex">
								<img
									src={project.imageUrl}
									alt={project.title}
									className="w-full lg:w-1/3 h-56 lg:h-auto object-center"
								/>
								<div className="p-8 flex flex-col justify-between">
									<div>
										<h3 className="text-3xl font-bold mb-1">{project.title}</h3>
										{/* --- UPDATED: Role color changed to cyan for better contrast --- */}
										<p className="text-cyan-400 font-semibold mb-3">
											{project.role} ({project.date})
										</p>
										<ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
											{project.responsibilities.map((resp, i) => (
												<li key={i}>{resp}</li>
											))}
										</ul>
									</div>
									<div className="flex flex-wrap gap-2 mt-4">
										{project.tech.map((t, i) => (
											<span
												key={i}
												className="bg-gray-700 text-purple-300 text-xs font-bold px-2 py-1 rounded-full"
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</div>
						</a>
					))}
				</Fade>
			</div>
		</section>
	);
};

export default Experience;
