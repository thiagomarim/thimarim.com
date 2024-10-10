import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProjectCard from "./project-card";
import { ProjectsList } from "@/app/data/projects";
import { SectionTitle } from "@/app/components/ui/section-title";

export default function FeaturedProjects() {
  return (
    <section className="container my-12 sm:my-40">
      <div className="flex flex-wrap items-end justify-between mb-10 sm:mb-16">
        <div>
          <SectionTitle
            title="Projetos em Destaque"
            subtitle="Melhores projetos que eu já desenvolvi"
          />
        </div>
        <Link href="/projects" className="mt-6 sm:mb-0 ">
          <span className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
            Ver todos <HiArrowNarrowRight size={18} />
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-12 sm:gap-16">
        {ProjectsList.slice(0, 2).map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <div className="mt-12 w-max sm:mt-16">
        <Link href="/projects">
          <span className="flex items-center gap-2 text-sm hover:underline hover:underline-offset-4">
            Ver todos <HiArrowNarrowRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
}
