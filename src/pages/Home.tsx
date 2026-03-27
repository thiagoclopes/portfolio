import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect'
import { Download, Github, Linkedin } from 'lucide-react'
import { ShimmerButton } from '../components/magicui/shimmer-button'
import photo from '../assets/_NAF1133.jpg'

const words = [
  { text: 'Desenvolvedor' },
  { text: 'FullStack.', className: 'text-blue-400' },
]

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">

      {/* Photo — absolute right, gradient fades grey bg into black */}
      <div className="absolute top-0 bottom-0 right-0 w-[50%] hidden lg:block pointer-events-none select-none">
        <img
          src={photo}
          className="h-full w-full object-cover object-top"
          alt="Thiago Lopes"
        />
        {/* Fade left edge into black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        {/* Fade bottom into black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Text content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0">
        <div className="lg:max-w-[55%]">

          {/* Mobile photo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-blue-400/30">
              <img
                src={photo}
                className="w-full h-full object-cover object-top"
                alt="Thiago Lopes"
              />
            </div>
          </div>

          <TypewriterEffectSmooth words={words} />

          <p className="text-gray-300 italic mb-6 text-base md:text-lg">
            Transformando ideias em experiências digitais criativas e funcionais.
          </p>

          <p className="text-gray-200 max-w-md text-base leading-relaxed mb-8">
            Formado em C&T pela UFRN. Desenvolvo interfaces modernas e funcionais
            com React e React Native, aliando design, performance e usabilidade.
          </p>

          <div className="flex flex-row gap-3 mb-8">
            <a
              href="https://github.com/thiagoclopes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/5 transition-all duration-200"
            >
              <Github size={22} className="text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-c-lopes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-white/10 hover:border-blue-400/50 hover:bg-white/5 transition-all duration-200"
            >
              <Linkedin size={22} className="text-blue-400" />
            </a>
          </div>

          <a
            href="/Curriculo - Thiago Lopes.pdf"
            download="Thiago-Lopes-Curriculo.pdf"
            className="w-fit"
          >
            <ShimmerButton shimmerColor="#0D20D4" shimmerSize="0.1em">
              <Download size={18} className="mr-2" />
              Currículo
            </ShimmerButton>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <span className="text-2xl">↓</span>
      </div>
    </div>
  )
}
