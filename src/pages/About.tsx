import { Award, FileBadge, GraduationCap } from 'lucide-react'

const timeline = [
  { period: 'nov. 2025 – atual', title: 'Bolsista de Desenvolvimento de Software', place: 'UFRN · sistemas desenvolvidos para a JFRN', current: true },
  { period: 'Em andamento · previsão jul. 2028', title: 'Engenharia da Computação', place: 'UFRN' },
  { period: '2022 – 2025', title: 'Bacharelado em Ciência e Tecnologia', place: 'UFRN' },
  { period: '2018 – 2020', title: 'Técnico em Informática', place: 'EAJ / UFRN' },
]

const highlights = [
  {
    icon: FileBadge,
    title: 'Software registrado no INPI',
    text: 'Coautor do Robotic Arm Control, software em Python para controle inteligente de braços robóticos. Processo BR512025004287-6.',
  },
  {
    icon: Award,
    title: 'Artigo científico premiado',
    text: 'Coautor de artigo sobre classificação de imagens com SVM, publicado nos Anais da MNR 2021, com reconhecimento de Mérito Técnico e Acadêmico.',
  },
]

export default function About() {
  return (
    <div className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Trajetória</p>
          <h2 id="about-title" className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Formação sólida em computação</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Da formação técnica em informática à engenharia, construí uma base que une fundamentos de computação, visão de produto e prática em sistemas corporativos em operação.
          </p>

          <div className="mt-10 space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-background p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-subtle">
            <GraduationCap size={20} aria-hidden="true" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em]">Linha do tempo</h3>
          </div>
          <ol className="mt-6 border-l border-border">
            {timeline.map((item) => (
              <li key={item.title} className="relative pb-9 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${item.current ? 'border-primary bg-primary' : 'border-border bg-background'}`}
                  aria-hidden="true"
                />
                <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${item.current ? 'text-primary' : 'text-subtle'}`}>{item.period}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">{item.title}</p>
                <p className="mt-0.5 text-sm text-muted">{item.place}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
