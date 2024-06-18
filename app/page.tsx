import AboutMe from "./components/home/about";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero-section";
import Projects from "./components/home/projects";
import { ProjectsList } from "./data/projects";

export default function Home() {
  return (
    <main className="container flex flex-col gap-32 mb-32">
      <HeroSection />
      <AboutMe />
      <Projects projects={ProjectsList} />
      <Contact />
    </main>
  );
}
