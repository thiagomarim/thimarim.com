'use client'

import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { AlignJustify, Command, X } from 'lucide-react'
import { useKBar } from 'kbar'
import { useEffect, useState } from 'react'
import LanguageToggle from '../common/language-toggle'
import { useTranslations } from 'next-intl'

export default function Header() {
  const [hovered, setHovered] = useState<string>('')
  const [showMobile, setShowMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const t = useTranslations('navItems')

  const pages = [
    {
      name: `${t('about')}`,
      href: '/about',
    },
    {
      name: `${t('projects')}`,
      href: '/projects',
    },
    {
      name: `${t('stack')}`,
      href: '/stack',
    },
    {
      name: `${t('contact')}`,
      href: '/contact',
    },
  ]

  const { query } = useKBar()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      <header
        className={cn(
          'sticky top-0 z-50 flex w-full flex-wrap items-center justify-between border-b-[1px] border-transparent bg-background bg-background/95 py-4 backdrop-blur transition-colors supports-[backdrop-filter]:bg-background/90 md:flex-nowrap md:justify-center',
          isScrolled && 'border-border',
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" passHref className="w-max">
            <span className="text-xl font-semibold tracking-wider">
              thimarim
            </span>
          </Link>

          <nav className="lg: hidden w-full items-center justify-center md:flex">
            <ul className="relative flex list-none items-center">
              {pages.map((page) => {
                const isHovered = hovered === page.href

                return (
                  <li key={page.name}>
                    <Link
                      href={page.href}
                      className="relative border-0 hover:opacity-100 focus:opacity-100"
                      onMouseEnter={() => setHovered(page.href)}
                      onMouseLeave={() => setHovered('')}
                    >
                      <motion.span
                        className={cn(
                          "inline-block cursor-pointer px-5 py-3 text-xs font-medium uppercase tracking-[1.2px] text-secondary no-underline transition-colors after:absolute after:left-0 after:right-0 after:top-[22px] after:mx-auto after:h-[1px] after:w-[20px] after:bg-primary after:opacity-0 after:content-[''] hover:text-primary",
                          pathname === page.href &&
                            'text-primary transition-colors after:opacity-100 hover:text-[#f2f2f2]',
                        )}
                      >
                        {isHovered && (
                          <motion.span
                            layoutId="nav"
                            transition={{ type: 'tween', duration: 0.4 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-[10px] left-0 right-0 z-[-1] rounded-lg bg-terceary p-5"
                          />
                        )}
                        {page.name}
                      </motion.span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            className="block md:hidden"
            onClick={() => setShowMobile(!showMobile)}
          >
            {showMobile ? <X size={20} /> : <AlignJustify size={20} />}
          </button>

          {showMobile && (
            <nav className="fixed left-0 right-0 top-14 z-50 flex flex-col items-center justify-center gap-4 border-b-[1px] border-border bg-background p-4 text-center">
              {pages.map((page) => (
                <Link
                  href={page.href}
                  key={page.name}
                  className={cn(
                    'text-sm font-medium uppercase text-secondary hover:text-primary hover:transition-colors',
                    pathname === page.href && 'text-red-500',
                  )}
                >
                  {page.name}
                </Link>
              ))}

              <aside className="mt-2 h-[34px]">
                <button
                  className="h-[34px] cursor-pointer rounded-lg border border-border px-2 text-primary hover:bg-terceary hover:transition-colors"
                  type="button"
                  aria-label="Command"
                  onClick={query.toggle}
                >
                  <kbd className="ri-command-line text-2xl tracking-[32px]">
                    <Command size={20} />
                  </kbd>
                </button>
              </aside>
            </nav>
          )}

          <aside className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <button
              className="h-[34px] cursor-pointer rounded-lg border border-border px-2 text-primary hover:bg-terceary hover:transition-colors"
              type="button"
              aria-label="Command"
              onClick={query.toggle}
            >
              <kbd className="ri-command-line text-2xl tracking-[32px]">
                <Command size={20} />
              </kbd>
            </button>
          </aside>
        </div>
      </header>
    </AnimatePresence>
  )
}
