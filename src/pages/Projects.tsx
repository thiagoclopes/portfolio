import InfiniteMenu from "../animations/InfiniteMenu";

export default function Projects() {

  const items = [
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmeevejUp6tCCkDtemsPPLxNnRt1gTJPTTaxyAB5if4Mhg',
      link: 'https://google.com/',
      title: 'CampusEats',
      description: 'Aplicativo de comida para a UFRN'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmbYkvzPVrzPAaLsvq5B2m5vm5iFwJ4FnTRz8pyJbsZAwp',
      link: 'https://google.com/',
      title: 'Guia do Atleta',
      description: 'Site destinado à atletas de alta performance com treinos e dietas gerados por IA'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmYfDYHbhHheRVHLhqKEqN9ZJqasKGNHatf4Y6VVBmUQ3a',
      link: 'https://google.com/',
      title: 'GBookPDF',
      description: 'Aplicação web para aluguel de livros digitais'
    },
    {
      image: 'https://collective-gold-clownfish.myfilebase.com/ipfs/QmVXULLthjihLDCu8rSt6FDoAP8YRLSQeqHFmDnYFeZgHh',
      link: 'https://google.com/',
      title: 'InovascGAME',
      description: 'Jogo desenvolvido para ensino de primeiros socorros'
    }
  ];

    //ADICIONAR SELECT PARA MUDAR FORMA DE EXIBIÇÃO DOS PROJETOS PARA LISTA
    return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-amber-50 mb-4 bg-black">
        Meus projetos
      </h1>


      <div style={{ height: '700px', position: 'relative' }}>
        <InfiniteMenu items={items}/>
      </div>
    
    </>
  );
}