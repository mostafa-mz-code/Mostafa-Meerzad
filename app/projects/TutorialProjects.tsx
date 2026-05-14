import { GoPlus } from "react-icons/go";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const TutorialProjects = () => {
  return (
    <section
      className={
        "flex flex-col justify-between items-start relative section-padding gap-5 "
      }
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Personal projects
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      <p className={"font-courier text-muted-foreground/70 text-sm"}>
        Tutorial-based projects built while mastering my skills.
      </p>
      {/* ------------- project --------------- */}
      <div
        className={
          "grid lg:grid-cols-3 border border-primary/20 rounded-xl overflow-hidden"
        }
      >
        <div
          className={`flex flex-col items-start justify-start gap-5 border border-primary/8 px-7 py-8 w-full bg-gradient-to-bl from-primary/6 to-darkblue `}
        >
          <h3 className={"text-xl font-georgia text-white/80"}>
            Nike Landing Page
          </h3>
          <p className={`font-courier text-muted-foreground/80 text-sm  `}>
            A clean, responsive Nike-themed landing page built with React and
            Tailwind CSS.
          </p>

          <ul className={"flex flex-wrap gap-3"}>
            {["React.js", "Tailwindcss", "Vite"].map((tech, i) => (
              <li
                key={i}
                className={
                  "border border-muted px-3 py-0.5 rounded-full bg-muted/30 text-[.6rem] font-courier text-muted-foreground/40 "
                }
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className={"flex flex-row gap-5 mt-2"}>
            <Link
              href={"https://github.com/mostafa-meerzad/nike.git"}
              rel={"noopener noreferrer"}
              className={
                "border border-muted-foreground/30 px-4 py-1 rounded-sm bg-muted/40 font-courier text-xs text-muted-foreground/60"
              }
            >
              GitHub
            </Link>
            <Link
              href={"https://serene-biscotti-6c2764.netlify.app/"}
              rel={"noopener noreferrer"}
              className={
                "flex items-center justify-center gap-2 border border-muted-foreground/30 px-4 py-1 rounded-sm bg-muted/40 font-courier text-xs text-muted-foreground/60"
              }
            >
              Live Demo <MdOutlineArrowOutward />
            </Link>
          </div>
          <em className={"text-xs text-muted-foreground"}>
            Frontend Mentor challenge
          </em>
        </div>

        <div
          className={`flex flex-col items-start justify-start gap-5 border border-primary/8 px-7 py-8 w-full bg-gradient-to-bl  to-darkblue from-gray-500/10`}
        >
          <h3 className={"text-xl font-georgia text-white/80 "}>
            Space Tourism Landing Page
          </h3>
          <p className={`font-courier text-muted-foreground/80 text-sm  `}>
            65 A sleek, multi-page space tourism website built with Next.js 13
            App Router, Tailwind CSS, and TypeScript.
          </p>

          <ul className={"flex flex-wrap gap-3"}>
            {["Next.js", "Tailwindcss", "Framer Motion"].map((tech, i) => (
              <li
                key={i}
                className={
                  "border border-muted px-3 py-0.5 rounded-full bg-muted/30 text-[0.6rem] font-courier text-muted-foreground/40"
                }
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className={"flex flex-row gap-5 mt-2"}>
            <Link
              href={
                "https://github.com/mostafa-meerzad/space-tourism-next.js.git"
              }
              rel={"noopener noreferrer"}
              className={
                "border border-muted-foreground/30 px-4 py-1 rounded-sm bg-muted/40 font-courier text-xs text-muted-foreground/60"
              }
            >
              GitHub
            </Link>
            <Link
              href={"https://space-tourism-mocha-three.vercel.app/"}
              rel={"noopener noreferrer"}
              className={
                "flex items-center justify-center gap-2 border border-muted-foreground/30 px-4 py-1 rounded-sm bg-muted/40 font-courier text-xs text-muted-foreground/60"
              }
            >
              Live Demo <MdOutlineArrowOutward />
            </Link>
          </div>
          <em className={"text-xs text-muted-foreground"}>
            Tutorial · JavaScript Mastery
          </em>
        </div>
        <div
          className={
            "flex flex-col justify-center items-center max-lg:h-64 text-center border border-primary/8 text-muted-foreground bg-radial from-primary/10 to-darkblue"
          }
        >
          <GoPlus className={"size-8"} />
          <span>
            <strong className={"font-georgia text-primary/70"}>160+</strong>{" "}
            more on
          </span>
          <span>github.com/mostafa-meerzad</span>
        </div>
      </div>
    </section>
  );
};

export default TutorialProjects;
