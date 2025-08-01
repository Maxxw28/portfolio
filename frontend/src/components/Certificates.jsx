import { Award } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const certificates = [
	{ name: 'Responsive Web Design', issuer: 'freeCodeCamp', link: '#' },
	{
		name: 'JavaScript Algorithms and Data Structures',
		issuer: 'freeCodeCamp',
		link: '#',
	},
	{ name: 'Frontend Development Libraries', issuer: 'freeCodeCamp', link: '#' },
];

const Certificates = () => {
	return (
		<section id="certificates" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">Certificates</h2>
				<div className="max-w-3xl mx-auto space-y-6">
					<Fade direction="up" cascade damping={0.2} triggerOnce>
						{certificates.map((cert, index) => (
							<a
								href={cert.link}
								key={index}
								target="_blank"
								rel="noopener noreferrer"
								className="block"
							>
								<div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex items-center gap-6 hover:bg-gray-700/70 transition-colors duration-300 border border-purple-800/50">
									<Award className="text-purple-400 w-10 h-10 flex-shrink-0" />
									<div>
										<h3 className="font-bold text-xl">{cert.name}</h3>
										<p className="text-gray-400">Issued by {cert.issuer}</p>
									</div>
								</div>
							</a>
						))}
					</Fade>
				</div>
			</Fade>
		</section>
	);
};

export default Certificates;
