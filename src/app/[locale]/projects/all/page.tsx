import AllProjectsSection from '@/components/pages/all-projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Projects | Thiago Marim',
  description:
    'Explore os projetos desenvolvidos por Thiago Marim, demonstrando suas habilidades e experiência como desenvolvedor Front-end.',
  openGraph: {
    title: 'All Projects | Thiago Marim',
    description:
      'Explore os projetos desenvolvidos por Thiago Marim, demonstrando suas habilidades e experiência como desenvolvedor Front-end.',
    type: 'website',
    url: 'https://thiagomarim.com/projects/all',
  },
  keywords: [
    'projetos',
    'portfolio',
    'desenvolvedor front-end',
    'Thiago Marim',
    'web development',
  ],
}

export default function AllProjects() {
  return <AllProjectsSection />
}
