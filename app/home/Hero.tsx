import React from "react";
import { Button } from "@/components/ui/button";
import me from "../assets/me-vertical.png";
import Image from "next/image";

const CTAButtons = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex flex-wrap max-md:justify-center lg:flex-row gap-4 ${className}`}
    >
      <Button className={""} variant={"default"}>
        See My Work
      </Button>
      <Button className={""} variant={"outline"}>
        Download Resume
      </Button>
      <Button className={""} variant={"outline"}>
        Ask My AI *
      </Button>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className={
        "flex flex-col md:flex-row justify-between items-center mx-auto md:gap-10 max-md:gap-8 max-md:py-16 py-14 padding"
      }
    >
      <div className=" flex flex-col justify-center -mt-16 items-start gap-10 md:w-1/2 max-md:justify-center max-md:items-center max-md:text-center relative">
        {/*------------ badge --------------*/}
        <div
          className={
            " flex justify-center items-center gap-2 text-primary max-md:hidden "
          }
        >
          <div className={"w-4 h-[1px] bg-primary"} />
          <h2 className="text-xs font-courier font-light pt-1 ">
            Full Stack Developer
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-5 md:flex-col md:items-start">
            <h1 className=" text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-georgia ">
              Mostafa
            </h1>
            <h1 className="text-primary text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-georgia">
              Meerzad
            </h1>
          </div>
          {/*------------- tech stacks ------------*/}
          <div
            className={
              "text-sm  md:text-sm lg:text-base xl:text-lg text-[#fff5] font-courier font-light "
            }
          >
            JS · TS · MERN · PERN · Next.js · React Native
          </div>

          <p
            className={
              "font-georgia text-sm lg:text-base text-[#ffffff99] w-4/5 max-md:mx-auto lg:w-4/5 lg:max-w-[33rem] xl:w-2/4 xl:max-w-[64rem] xl:min-w-[30rem] mt-4 leading-relaxed"
            }
          >
            Self-taught in Kabul. Built{" "}
            <strong className={"text-white"}>production apps</strong> used by
            real businesses. Top 10 GitHub committer in Afghanistan. Now
            shipping at <strong className={"text-white"}>Webistan.cloud</strong>{" "}
            — looking for my next challenge.
          </p>
        </div>

        <CTAButtons className={"max-md:hidden"} />
      </div>

      <div className="flex flex-col relative justify-center items-center max-md:mx-auto max-md:w-4/5 w-1/2 lg:w-3/5 lg:h-fit lg:min-w-[25rem] lg:max-w-2/5 p-2 xl:p-4 pb-4 pr-4 md:pb-8 md:pr-8 xl:pb-12 xl:pr-12">
        <div className="absolute bg-transparent size-10 xl:size-16 top-0 left-0 border-secondary border-l border-t rounded-tl-[4px]"></div>
        <div className="absolute bg-transparent size-16 lg:size-28 xl:size-40 bottom-0 right-0  border-primary border-r-2 border-b-2 rounded-br-sm lg:rounded-br-md"></div>
        <Image
          src={me}
          alt={"me"}
          className={"  w-full h-full  object-contain"}
        />
      </div>
      <CTAButtons className={"md:hidden"} />
    </div>
  );
};
export default Hero;
