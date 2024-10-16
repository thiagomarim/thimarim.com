import TitleSection from '@/components/layout/title-section'
import Image from 'next/image'
import apple from '@/public/images/apple.jpg'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  return (
    <section>
      <TitleSection
        title="Aqui estao os meus melhores projetos já desenvolvidos."
        sizes="lg"
        subtitle="Conheça alguns dos meus melhores projetos desenvolvidos, que refletem meu compromisso com a criação de soluções eficientes e inovadoras. Cada projeto foi construído com atenção aos detalhes, utilizando as mais modernas tecnologias e práticas de desenvolvimento, com o objetivo de entregar a melhor experiência para os usuários."
      />

      <TitleSection title="Projetos em destaque" sizes="sm" />
      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 sm:gap-12 lg:flex-nowrap lg:gap-24">
        <Image
          src={apple}
          alt="Imagem do projeto Apple"
          width={1920}
          height={1080}
          className="max-w-full rounded-xl lg:max-w-[620px]"
        />
        <div className="flex max-w-full flex-col gap-4 text-secondary lg:max-w-[460px]">
          <h4 className="text-2xl font-semibold text-primary">Project Name</h4>
          <span>Projeto pessoal</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            veritatis perferendis et cum, magnam optio nesciunt voluptatem. Vero
            quam non ipsam cum, aperiam cupiditate, odit animi voluptatibus
            dolores aliquid sit?
          </p>
          <div className="flex items-center gap-4">
            <Badge className="text-background">Next.js</Badge>
            <Badge className="text-background">Next.js</Badge>
            <Badge className="text-background">Next.js</Badge>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 text-primary hover:text-primary/80 hover:transition-colors"
            >
              Visitar projeto <ArrowUpRight size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 text-primary hover:text-primary/80 hover:transition-colors"
            >
              Ver código <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
