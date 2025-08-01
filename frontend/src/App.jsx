import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="antialiased text-white">
			{/* Navbar is placed here so it renders on top of all other sections */}
			<Navbar />

			{/* Add padding-top to the main content to prevent it from being hidden under the fixed navbar */}
			<main className="pt-16">
				<Hero />
				<Experience />
				<Skills />
				<Certificates />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}

export default App;
