
export default function Navbar() {
  return (
    <nav className="p-8 shadow-md w-full">
      <div className="flex flex-row justify-between px-16">
        <p className="text-white font-bold text-xl">
          Thiago
        </p>
        <ul className="flex space-x-9 justify-end text-white">
          <li>
            <a
              href="#home"
              className="hover:underline focus:font-bold focus:border-b-2 focus:border-blue-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline focus:font-bold focus:border-b-2 focus:border-blue-600"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline focus:font-bold focus:border-b-2 focus:border-blue-600"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline focus:font-bold focus:border-b-2 focus:border-blue-600"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}