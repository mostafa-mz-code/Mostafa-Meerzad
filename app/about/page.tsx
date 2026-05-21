export const metadata = {
  title: "About | Mostafa Meerzad",
  description:
    "Learn about Mostafa Meerzad's development journey, production experience at Webistan.cloud, technical skills, certifications, and personal background.",
  keywords: [
    "Mostafa Meerzad",
    "About",
    "Web developer",
    "Full stack developer",
    "Experience",
    "Skills",
    "Certificates",
    "Webistan.cloud",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Mostafa Meerzad",
    description:
      "Learn about Mostafa Meerzad's development journey, production experience at Webistan.cloud, technical skills, certifications, and personal background.",
    url: "https://portfolio-navy-seven-11.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/avatar-bg-pattern.webp",
        alt: "About Mostafa Meerzad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Mostafa Meerzad",
    description:
      "Learn about Mostafa Meerzad's development journey, production experience, and technical skills.",
    images: ["/avatar-bg-pattern.webp"],
  },
};

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
