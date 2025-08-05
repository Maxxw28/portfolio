// --- 1. Import the new icons ---
import { Mail, Github, Gitlab, Facebook } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="py-8 px-4 text-center text-gray-400">
			{/* --- 2. Add the new links here --- */}
			<div className="flex justify-center gap-8 mb-4">
				<a
					href="mailto:mwyzykowski@gmail.com"
					className="hover:text-cyan-400 transition-colors"
				>
					<Mail size={28} />
				</a>
				<a
					href="https://github.com/maxxw28"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-cyan-400 transition-colors"
				>
					<Github size={28} />
				</a>
				<a
					href="https://gitlab.com/mwyzykowski"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-cyan-400 transition-colors"
				>
					<Gitlab size={28} />
				</a>
				{/* New Facebook Link */}
				<a
					href="https://www.facebook.com/maks.wyzykowski/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-cyan-400 transition-colors"
				>
					<Facebook size={28} />
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
