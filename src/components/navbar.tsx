import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Início' },
  { href: '#campus-eats', label: 'Campus Eats' },
  { href: '#enterprise', label: 'Sistemas críticos' },
  { href: '#skills', label: 'Competências' },
  { href: '#about', label: 'Trajetória' },
  { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegação principal"
        className={`border-b transition-colors ${
          scrolled || isOpen
            ? 'border-border bg-background/92 backdrop-blur-xl'
            : 'border-transparent bg-background/55 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="inline-flex min-h-11 items-center text-base font-semibold tracking-tight text-foreground">
            Thiago Lopes<span className="text-primary" aria-hidden="true">.</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-200 lg:hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 border-t-0 opacity-0'
          }`}
        >
          <ul className="mx-auto max-w-7xl space-y-1 px-5 py-4 sm:px-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
