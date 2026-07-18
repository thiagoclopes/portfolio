import { Download, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),transparent_40%),var(--surface)] px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Próximo desafio</p>
        <h2 id="contact-title" className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          Vamos construir algo relevante juntos?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">Estou aberto a oportunidades em engenharia front-end e full stack, especialmente onde produto, experiência e arquitetura precisam caminhar juntos.</p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:thiagoviniciusc33@gmail.com"
            aria-label="Enviar e-mail para Thiago Lopes"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-hover"
          >
            <Mail size={18} aria-hidden="true" />
            Entrar em contato
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-c-lopes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir perfil de Thiago Lopes no LinkedIn"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="/Curriculo - Thiago Lopes.pdf"
            download="Thiago-Lopes-Curriculo.pdf"
            aria-label="Baixar currículo de Thiago Lopes em PDF"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
          >
            <Download size={18} aria-hidden="true" />
            Currículo em PDF
          </a>
        </div>
      </div>
    </div>
  )
}
