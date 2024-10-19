import AnimatedSection from '@/components/common/animated-section'
import { CareerList } from '@/data/career'
import AboutMe from '@/sections/about-me'
import Career from '@/sections/career'

export default function About() {
  return (
    <AnimatedSection className="flex flex-col gap-9">
      <AboutMe />
      <Career careerInfo={CareerList} />
    </AnimatedSection>
  )
}
