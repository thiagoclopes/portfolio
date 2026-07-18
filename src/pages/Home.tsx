import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react'
import photo from '../assets/thiago-lopes.webp'

const metrics = [
  { label: 'Apps em Produção', value: 'Play Store & TestFlight', accent: true },
  { label: 'Sistemas Corporativos', value: 'Arquiteturas Críticas' },
  { label: 'Stack Principal', value: 'React Native, Angular & Spring' },
]

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.14),transparent_38%),radial-gradient(circle_at_12%_32%,rgba(74,222,128,0.06),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.75fr)] lg:gap-16 lg:px-10 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Engenheiro de Software <span aria-hidden="true">·</span> Full Stack
          </p>

          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Construo produtos digitais e sistemas críticos com foco em{' '}
            <span className="text-primary">experiência, arquitetura e impacto.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Desenvolvo produtos reais, interfaces acessíveis e plataformas corporativas, conectando decisões de UX a arquiteturas full stack confiáveis.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#campus-eats"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-hover"
            >
              Ver estudo de caso
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              href="/Curriculo - Thiago Lopes.pdf"
              download="Thiago-Lopes-Curriculo.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-surface-elevated"
            >
              <Download size={18} aria-hidden="true" />
              Baixar currículo
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2" aria-label="Perfis profissionais">
            <a
              href="https://github.com/thiagoclopes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de Thiago Lopes no GitHub"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              <Github size={21} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-c-lopes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil de Thiago Lopes no LinkedIn"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              <Linkedin size={21} aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.value} className="flex flex-col justify-center bg-surface px-4 py-3 sm:px-6 sm:py-3.5">
                <dt className="text-xs font-medium text-muted">{metric.label}</dt>
                <dd className={`mt-0.5 text-sm font-semibold sm:text-base ${metric.accent ? 'text-impact' : 'text-foreground'}`}>
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:max-w-[420px]">
          <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
            <img
              src={photo}
              width="800"
              height="1200"
              alt="Retrato de Thiago Lopes"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top grayscale-[12%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
}
