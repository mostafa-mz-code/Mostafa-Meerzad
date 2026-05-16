"use client";

import React from "react";
import { motion } from "motion/react";

const TechStacks = ({ tech }: { tech: string }) => {
  return (
    <motion.li
      className={
        "border border-muted-foreground/20 text-muted-foreground/60 py-0.5 px-3 rounded-full font-courier text-[12px] [will-change:transform] cursor-default"
      }
      whileHover={{
        borderColor: "rgba(62,207,142,0.3)",
        color: "rgba(255,255,255,0.7)",
      }}
      transition={{ duration: 0.15 }}
    >
      {tech}
    </motion.li>
  );
};
export default TechStacks;
