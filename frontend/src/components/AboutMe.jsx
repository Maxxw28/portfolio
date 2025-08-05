import { Fade } from 'react-awesome-reveal';

const AboutMe = () => {
	return (
		<section id="about" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<h2 className="section-header">About Me</h2>
			</Fade>

			<div className="max-w-4xl mx-auto text-center space-y-8">
				{/* Main Introduction */}
				<Fade direction="up" delay={100} triggerOnce>
					<p className="text-lg leading-relaxed text-gray-300">
						I am a developer driven by a deep passion for turning complex
						problems into{' '}
						<span className="text-cyan-400">
							beautiful, functional, and user-centric web experiences
						</span>
						. I love creating websites that not only look great but also provide
						seamless interactions and robust performance. I have experience in
						both frontend and backend development, allowing me to build
						full-stack applications that are efficient and scalable. I also got
						experience in many other technologies, which you can check in{' '}
						<span className="text-cyan-400 font-semibold hover:underline transition-all duration-200">
							<a href="#skills">skills section</a>
						</span>{' '}
						below. If I don't know some technology I can learn it quickly and
						efficiently.
					</p>
				</Fade>

				{/* Philosophy */}
				<Fade direction="up" delay={200} triggerOnce>
					<div className="mt-12 space-y-4">
						<h3 className="text-2xl font-bold text-cyan-400 mb-3">
							My Approach to Building
						</h3>
						<p className="text-lg leading-relaxed text-gray-300">
							I believe great work lies at the intersection of elegant design
							and clean, scalable code. It's about crafting intuitive interfaces
							that feel effortless to the user while being built on a robust and
							maintainable foundation.
						</p>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default AboutMe;
