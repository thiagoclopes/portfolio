import { Bot, FileStack, Network, ShieldCheck } from 'lucide-react'

const responsibilities = [
  'Levantamento de requisitos e validação das entregas com usuários',
  'Modelagem de dados e SQL em PostgreSQL; persistência em MongoDB',
  'Integração entre front-end, APIs REST, microsserviços e mensageria',
  'Desenvolvimento e manutenção com testes automatizados e Sonar',
  'Documentação técnica e suporte à implantação com Docker e CI/CD',
  'Trabalho em equipe guiado pelo framework Scrum',
]

const cases = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Automação Inteligente e Comunicação Multicanal',
    need: 'Gerar conteúdo estruturado e distribuí-lo por diferentes canais de comunicação com rastreabilidade e controle de acesso.',
    integration: 'Front-end Angular, APIs Spring Boot e serviço de IA em FastAPI, com processamento assíncrono entre as camadas.',
    data: 'PostgreSQL com schema versionado por Flyway, auditoria operacional e controle de acesso por perfil.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Flyway', 'Auditoria', 'CI/CD'],
  },
  {
    number: '02',
    icon: Network,
    title: 'Ecossistema Distribuído de Conhecimento e IA',
    need: 'Recuperar informações por similaridade semântica e executar tarefas agendadas sem impactar a experiência de quem usa a aplicação.',
    integration: 'Serviços independentes que se comunicam por eventos via RabbitMQ, separando a interface das operações mais pesadas.',
    data: 'PostgreSQL para dados transacionais e ChromaDB para persistência vetorial, com autorização por perfil.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'RabbitMQ', 'PostgreSQL', 'ChromaDB', 'LangChain', 'Docker'],
  },
  {
    number: '03',
    icon: Bot,
    title: 'Plataforma Modular com Assistência por IA',
    need: 'Organizar a plataforma em módulos independentes, com acesso definido pela função de cada usuário.',
    integration: 'Interface Angular integrada a serviços especializados de IA, isolando autenticação, apresentação e processamento.',
    data: 'Controle de acesso por função com route guards, testes dos fluxos de autenticação e configuração por ambiente.',
    skills: ['Angular', 'TypeScript', 'FastAPI', 'Ollama', 'Route guards', 'Testes', 'Docker'],
  },
  {
    number: '04',
    icon: FileStack,
    title: 'Fluxos Documentais Assistidos por IA',
    need: 'Apoiar fluxos documentais complexos, da construção do documento à persistência, com assistência por IA.',
    integration: 'Aplicação Angular, API Spring Boot e microsserviço de IA, com comunicação reativa entre serviços via WebClient.',
    data: 'Persistência em MongoDB, tratamento centralizado de falhas e qualidade acompanhada por Sonar e pipelines de build.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'MongoDB', 'WebClient', 'Sonar', 'CI/CD'],
  },
]

const facets = [
  { key: 'need', label: 'Necessidade de negócio' },
  { key: 'integration', label: 'Integração' },
  { key: 'data', label: 'Dados e governança' },
] as const

export default function EnterpriseSystems() {
  return (
    <div className="border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.55fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Experiência profissional</p>
            <h2 id="enterprise-title" className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Sistemas corporativos da JFRN
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Bolsista de Desenvolvimento de Software da UFRN desde novembro de 2025, em projeto da universidade para a Justiça Federal no Rio Grande do Norte, atuando no desenvolvimento e na manutenção de quatro sistemas corporativos da JFRN em operação.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
              <ShieldCheck size={15} className="text-primary" aria-hidden="true" />
              Projetos sob NDA: descrevo arquitetura e responsabilidades, sem dados internos
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Responsabilidades no ciclo</h3>
            <ul className="mt-4 space-y-3">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {cases.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.number} className="flex flex-col rounded-2xl border border-border bg-background p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-subtle">Sistema {item.number}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">{item.title}</h3>

                <dl className="mt-6 space-y-4">
                  {facets.map((facet) => (
                    <div key={facet.key} className="border-l-2 border-border pl-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{facet.label}</dt>
                      <dd className="mt-1 text-sm leading-6 text-muted">{item[facet.key]}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`Tecnologias de ${item.title}`}>
                  {item.skills.map((skill) => (
                    <li key={skill} className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                      {skill}
                    </li>
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
