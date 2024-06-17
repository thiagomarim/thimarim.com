export default function Footer() {
  return (
    <footer className="container flex items-center justify-between m-6 ">
      <span className="text-zinc-400">©2024 Thiago Soares Marim</span>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/thiagomarim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-gray-100 transition-colors"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-marim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-gray-100 transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:thiago.marim2005@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-gray-100 transition-colors"
        >
          email
        </a>
      </div>
    </footer>
  );
}
