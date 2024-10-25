'use client'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { AlignJustify, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import LanguageToggle from '../common/language-toggle'
import { CommandButton } from './command-bar-button'
import { MobileNav } from './mobile-nav'
import { NavItem } from './nav-item'

export default function Header() {
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

          <nav className="hidden w-full items-center justify-center md:flex">
            <ul className="relative flex list-none items-center">
              {pages.map((page) => (
                <NavItem key={page.name} href={page.href} name={page.name} />
              ))}
            </ul>
          </nav>

          <button
            className="block md:hidden"
            onClick={() => setShowMobile(!showMobile)}
          >
            {showMobile ? <X size={20} /> : <AlignJustify size={20} />}
          </button>

          <AnimatePresence>
            {showMobile && (
              <MobileNav pages={pages} onClose={() => setShowMobile(false)} />
            )}
          </AnimatePresence>

          <aside className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <CommandButton />
          </aside>
        </div>
      </header>
    </AnimatePresence>
  )
}
