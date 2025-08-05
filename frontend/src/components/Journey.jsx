import { Fade } from 'react-awesome-reveal';
import { ArrowUpRight } from 'lucide-react';

const Journey = () => {
	const timelineEvents = [
		{
			year: '2021 - Present',
			event:
				'Started my journey into programming and web development by starting my education in Polish technical school - SCI.',
		},
		{
			year: '2022',
			event:
				'Learned the basics of HTML, CSS, and JavaScript through online courses, personal projects and school assignments.',
		},
		{
			year: '2023',
			event:
				'I developed my knowledge by learning other technologies and programming languages such as C++, C#, Python.',
		},
		{
			year: 'May 2023',
			event: 'I passed the PCAP - Certified Associate Python Programmer exam',
		},
		{
			year: 'Sep 2023 - Jun 2024',
			event:
				'I worked on the SuiteControl Hotel Management System project as a Project Manager & Frontend Developer with 4 school colleagues.',
			link: 'https://suitecontrol-e74ea.web.app/',
			linkDescription: 'View Project',
		},
		{
			year: 'Jun 2024',
			event: 'I passed the INF 03 - theory and practice exams with 100% scores',
		},
		{
			year: 'Jul 2024 - Aug 2024',
			event:
				'I worked as an intern for 3 weeks in Atrium. My tasks were related to databases, website development and working on daily challenges and bugs.',
			link: 'https://www.hotel-atrium.pl/pl',
		},
		{
			year: 'Sep 2024',
			event:
				'I worked as an apprentice at bkf company for a month, developing and maintaining a vue-based website.',
			link: 'https://bkfmyjnie.pl/',
		},
		{
			year: 'Sep 2024 - Jun 2025',
			event:
				'Created many personal projects, mostly focused on web development, using React, Vue, and Node.js. You can find them on my GitHub.',
			link: 'https://github.com/maxxw28',
			linkDescription: 'View GitHub',
		},
		{
			year: 'Sep 2024 - Present',
			event:
				'I started giving tutoring in computer science and typical topics needed for exams - inf03, inf04 as well as programming languages such as Python, C++, C#, JavaScript.',
			link: 'https://gitlab.com/mwyzykowski/cpp_basics',
			linkDescription: 'View example tutoring repository',
		},
		{
			year: 'Present',
			event: 'Continuously learning and mastering new technologies.',
		},
	];

	return (
		<section id="journey" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">My Journey</h2>
			</Fade>

			<div className="relative max-w-4xl mx-auto">
				<div className="absolute left-1/2 top-0 h-full w-0.5 bg-purple-700 transform -translate-x-1/2"></div>
				<div className="space-y-12">
					{timelineEvents.map((item, index) => (
						<Fade
							key={index}
							direction={index % 2 === 0 ? 'left' : 'right'}
							triggerOnce
							className="flex items-center w-full"
						>
							<div
								className={`w-full flex ${
									index % 2 === 0 ? 'justify-start' : 'justify-end'
								}`}
							>
								<div className="w-1/2 px-8">
									<div
										className={`p-6 bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-lg border-2 ${
											index % 2 === 0
												? 'border-r-cyan-400'
												: 'border-l-cyan-400'
										}`}
									>
										<p
											className={`font-bold text-lg mb-1 ${
												index % 2 === 0 ? 'text-right' : 'text-left'
											} text-cyan-400`}
										>
											{item.year}
										</p>
										<p
											className={`text-gray-300 ${
												index % 2 === 0 ? 'text-right' : 'text-left'
											}`}
										>
											{item.event}
										</p>

										{/* --- 2. ADD THIS BLOCK FOR THE OPTIONAL LINK --- */}
										{item.link && (
											<a
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												// This complex class aligns the link correctly based on its side
												className={`flex items-center gap-2 mt-4 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ${
													index % 2 === 0 ? 'justify-end' : 'justify-start'
												}`}
											>
												{/* Use the provided description or a sensible default */}
												<span>{item.linkDescription || 'View Details'}</span>
												<ArrowUpRight size={18} />
											</a>
										)}
									</div>
								</div>
							</div>

							<div className="absolute left-1/2 transform -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 shadow-md shadow-cyan-500/50">
								<div className="h-2 w-2 rounded-full bg-white"></div>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</section>
	);
};

export default Journey;
