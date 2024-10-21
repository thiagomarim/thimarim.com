import TitleSection from '@/components/layout/title-section'
import { ChevronRight } from 'lucide-react'
import { ProjectsListProps } from '@/data/projects'
import AnimatedSection from '@/components/common/animated-section'
import { useTranslations } from 'next-intl'
import ProjectCard from '@/components/common/project-card'
import { Link } from '@/i18n/routing'
import LetsConnect from '@/components/layout/lets-connect'

interface ProjectsSectionProps {
  projectList: ProjectsListProps[]
}

export default function ProjectsSection({ projectList }: ProjectsSectionProps) {
  const t = useTranslations('pages.projects')

  return (
    <AnimatedSection>
      <TitleSection
        title={t('intro.title')}
        size="lg"
        subtitle={t('intro.description')}
      />
      <div className="flex flex-wrap items-end justify-between sm:flex-nowrap">
        <TitleSection title={t('featured.title')} size="sm" />
        <Link
          href={'/projects/all'}
          className="mt-2 flex max-w-max items-center gap-2 text-[15px] text-primary hover:underline hover:underline-offset-4 sm:mt-0"
        >
          {t('featured.seeAll')} <ChevronRight size={16} />
        </Link>
      </div>

      <div className="flex flex-col gap-6 sm:gap-16">
        {projectList.slice(0, 4).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <Link
        href={'/projects/all'}
        className="mt-12 flex max-w-max items-center gap-2 text-[15px] text-primary hover:underline hover:underline-offset-4"
      >
        {t('featured.seeAll')} <ChevronRight size={16} />
      </Link>
      <LetsConnect />
    </AnimatedSection>
  )
}
