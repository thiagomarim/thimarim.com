import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProjectCard from "./project-card";
import { ProjectsList } from "@/app/data/projects";
import { SectionTitle } from "@/app/components/ui/section-title";

export default function FeaturedProjects() {
  return (
    <section className="container my-12 sm:my-40">
      <div className="flex items-end justify-between mb-10 sm:mb-16 flex-wrap">
        <div>
          <SectionTitle
            title="Projetos em Destaque"
            subtitle="Aqui estão os melhores projetos que eu já desenvolvi"
          />
        </div>
        <Link href="/all-projects" className="mt-6 sm:mb-0 ">
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
            Ver todos <HiArrowNarrowRight size={18} />
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-12 sm:gap-16">
        {ProjectsList.slice(0, 2).map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <div className="w-max mt-12 sm:mt-16">
        <Link href="/all-projects">
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
            Ver todos <HiArrowNarrowRight size={18} />
          </span>
        </Link>
      </div>
    </section>
  );
}
