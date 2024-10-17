import AllProjectsCard from '@/components/layout/all-project-card'
import TitleSection from '@/components/layout/title-section'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ProjectsList } from '@/data/projects'

export default function AllProjectsSection() {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <div>
          <TitleSection
            title="Todos projetos"
            sizes="lg"
            subtitle="Nesta seção, você encontrará uma seleção dos projetos nos quais trabalhei, abrangendo desde aplicações web interativas até soluções de desenvolvimento mais complexas. Cada projeto reflete meu compromisso em criar experiências digitais de qualidade e minha habilidade em transformar ideias em realidade através de tecnologias como HTML, CSS, JavaScript, TypeScript, React, Next.js e muito mais. Explore cada um deles para conhecer melhor meu processo de desenvolvimento e os resultados que posso oferecer."
          />
        </div>

        <Breadcrumb className="mt-8 text-secondary">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="hover:text-primary hover:transition-colors"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/projects"
                className="hover:text-primary hover:transition-colors"
              >
                Projetos
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary">
                Todos Projetos
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
    </section>
  )
}
