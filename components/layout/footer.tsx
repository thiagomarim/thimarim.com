export default function Footer() {
  return (
    <footer className="container flex flex-wrap gap-4 items-center justify-center sm:justify-between mt-6 mb-6 sm:items-start sm:text-start text-center">
      <span className="text-paragraph">©2024 Thiago Soares Marim</span>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/thiagomarim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paragraph hover:text-gray-50 transition-colors"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-marim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paragraph hover:text-gray-50 transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:thiago.marim2005@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-paragraph hover:text-gray-50 transition-colors"
        >
          email
        </a>
      </div>
    </footer>
  )
}
