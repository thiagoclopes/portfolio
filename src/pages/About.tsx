import { ArrowRight, GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <div className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(240px,0.4fr)_minmax(0,0.8fr)] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Trajetória</p>
          <h2 id="about-title" className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">Da ideia à operação</h2>
        </div>

        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-primary">
            <GraduationCap size={24} aria-hidden="true" />
          </div>
          <p className="mt-8 text-xl leading-9 text-foreground sm:text-2xl sm:leading-10">
            Minha formação em Ciência e Tecnologia e minha trajetória em Engenharia da Computação na UFRN construíram a base para transitar entre produto, experiência e arquitetura de software.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            Comecei criando produtos do zero, transformando problemas observados em interfaces, integrações e aplicações publicadas. Hoje também atuo na evolução de sistemas corporativos críticos, onde segurança, rastreabilidade, qualidade e manutenção de longo prazo fazem parte de cada decisão técnica.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Origem</p>
              <p className="mt-2 font-semibold text-foreground">Produtos do zero</p>
            </div>
            <ArrowRight className="hidden text-primary sm:block" size={22} aria-hidden="true" />
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Evolução</p>
              <p className="mt-2 font-semibold text-foreground">Sistemas críticos em operação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
