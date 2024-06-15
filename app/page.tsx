import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./components/ui/button";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export default function Home() {
  return (
    <main className="container flex flex-col gap-32">
      <section className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold mt-32 sm:mt-[242px]">
          Thiago Marim
        </h1>
        <p className="text-zinc-400 max-w-[527px] text-lg">
          Desenvolvedor front-end totalmente apaixonado pelo o que faz,
          atualmente localizado em São Paulo, Brasil.
        </p>
        <div className="flex items-center flex-wrap justify-center gap-6">
          <Button
            text="Entrar em contato"
            icon={<HiArrowNarrowRight size={20} />}
          />
          <div className="flex items-center gap-4 text-zinc-700">
            <a
              href=""
              target="_blank"
              className="hover:text-gray-100 transition-colors"
            >
              <TbBrandGithub size={24} />
            </a>
            <a
              href=""
              target="_blank"
              className="hover:text-gray-100 transition-colors"
            >
              <TbBrandLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
