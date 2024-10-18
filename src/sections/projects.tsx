'use client'

import TitleSection from '@/components/layout/title-section'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ProjectsListProps } from '@/data/projects'
import Link from 'next/link'

interface ProjectsSectionProps {
  projectList: ProjectsListProps[]
}

export default function ProjectsSection({ projectList }: ProjectsSectionProps) {
  return (
    <section>
      <TitleSection
        title="Aqui estao os meus melhores projetos já desenvolvidos."
        sizes="lg"
        subtitle="Conheça alguns dos meus melhores projetos desenvolvidos, que refletem meu compromisso com a criação de soluções eficientes e inovadoras. Cada projeto foi construído com atenção aos detalhes, utilizando as mais modernas tecnologias e práticas de desenvolvimento, com o objetivo de entregar a melhor experiência para os usuários."
      />

      <TitleSection title="Projetos em destaque" sizes="sm" />
      <div className="flex flex-col gap-6 sm:gap-16">
        {projectList.slice(0, 4).map((project) => (
          <div
            className="group mt-8 flex flex-wrap items-center justify-between gap-6 sm:gap-12 lg:flex-nowrap lg:gap-24"
            key={project.name}
            id="project"
          >
            <Image
              src={project.img}
              alt={`Imagem do ${project.name}`}
              width={1920}
              height={1080}
              priority
              className="aspect-video max-w-full rounded-xl shadow-2xl shadow-primary/10 group-even:order-none max-lg:!transform-none lg:max-w-[620px] lg:group-even:order-last"
            />
            <div className="flex max-w-full flex-col justify-start gap-4 text-start text-secondary lg:max-w-[460px] lg:justify-center lg:text-center">
              <h4 className="text-2xl font-semibold text-primary">
                {project.name}
              </h4>

              <p>{project.desc}</p>
              <div className="flex items-center justify-start gap-2 lg:justify-center">
                {project.techs.map((tech) => (
                  <Badge
                    className="bg-terceary font-light text-primary hover:bg-terceary/80"
                    key={tech}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-start gap-6 lg:justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 hover:transition-colors"
                >
                  Visitar projeto <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 hover:transition-colors"
                >
                  Ver código <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={'/projects/all'}
        className="mt-12 flex items-center gap-2 text-[15px] text-primary hover:text-primary/80 hover:transition-colors"
      >
        Ver todos <ArrowRight size={16} />
      </Link>
    </section>
  )
}
