import AboutMe from "./components/pages/home/about";
import Contact from "./components/pages/home/contact";
import FeaturedProjects from "./components/pages/home/featured-projects";
import Intro from "./components/pages/home/intro";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <AboutMe />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
