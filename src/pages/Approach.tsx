import { ClipboardList, Code2, Database, FileText, Workflow } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Entender o negócio',
    text: 'Levantamento de requisitos com as áreas envolvidas e validação das entregas com quem usa o sistema.',
  },
  {
    icon: Database,
    title: 'Modelar dados',
    text: 'Modelagem relacional e SQL em PostgreSQL, com evolução do schema versionada por migrations.',
  },
  {
    icon: Workflow,
    title: 'Integrar sistemas',
    text: 'APIs REST em Spring Boot, microsserviços em FastAPI e mensageria com RabbitMQ entre serviços.',
  },
  {
    icon: Code2,
    title: 'Desenvolver e manter',
    text: 'Desenvolvimento e manutenção de interfaces Angular e APIs Java/Spring Boot, com testes automatizados, Sonar e CI/CD.',
  },
  {
    icon: FileText,
    title: 'Documentar e implantar',
    text: 'Documentação técnica, ambientes em Docker e suporte à implantação das entregas.',
  },
]

export default function Approach() {
  return (
    <div className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.5fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Como atuo</p>
            <h2 id="approach-title" className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
              Do requisito ao sistema em produção
            </h2>
          </div>
          <p className="text-base leading-7 text-muted">
            Atuo como ponte entre a necessidade da área usuária e a solução técnica, participando de todas as etapas do ciclo dentro de sprints Scrum.
          </p>
        </header>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="flex flex-col bg-surface p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums tracking-[0.16em] text-subtle">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
