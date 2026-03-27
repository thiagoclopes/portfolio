import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'
import reactIcon from '../assets/react.svg'
import typescriptIcon from '../assets/typescript.svg'
import tailwindIcon from '../assets/tailwind.svg'
import nodeIcon from '../assets/node.svg'
import gitIcon from '../assets/git.svg'

const stacks = [
  { imgSrc: reactIcon, name: 'React' },
  { imgSrc: typescriptIcon, name: 'TypeScript' },
  { imgSrc: tailwindIcon, name: 'Tailwind CSS' },
  { imgSrc: nodeIcon, name: 'Node.js' },
  { imgSrc: gitIcon, name: 'Git' },
  { imgSrc: 'https://cdn.simpleicons.org/angular/DD0031', name: 'Angular' },
  { imgSrc: 'https://cdn.simpleicons.org/springboot', name: 'Spring Boot' },
]

export default function Stacks() {
  return (
    <div className="py-16 border-y border-white/5 bg-white/5">
      <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-8">
        Tecnologias que uso
      </p>
      <InfiniteMovingCards
        items={stacks}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  )
}
