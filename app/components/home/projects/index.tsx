import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProjectCard from "../../project-card";

export default function Projects() {
  return (
    <section>
      <div className="flex items-end justify-between mb-16 flex-wrap">
        <div>
          <h2 className="text-2xl font-semibold">Projetos em Destaques</h2>
          <p className="text-zinc-400 leading-8 mt-3">
            Aqui estão os melhores projetos que eu já desenvolvi. Fique à
            vontade para explorar!
          </p>
        </div>
        <Link
          href="/all-projects"
          className="mb-6 sm:mb-0 order-first sm:order-none"
        >
          <span className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm">
            Ver todos <HiArrowNarrowRight size={18} />
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-16">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
