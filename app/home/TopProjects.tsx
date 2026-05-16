"use client";

import { motion, useInView } from "motion/react";
import Link from "next/link";
import { FaArrowRight, FaLocationArrow } from "react-icons/fa";
import React, { useRef } from "react";
import TechStacks from "../_components/TechStacks";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

type Project = {
  title: string;
  subtitle: string;
  desc: string;
  techs: string[];
  live: { href: string; title: string };
  repo: { href: string; title: string };
};
const Project = ({ title, subtitle, desc, techs, live, repo }: Project) => {
  const item = useAnimationVariants(staggerItem);
  return (
    <motion.div
      variants={item}
      className=" flex flex-col gap-4 w-full  md:max-w-xs lg:max-w-sm xl:max-w-md [will-change:transform] rounded-lg border border-transparent p-1"
    >
      <div className=" text-xs text-muted-foreground/50 font-courier">
        {subtitle}
      </div>
      <div className="text-xl font-georgia text-[#f0eee8]">{title}</div>
      <div className="text-muted-foreground text-sm font-courier -mt-1">
        {desc}
      </div>

      <ul className={"flex flex-wrap items-center gap-1.5 mt-3"}>
        {techs.map((tech: string, index: number) => (
          <TechStacks key={index} tech={tech} />
        ))}
      </ul>

      <div className="flex flex-row justify-star gap-16">
        {live.href && (
          <motion.div
            className="[will-change:transform]"
            whileHover={{
              scale: 1.02,
              y: -1,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href={live.href}
              className="flex justify-start items-center gap-3 text-primary/90 font-georgia text-sm  cursor-pointer"
              target="_blank"
            >
              {live.title} <FaLocationArrow className={"size-3"} />
            </Link>
          </motion.div>
        )}
        {repo.href && (
          <motion.div
            className="[will-change:transform]"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Link
              href={repo.href}
              className="flex justify-start items-center gap-3 text-primary/90 font-georgia text-sm cursor-pointer"
              target={"_blank"}
            >
              {repo.title} <FaArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TopProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);

  const projects: Project[] = [
    {
      title: "SheReads",
      desc: "Online reading platform with book recommendations, search, filter, and full admin panel. Live worldwide.",
      techs: ["Next.js", "TypeScript", "Tialwind"],
      subtitle: "01 · Professional",
      repo: { href: "", title: "" },
      live: { href: "https://something", title: "shereadsapp.com" },
    },
    {
      title: "Chatty",
      desc: "Real-time MERN chat app with Socket.io. Auth, scalable messaging, and responsive UI.",
      techs: ["MERN", "Socket.id", "JWT"],
      subtitle: "02 · Personal",
      repo: { href: "https://something", title: "View GitHub" },
      live: { href: "https://something", title: "Live Demo" },
    },
    {
      title: "Promptopia",
      desc: "Full-stack AI prompt sharing app. Create, manage, and discover high-quality prompts.",
      techs: ["Next.js", "PostgreSQL", "Prisma"],
      subtitle: "03 · Professional",
      repo: { href: "https://something", title: "View GitHub" },
      live: { href: "https://something", title: "shereadsapp.com" },
    },
  ];
  return (
    <section className="flex flex-col flex-wrap md:flex-row gap-y-16 md:gap-14 section-padding justify-between relative bg-gradient-to-l from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)]">
      <div className="flex justify-center items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        More projects
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col flex-wrap md:flex-row gap-y-16 md:gap-14 w-full justify-between"
      >
        {projects.map((project: Project) => (
          <Project {...project} key={project.title} />
        ))}
      </motion.div>
    </section>
  );
};

export default TopProjects;
