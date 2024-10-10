import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Contact from '@/components/layout/contact'
import CommandBar from '@/components/common/command-bar'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

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
      <body className={roboto.className}>
        <CommandBar>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Contact />
            <Footer />
          </div>
        </CommandBar>
      </body>
    </html>
  )
}
