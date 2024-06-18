export type ProjectsListProps = {
  name: string;
  desc: string;
  img: string;
  techs: string[];
  repo: string;
  live: string;
};

export const ProjectsList: ProjectsListProps[] = [
  {
    name: "Dogs",
    desc: "Uma rede social para cachorros e amigos. O projeto possui sistemas de login, contendo abas de “registrar” e “esqueci minha senha”, além disso o projeto também possui um sistema de perfil, assim podendo visualizar seus posts e ver informações sobre ele.",
    img: "",
    techs: ["NextJS", "Victory", "TypeScript"],
    repo: "https://github.com/thiagomarim/dogs-next",
    live: "https://dogs-next-gules.vercel.app/",
  },
  {
    name: "Fintech",
    desc: "O projeto é uma dashboard que contém diversas informações das vendas de sua empresa, contendo um resumo com o total de vendas feita durante uma data selecionada, um gráfico comparando as vendas anteriores, e por fim uma lista com informações de todos os pagamentos.",
    img: "",
    techs: ["React", "Victory", "TypeScript", "React Router"],
    repo: "https://github.com/thiagomarim/fintech",
    live: "https://fintech-snowy.vercel.app/",
  },
  {
    name: "InteriorDecor",
    desc: "Uma landing page de uma empresa fictícia voltada para designers de interiores, contendo todas informações da empresa, alguns exemplos de interiores feitos e muito mais!",
    img: "",
    techs: ["React", "Tailwind CSS"],
    repo: "https://github.com/thiagomarim/interior-decor",
    live: "https://interior-decor-six.vercel.app/",
  },
];
