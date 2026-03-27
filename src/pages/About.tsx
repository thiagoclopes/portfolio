import { Code2, Layers, Smartphone, GraduationCap } from 'lucide-react'

const highlights = [
  {
    icon: <GraduationCap size={24} className="text-blue-400" />,
    title: 'UFRN',
    subtitle: 'Formado em C&T',
  },
  {
    icon: <Code2 size={24} className="text-blue-400" />,
    title: 'React',
    subtitle: 'Especialidade principal',
  },
  {
    icon: <Smartphone size={24} className="text-blue-400" />,
    title: 'Mobile',
    subtitle: 'React Native',
  },
  {
    icon: <Layers size={24} className="text-blue-400" />,
    title: 'FullStack',
    subtitle: 'Front + Back end',
  },
]

export default function About() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Sobre <span className="text-blue-400">mim</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Conheça um pouco mais sobre quem eu sou e o que faço
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <p>
              Sou formado em Ciência e Tecnologia pela <span className="text-white font-medium">UFRN</span>,
              apaixonado por criar experiências digitais que combinam design e funcionalidade.
            </p>
            <p>
              Trabalho com <span className="text-white font-medium">React</span> e{' '}
              <span className="text-white font-medium">React Native</span> para construir
              interfaces modernas, performáticas e acessíveis — tanto para web quanto para mobile.
            </p>
            <p>
              Estou sempre aprendendo novas tecnologias e buscando formas de entregar
              soluções mais elegantes e eficientes. Acredito que bom código começa com
              empatia pelo usuário.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-blue-400/40 hover:bg-white/8 transition-all duration-300"
              >
                {item.icon}
                <div>
                  <div className="text-white font-semibold text-lg">{item.title}</div>
                  <div className="text-gray-400 text-sm mt-0.5">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
