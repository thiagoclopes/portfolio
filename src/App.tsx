import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './pages/Projects'
import Particles from './animations/Particles'
import Stacks from './pages/Stacks'
import { useEffect, useState } from 'react'

export default function App() {
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		setShowModal(true)
	}, [])

	return (
		
		<div className="flex flex-col min-h-screen w-full bg-black relative font-montserrat">
			{showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4 text-black">Atenção</h2>

            <img
              src="https://collective-gold-clownfish.myfilebase.com/ipfs/QmUoKHMFx9JDSWguukiRdyHf27cYSjcKgCDkD847fCwbNm"
              alt="Men at work sign"
              className="mx-auto my-4 w-48 h-48"
            />

            <p className="text-gray-800 mb-6">
              Este portfólio está em desenvolvimento. Algumas funcionalidades podem estar incompletas.
            </p>
            <button
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              onClick={() => setShowModal(false)}
            >
              Entendi
            </button>
          </div>
        </div>
      )}


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
					particleCount={250}
					particleSpread={15}
					speed={0.1}
					particleBaseSize={150}
					moveParticlesOnHover={false}
					alphaParticles={false}
					disableRotation={false}
				/>
			</div>

			<Navbar />
			<main className="flex-grow relative z-10">
				
				<section id="home">
					<Home />
				</section>

				<section id="stacks">
					<Stacks />
				</section>
				<section id="projects">
					<Projects />
				</section>

			</main>
			<Footer />
		</div>
	)
}
