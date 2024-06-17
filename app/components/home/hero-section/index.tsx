import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../../ui/button";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center gap-4 mb-[120px] lg:mb-[390px] mt-[150px] sm:mt-[323px]">
      <h1 className="text-4xl sm:text-5xl font-bold">Thiago Marim</h1>
      <p className="text-zinc-400 max-w-[527px] text-lg">
        Desenvolvedor front-end totalmente apaixonado pelo o que faz, atualmente
        localizado em São Paulo, Brasil.
      </p>
      <div className="flex items-center flex-wrap justify-center gap-6 mt-2">
        <Button icon={<HiArrowNarrowRight size={20} />}>
          <a href="#contact">Entrar em contato</a>
        </Button>
        <div className="flex items-center gap-4 text-zinc-700">
          <a
            href=""
            target="_blank"
            className="hover:text-gray-50 transition-colors"
          >
            <TbBrandGithub size={24} />
          </a>
          <a
            href=""
            target="_blank"
            className="hover:text-gray-50 transition-colors"
          >
            <TbBrandLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
