import TitleSection from '@/components/layout/title-section'
import { ArrowRight } from 'lucide-react'
import { ProjectsListProps } from '@/data/projects'
import AnimatedSection from '@/components/common/animated-section'
import { useTranslations } from 'next-intl'
import ProjectCard from '@/components/common/project-card'
import { Link } from '@/i18n/routing'

interface ProjectsSectionProps {
  projectList: ProjectsListProps[]
}

export default function ProjectsSection({ projectList }: ProjectsSectionProps) {
  const t = useTranslations('pages.projects')

  return (
    <AnimatedSection>
      <TitleSection
        title={t('intro.title')}
        sizes="lg"
        subtitle={t('intro.description')}
      />

      <TitleSection title={t('featured.title')} sizes="sm" />
      <div className="flex flex-col gap-6 sm:gap-16">
        {projectList.slice(0, 4).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <Link
        href={'/projects/all'}
        className="mt-12 flex items-center gap-2 text-[15px] text-primary hover:text-primary/80 hover:transition-colors"
      >
        Ver todos <ArrowRight size={16} />
      </Link>
    </AnimatedSection>
  )
}
