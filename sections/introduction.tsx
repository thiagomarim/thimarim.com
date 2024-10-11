'use client'

import { Button } from '@/components/ui/button'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="w-full bg-intro-bg bg-no-repeat bg-left-top">
      <motion.div
        className="container flex flex-col gap-4 mb-[195px] lg:mb-[390px] mt-[161px] sm:mt-[323px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl leading-none sm:leading-[50px] font-semibold">
          Thiago Marim
        </h1>
        <p className="text-paragraph max-w-[572px] text-lg sm:text-xl leading-8">
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
          <div className="flex items-center gap-4 text-zinc-700">
            <a
              href="https://github.com/thiagomarim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-50 transition-colors"
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-marim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-50 transition-colors"
            >
              <TbBrandLinkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
