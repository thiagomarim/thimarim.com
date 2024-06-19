import AboutMe from "./components/home/about";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero";
import FeaturedProjects from "./components/home/featured-projects";

export default function Home() {
  return (
    <main className="container flex flex-col gap-16 sm:gap-32">
      <HeroSection />
      <AboutMe />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
