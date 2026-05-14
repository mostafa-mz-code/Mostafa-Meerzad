"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowUp, FaLocationArrow } from "react-icons/fa";
import { motion, useInView } from "motion/react";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

const AiChat = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const userBubble = useAnimationVariants(slideInRight);
  const aiBubble = useAnimationVariants(slideInLeft);

  const messages = [
    { msg: "Does he know PostgreSQL?", from: "user" },
    {
      msg: "Yes — Mostafa uses PostgreSQL with Prisma ORM and has shipped it in production at Webistan.cloud.",
      from: "system",
    },
    { msg: "Is he open to remote work?", from: "user" },
    {
      msg: "Yes, fully remote or onsite in Kabul, Afghanistan.",
      from: "system",
    },
  ];
  return (
    <section
      className={
        "section-padding  bg-gradient-to-r from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)] !pt-14 relative "
      }
    >
      <div
        className={
          "text-[#378add] font-courier uppercase text-xs badge-position absolute"
        }
      >
        ✦ AI-powered
      </div>
      <div
        className={
          "flex flex-col lg:flex-row gap-16 lg:gap-5 justify-between  "
        }
      >
        <div className={"flex flex-col items-start gap-4 mt-14"}>
          <h1 className={"text-2xl font-georgia"}>Ask me anything</h1>

          <p
            className={"text-sm text-muted-foreground/70 font-courier max-w-xl"}
          >
            Don&#39;t want to scroll? Ask my AI assistant about my experience,
            projects, stack, or availability. It knows everything about my work
            — and nothing else.
          </p>

          <motion.div
            className="[will-change:transform]"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Button
              className={"!border-[#378add] !px-10 mt-10 "}
              variant={"outline"}
            >
              Start Chat <FaLocationArrow className={"size-3 text-[#378add]"} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={"min-w-sm border bg-darkblue/70 p-6 rounded-lg lg:w-lg "}
        >
          <ul className={"list-none flex flex-col gap-3 w-full "}>
            {messages.map(({ msg, from }, index) => (
              <motion.li
                key={index}
                variants={from === "user" ? userBubble : aiBubble}
                className={`text-xs border-[0.5px] w-fit max-w-sm py-2 px-3 rounded-sm font-courier ${from === "user" ? "bg-lightblue/20 text-[#378add] text-right self-end" : " border-gray-600 bg-gray-800 text-gray-300/70 self-start"}`}
              >
                {msg}
              </motion.li>
            ))}
          </ul>

          <hr className={"my-5"} />

          <div
            className={
              "flex items-center gap-4 border rounded-full py-2 px-3 bg-muted-foreground/10 "
            }
          >
            <p
              className={
                "text-sm font-georgia text-muted-foreground w-full mx-4"
              }
            >
              Ask me anything
            </p>
            <div
              className={
                "border border-lightblue bg-lightblue w-fit p-2 rounded-full"
              }
            >
              <FaArrowUp className={"size-3"} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AiChat;
