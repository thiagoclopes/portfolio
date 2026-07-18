import { Bot, FileStack, Network, ShieldCheck } from 'lucide-react'

const cases = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Automação Inteligente e Comunicação Multicanal',
    text: 'Atuação em uma plataforma corporativa composta por front-end Angular, APIs Spring Boot e um serviço especializado de inteligência artificial em FastAPI. A arquitetura integra processamento assíncrono, geração de conteúdo estruturado e comunicação por diferentes canais, mantendo separação clara entre interface, domínio, integrações externas e serviços de IA. O projeto aplica autenticação baseada em tokens, controle de acesso por perfil, route guards, interceptors, auditoria operacional e versionamento de banco de dados. Testes automatizados, containers Docker e pipelines de lint, build e deploy ajudam a sustentar a evolução segura de um sistema com múltiplos fluxos e alto requisito de confiabilidade.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'LLMs', 'PostgreSQL', 'Flyway', 'Segurança', 'Testes', 'CI/CD'],
  },
  {
    number: '02',
    icon: Network,
    title: 'Ecossistema Distribuído de Conhecimento e IA',
    text: 'Desenvolvimento de um ecossistema modular que combina aplicação web, API corporativa, processamento assíncrono e recuperação semântica de informações. A solução utiliza serviços independentes para persistência vetorial, geração assistida por modelos de linguagem e execução de tarefas agendadas, reduzindo o acoplamento entre a experiência do usuário e operações computacionalmente mais pesadas. Mensageria permite distribuir responsabilidades e processar eventos de forma resiliente, enquanto autenticação, autorização por perfil, guards e interceptors protegem os diferentes contextos da aplicação. A infraestrutura containerizada e os pipelines automatizados padronizam a entrega dos componentes em ambientes distintos.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'LangChain', 'ChromaDB', 'Ollama', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Arquitetura distribuída'],
  },
  {
    number: '03',
    icon: Bot,
    title: 'Plataforma Modular com Assistência por IA',
    text: 'Atuação em uma plataforma web corporativa estruturada em módulos independentes, com navegação protegida, controle de acesso por função e integração entre uma interface Angular e serviços especializados de inteligência artificial. A separação entre autenticação, apresentação e processamento de IA permite evoluir cada componente com menor impacto sobre os demais. O front-end adota tipagem estática, componentes reutilizáveis, validação de qualidade com ESLint e testes de guards e fluxos de autenticação. Ambientes containerizados e configurações específicas por contexto reforçam a previsibilidade operacional e facilitam a evolução do produto sem expor detalhes internos ou dados protegidos.',
    skills: ['Angular', 'TypeScript', 'Tailwind', 'FastAPI', 'Ollama', 'Route guards', 'Testes', 'Docker', 'Separação de responsabilidades'],
  },
  {
    number: '04',
    icon: FileStack,
    title: 'Fluxos Documentais Assistidos por IA',
    text: 'Engenharia de uma solução distribuída para fluxos documentais complexos, integrando uma aplicação Angular, uma API Spring Boot e um microsserviço dedicado à assistência por inteligência artificial. A arquitetura separa construção documental, persistência, autenticação e processamento inteligente, permitindo controlar dependências e manter responsabilidades bem definidas. O sistema combina segurança baseada em tokens, guards, interceptors, tratamento centralizado de falhas e comunicação reativa entre serviços. A qualidade é apoiada por testes automatizados, análise estática, linting e pipelines de build de imagens Docker, com versionamento por entrega e configurações específicas para diferentes ambientes.',
    skills: ['Angular', 'Spring Boot', 'FastAPI', 'LLMs', 'MongoDB', 'WebClient', 'Sonar', 'Segurança', 'CI/CD'],
  },
]

export default function EnterpriseSystems() {
  return (
    <div className="border-y border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.45fr)] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              <ShieldCheck size={15} className="text-primary" aria-hidden="true" />
              Projetos sob NDA
            </div>
            <h2 id="enterprise-title" className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Engenharia em Sistemas Críticos
            </h2>
          </div>
          <p className="text-base leading-7 text-muted">Experiência corporativa na JFRN apresentada exclusivamente pelo prisma de arquitetura, qualidade, segurança e integração.</p>
        </header>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {cases.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.number} className="grid gap-8 py-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-14 lg:py-14">
                <div className="lg:pr-6">
                  <div className="flex items-center gap-4">
                    <span className="w-6 shrink-0 text-center text-xs font-semibold tabular-nums tracking-[0.12em] text-subtle">{item.number}</span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 max-w-md text-2xl font-semibold leading-tight tracking-tight text-foreground">{item.title}</h3>
                </div>
                <div>
                  <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">{item.text}</p>
                  <div className="mt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Competências evidenciadas</p>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Competências de ${item.title}`}>
                      {item.skills.map((skill) => (
                        <li key={skill} className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
