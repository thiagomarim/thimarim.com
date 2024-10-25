import AnimatedSection from '@/components/animated-section'
import AllProjectsCard from '@/components/pages/all-projects/all-project-card'
import LetsConnect from '@/components/lets-connect'
import TitleSection from '@/components/title-section'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ProjectsList } from '@/data/projects'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function AllProjectsSection() {
  const t = useTranslations('pages.allProjects')

  return (
    <AnimatedSection>
      <div className="flex flex-col gap-2">
        <div>
          <TitleSection
            title={t('title')}
            size="lg"
            subtitle={t('description')}
          />
        </div>

        <Breadcrumb className="mt-8 text-secondary">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link
                href="/"
                className="hover:text-primary hover:transition-colors"
              >
                {t('breadcrumb.home')}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link
                href="/projects"
                className="hover:text-primary hover:transition-colors"
              >
                {t('breadcrumb.projects')}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">
                {t('breadcrumb.allProjects')}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {ProjectsList.map((project) => (
          <AllProjectsCard key={project.name} project={project} />
        ))}
      </div>
      <LetsConnect />
    </AnimatedSection>
  )
}
