import { SectionTitle } from '@/components/ui/section-title'
import Image from 'next/image'

const techList = [
  'HTML,',
  'CSS,',
  'JavaScript,',
  'TypeScript,',
  'Tailwind CSS,',
  'React,',
  'Next.js,',
  'Git,',
  'Github.',
]

export default function AboutMe() {
  return (
    <section className="container flex flex-wrap items-center gap-10 mb-12 sm:gap-20 lg:flex-nowrap sm:mb-40">
      <div className="flex flex-col gap-4">
        <SectionTitle title="Sobre mim" subtitle="Um pouco mais sobre mim" />
        <p className="leading-8 text-paragraph">
          Meu nome é Thiago Soares Marim, tenho 19 anos e moro em São Paulo.
          Atualmente atuo como Desenvolvedor front-end na{' '}
          <a
            href="https://shakersagencia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-gray-300 transition-colors"
          >
            Shakers Agência & Consultoria
          </a>{' '}
          e estou cursando Análise e Desenvolvimento de Sistemas na UNINOVE.
        </p>
        <p className="leading-8 text-paragraph">
          Minha paixão é criar e desenvolver sites com interfaces bonitas e
          atraentes, com foco na experiência do usuário. Possuo conhecimentos em{' '}
          {techList.map((tech) => (
            <span key={tech.toLowerCase()} className="text-gray-50">
              {tech}{' '}
            </span>
          ))}
        </p>
      </div>
      <Image
        src="/about/about.svg"
        width={393}
        height={300}
        alt="Foto de perfil do Thiago Marim"
        className="rounded-lg"
      />
    </section>
  )
}
