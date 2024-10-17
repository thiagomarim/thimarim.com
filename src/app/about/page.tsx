import { CareerList } from '@/data/career'
import AboutMe from '@/sections/about-me'
import Career from '@/sections/career'

export default function About() {
  return (
    <div className="flex flex-col gap-9">
      <AboutMe />
      <Career careerInfo={CareerList} />
    </div>
  )
}
