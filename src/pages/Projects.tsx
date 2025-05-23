import { List, Orbit } from "lucide-react";
import InfiniteMenu from "../animations/InfiniteMenu";
import { useState } from "react";
import CardDemo from "../components/ui/card-demo-1";

export default function Projects() {

  const [selected, setSelected] = useState<"orbit" | "list">("orbit");

  const items = [
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmeevejUp6tCCkDtemsPPLxNnRt1gTJPTTaxyAB5if4Mhg',
      hoverGif: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmQuFkwzxHRhSV4F9pVWfpevFwTDoqrpbevwmAfagUiogt', 
      link: 'https://github.com/thiagoclopes/campusEats.git',
      title: 'CampusEats',
      description: 'Aplicativo de comida para a UFRN'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmbYkvzPVrzPAaLsvq5B2m5vm5iFwJ4FnTRz8pyJbsZAwp',
      hoverGif: 'https://cdn.prod.website-files.com/65d163ce6ca432aa06f93e10/65d1668b3cad5a50b3566d17_5f7ba1877c0076e9c5180805_5d5def15766201938bf56684_1_qAzDPU61Hi4MYGHiUlQSOw.gif', 
      link: 'https://google.com/',
      title: 'Guia do Atleta',
      description: 'Site destinado à atletas de alta performance com treinos e dietas gerados por IA'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmYfDYHbhHheRVHLhqKEqN9ZJqasKGNHatf4Y6VVBmUQ3a',
      hoverGif: 'https://cdn.prod.website-files.com/65d163ce6ca432aa06f93e10/65d1668b3cad5a50b3566d17_5f7ba1877c0076e9c5180805_5d5def15766201938bf56684_1_qAzDPU61Hi4MYGHiUlQSOw.gif', 
      link: 'https://google.com/',
      title: 'GBookPDF',
      description: 'Aplicação web para aluguel de livros digitais'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmVXULLthjihLDCu8rSt6FDoAP8YRLSQeqHFmDnYFeZgHh',
      hoverGif: 'https://cdn.prod.website-files.com/65d163ce6ca432aa06f93e10/65d1668b3cad5a50b3566d17_5f7ba1877c0076e9c5180805_5d5def15766201938bf56684_1_qAzDPU61Hi4MYGHiUlQSOw.gif', 
      link: 'https://google.com/',
      title: 'InovascGAME',
      description: 'Jogo desenvolvido para ensino de primeiros socorros'
    }
  ];
  
    return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row w-full justify-between mb-4 p-6 px-4 md:px-44">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-black">
          Meus projetos
        </h1>

        <div className="flex flex-row bg-white/20 rounded-4xl p-2 gap-4 shadow-md">
          <button
            onClick={() => setSelected("orbit")}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              selected === "orbit" ? "bg-purple-100" : "hover:bg-gray-200"
            }`}
          >
            <Orbit color={selected === "orbit" ? "blue" : "gray"} size={48} />
          </button>

          <button
            onClick={() => setSelected("list")}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              selected === "list" ? "bg-purple-100" : "hover:bg-gray-200"
            }`}
          >
            <List color={selected === "list" ? "blue" : "gray"} size={48} />
          </button>
        </div>
      </div>

      {selected === "orbit" ? (
					<div style={{ height: '600px', position: 'relative' }} className=" mb-8">
            <InfiniteMenu items={items}/>
          </div>
				) : (
					<div className="w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{items.map((item, i) => (
              <CardDemo 
                key={i} 
                image={item.image}
                hoverGif={item.hoverGif}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
					</div>
				)}
    
    </div>
  );
}