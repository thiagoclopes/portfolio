import { MorphingDialogItem } from '../components/morphingDialogItem';
import inovacaoImage from '../assets/inovacao.png'
import usabilidadeImage from '../assets/usabilidade.png'
import agilidadeImage from '../assets/agilidade.png'
import conexaoImage from '../assets/conexao.png'
import eficienciaImage from '../assets/eficiencia.png'
import colaboracaoImage from '../assets/colaboracao.png'
import criatividadeImage from '../assets/criatividade.png'
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { Github, Linkedin } from 'lucide-react';

const items = [
  {
    image: inovacaoImage,
    alt: 'Ícone representando inovação',
    category: 'Inovação',
    title: 'Inovação com Propósito',
    subtitle: 'Transformando ideias em impacto real',
    description: [
      'Acredito que desenvolvimento vai além da tecnologia.',
      'Meu foco é criar soluções e negócios inovadores que gerem valor para pessoas e mercados.',
      'Inovar não é só fazer diferente, é fazer sentido.',
    ],
  },
  {
    image: usabilidadeImage,
    alt: 'Ícone representando usabilidade',
    category: 'Usabilidade',
    title: 'Experiências que Encantam',
    subtitle: 'Design centrado no usuário',
    description: [
      'Priorizar o usuário significa criar interfaces simples, intuitivas e acessíveis.',
      'Cada detalhe importa para garantir uma jornada fluida e agradável.',
      'Usabilidade é respeito pelo tempo e atenção das pessoas.',
    ],
  },
  {
    image: agilidadeImage,
    alt: 'Ícone representando agilidade',
    category: 'Agilidade',
    title: 'Da Ideia ao MVP',
    subtitle: 'Velocidade com propósito',
    description: [
      'Transformo conceitos em protótipos e MVPs rapidamente.',
      'Valido hipóteses com agilidade para aprender e evoluir mais rápido.',
      'O foco é entregar valor desde o início.',
    ],
  },
  {
    image: conexaoImage,
    alt: 'Ícone representando conexão',
    category: 'Conexão',
    title: 'Tecnologia + Empreendedorismo',
    subtitle: 'Impacto sustentável com o Conexão Empreendedora',
    description: [
      'Sou parte do projeto Conexão Empreendedora.',
      'Unimos inovação, colaboração e impacto social.',
      'Tecnologia com propósito é nossa missão.',
    ],
  },
  {
    image: eficienciaImage,
    alt: 'Ícone representando eficiência',
    category: 'Eficiência',
    title: 'Código com Qualidade',
    subtitle: 'Performance e manutenção de ponta a ponta',
    description: [
      'Escrevo código limpo, escalável e performático.',
      'Valorizo boas práticas e automações que evitam retrabalho.',
      'Eficiência é entregar mais com menos ruído.',
    ],
  },
  {
    image: colaboracaoImage,
    alt: 'Ícone representando colaboração',
    category: 'Colaboração',
    title: 'Construindo Juntos',
    subtitle: 'Resultados que nascem da soma',
    description: [
      'Os melhores projetos nascem da troca de ideias e habilidades.',
      'Valorizo a comunicação clara, escuta ativa e aprendizado mútuo.',
      'Colaboração é o motor da inovação real.',
    ],
  },
  {
    image: criatividadeImage,
    alt: 'Ícone representando criatividade',
    category: 'Criatividade',
    title: 'Soluções Inesperadas',
    subtitle: 'Pensar fora da caixa é meu padrão',
    description: [
      'Uso criatividade para resolver desafios técnicos e estratégicos.',
      'Combinar tecnologia com imaginação é o que me move.',
      'Criar é conectar o que ninguém havia conectado ainda.',
    ],
  },
]

const words = [
    {
      text: "Desenvolvedor",
    },
    {
      text: "FullStack.",
      className: "text-blue-500",
    },
  ];

export default function Home() {
  return (
    <>
      <div className="relative px-4 md:px-16 h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row h-full">
          
          <div className="flex flex-col justify-center items-center md:w-1/3">
            <p className="text-xs md:text-sm text-gray-300 italic mb-2 text-center max-w-[16rem] md:max-w-[24rem]">
              Transformando ideias em experiências digitais criativas e funcionais.
            </p>
            <TypewriterEffectSmooth words={words}/>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Thiago Lopes
            </h1>
            <p className="text-lg md:text-xl text-white max-w-[16rem] md:max-w-[24rem] text-center">
              Estudante de C&T na UFRN. Desenvolvo interfaces modernas e funcionais com React e React Native, aliando design, performance e usabilidade.
            </p>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href="https://github.com/thiagoclopes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <Github color="white" size={32} />
              </a>
              <a
                href="https:www.linkedin.com/in/thiago-c-lopes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <Linkedin color="white" size={32} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-1/3 overflow-hidden">
            <img
            src="https://collective-gold-clownfish.myfilebase.com/ipfs/QmUc4qH6wBXTL9d31qZ7TC3FyT9geSJ3sejE6enLt28NDq"
              className="max-h-full max-w-full object-contain"
              alt="Thiago Lopes"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-1/3 p-4 bg-black/70 overflow-hidden">
            <h2 className="text-white text-3xl mb-4">Keywords</h2>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {items.map((item, idx) => (
                <MorphingDialogItem key={idx} {...item} />
              ))}
            </div>
            
          </div>
        </div>

        <div className="absolute bottom-4 left-[25%] animate-bounce text-white text-3xl z-50">
          <span>↓</span>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-3xl z-50">
          <span>↓</span>
        </div>
        <div className="absolute bottom-4 left-[75%] animate-bounce text-white text-3xl z-50">
          <span>↓</span>
        </div>
      

      </div>
    </>
  );
}