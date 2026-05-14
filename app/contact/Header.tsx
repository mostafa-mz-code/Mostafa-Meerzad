"use client";

import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section
      className={
        "flex flex-colflex-row justify-between items-center max-md:gap-5 relative section-padding  "
      }
    >
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Get in touch
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.h1
        className={"flex flex-col text-[3.1rem] leading-tight font-georgia"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={""}>Let&apos;s</span>
        <span className={"text-primary"}>Talk</span>
      </motion.h1>

      <motion.div
        className={
          "flex flex-col items-end text-xs md:text-[0.85rem] text-muted-foreground/70 w-fit text-center md:text-right font-courier border border-primary/50 rounded-lg p-6 pl-14 bg-primary/5 shadow-2xl shadow-primary/10 [will-change:transform]"
        }
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className={"flex items-center justify-between gap-2"}>
          <motion.span
            className={"size-1.5 bg-primary rounded-full"}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          Available for new roles
        </span>
        <span>Remote · worldwide</span>
        <span>Onsite · Kabul, Afghanistan</span>
        <span>Open to full-time positions</span>
      </motion.div>
    </section>
  );
};

export default Header;
