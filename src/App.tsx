import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './pages/About'
import Approach from './pages/Approach'
import Contact from './pages/Contact'
import EnterpriseSystems from './pages/EnterpriseSystems'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <section id="home" aria-labelledby="hero-title">
          <Home />
        </section>

        <section id="approach" aria-labelledby="approach-title">
          <Approach />
        </section>

        <section id="enterprise" aria-labelledby="enterprise-title">
          <EnterpriseSystems />
        </section>

        <section id="campus-eats" aria-label="Projeto Campus Eats">
          <Projects />
        </section>

        <section id="about" aria-labelledby="about-title">
          <About />
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
