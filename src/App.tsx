import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './pages/Projects'
import Particles from './animations/Particles'
import Stacks from './pages/Stacks'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
	return (
		<div className="flex flex-col min-h-screen w-full bg-black relative font-montserrat">
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '800px',
					zIndex: 0,
					pointerEvents: 'none',
				}}
			>
				<Particles
					particleColors={['#ffffff', '#ffffff']}
					particleCount={200}
					particleSpread={15}
					speed={0.1}
					particleBaseSize={150}
					moveParticlesOnHover={false}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>

			<Navbar />
			<main className="flex-grow relative z-10 pt-16">
				<section id="home">
					<Home />
				</section>

				<section id="about">
					<About />
				</section>

				<section id="stacks">
					<Stacks />
				</section>

				<section id="projects">
					<Projects />
				</section>

				<section id="contact">
					<Contact />
				</section>
			</main>
			<Footer />
		</div>
	)
}
