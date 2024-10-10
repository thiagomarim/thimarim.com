'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useKBar } from 'kbar'
import { MdOutlineKeyboardCommandKey } from 'react-icons/md'

const pages = ['Projects']

export default function Header() {
  const [hovered, setHovered] = useState<string>('')
  const { query } = useKBar()

  const pathname = usePathname()

  return (
    <AnimatePresence>
      <header className="flex w-full items-center justify-center">
        <div className="flex items-center text-white text-[12px] justify-center container absolute top-0 z-30 py-4">
          <Link href="/" passHref className="w-max">
            <span className="text-xl font-medium tracking-wider">thimarim</span>
          </Link>

          <nav className="text-center flex-1 order-2 basis-full">
            <ul className="m-0 p-0 list-none inline-flex relative top-0">
              {pages.map((page) => {
                const path = `/${page.toLowerCase()}`
                const isHovered = hovered === page

                return (
                  <li key={page}>
                    <Link href={path} passHref legacyBehavior>
                      <a className="border-0 relative hover:opacity-100 focus:opacity-100">
                        <motion.span
                          onMouseEnter={() => setHovered(page)}
                          onMouseLeave={() => setHovered('')}
                          className={cn(
                            "text-paragraph cursor-pointer inline-block text-xs font-medium tracking-[1.2px] p-5 no-underline uppercase transition-colors hover:text-[#f2f2f2] after:content-[''] after:absolute after:top-[18px] after:left-0 after:right-0 after:h-[1px] after:w-[20px] after:bg-white after:opacity-0 after:mx-auto",
                            pathname === path &&
                              'text-title hover:text-[#f2f2f2] transition-colors after:opacity-100',
                          )}
                        >
                          {isHovered && (
                            <motion.span
                              layoutId="nav"
                              transition={{ type: 'tween', duration: 0.4 }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute -top-[13px] left-0 right-0 bg-buttonSecondary p-5 rounded-lg z-[-1]"
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

          <aside className="order-3">
            <button
              className="border-none rounded-lg text-white hover:bg-buttonSecondary hover:transition-colors cursor-pointer h-[34px] px-2"
              type="button"
              aria-label="Command"
              onClick={query.toggle}
            >
              <kbd className="text-2xl tracking-[32px] ri-command-line">
                <MdOutlineKeyboardCommandKey size={24} />
              </kbd>
            </button>
          </aside>
        </div>
      </header>
    </AnimatePresence>
  )
}
