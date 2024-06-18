import Image from "next/image";
import Button from "../ui/button";
import { MdArrowOutward } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { ProjectsListProps } from "@/app/data/projects";

interface ProjectCardProps {
  project: ProjectsListProps;
}

export default function ProjectCard(project: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 sm:gap-12 group">
      <Image
        src={project.project.img}
        alt=""
        width={485}
        height={308}
        className="w-full h-[200px] sm:h-[300px] lg:w-[485px] lg:min-h-full object-cover rounded-lg group-even:order-none lg:group-even:order-last"
      />
      <div className="flex flex-col gap-4 sm:gap-6 items-start lg:items-center text-start lg:text-center max-w-full lg:max-w-[531px]">
        <h3 className="text-lg font-medium">{project.project.name}</h3>
        <p className="text-zinc-400 leading-8">{project.project.desc}</p>
        <div className="flex items-center gap-2">
          {project.project.techs.map((tech) => (
            <div
              key={tech}
              className="px-2 py-[2px] bg-emerald-950 rounded-full flex items-center border border-emerald-400"
            >
              <span className="text-sm text-emerald-400">{tech}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Button secondary>
            Visitar <MdArrowOutward size={18} />
          </Button>
          <Button secondary>
            Código-fonte <TbBrandGithub size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
