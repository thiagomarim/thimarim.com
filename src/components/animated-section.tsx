'use client'

import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
