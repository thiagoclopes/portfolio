import { BrainCircuit, Braces, CloudCog, ServerCog } from 'lucide-react'

const skillGroups = [
  {
    icon: Braces,
    title: 'Front-end & Mobile',
    description: 'Interfaces acessíveis, responsivas e orientadas a produto.',
    skills: ['React', 'Angular', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: ServerCog,
    title: 'Back-end & APIs',
    description: 'Serviços modulares, integrações e contratos previsíveis.',
    skills: ['Spring Boot', 'Node.js', 'FastAPI', 'REST', 'WebClient', 'Spring Security'],
  },
  {
    icon: BrainCircuit,
    title: 'IA & Dados',
    description: 'LLMs e pipelines de dados integrados a fluxos reais.',
    skills: ['Ollama', 'LangChain', 'ChromaDB', 'PostgreSQL', 'MongoDB', 'Flyway'],
  },
  {
    icon: CloudCog,
    title: 'Entrega & Qualidade',
    description: 'Automação e segurança para evoluir com confiança.',
    skills: ['Docker', 'GitLab CI/CD', 'RabbitMQ', 'ESLint', 'Sonar', 'Testcontainers'],
  },
]

export default function Stacks() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Competências técnicas</p>
          <h2 id="skills-title" className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Tecnologia aplicada com contexto</h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">A stack é uma ferramenta de decisão: cada tecnologia aparece conectada ao tipo de problema que ajuda a resolver.</p>
        </header>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <article key={group.title} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <Icon size={24} className="text-primary" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologias de ${group.title}`}>
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-muted">{skill}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
