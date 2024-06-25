import { Button } from "../../ui/button";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function HeroSection() {
  return (
    <section className="w-full bg-intro-bg bg-no-repeat bg-left-top">
      <div className="container flex flex-col gap-4 mb-[120px] lg:mb-[390px] mt-[150px] sm:mt-[323px]">
        <h1 className="text-4xl sm:text-[56px] leading-[61px] font-semibold">
          Desenvolvedor Front-end
        </h1>
        <p className="text-paragraph max-w-[572px] text-xl ">
          Olá, me chamo Thiago Marim tenho 18 anos e atualmente estou localizado
          em São Paulo, Brasil.
        </p>
        <div className="flex flex-wrap gap-6 mt-2">
          <Button>
            <a href="#contact" className="flex items-center gap-2">
              Entrar em contato
            </a>
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
      </div>
    </section>
  );
}
