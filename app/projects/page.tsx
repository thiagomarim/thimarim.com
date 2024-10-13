import { Metadata } from 'next'
import FeaturedProjects from '@/sections/featured-projects'

export const metadata: Metadata = {
  title: 'Projetos // Thiago Marim',
  description: 'Desenvolvedor front-end',
}

export default function AllProjects() {
  return <FeaturedProjects />
}
