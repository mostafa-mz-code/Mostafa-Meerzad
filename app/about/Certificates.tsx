"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { motion, useInView } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { certificates } from "../constants/certificates";

type Props = { title: string; subtitle: string; href: string; index: number };
const CertificateCard = ({ title, subtitle, href, index }: Props) => {
  const item = useAnimationVariants(staggerItem);
  return (
    <motion.li
      variants={item}
      className={`flex flex-col md:flex-row items-start max-md:gap-5 md:items-center justify-between p-5 font-courier [will-change:transform] ${(index + 1) % 2 === 0 && "bg-primary/10 rounded-lg border-l-1 border-primary"} `}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center border border-primary/30 bg-primary/15 p-3 rounded-md">
          <GrCertificate />
        </div>
        <div>
          <h3 className="text-foreground text-base">{title}</h3>
          <span className="text-sm text-muted-foreground">{subtitle}</span>
        </div>
      </div>
      <motion.div
        className="[will-change:transform]"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm  text-primary px-5 leading-tight border border-primary/20 rounded-md flex justify-center items-center gap-2 h-10"
        >
          verify <FaLongArrowAltRight className="size-3" />
        </Link>
      </motion.div>
    </motion.li>
  );
};
const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);

  return (
    <section className="relative flex flex-col gap-10 section-padding !pt-10 bg-radial from-[rgba(10,10,15,0.6)]/20 to-darkblue">
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Certifications
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.ul
        ref={ref}
        className="flex flex-col"
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {certificates.map((item, index) => (
          <CertificateCard {...item} index={index} key={index} />
        ))}
      </motion.ul>
    </section>
  );
};

export default Certificates;
