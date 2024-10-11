import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import CommandBar from '@/components/common/command-bar'

export const metadata: Metadata = {
  title: 'Thiago Marim',
  description:
    'Portfolio pessoal de Thiago Soares Marim. Atualmente estou em busca da minha primeira oportunidade como desenvolvedor Front-end.',
  keywords: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Portfolio',
    'Thiago Soares Marim',
    'Tailwind',
  ],
  authors: [{ name: 'Thiago Soares Marim' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="antialiased !scroll-smooth">
      <body className={GeistSans.className}>
        <CommandBar>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </CommandBar>
      </body>
    </html>
  )
}
