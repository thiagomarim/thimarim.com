import { SectionTitle } from "@/app/components/ui/section-title";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="container flex items-center gap-10 sm:gap-20 flex-wrap lg:flex-nowrap mb-12 sm:mb-40">
      <div className="flex flex-col gap-4">
        <SectionTitle title="Sobre mim" subtitle="Um pouco mais sobre mim" />
        <p className="text-paragraph leading-8">
          Olá eu me chamo Thiago Soares Marim, tenho 19 anos e resido em São
          Paulo, Brasil. Estou cursando{" "}
          <span className="text-gray-50">
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          na{" "}
          <span className="text-gray-50">
            Universidade Nove de Julho (UNINOVE)
          </span>{" "}
          com a previsão de conclusão para 2026.
        </p>
        <p className="text-paragraph leading-8">
          Minha paixão é criar e desenvolver sites com interfaces bonitas e
          atraentes, com foco na experiência do usuário. Possuo conhecimentos em{" "}
          <span className="text-gray-50">HTML</span>,{" "}
          <span className="text-gray-50">CSS</span>,{" "}
          <span className="text-gray-50">JavaScript</span>,{" "}
          <span className="text-gray-50">TypeScript</span>,
          <span className="text-gray-50">Tailwind CSS</span>,{" "}
          <span className="text-gray-50">React</span>,{" "}
          <span className="text-gray-50">Next.js</span>,{" "}
          <span className="text-gray-50">Git</span> e{" "}
          <span className="text-gray-50">Github</span>.
        </p>
      </div>
      <Image
        src="/about/about.svg"
        width={393}
        height={300}
        alt="Foto de perfil do Thiago Marim"
        className="rounded-lg"
      />
    </section>
  );
}
