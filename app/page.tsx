import AboutMe from "./components/home/about";
import HeroSection from "./components/home/hero-section";

export default function Home() {
  return (
    <main className="container flex flex-col gap-32 mb-32">
      <HeroSection />
      <AboutMe />
    </main>
  );
}
