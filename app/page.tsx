import About from "./home/About";
import Hero from "./home/Hero";
import TopProjects from "./home/TopProjects";
import FeaturedProject from "@/app/home/FeaturedProject";
import AiChat from "@/app/home/AiChat";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <FeaturedProject/>
      <TopProjects/>
      <AiChat/>
    </>
  );
}
