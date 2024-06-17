import Image from "next/image";
import Button from "../ui/button";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function CardProjects() {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-6 sm:gap-12 group">
      <Image
        src="/projects/project.png"
        alt=""
        width={485}
        height={308}
        className="w-full h-[200px] sm:h-[300px] lg:w-[485px] lg:min-h-full object-cover rounded-lg group-even:order-none lg:group-even:order-last"
      />
      <div className="flex flex-col gap-4 sm:gap-6 items-start lg:items-center text-start lg:text-center max-w-full lg:max-w-[531px]">
        <h3 className="text-lg font-medium">ProjectName</h3>
        <p className="text-zinc-400 leading-8">
          BookWise é uma plataforma de avaliação de livros que foi desenvolvida
          durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
          precisavamos desenvolver essa aplicação completa Full Stack com
          Next.js.
        </p>
        <div className="flex items-center gap-2">
          <div className="px-2 py-[2px] bg-emerald-950 rounded-full flex items-center border border-emerald-400">
            <span className="text-sm text-emerald-400">Next.js</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button secondary>
            Ver Código <HiArrowNarrowRight size={20} />
          </Button>
          <Button secondary>
            Ver Código <HiArrowNarrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
