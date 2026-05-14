import { ArrowUpRight, Github, MapPin, ShoppingBag, Smartphone } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogImage,
  MorphingDialogDescription,
} from '../components/ui/morphing-dialog'

type Project = {
  image: string
  screenshots: string[]
  title: string
  subtitle: string
  description: string[]
  tags: string[]
  github?: string
  demo?: string
}

const featuredProject = {
  title: 'CampusEats',
  eyebrow: 'Projeto principal',
  image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmeevejUp6tCCkDtemsPPLxNnRt1gTJPTTaxyAB5if4Mhg',
  video: '/videos/campuseats-demo.mp4',
  subtitle: 'Aplicativo mobile para conectar a comunidade da UFRN aos vendedores locais do campus.',
  description:
    'O CampusEats organiza a descoberta de banquinhas, cardápios, pedidos e acompanhamento em tempo real em uma experiência pensada para uso rápido dentro da rotina universitária.',
  highlights: [
    {
      icon: <Smartphone size={18} />,
      title: 'Interface mobile',
      text: 'Fluxos em React Native com foco em navegação clara, estados de pedido e experiência de compra.',
    },
    {
      icon: <MapPin size={18} />,
      title: 'Contexto UFRN',
      text: 'Produto desenhado para um problema real do campus, aproximando alunos e vendedores locais.',
    },
    {
      icon: <ShoppingBag size={18} />,
      title: 'Jornada completa',
      text: 'Cardápio, carrinho e acompanhamento do pedido estruturados como uma experiência única.',
    },
  ],
  tags: ['React Native', 'TypeScript', 'UX mobile', 'Produto real'],
}

const projects: Project[] = [
  {
    image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmbYkvzPVrzPAaLsvq5B2m5vm5iFwJ4FnTRz8pyJbsZAwp',
    screenshots: [
      // adicionar link prints
    ],
    title: 'Guia do Atleta',
    subtitle: 'Plataforma de performance com IA',
    description: [
      'Plataforma web para atletas de alta performance, com treinos e dietas personalizados gerados por Inteligência Artificial.',
      'O sistema analisa o perfil do usuário e gera planos de treino e nutrição adaptados aos seus objetivos e nível de condicionamento.',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'IA'],
    github: 'https://google.com/',
  },
  {
    image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmYfDYHbhHheRVHLhqKEqN9ZJqasKGNHatf4Y6VVBmUQ3a',
    screenshots: [
      // adicionar link prints
    ],
    title: 'GBookPDF',
    subtitle: 'Aluguel de livros digitais',
    description: [
      'Aplicação web para aluguel e leitura de livros digitais em formato PDF, com catálogo de títulos e gerenciamento de aluguéis.',
      'O usuário pode buscar livros, ver detalhes, alugar por período e ler diretamente na plataforma.',
    ],
    tags: ['React', 'TypeScript'],
    github: 'https://google.com/',
  },
  {
    image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmVXULLthjihLDCu8rSt6FDoAP8YRLSQeqHFmDnYFeZgHh',
    screenshots: [
      // adicionar link prints
    ],
    title: 'InovascGAME',
    subtitle: 'Jogo educativo de primeiros socorros',
    description: [
      'Jogo desenvolvido para ensinar técnicas de primeiros socorros de forma interativa e gamificada, voltado para o público em geral.',
      'O projeto nasceu em parceria com o programa Inovasc e busca democratizar o acesso ao conhecimento de emergências médicas.',
    ],
    tags: ['React Native', 'TypeScript', 'Game'],
    github: 'https://google.com/',
  },
]

const descriptionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
}

export default function Projects() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured project */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-blue-400 mb-3">
              {featuredProject.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {featuredProject.title}
            </h2>
            <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
              {featuredProject.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
            <div className="relative mx-auto w-full max-w-[300px]">
              <div className="relative rounded-[2rem] border border-white/15 bg-gray-950 p-3 shadow-2xl shadow-blue-950/30">
                <div className="absolute left-1/2 top-3 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
                <div className="relative aspect-[1080/2340] overflow-hidden rounded-[1.45rem] bg-black">
                  {featuredProject.video ? (
                    <video
                      className="h-full w-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={featuredProject.image}
                    >
                      <source src={featuredProject.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={featuredProject.image}
                      alt="CampusEats em destaque"
                      className="h-full w-full object-contain"
                    />
                  )}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-7">
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredProject.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Outros <span className="text-blue-400">projetos</span>
          </h2>
          <p className="text-gray-400">Clique em um projeto para ver os detalhes</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <MorphingDialog
              key={project.title}
              transition={{ type: 'spring', stiffness: 240, damping: 26 }}
            >
              {/* Card (trigger) */}
              <MorphingDialogTrigger
                className="group w-full text-left overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/30 transition-colors duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <MorphingDialogImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <MorphingDialogTitle className="text-white font-semibold text-xl">
                      {project.title}
                    </MorphingDialogTitle>
                    <ArrowUpRight
                      size={18}
                      className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1"
                    />
                  </div>
                  <MorphingDialogSubtitle className="text-gray-400 text-sm mb-4">
                    {project.subtitle}
                  </MorphingDialogSubtitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MorphingDialogTrigger>

              {/* Modal */}
              <MorphingDialogContainer>
                <MorphingDialogContent
                  className="relative w-full max-w-xl bg-gray-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  style={{ maxHeight: '90vh', overflowY: 'auto' }}
                >
                  <MorphingDialogImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-8">
                    <MorphingDialogTitle className="text-white text-2xl font-bold mb-1">
                      {project.title}
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle className="text-blue-400 text-sm font-medium mb-5">
                      {project.subtitle}
                    </MorphingDialogSubtitle>

                    <MorphingDialogDescription
                      variants={descriptionVariants}
                      disableLayoutAnimation
                    >
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                        {project.description.map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                      {project.screenshots.length > 0 && (
                        <div className="mt-6">
                          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                            Telas
                          </p>
                          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                            {project.screenshots.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`${project.title} tela ${i + 1}`}
                                className="h-48 w-auto rounded-xl border border-white/10 shrink-0 object-cover"
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {(project.github || project.demo) && (
                        <div className="flex gap-3 mt-8">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white hover:border-blue-400/50 hover:bg-white/10 transition-all duration-200"
                            >
                              <Github size={16} />
                              GitHub
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-sm text-white hover:bg-blue-500 transition-all duration-200"
                            >
                              <ArrowUpRight size={16} />
                              Ver demo
                            </a>
                          )}
                        </div>
                      )}
                    </MorphingDialogDescription>
                  </div>

                  <MorphingDialogClose className="text-gray-500 hover:text-white transition-colors" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </div>
    </div>
  )
}
