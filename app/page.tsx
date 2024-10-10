import AboutMe from '@/sections/about'
import FeaturedProjects from '@/sections/featured-projects'
import Introduction from '@/sections/introduction'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Introduction />
      <AboutMe />
      <FeaturedProjects />
    </main>
  )
}
