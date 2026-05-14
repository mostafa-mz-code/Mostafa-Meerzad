import AboutMe from "./AboutMe";
import Certificates from "./Certificates";
import FunFacts from "./FunFacts";
import Journey from "./Journey";
import SkillsAndTools from "./SkillsAndTools";
import Experience from "@/app/about/Experience";

const AboutPage = () => {
  return (
    <section className="flex flex-col ">
      <AboutMe />
      <Experience />
      <Journey />
      <SkillsAndTools />
      <Certificates />
      <FunFacts />
    </section>
  );
};

export default AboutPage;
