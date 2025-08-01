import { Mail, Github, Gitlab } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="py-8 px-4 text-center text-gray-400">
			<div className="flex justify-center gap-8 mb-4">
				<a
					href="mailto:your-email@example.com"
					className="text-purple-400 hover:text-cyan-400 transition-colors"
				>
					<Mail size={28} />
				</a>
				<a
					href="https://github.com/your-username"
					target="_blank"
					rel="noopener noreferrer"
					className="text-purple-400 hover:text-cyan-400 transition-colors"
				>
					<Github size={28} />
				</a>
				<a
					href="https://gitlab.com/your-username"
					target="_blank"
					rel="noopener noreferrer"
					className="text-purple-400 hover:text-cyan-400 transition-colors"
				>
					<Gitlab size={28} />
				</a>
			</div>
			<p>
				© {new Date().getFullYear()} Maksymilian Wyżykowski. All Rights
				Reserved.
			</p>
		</footer>
	);
};

export default Footer;
