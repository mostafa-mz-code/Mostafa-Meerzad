"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mobile from "../assets/chatty-mobile.webp";
import desktop from "../assets/chatty-desktop.webp";
import { Card, CardContent } from "@/components/ui/card";
import TechStacks from "../_components/TechStacks";
import { motion, useInView } from "motion/react";
import { scaleIn } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

const FeaturedProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scale = useAnimationVariants(scaleIn);

  const techs = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
  ];
  return (
    <section
      className={
        "grid xl:grid-cols-2   section-padding bg-gradient-to-r from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)] relative "
      }
    >
      <div className="flex justify-center items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        featured work
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.div
        ref={ref}
        variants={scale}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={"flex flex-col gap-8 [will-change:transform]"}
        transition={{ duration: 0.2 }}
      >
        <div
          className={
            "bg-primary/15 text-primary border border-primary/40 w-fit px-4 py-0.5 text-xs rounded-full font-courier"
          }
        >
          Professional · Webistan.cloud
        </div>
        <h2 className={"text-3xl font-georgia"}>POS System</h2>
        <p
          className={
            "text-muted-foreground font-light font-courier text-sm lg:max-w-4/5"
          }
        >
          Full-stack point-of-sale platform for a local pet supplies business.
          Manages sales, inventory, suppliers, customers, deliveries, and
          reporting across multiple branches. Currently live across 3 branches.
        </p>
        <ul className="flex justify-start flex-wrap gap-1.5">
          {techs.map((tech, index) => (
            <TechStacks tech={tech} key={index} />
          ))}
        </ul>

        <div className="flex gap-8 md:gap-4  ">
          <Button
            variant={"outline"}
            disabled={true}
            className={"text-muted-foreground w-[45%]"}
          >
            Internal App
          </Button>
        </div>
      </motion.div>

      <motion.div
        className={
          "flex justify-center items-center max-xl:mt-14  sm:px-5 md:px-20 [will-change:transform]"
        }
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Carousel className="w-full  ">
          <CarouselContent className="-ml-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" pl-1 lg:basis-full ">
                <div className="">
                  <Card>
                    <CardContent className=" h-[28rem] md:h-[19rem]">
                      <Image
                        src={desktop}
                        alt={"project"}
                        className={
                          "size-full max-md:hidden  object-cover rounded-md"
                        }
                      />
                      <Image
                        src={mobile}
                        alt={"project"}
                        className={
                          "size-full md:hidden object-cover rounded-sm"
                        }
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"max-md:hidden text-primary"} />
          <CarouselNext className={"max-md:hidden text-primary"} />
        </Carousel>
      </motion.div>
    </section>
  );
};
export default FeaturedProject;
