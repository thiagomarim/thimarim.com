import Image from "next/image";
import { Button } from "../ui/button";
import { MdArrowOutward } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { ProjectsListProps } from "@/app/data/projects";

interface AllProjectsCardProps {
  project: ProjectsListProps;
}

export default function AllProjectsCard({ project }: AllProjectsCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-lg">
      <div className="px-4 py-3 flex flex-col gap-4" key={project.name}>
        <Image
          src={project.img}
          alt={`Imagem do projeto ${project.name}`}
          unoptimized
          width={340}
          height={174}
          className="rounded-t-lg w-full xl:w-[340px]"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-50 font-medium">{project.name}</h3>
          <p className="text-zinc-400 text-sm line-clamp-3 leading-6">
            {project.desc}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {project.techs.map((tech) => (
              <div
                key={tech}
                className="px-2 py-[2px] bg-emerald-950 rounded-full flex items-center border border-emerald-400"
              >
                <span className="text-xs text-emerald-400">{tech}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-2">
            <Button>
              <a
                href={project.live}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar <MdArrowOutward size={18} />
              </a>
            </Button>
            <Button>
              <a
                href={project.repo}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código-fonte <TbBrandGithub size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
