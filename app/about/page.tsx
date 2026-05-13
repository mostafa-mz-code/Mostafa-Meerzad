import AboutMe from "./AboutMe";
import Certificates from "./Certificates";
import FunFacts from "./FunFacts";
import Journey from "./Journey";
import SkillsAndTools from "./SkillsAndTools";
import Experience from "@/app/about/Experience";

const AboutPage = () => {
  return (
    <div className="flex flex-col ">
      <AboutMe />
      <Experience />
      <Journey />
      <SkillsAndTools />
      <Certificates />
      <FunFacts />
    </div>
  );
};

export default AboutPage;
