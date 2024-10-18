import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { cn } from '@/lib/utils'
import CommandBar from '@/components/common/command-bar'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <CommandBar>
        <body
          className={cn(
            'bg-background text-primary antialiased',
            GeistSans.className,
          )}
        >
          <div className="relative z-0 flex min-h-screen flex-col">
            <Header />
            <main className="container flex flex-1 overflow-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </CommandBar>
    </html>
  )
}
