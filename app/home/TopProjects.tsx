"use client";
import ProjectsList from "@/components/ui/ProjectsList";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaLocationArrow,
  FaLongArrowAltRight,
} from "react-icons/fa";
import React from "react";
import TechStacks from "../_components/TechStacks";
import { CiLocationArrow1 } from "react-icons/ci";

type Project = {
  title: string;
  subtitle: string;
  desc: string;
  techs: string[];
  live: { href: string; title: string };
  repo: { href: string; title: string };
};
const Project = ({ title, subtitle, desc, techs, live, repo }: Project) => {
  return (
    <div className=" flex flex-col gap-4 w-full  md:max-w-xs lg:max-w-sm xl:max-w-md">
      {/*------- badge -----------*/}
      <div className=" text-xs text-muted-foreground/50 font-courier">
        {subtitle}
      </div>
      {/*------- title and description ----------*/}
      <div className="text-xl font-georgia text-[#f0eee8]">{title}</div>
      <div className="text-muted-foreground text-sm font-courier -mt-1">
        {desc}
      </div>

      {/*------------- tech stacks -----------*/}
      <ul className={"flex flex-wrap items-center gap-1.5 mt-3"}>
        {techs.map((tech: string, index: number) => (
          <TechStacks key={index} tech={tech} />
        ))}
      </ul>

      {/* ------------ CTA buttons -------------*/}
      <div className="flex flex-row justify-star gap-16">
        {live.href && (
          <Link
            href={live.href}
            className="flex justify-start items-center gap-3 text-primary/90 font-georgia text-sm  cursor-pointer"
            target="_blank"
          >
            {live.title} <FaLocationArrow className={"size-3"} />
          </Link>
        )}
        {repo.href && (
          <Link
            href={repo.href}
            className="flex justify-start items-center gap-3 text-primary/90 font-georgia text-sm cursor-pointer"
            target={"_blank"}
          >
            {repo.title} <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

const TopProjects = () => {
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
      {projects.map((project: Project) => (
        <Project {...project} key={project.title} />
      ))}
    </section>
  );
};

export default TopProjects;
