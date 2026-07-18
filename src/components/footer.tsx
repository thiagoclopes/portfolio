import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-subtle">© {new Date().getFullYear()} Thiago Lopes. Engenharia com propósito e impacto.</p>
        <div className="flex items-center gap-2" aria-label="Redes profissionais">
          <a href="https://github.com/thiagoclopes" target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub de Thiago Lopes" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground">
            <Github size={19} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/thiago-c-lopes" target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Thiago Lopes" className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground">
            <Linkedin size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
