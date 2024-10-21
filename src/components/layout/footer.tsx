export default function Footer() {
  return (
    <footer className="container mb-6 mt-20 flex flex-wrap items-center justify-center gap-4 text-[15px] sm:justify-between">
      <span className="text-secondary">©2024 Thiago Soares Marim</span>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/thiagomarim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary transition-colors hover:text-gray-50"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-marim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary transition-colors hover:text-gray-50"
        >
          linkedin
        </a>
        <a
          href="mailto:thiago.marim2005@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary transition-colors hover:text-gray-50"
        >
          email
        </a>
      </div>
    </footer>
  )
}
