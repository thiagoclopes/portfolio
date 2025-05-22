import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './pages/Projects'
import Particles from './animations/Particles'
import Stacks from './pages/Stacks'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black relative">
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
