"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { scaleIn, staggerContainer } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

import type { Variants } from "framer-motion";

type Props = {
  datetime: string;
  title: string;
  desc: string;
  className?: string;
  cardVariants: Variants;
};
const JourneyCard = ({ datetime, title, desc, className, cardVariants }: Props) => {
  return (
    <motion.div
      className={`flex flex-col gap-5 p-5 border border-transparent ${className} [will-change:transform]`}
      variants={cardVariants}
      whileHover={{ borderColor: "rgba(62,207,142,0.3)", y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span
        className={
          "  w-fit  rounded-full text-[.7rem]  text-primary font-courier -mb-2"
        }
      >
        {datetime}
      </span>
      <h2 className={"text-2xl font-georgia"}>{title}</h2>
      <p className={"text-muted-foreground/70  md:w-4/5"}>{desc}</p>
    </motion.div>
  );
};

const Journey = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const cardVariants = useAnimationVariants(scaleIn);

  const journey = [
    {
      datetime: "2019",
      title: "Where it started",
      desc: "Accepted to Kabul University for software engineering. First real exposure to programming — realized this was exactly what I wanted to do.",
    },
    {
      datetime: "2020 – 2021",
      title: "The pivot",
      desc: "Circumstances made continuing university impossible. Made a decision: if school wasn't an option, I'd build my own curriculum. Opened a browser and never looked back.",
    },
    {
      datetime: "2021 – 2023",
      title: "Self-built",
      desc: "FreeCodeCamp, YouTube, GitHub — project after project. Earned four certifications. Built 160+ repos. Landed a Coding Samurai internship entirely on the strength of what I'd shipped. No degree. Just code.",
    },
    {
      datetime: "2024 – Present",
      title: "Professional",
      desc: "Joined Webistan.cloud as a Full Stack Developer. Shipped two production applications for real clients. Now looking for a bigger challenge — remote or in Kabul.",
    },
  ];
  return (
    <section
      className={
        "relative flex flex-col gap-10 section-padding !pt-10 bg-gradient-to-l from-[rgba(10,10,15,0.6)]/20 to-darkblue"
      }
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        my journey
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* ----------- parts of journey -------------- */}
      <motion.div
        ref={ref}
        className={"grid lg:grid-cols-2 gap-5 px-5"}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {journey.map((item, index) => {
          const position = index + 1;
          const isSpecial = isLargeScreen
            ? position % 4 === 1 || position % 4 === 0
            : index % 2 === 0;

          return (
            <JourneyCard
              {...item}
              key={item.title}
              cardVariants={cardVariants}
              className={`${isSpecial ? "border-l border-primary/70 rounded-tl-md rounded-bl-md bg-gradient-to-r to-[rgba(10,10,15,0.6)]/20 from-primary/10" : ""}`}
            />
          );
        })}
      </motion.div>
    </section>
  );
};
export default Journey;
