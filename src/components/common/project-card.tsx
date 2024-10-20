import { ProjectsListProps } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { getTranslations } from 'next-intl/server'

interface ProjectCardProps {
  project: ProjectsListProps
}

export default async function ProjectCard({ project }: ProjectCardProps) {
  const description = (await getTranslations('config.projects'))(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `${project.id}.description` as any,
  )

  return (
    <div
      className="group mt-8 flex flex-wrap items-center justify-between gap-6 sm:gap-12 lg:flex-nowrap lg:gap-24"
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
        <h4 className="text-2xl font-semibold text-primary">{project.name}</h4>

        <p>{description}</p>
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
            Visit Project <ArrowUpRight size={16} />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-primary hover:text-primary/80 hover:transition-colors"
          >
            View Code <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
