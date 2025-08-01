// src/components/Contact.jsx

import { Fade } from 'react-awesome-reveal';

const Contact = () => {
	return (
		<section id="contact" className="py-20 px-4 text-white">
			<Fade direction="up" triggerOnce>
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="section-header">Get In Touch</h2>
					<p className="text-gray-400 mb-12">
						Have a project in mind or want to connect? Feel free to send me a
						message.
					</p>
					<form className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{/* --- UPDATED: Focus ring now uses cyan --- */}
							<input
								type="text"
								placeholder="Your Name"
								className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
							<input
								type="email"
								placeholder="Your Email"
								className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
						</div>
						{/* --- UPDATED: Focus ring now uses cyan --- */}
						<textarea
							placeholder="Your Message"
							rows="5"
							className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						></textarea>
						{/* --- UPDATED: Button now uses a cyan theme --- */}
						<button
							type="submit"
							className="px-8 py-3 bg-cyan-600 font-bold rounded-lg hover:bg-cyan-700 transition-colors duration-300"
						>
							Send Message
						</button>
					</form>
				</div>
			</Fade>
		</section>
	);
};

export default Contact;
