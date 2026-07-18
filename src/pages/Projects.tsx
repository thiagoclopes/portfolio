import { BadgeCheck, BellRing, Building2, Rocket, Store, Users } from 'lucide-react'

const productImage = 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmeevejUp6tCCkDtemsPPLxNnRt1gTJPTTaxyAB5if4Mhg'
const productVideo = 'https://res.cloudinary.com/dfbcnnwle/video/upload/v1778719648/Screen_Recording_20260513_213433_Campus_Eats_ougehf.mp4'

const architecture = [
  {
    step: '01',
    title: 'Experiência mobile',
    text: 'React Native e Expo sustentam uma jornada consistente para quem compra e para quem vende.',
  },
  {
    step: '02',
    title: 'Backend e tempo real',
    text: 'Spring Boot, PostgreSQL e WebSockets sustentam pedidos, notificações e atualizações entre clientes e vendedores.',
  },
  {
    step: '03',
    title: 'Distribuição contínua',
    text: 'Publicação e evolução do produto em operação por meio da Play Store e do TestFlight.',
  },
]

export default function Projects() {
  return (
    <article className="border-t border-border py-24 sm:py-32" aria-labelledby="campus-eats-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Estudo de caso · Produto em operação</p>
            <h2 id="campus-eats-title" className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Campus Eats
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Uma plataforma criada para centralizar vendedores ambulantes, facilitar sua descoberta pela comunidade universitária e fomentar o comércio local na UFRN.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <dl className="rounded-2xl border border-impact/30 bg-impact/5 p-6">
              <dt className="text-sm font-medium text-impact">Tração do Produto</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-foreground">+1.700</dd>
              <dd className="mt-2 text-sm leading-6 text-muted">usuários cadastrados no aplicativo.</dd>
            </dl>
            
            <dl className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <dt className="text-sm font-medium text-primary">Alcance Digital</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-foreground">+145 mil</dd>
              <dd className="mt-2 text-sm leading-6 text-muted">views nas redes sociais em 90 dias.</dd>
            </dl>
          </div>
        </header>

        <section className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start" aria-labelledby="product-model-title">
          <div className="lg:sticky lg:top-28">
            <div className="mx-auto max-w-[320px] rounded-[2rem] border border-border bg-surface p-3 shadow-2xl shadow-black/40">
              <video
                className="aspect-[1080/2340] w-full rounded-[1.45rem] bg-background object-contain"
                controls
                playsInline
                preload="none"
                poster={productImage}
                aria-label="Demonstração do aplicativo Campus Eats"
              >
                <source src={productVideo} type="video/mp4" />
                Seu navegador não oferece suporte à reprodução deste vídeo.
              </video>
            </div>
            <p className="mx-auto mt-4 max-w-[320px] text-center text-xs leading-5 text-subtle">Demonstração carregada somente quando solicitada.</p>
          </div>

          <div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Store size={22} aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Distinção essencial do produto</p>
              <h3 id="product-model-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Não é um aplicativo de delivery padrão.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                O Campus Eats organiza a presença digital dos vendedores e aproxima oferta e demanda dentro do campus. A plataforma centraliza a descoberta e os pedidos, mas <strong className="font-semibold text-foreground">a entrega é realizada pelo próprio vendedor</strong>.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <Building2 className="text-primary" size={22} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">Contexto local</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Produto concebido a partir da dinâmica real da UFRN, respeitando a autonomia de quem vende no campus.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <Users className="text-impact" size={22} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">Impacto comunitário</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Mais visibilidade para vendedores ambulantes e uma experiência centralizada para a comunidade universitária.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <BellRing className="text-primary" size={22} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">Operação em tempo real</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Pedidos, mudanças de status e notificações conectam clientes e vendedores durante toda a jornada.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <Rocket className="text-impact" size={22} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold text-foreground">Em operação</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Distribuído pela Play Store e pelo TestFlight, com ciclos contínuos de validação e evolução do produto.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20" aria-labelledby="campus-architecture-title">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">Arquitetura e execução</p>
            <h3 id="campus-architecture-title" className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Do aplicativo à operação real
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">O principal desafio de engenharia foi transformar uma necessidade local em um produto distribuído, conectando aplicativo mobile, API, geolocalização e atualizações em tempo real sem perder clareza de experiência.</p>
          </div>

          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {architecture.map((item) => (
              <li key={item.step} className="relative rounded-2xl border border-border bg-surface p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary">{item.step}</span>
                <h4 className="mt-8 text-xl font-semibold text-foreground">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologias do Campus Eats">
            {['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'Filebase/IPFS', 'Play Store', 'TestFlight'].map((technology) => (
              <span key={technology} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
                <BadgeCheck size={14} className="text-impact" aria-hidden="true" />
                {technology}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
