import { Fade } from 'react-awesome-reveal';
// --- 1. Cleaned up icon imports ---
import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaReact,
	FaVuejs,
	FaNodeJs,
	FaPhp,
	FaLaravel,
	FaPython,
	FaGithub,
	FaGitlab,
	FaBrain,
	FaBootstrap,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMysql } from 'react-icons/si';
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb';

// --- 2. Removed the specified skills from this array ---
const skills = [
	// Frontend
	{ name: 'JavaScript', icon: <SiJavascript size={48} />, color: 'yellow' },
	{ name: 'React', icon: <FaReact size={48} />, color: 'sky' },
	{ name: 'Vue', icon: <FaVuejs size={48} />, color: 'emerald' },
	// { name: 'Vite', icon: <SiVite size={48} />, color: 'purple' },
	{ name: 'HTML5', icon: <FaHtml5 size={48} />, color: 'orange' },
	{ name: 'CSS3', icon: <FaCss3Alt size={48} />, color: 'blue' },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss size={48} />, color: 'teal' },
	{ name: 'Bootstrap', icon: <FaBootstrap size={48} />, color: 'purple' },
	{ name: 'SCSS', icon: <FaSass size={48} />, color: 'pink' },

	// Backend
	{ name: 'Node.js', icon: <FaNodeJs size={48} />, color: 'green' },
	{ name: 'PHP', icon: <FaPhp size={48} />, color: 'indigo' },
	{ name: 'Laravel', icon: <FaLaravel size={48} />, color: 'red' },
	{ name: 'Python', icon: <FaPython size={48} />, color: 'yellow' },
	{ name: 'C++', icon: <TbBrandCpp size={48} />, color: 'blue' },
	{ name: 'C#', icon: <TbBrandCSharp size={48} />, color: 'purple' },

	// Databases & DevOps
	// { name: 'SQL', icon: <TbSql size={48} />, color: 'blue' },
	{ name: 'MySQL', icon: <SiMysql size={48} />, color: 'orange' },
	{ name: 'GitHub', icon: <FaGithub size={48} />, color: 'gray' },
	{ name: 'GitLab', icon: <FaGitlab size={48} />, color: 'orange' },

	// Other
	{ name: 'AI', icon: <FaBrain size={48} />, color: 'pink' },
];

const Skills = () => {
	// No changes are needed to this function or the returned JSX.
	const getColorClasses = (color) => {
		switch (color) {
			case 'yellow':
				return {
					text: 'text-yellow-400',
					border: 'border-yellow-400',
					shadow: 'hover:shadow-yellow-400/50',
				};
			case 'sky':
				return {
					text: 'text-sky-400',
					border: 'border-sky-400',
					shadow: 'hover:shadow-sky-400/50',
				};
			case 'emerald':
				return {
					text: 'text-emerald-400',
					border: 'border-emerald-400',
					shadow: 'hover:shadow-emerald-400/50',
				};
			case 'purple':
				return {
					text: 'text-purple-400',
					border: 'border-purple-400',
					shadow: 'hover:shadow-purple-400/50',
				};
			case 'orange':
				return {
					text: 'text-orange-400',
					border: 'border-orange-400',
					shadow: 'hover:shadow-orange-400/50',
				};
			case 'blue':
				return {
					text: 'text-blue-400',
					border: 'border-blue-400',
					shadow: 'hover:shadow-blue-400/50',
				};
			case 'teal':
				return {
					text: 'text-teal-400',
					border: 'border-teal-400',
					shadow: 'hover:shadow-teal-400/50',
				};
			case 'pink':
				return {
					text: 'text-pink-400',
					border: 'border-pink-400',
					shadow: 'hover:shadow-pink-400/50',
				};
			case 'green':
				return {
					text: 'text-green-400',
					border: 'border-green-400',
					shadow: 'hover:shadow-green-400/50',
				};
			case 'indigo':
				return {
					text: 'text-indigo-400',
					border: 'border-indigo-400',
					shadow: 'hover:shadow-indigo-400/50',
				};
			case 'red':
				return {
					text: 'text-red-400',
					border: 'border-red-400',
					shadow: 'hover:shadow-red-400/50',
				};
			case 'gray':
				return {
					text: 'text-gray-400',
					border: 'border-gray-400',
					shadow: 'hover:shadow-gray-400/50',
				};
			default:
				return {
					text: 'text-gray-400',
					border: 'border-gray-600',
					shadow: 'hover:shadow-gray-400/50',
				};
		}
	};

	return (
		<section id="skills" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">My Skills</h2>
			</Fade>
			<div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
				<Fade direction="up" cascade damping={0.1} triggerOnce>
					{skills.map((skill) => {
						const { text, border, shadow } = getColorClasses(skill.color);
						return (
							<div
								key={skill.name}
								className={`flex flex-col items-center justify-center p-6 bg-gray-800/60 backdrop-blur-md 
                            rounded-xl border-2 ${border} 
                            transform hover:-translate-y-2 hover:shadow-2xl ${shadow} 
                            transition-all duration-300 w-40 h-40`}
							>
								<div className={`mb-3 ${text}`}>{skill.icon}</div>
								<p className="font-bold text-center text-gray-200 text-lg">
									{skill.name}
								</p>
							</div>
						);
					})}
				</Fade>
			</div>
		</section>
	);
};

export default Skills;
