import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex items-center gap-10 sm:gap-20 flex-wrap lg:flex-nowrap">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Sobre mim</h2>
        <p className="text-zinc-400">
          Olá eu me chamo Thiago Soares Marim, tenho 18 anos e sou desenvolvedor
          front-end. Atualmente estou cursando{" "}
          <span className="text-gray-50">
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          na{" "}
          <span className="text-gray-50">
            Universidade Nove de Julho (UNINOVE)
          </span>
          .
        </p>
        <p className="text-zinc-400">
          Minha paixão é criar e desenvolver websites com interfaces bonitas e
          chamativas, com foco na experiência do usuário. Para o desenvolvimento
          web, possuo conhecimento em <span className="text-gray-50">HTML</span>
          , <span className="text-gray-50">CSS</span>,{" "}
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
        src="/about/perfil.png"
        width={420}
        height={420}
        alt="Foto de perfil do Thiago Marim"
        className="rounded-lg"
      />
    </section>
  );
}
