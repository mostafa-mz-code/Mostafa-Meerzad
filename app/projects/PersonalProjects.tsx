"use client";
import React, { useEffect, useState } from "react";
import { personalProjects, ProjectType } from "../constants/projects";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = ProjectType & { index: number };
const Project = ({
  type,
  name,
  description,
  technologies,
  github,
  preview,
  index,
}: Props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const isLast = index === personalProjects.length - 1;
  const position = index + 1;
  const isSpecial = isLargeScreen
    ? position % 4 === 1 || position % 4 === 0
    : index % 2 === 0;
  return (
    <li
      className={`flex flex-col gap-5 px-5 md:px-7 py-8 w-full ${isLast && "col-span-2"} ${isSpecial ? "border-l border-primary/70 rounded-tl-lg rounded-bl-lg bg-gradient-to-r to-[rgba(10,10,15,0.6)]/20 from-primary/10" : "max-lg:border-r lg:border-l bg-gradient-to-l border-gray-500/60 rounded-tr-lg lg:rounded-tl-lg rounded-br-lg lg:rounded-bl-lg lg:bg-gradient-to-r to-[rgba(10,10,15,0.6)]/10 from-gray-500/8"}`}
    >
      {/* ---------- badge --------- */}
      <span className={"text-sm text-muted-foreground/60 font-courier"}>
        {type}
      </span>
      {/* --------------- title ------------- */}
      <h3 className={"text-2xl font-georgia"}>{name}</h3>
      {/* --------------- description ------------- */}
      <p
        className={`font-courier text-muted-foreground/80 text-sm ${isLast && "md:max-w-2/3"} `}
      >
        {description}
      </p>

      {/* ------------- technologies ------------- */}
      <ul className={"flex flex-wrap md:flex-row gap-3"}>
        {technologies.map((tech, i) => (
          <li
            key={i}
            className={
              "border border-muted px-3 py-0.5 rounded-full bg-muted/30 text-[.65em] font-courier text-muted-foreground/70"
            }
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className={"flex flex-row gap-5 mt-5"}>
        <Link
          href={github!}
          rel={"noopener noreferrer"}
          className={
            "border border-muted-foreground/30 px-6 py-1 rounded-sm bg-muted/20 font-courier text-xs"
          }
        >
          GitHub
        </Link>
        <Link
          href={preview!}
          rel={"noopener noreferrer"}
          className={
            " flex justify-center items-center gap-2 border border-primary/20 px-6 py-1 rounded-sm bg-primary/10 font-courier text-xs text-primary"
          }
        >
          Live Demo <MdOutlineArrowOutward />
        </Link>
      </div>
    </li>
  );
};

const PersonalProjects = () => {
  return (
    <section
      className={"flex justify-between items-center relative section-padding "}
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Personal projects
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      {/* ------------- project --------------- */}

      <ul className={" flex flex-col lg:grid md:grid-cols-2  rounded-xl gap-2"}>
        {personalProjects.map((item, index) => (
          <Project {...item} index={index} key={index}></Project>
        ))}
      </ul>
    </section>
  );
};

export default PersonalProjects;
