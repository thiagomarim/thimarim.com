import Image from 'next/image'
import { ProjectsListProps } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

interface AllProjectsCardProps {
  project: ProjectsListProps
}

export default function AllProjectsCard({ project }: AllProjectsCardProps) {
  return (
    <div className="rounded-lg border border-border bg-background">
      <div className="flex flex-col gap-4 px-4 py-3" key={project.name}>
        <Image
          src={project.img}
          alt={`Imagem do projeto ${project.name}`}
          unoptimized
          width={340}
          height={174}
          className="w-full rounded-t-lg xl:w-[340px]"
        />
        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-gray-50">{project.name}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-secondary">
            {project.desc}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {project.techs.map((tech) => (
              <Badge
                className="bg-terceary font-light text-primary hover:bg-terceary/80"
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-6">
            <Button variant={'link'} size={'sm'}>
              <a
                href={project.live}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar projeto <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant={'link'} size={'sm'}>
              <a
                href={project.repo}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver código <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
