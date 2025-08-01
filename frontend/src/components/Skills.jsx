// src/components/Skills.jsx

import { Fade } from 'react-awesome-reveal';
// --- NEW: Importing a wider variety of more specific icons ---
import {
	Code2, // For general code/languages
	Palette, // For styling/CSS
	Server, // For backend technologies
	Wind, // For Tailwind CSS
	Component, // For frameworks like React/Vue
	Database, // For databases/frameworks with ORMs like Laravel
	Terminal, // For C++/C#
	Rocket, // For Vite (build tool)
} from 'lucide-react';

// --- UPDATED: New icons assigned to each skill ---
const skills = [
	{ name: 'React', icon: <Component size={20} /> },
	{ name: 'Vue', icon: <Component size={20} /> },
	{ name: 'JavaScript', icon: <Code2 size={20} /> },
	{ name: 'HTML5', icon: <Code2 size={20} /> },
	{ name: 'Python', icon: <Code2 size={20} /> },
	{ name: 'CSS3', icon: <Palette size={20} /> },
	{ name: 'Tailwind CSS', icon: <Wind size={20} /> },
	{ name: 'SCSS', icon: <Palette size={20} /> },
	{ name: 'PHP', icon: <Server size={20} /> },
	{ name: 'Laravel', icon: <Database size={20} /> },
	{ name: 'Node.js', icon: <Server size={20} /> },
	{ name: 'C++', icon: <Terminal size={20} /> },
	{ name: 'C#', icon: <Terminal size={20} /> },
	{ name: 'Vite', icon: <Rocket size={20} /> },
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">My Skills</h2>
				<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
					{skills.map((skill, index) => (
						// --- UPDATED: The icons now use the new cyan accent color ---
						<div
							key={index}
							className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-purple-800/50 rounded-lg px-4 py-2 hover:border-cyan-400 transition-colors"
						>
							<span className="text-cyan-400">{skill.icon}</span>
							<span className="font-medium">{skill.name}</span>
						</div>
					))}
				</div>
			</Fade>
		</section>
	);
};

export default Skills;
