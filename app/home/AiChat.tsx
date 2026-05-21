"use client";

import MoziModal from "@/components/mozi/MoziModal";
import StarBorder from "@/components/StarBorder";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { FaArrowUp, FaLocationArrow } from "react-icons/fa";

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const userBubble = useAnimationVariants(slideInRight);
  const aiBubble = useAnimationVariants(slideInLeft);

  const messages = [
    {
      msg: "Hey, I'm Mozi ✦ Ask me anything about Mostafa's work, stack, experience, or availability.",
      from: "system",
    },
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
            className={
              "text-sm text-muted-foreground/70 font-courier max-w-xl mb-5"
            }
          >
            Don&#39;t want to scroll? Ask my AI assistant about my experience,
            projects, stack, or availability. It knows everything about my work.
          </p>

          <motion.div
            className="[will-change:transform]"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <StarBorder
              as="button"
              className="custom-class"
              color="cyan"
              speed="5s"
              onClick={() => setIsOpen((prev) => !prev)}
              style={{}}
            >
              <div
                className={"flex items-center gap-2 text-[#378add] text-sm "}
              >
                Chat with Mozi{" "}
                <FaLocationArrow className={"size-3 text-[#378add]"} />
              </div>
            </StarBorder>
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
                className={`text-xs border-[0.5px] w-fit max-w-sm py-2 px-3 rounded-sm font-courier ${from === "user" ? "bg-[#121d1c] text-primary/80 text-right self-end border-primary/60" : " border-gray-800 bg-[#13131f] text-gray-300/80 self-start"}`}
              >
                {msg}
              </motion.li>
            ))}
          </ul>

          <hr className={"my-5"} />

          <div className="flex gap-2 ">
            <input
              type="text"
              placeholder="Ask me anything about Mostafa..."
              aria-label="Ask a question about Mostafa's experience, projects, or availability"
              className="flex-1 bg-[#0e0e18] border border-white/[0.08] rounded-md px-4 py-2.5 text-[13px] font-mono text-white/70 placeholder-white/20 outline-none focus:border-[#3ecf8e]/30 transition-colors disabled:opacity-50"
            />
            <motion.button
              aria-label="Send chat question"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="px-4 py-2.5 rounded-md bg-[#3ecf8e]/70 text-[#0a0a0f] font-mono text-[12px] font-bold disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaArrowUp className={"size-3"} />
            </motion.button>
          </div>
        </motion.div>
      </div>
      <MoziModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};
export default AiChat;
