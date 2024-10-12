'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <motion.section
      className="container flex flex-col gap-4 items-center sm:items-start sm:text-start text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl leading-none sm:leading-[50px] font-semibold">
        Thiago Marim
      </h1>
      <p className="text-paragraph max-w-[572px] text-lg leading-8">
        Olá, me chamo Thiago Marim tenho 19 anos e sou desenvolvedor front-end
        pela{' '}
        <a
          href="https://shakersagencia.com.br/"
          target="_blank"
          className="text-title transition-colors"
        >
          Shakers Agencia
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-6 mt-2">
        <Button>
          <Link href="/about" className="flex items-center gap-2">
            Ler mais sobre mim
          </Link>
        </Button>
        <div className="flex items-center">
          <a
            href="https://github.com/thiagomarim"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-buttonSecondary transition-colors rounded-lg"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-marim/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-buttonSecondary transition-colors rounded-lg"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
