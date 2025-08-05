import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [statusMessage, setStatusMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatusMessage('Sending...');

		// Make sure to add these in your .env file!
		const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		emailjs
			.sendForm(serviceID, templateID, form.current, publicKey)
			.then(
				(result) => {
					console.log(result.text);
					setStatusMessage('Message sent successfully!');
					e.target.reset(); // Reset the form
				},
				(error) => {
					console.log(error.text);
					setStatusMessage('Failed to send message. Please try again.');
				}
			)
			.finally(() => {
				setIsSubmitting(false);
				// Optional: clear the message after a few seconds
				setTimeout(() => setStatusMessage(''), 5000);
			});
	};

	return (
		<section id="contact" className="py-20 px-4 text-white overflow-y-hidden">
			<Fade direction="up" triggerOnce>
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="section-header">Get In Touch</h2>
					<p className="text-gray-400 mb-12">
						Have a project in mind or want to connect? Feel free to send me a
						message.
					</p>

					{/* Note: the name attributes (user_name, user_email) are important for EmailJS */}
					<form ref={form} onSubmit={sendEmail} className="space-y-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<input
								type="text"
								name="from_name"
								placeholder="Your Name"
								required
								className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
							<input
								type="email"
								name="from_email"
								placeholder="Your Email"
								required
								className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
						</div>
						<textarea
							name="message"
							placeholder="Your Message"
							required
							rows="5"
							className="w-full p-4 bg-gray-800/60 border border-purple-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
						></textarea>

						<button
							type="submit"
							disabled={isSubmitting}
							className="px-8 py-3 bg-cyan-600 font-bold rounded-lg hover:bg-cyan-700 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>

						{/* Display the success or error message */}
						{statusMessage && (
							<p className="mt-4 text-center">{statusMessage}</p>
						)}
					</form>
				</div>
			</Fade>
		</section>
	);
};

export default Contact;
