export type ProjectsListProps = {
  name: string
  id: string
  img: string
  techs: string[]
  repo: string
  live: string
}

export const ProjectsList: ProjectsListProps[] = [
  {
    name: 'Dogs',
    id: 'dogs',
    img: '/projects/dogs-sm.jpg',
    techs: ['NextJS', 'Victory', 'TypeScript'],
    repo: 'https://github.com/thiagomarim/dogs-next',
    live: 'https://dogs-next-gules.vercel.app/',
  },
  {
    name: 'Fintech',
    id: 'fintech',
    // desc: 'O projeto é uma dashboard que contém diversas informações das vendas de sua empresa, contendo um resumo com o total de vendas feita durante uma data selecionada, um gráfico comparando as vendas anteriores, e por fim uma lista com informações de todos os pagamentos.',
    img: '/projects/fintech.jpg',
    techs: ['React', 'Victory', 'TypeScript', 'React Router'],
    repo: 'https://github.com/thiagomarim/fintech',
    live: 'https://fintech-snowy.vercel.app/',
  },
  {
    name: 'InteriorDecor',
    id: 'interior-decor',
    // desc: 'Uma landing page de uma empresa fictícia voltada para designers de interiores, contendo todas informações da empresa, alguns exemplos de interiores feitos e muito mais!',
    img: '/projects/interior-decor.jpg',
    techs: ['React', 'Tailwind CSS'],
    repo: 'https://github.com/thiagomarim/interior-decor',
    live: 'https://interior-decor-six.vercel.app/',
  },
  {
    name: 'NLW Expert Notes',
    id: 'expert-notes',
    // desc: 'Um aplicativo de notas, nele você pode adicionar uma nota escrevendo manualmente ou utilizando a gravação de voz do próprio navegador, contendo a funcionalidade de adicionar nota, apagar e pesquisar.',
    img: '/projects/expert-notes.jpg',
    techs: ['React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/thiagomarim/nlw-expert-notes',
    live: 'https://nlw-expert-notes-two.vercel.app/',
  },
  {
    name: 'To Do List',
    id: 'to-do-list',
    // desc: 'Uma aplicação de uma Lista de tarefas onde o usuário pode adicionar novas tarefas e excluir quando quiser.',
    img: '/projects/to-do-list.jpg',
    techs: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/thiagomarim/to-do-list',
    live: 'https://to-do-list-fawn-beta.vercel.app/',
  },
  {
    name: 'Todo List',
    id: 'todo-list',
    // desc: 'Uma aplicação de uma Lista de tarefas onde o usuário pode adicionar novas tarefas, marcar como concluídas e excluir quando quiser.',
    img: '/projects/todo-list.jpg',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/thiagomarim/todo-betahub',
    live: 'https://thiagomarim.github.io/todo-betahub/',
  },
]
