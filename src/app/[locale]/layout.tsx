import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { cn } from '@/lib/utils'
import CommandBar from '@/components/common/command-bar'
import Footer from '@/components/layout/footer'
import Header from '@/components/header'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Thiago Marim',
  description:
    'Portfolio e blog pessoal de Thiago Marim - Desenvolvedor Front-end e Entusiasta de Tecnologia',
  generator: 'Next.js',
  applicationName: 'Thiago Marim Portfolio',
  keywords: [
    'Thiago Marim',
    'Desenvolvedor',
    'front-end',
    'next.js',
    'portfolio',
    'portfolio pessoal',
    'blog',
    'tecnologia',
  ],
  authors: [{ name: 'Thiago Marim', url: 'https://thiagomarim.com' }],
  creator: 'Thiago Marim',
  publisher: 'Thiago Marim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <CommandBar>
        <body
          className={cn(
            'bg-background text-primary antialiased',
            GeistSans.className,
          )}
        >
          <NextIntlClientProvider messages={messages}>
            <div className="relative z-0 flex min-h-screen flex-col">
              <Header />
              <main className="container flex flex-1 overflow-hidden">
                {children}
              </main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </CommandBar>
    </html>
  )
}
