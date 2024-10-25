import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavItemProps {
  href: string
  name: string
  mobile?: boolean
  onClick?: () => void
}

export function NavItem({ href, name, mobile, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'text-sm font-medium uppercase text-secondary hover:text-primary hover:transition-colors',
          pathname === href &&
            'text-primary transition-colors after:opacity-100 hover:text-[#f2f2f2]',
        )}
      >
        {name}
      </Link>
    )
  }

  return (
    <li>
      <Link
        href={href}
        className="relative border-0 hover:opacity-100 focus:opacity-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.span
          className={cn(
            "inline-block cursor-pointer px-5 py-3 text-xs font-medium uppercase tracking-[1.2px] text-secondary no-underline transition-colors after:absolute after:left-0 after:right-0 after:top-[22px] after:mx-auto after:h-[1px] after:w-[20px] after:bg-primary after:opacity-0 after:content-[''] hover:text-primary",
            pathname === href &&
              'text-primary transition-colors after:opacity-100 hover:text-[#f2f2f2]',
          )}
        >
          {hovered && (
            <motion.span
              layoutId="nav"
              transition={{ type: 'tween', duration: 0.4 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-[10px] left-0 right-0 z-[-1] rounded-lg bg-terceary p-5"
            />
          )}
          {name}
        </motion.span>
      </Link>
    </li>
  )
}
