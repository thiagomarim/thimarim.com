import AboutMe from "./components/home/about";
import Contact from "./components/home/contact";
import Intro from "./components/home/intro";
import FeaturedProjects from "./components/home/featured-projects";

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
