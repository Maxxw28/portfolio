// src/components/Experience.jsx

import { ArrowUpRight } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
	const projects = [
		{
			title: 'Corporate Website Redesign',
			role: 'Lead Frontend Developer',
			company: 'Tech Solutions Inc.',
			date: '2022 - Present',
			imageUrl: 'https://placehold.co/600x400/1e1b4b/ffffff?text=Project+One', // Replace with your project image
			responsibilities: [
				'Led the redesign of the main corporate website, improving user engagement by 40%.',
				'Developed a custom component library in React to ensure design consistency.',
				'Implemented a new headless CMS for easier content management by the marketing team.',
			],
			tech: ['React', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Storybook'],
			link: 'https://example.com/project-one',
		},
		{
			title: 'E-commerce Platform',
			role: 'Frontend Developer',
			company: 'ShopSphere',
			date: '2020 - 2022',
			imageUrl: 'https://placehold.co/600x400/4c1d95/ffffff?text=Project+Two', // Replace with your project image
			responsibilities: [
				'Built and maintained the product search and checkout pages using Vue.js.',
				'Optimized page load times, resulting in a 15% increase in conversion rates.',
				'Collaborated with backend developers to integrate REST APIs for product and user data.',
			],
			tech: ['Vue.js', 'Vuex', 'SCSS', 'Jest', 'Webpack'],
			link: 'https://example.com/project-two',
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
									className="w-full lg:w-1/3 h-56 lg:h-auto object-cover"
								/>
								<div className="p-8 flex flex-col justify-between">
									<div>
										<h3 className="text-3xl font-bold mb-1">{project.title}</h3>
										{/* --- UPDATED: Role color changed to cyan for better contrast --- */}
										<p className="text-cyan-400 font-semibold mb-3">
											{project.role} at {project.company} ({project.date})
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
