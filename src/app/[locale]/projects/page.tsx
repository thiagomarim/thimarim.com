import { ProjectsList } from '@/data/projects'
import ProjectsSection from '@/sections/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Thiago Marim',
  description:
    'Explore os projetos desenvolvidos por Thiago Marim, demonstrando suas habilidades e experiência como desenvolvedor Front-end.',
  openGraph: {
    title: 'Projects | Thiago Marim',
    description:
      'Explore os projetos desenvolvidos por Thiago Marim, demonstrando suas habilidades e experiência como desenvolvedor Front-end.',
    type: 'website',
    url: 'https://thiagomarim.com/projects',
  },
  keywords: [
    'projetos',
    'portfolio',
    'desenvolvedor front-end',
    'Thiago Marim',
    'web development',
  ],
}

export default function Projetos() {
  return <ProjectsSection projectList={ProjectsList} />
}
