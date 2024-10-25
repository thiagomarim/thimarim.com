import AnimatedSection from '@/components/animated-section'
import LetsConnect from '@/components/lets-connect'
import { CareerList } from '@/data/career'
import AboutMe from '@/components/pages/about/about-me'
import Career from '@/components/pages/about/career'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Thiago Marim',
  description:
    'Conheça mais sobre Thiago Marim, sua jornada profissional e experiências como desenvolvedor Front-end.',
  openGraph: {
    title: 'About | Thiago Marim',
    description:
      'Conheça mais sobre Thiago Marim, sua jornada profissional e experiências como desenvolvedor Front-end.',
    type: 'website',
    url: 'https://thiagomarim.com/about',
  },
  keywords: [
    'Thiago Marim',
    'desenvolvedor Front-end',
    'experiência profissional',
    'portfolio',
    'habilidades web',
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'UI/UX',
    'desenvolvimento web',
    'carreira em tecnologia',
    'projetos Front-end',
  ],
}

export default function About() {
  return (
    <AnimatedSection className="flex flex-col gap-9">
      <AboutMe />
      <Career careerInfo={CareerList} />
      <LetsConnect />
    </AnimatedSection>
  )
}
