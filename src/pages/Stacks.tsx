import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import tailwindIcon from "../assets/tailwind.svg";
import nodeIcon from "../assets/node.svg";
import gitIcon from "../assets/git.svg";

const stacks = [
	{ imgSrc: reactIcon, name: "React" },
	{ imgSrc: typescriptIcon, name: "TypeScript" },
	{ imgSrc: tailwindIcon, name: "Tailwind CSS" },
	{ imgSrc: nodeIcon, name: "Node.js" },
	{ imgSrc: gitIcon, name: "Git" },
];

export default function Stacks() {
    return (
        <div className="flex items-center justify-center w-full bg-white/10">
           <InfiniteMovingCards
            items={stacks}
            direction="right"
            speed="slow"
            pauseOnHover={false}
        />
        </div>
    )
}
