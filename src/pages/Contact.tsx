import { Github, Linkedin, Mail } from 'lucide-react'

const contacts = [
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: '@thiagoclopes',
    href: 'https://github.com/thiagoclopes',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'thiago-c-lopes',
    href: 'https://www.linkedin.com/in/thiago-c-lopes',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'thiagoviniciusc33@gmail.com',
    href: 'mailto:thiagoviniciusc33@gmail.com',
  },
]

export default function Contact() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Vamos <span className="text-blue-400">conversar?</span>
        </h2>
        <p className="text-gray-400 mb-14 max-w-lg mx-auto">
          Estou aberto a oportunidades de trabalho, freelas e colaborações.
          Entre em contato por qualquer um dos canais abaixo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 group text-left"
            >
              <span className="text-blue-400 group-hover:scale-110 transition-transform duration-200">
                {c.icon}
              </span>
              <div>
                <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                <div className="text-white text-sm font-semibold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
