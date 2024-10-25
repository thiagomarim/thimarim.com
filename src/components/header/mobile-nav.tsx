import { motion } from 'framer-motion'
import { NavItem } from './nav-item'
import { CommandButton } from './command-bar-button'
import LanguageToggle from '../common/language-toggle'

interface MobileNavProps {
  pages: Array<{ name: string; href: string }>
  onClose: () => void
}

export function MobileNav({ pages, onClose }: MobileNavProps) {
  const navVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
  }

  const itemVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 right-0 top-14 z-50 flex flex-col items-center justify-center gap-4 border-b-[1px] border-border bg-background p-4 text-center"
    >
      {pages.map((page, index) => (
        <motion.div key={page.name} variants={itemVariants} custom={index}>
          <NavItem href={page.href} name={page.name} mobile onClick={onClose} />
        </motion.div>
      ))}

      <motion.aside
        variants={itemVariants}
        custom={pages.length}
        className="mt-2 flex items-center gap-2"
      >
        <LanguageToggle />
        <CommandButton />
      </motion.aside>
    </motion.nav>
  )
}
