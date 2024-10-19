import { ProjectsList } from '@/data/projects'
import ProjectsSection from '@/sections/projects'

export default function Projetos() {
  return <ProjectsSection projectList={ProjectsList} />
}
