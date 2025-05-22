export default function footer() {
    return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/seu-usuario" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/seu-perfil" className="hover:underline">LinkedIn</a>
        <a href="mailto:seu-email@exemplo.com" className="hover:underline">Email</a>
      </div>
    </footer>
  );
}