export type ProjectsListProps = {
  name: string
  desc: string
  img: string
  techs: string[]
  repo: string
  live: string
}

export const ProjectsList: ProjectsListProps[] = [
  {
    name: 'Dogs',
    desc: 'Uma rede social para cachorros e amigos. O projeto possui sistemas de login, contendo abas de “registrar” e “esqueci minha senha”, além disso o projeto também possui um sistema de perfil, assim podendo visualizar seus posts e ver informações sobre ele.',
    img: '/projects/dogs-sm.jpg',
    techs: ['NextJS', 'Victory', 'TypeScript'],
    repo: 'https://github.com/thiagomarim/dogs-next',
    live: 'https://dogs-next-gules.vercel.app/',
  },
  {
    name: 'Fintech',
    desc: 'O projeto é uma dashboard que contém diversas informações das vendas de sua empresa, contendo um resumo com o total de vendas feita durante uma data selecionada, um gráfico comparando as vendas anteriores, e por fim uma lista com informações de todos os pagamentos.',
    img: '/projects/fintech.jpg',
    techs: ['React', 'Victory', 'TypeScript', 'React Router'],
    repo: 'https://github.com/thiagomarim/fintech',
    live: 'https://fintech-snowy.vercel.app/',
  },
  {
    name: 'InteriorDecor',
    desc: 'Uma landing page de uma empresa fictícia voltada para designers de interiores, contendo todas informações da empresa, alguns exemplos de interiores feitos e muito mais!',
    img: '/projects/interior-decor.jpg',
    techs: ['React', 'Tailwind CSS'],
    repo: 'https://github.com/thiagomarim/interior-decor',
    live: 'https://interior-decor-six.vercel.app/',
  },
  {
    name: 'NLW Expert Notes',
    desc: 'Um aplicativo de notas, nele você pode adicionar uma nota escrevendo manualmente ou utilizando a gravação de voz do próprio navegador, contendo a funcionalidade de adicionar nota, apagar e pesquisar.',
    img: '/projects/expert-notes.jpg',
    techs: ['React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/thiagomarim/nlw-expert-notes',
    live: 'https://nlw-expert-notes-two.vercel.app/',
  },
  {
    name: 'To Do List',
    desc: 'Uma aplicação de uma Lista de tarefas onde o usuário pode adicionar novas tarefas e excluir quando quiser.',
    img: '/projects/to-do-list.jpg',
    techs: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Shadcn'],
    repo: 'https://github.com/thiagomarim/to-do-list',
    live: 'https://to-do-list-fawn-beta.vercel.app/',
  },
  {
    name: 'Todo List',
    desc: 'Uma aplicação de uma Lista de tarefas onde o usuário pode adicionar novas tarefas, marcar como concluídas e excluir quando quiser.',
    img: '/projects/todo-list.jpg',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/thiagomarim/todo-betahub',
    live: 'https://thiagomarim.github.io/todo-betahub/',
  },
]
