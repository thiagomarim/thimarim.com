'use client'

import Career from '@/sections/career'
import { About as AboutProps } from '@/data/about'
import { motion } from 'framer-motion'

const techs = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Github',
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-5"
    >
      <section>
        <h1 className="text-5xl font-bold">Um pouco sobre mim</h1>
        <div className="flex justify-between mt-10 gap-6 flex-wrap md:flex-nowrap">
          <div className="min-w-[450px] min-h-[400px] bg-buttonSecondary rounded-xl" />
          <div className="flex flex-col gap-5 max-w-[620px]">
            <p className="text-base text-paragraph leading-8">
              Olá, meu nome é Thiago Marim tenho 19 anos e atualmente sou
              Desenvolvedor Front-end pela{' '}
              <a
                href="https://shakersagencia.com.br/"
                target="_blank"
                className="text-title transition-colors"
              >
                Shakers Agencia
              </a>
              .
            </p>
            <p className="text-base text-paragraph leading-8">
              Minha paixão é criar e desenvolver sites com interfaces bonitas e
              atraentes, com foco na experiência do usuário. Possuo
              conhecimentos em{' '}
              {techs.map((tech, i) => (
                <span key={tech}>
                  <span className="text-title transition-colors">{tech}</span>
                  <span className="text-paragraph">
                    {i === techs.length - 1 ? '.' : ', '}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <Career about={AboutProps} />
    </motion.div>
  )
}
