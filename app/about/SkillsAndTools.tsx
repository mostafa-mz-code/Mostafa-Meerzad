import React from "react";
import { FaCircle } from "react-icons/fa";

type Skill = {
  title: string;
  tools: string[];
};
const skills: Skill[] = [
  {
    title: "Frontend Development",
    tools: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "Zustand",
      "React Native",
    ],
  },
  {
    title: "Backend Development",
    tools: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Platforms",
    tools: [
      "Git & GitHub",
      "VSCode",
      "WebStorm",
      "Postman",
      "Docker",
      "Linux CLI",
      "Vercel",
      "Figma handoff",
      "Jest",
    ],
  },
];

type Props = {
  title: string;
  tools: string[];
  index: number;
};
const SkillCard = ({ title, tools, index }: Props) => {
  return (
    <li
      className={`flex flex-col gap-4 border rounded-md p-8 ${index === 1 ? " bg-primary/7 rounded-none md:border-r-0 md:border-l-0" : index === 0 ? " md:rounded-tr-none max-md:rounded-bl-none rounded-br-none" : index === 2 ? "max-md:rounded-tr-none rounded-tl-none md:rounded-bl-none" : ""} `}
    >
      <h3 className="text-lg font-bold text-muted-foreground font-courier">
        {title}
      </h3>
      <hr className="w-full h-[1px] bg-muted-foreground/20" />
      <div className="grid grid-cols-2 md:grid-cols-1  gap-2 mt-2 ">
        {tools.map((tool, toolIndex) => (
          <div
            key={toolIndex}
            className="flex justify-start items-center gap-2 text-muted-foreground font-courier text-sm relative"
          >
            <FaCircle className="size-1 text-primary" /> {tool}
        
          </div>
        ))}
      </div>
    </li>
  );
};
const SkillsAndTools = () => {
  return (
    <section className="relative flex flex-col gap-10 section-padding !pt-10 bg-radial from-[rgba(10,10,15,0.6)]/20 to-darkblue">
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Skills & tools
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* ------------ skills & tools ------------- */}

      <ul className="grid grid-cols-1 md:grid-cols-3 ">
        {skills.map((item, index) => (
          <SkillCard {...item} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default SkillsAndTools;
