import { MorphingDialogItem } from '../components/morphingDialogItem';
import inovacaoImage from '../assets/inovacao.png'
import usabilidadeImage from '../assets/usabilidade.png'
import agilidadeImage from '../assets/agilidade.png'
import conexaoImage from '../assets/conexao.png'
import eficienciaImage from '../assets/eficiencia.png'
import colaboracaoImage from '../assets/colaboracao.png'
import criatividadeImage from '../assets/criatividade.png'
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { Download, Github, Linkedin } from 'lucide-react';
import { RainbowButton } from '../components/magicui/rainbow-button';
import { ShimmerButton } from '../components/magicui/shimmer-button';

const items = [
  {
    image: inovacaoImage,
    alt: 'Ícone representando inovação',
    category: 'Inovação',
    title: 'Inovação com Propósito',
    subtitle: 'Transformando ideias em impacto real',
    description: [
      'Busco constantemente novas abordagens e tecnologias para resolver desafios complexos.',
      'Minha expertise está em transformar problemas em soluções originais, que se destacam e abrem novos caminhos.',
      'Acredito que inovar é explorar o desconhecido e construir o que ainda não existe.'
    ],
  },
  {
    image: usabilidadeImage,
    alt: 'Ícone representando usabilidade',
    category: 'Usabilidade',
    title: 'Experiências que Encantam',
    subtitle: 'Design centrado no usuário',
    description: [ 'Priorizo interfaces simples, intuitivas e acessíveis, onde cada detalhe é pensado para uma jornada fluida.', 'Para mim, usabilidade é o respeito pelo tempo e atenção do usuário, entregando experiências memoráveis.' ]
  },
  {
    image: agilidadeImage,
    alt: 'Ícone representando agilidade',
    category: 'Agilidade',
    title: 'Da Ideia ao MVP',
    subtitle: 'Velocidade com propósito',
    description: [ 'Transformo conceitos em protótipos e MVPs com velocidade, validando hipóteses rapidamente.', 'Meu foco é no aprendizado ágil e na entrega de valor desde o primeiro momento, evoluindo de forma contínua.' ]
  },
  {
    image: conexaoImage,
    alt: 'Ícone representando conexão',
    category: 'Impacto & Comunidade',
    title: 'Tecnologia com Propósito',
    subtitle: 'Conectando código a causas significativas',
    description: [
    'Busco projetos que gerem valor real e positivo para a sociedade.',
    'Acredito no poder da tecnologia para impulsionar a inovação e o impacto em comunidades, e me engajo ativamente nisso.',
    'Construo pontes entre a tecnologia e as necessidades do mundo real.'
  ],
  },
  {
    image: eficienciaImage,
    alt: 'Ícone representando eficiência',
    category: 'Eficiência',
    title: 'Código com Qualidade',
    subtitle: 'Performance e manutenção de ponta a ponta',
    description: [ 'Escrevo código limpo, escalável e performático, priorizando boas práticas e automações inteligentes.', 'Meu objetivo é entregar soluções eficientes, que otimizam recursos e minimizam retrabalhos, garantindo manutenibilidade e performance.' ]
  },
  {
    image: colaboracaoImage,
    alt: 'Ícone representando colaboração',
    category: 'Colaboração',
    title: 'Construindo Juntos',
    subtitle: 'Resultados que nascem da soma',
    description: [ 'Acredito que os projetos de maior impacto nascem da troca de ideias e da soma de habilidades.', 'Valorizo a comunicação clara, escuta ativa e o aprendizado mútuo, porque a colaboração é o verdadeiro motor da inovação.' ]
  },
  {
    image: criatividadeImage,
    alt: 'Ícone representando criatividade',
    category: 'Criatividade',
    title: 'Soluções Inesperadas',
    subtitle: 'Pensar fora da caixa é meu padrão',
    description: [ 'Aplico a criatividade para resolver desafios técnicos e estratégicos, buscando sempre abordagens inovadoras.', 'Minha motivação é combinar tecnologia com imaginação para entregar soluções verdadeiramente diferenciadas e eficazes.' ]
  },
]

const words = [
    {
      text: "Desenvolvedor",
    },
    {
      text: "FullStack.",
      className: "text-blue-400",
    },
  ];

export default function Home() {
  return (
    <>
      <div className="relative px-4 md:px-16 h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row h-full">
          
          <div className="relative z-20 not-even:flex flex-col pl-10 md:pl-20 lg:pl-28 pt-10 md:pt-20 lg:pt-28">
            <TypewriterEffectSmooth words={words}/>
            <p className="text-sm md:text-xl text-gray-300 italic mb-10">
              Transformando ideias em experiências digitais criativas e funcionais.
            </p>
            <p className="text-lg md:text-xl text-white max-w-[16rem] md:max-w-[24rem] text-justify">
              Estudante de C&T na UFRN. Desenvolvo interfaces modernas e funcionais com React e React Native, aliando design, performance e usabilidade.
            </p>
            <div className="flex flex-row gap-4 mt-4 items-center justify-center max-w-[16rem] md:max-w-[24rem]">
              <a
                href="https://github.com/thiagoclopes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <Github size={32} className='text-blue-400'/>
              </a>
              <a
                href="https:www.linkedin.com/in/thiago-c-lopes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <Linkedin className='text-blue-400' size={32} />
              </a>
            </div>
            <a
              href="/Curriculo - Thiago Lopes.pdf"
              download="Thiago-Lopes-Curriculo.pdf"
              className="max-w-[16rem] md:max-w-[24rem] block"
            >
              <ShimmerButton
                shimmerColor="#0D20D4"
                shimmerSize="0.1em"
                className="w-full mt-8"
              >
                <Download size={20} className="mr-2" />
                Currículo
              </ShimmerButton>
            </a>
          </div>

          <div className="absolute bottom-0 right-0">
            <img
              src="https://collective-gold-clownfish.myfilebase.com/ipfs/QmPn1N59jTpQbEEANvhbYibzmK4EJkErBuVQVnQcTktNjm"
              className="object-contain transform -scale-x-100 h-auto w-[10rem] md:w-[20rem] lg:w-[30rem] xl:w-[40rem] 2xl:w-[50rem]"
              alt="Thiago Lopes"
            />
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
