import Image from "next/image";
import Button from "../ui/button";
import { MdArrowOutward } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";

export default function AllProjectsCard() {
  return (
    <div className="bg-zinc-950 border border-zinc-900 rounded-lg">
      <div className="px-4 py-3 flex flex-col gap-4">
        <Image
          src="/projects/book.png"
          alt=""
          unoptimized
          width={340}
          height={174}
          className="rounded-t-lg w-full xl:w-[340px]"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-50 font-medium">ProjectName</h3>
          <p className="text-zinc-400 text-sm">
            BookWise é uma plataforma de avaliação de livros que foi
            desenvolvida durante o bootcamp Ignite da Rocketseat.
          </p>

          <div className="flex items-center gap-2">
            <div className="px-2 py-[2px] bg-emerald-950 rounded-full flex items-center border border-emerald-400">
              <span className="text-xs text-emerald-400">Next.js</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-2">
            <Button secondary>
              Visitar <MdArrowOutward size={18} />
            </Button>
            <Button secondary>
              Código-fonte <TbBrandGithub size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
