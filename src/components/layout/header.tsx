'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { AlignJustify, Command, X } from 'lucide-react'
import { useKBar } from 'kbar'
import { useState } from 'react'

const pages = ['About', 'Projects', 'Stack', 'Contact']

export default function Header() {
  const [hovered, setHovered] = useState<string>('')
  const { query } = useKBar()
  const [showMobile, setShowMobile] = useState(false)

  const pathname = usePathname()

  return (
    <AnimatePresence>
      <header className="container sticky top-0 z-50 flex w-full flex-wrap items-center justify-between py-4 transition-colors md:flex-nowrap md:justify-center">
        <Link href="/" passHref className="w-max">
          <span className="text-xl font-semibold tracking-wider">thimarim</span>
        </Link>

        <nav className="lg: hidden w-full items-center justify-center md:flex">
          <ul className="relative flex list-none items-center">
            {pages.map((page) => {
              const path = `/${page.toLowerCase()}`
              const isHovered = hovered === page

              return (
                <li key={page}>
                  <Link href={path} passHref legacyBehavior>
                    <a className="relative border-0 hover:opacity-100 focus:opacity-100">
                      <motion.span
                        onMouseEnter={() => setHovered(page)}
                        onMouseLeave={() => setHovered('')}
                        className={cn(
                          "text-secondary after:bg-primary hover:text-primary inline-block cursor-pointer px-5 py-3 text-xs font-medium uppercase tracking-[1.2px] no-underline transition-colors after:absolute after:left-0 after:right-0 after:top-[22px] after:mx-auto after:h-[1px] after:w-[20px] after:opacity-0 after:content-['']",
                          pathname === path &&
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
                            className="bg-terceary absolute -top-[10px] left-0 right-0 z-[-1] rounded-lg p-5"
                          />
                        )}
                        {page}
                      </motion.span>
                    </a>
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
          <nav className="mt-4 flex basis-full flex-col items-center justify-center gap-4 text-center">
            {pages.map((page) => (
              <Link
                href={page.toLowerCase()}
                key={page}
                className={cn(
                  'text-secondary hover:text-primary text-sm font-medium uppercase hover:transition-colors',
                  pathname === page.toLowerCase() && 'text-red-500',
                )}
              >
                {page}
              </Link>
            ))}

            <aside className="mt-2 h-[34px]">
              <button
                className="hover:bg-terceary text-primary border-border h-[34px] cursor-pointer rounded-lg border px-2 hover:transition-colors"
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

        <aside className="hidden h-[34px] md:block">
          <button
            className="hover:bg-terceary text-primary border-border h-[34px] cursor-pointer rounded-lg border px-2 hover:transition-colors"
            type="button"
            aria-label="Command"
            onClick={query.toggle}
          >
            <kbd className="ri-command-line text-2xl tracking-[32px]">
              <Command size={20} />
            </kbd>
          </button>
        </aside>
      </header>
    </AnimatePresence>
  )
}
