"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const item = useAnimationVariants(staggerItem);

  const info = [
    { item: "4", addon: "+", desc: "years of experience" },
    { item: "160", addon: "+", desc: "public repos" },
    { item: "top", addon: "10", desc: "github · committer" },
    { item: "2", addon: null, desc: "professional apps shipped" },
  ];
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={
        "flex max-md:flex-wrap justify-around gap-4 lg:justify-between lg:items-stretch my-5  w-full padding  "
      }
    >
      {info.map(({ item: n, addon, desc }, index) => (
        <motion.div
          key={index}
          variants={item}
          className={"borde lg:w-full lg:h-full min-h-32 px-10 py-5 "}
        >
          <div className="text-3xl lg:text-4xl font-georgia capitalize mb-2">
            {n}{" "}
            <span
              className={
                "text-primary text-2xl lg:text-2xl font-light font-georgia -mx-2"
              }
            >
              {addon}
            </span>{" "}
          </div>
          <p className=" text-[10px] lg:text-xs font-georgia text-muted-foreground uppercase w-24 md:w-20 lg:w-36 [word-spacing:5px]">
            {desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default About;
