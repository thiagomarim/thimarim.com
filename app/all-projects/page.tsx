import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import AllProjectsCard from "../components/all-projects-card";
import { ProjectsList } from "../data/projects";
import { SectionTitle } from "../components/ui/section-title";

export default function AllProjects() {
  return (
    <main className="container mb-16 sm:mb-32">
      <section className="mt-40">
        <div className="flex flex-col gap-6">
          <Link href="/" className="w-min">
            <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
              <HiArrowNarrowLeft size={18} /> Voltar
            </span>
          </Link>
          <div>
            <SectionTitle
              title="Todos projetos"
              subtitle="Aqui estão todos os projetos que eu desenvolvi, fique à vontade para explora-los!"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] mt-12 gap-6">
          {ProjectsList.map((project) => (
            <AllProjectsCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
