import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ProjectsList } from "../data/projects";
import { SectionTitle } from "../components/ui/section-title";
import AllProjectsCard from "../components/pages/all-projects/all-projects-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos // Thiago Marim",
  description: "Desenvolvedor front-end",
};

export default function AllProjects() {
  return (
    <main className="container">
      <section className="mb-12 mt-32 sm:mb-40">
        <div className="flex flex-col gap-2">
          <Link href="/" className="w-min">
            <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
              <HiArrowNarrowLeft size={18} /> Voltar
            </span>
          </Link>
          <div>
            <SectionTitle title="Todos projetos" />
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
