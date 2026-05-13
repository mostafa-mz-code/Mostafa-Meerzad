import React from "react";
import Image from "next/image";
import me from "../assets/me-vertical.png";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section
      className={
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-3 gap-y-8 md:gap-x-5 xl:gap-12 2xl:gap-0 section-padding section-padding pt-10 bg-gradient-to-b from-[rgba(10,10,15,0.6)]/5 to-darkblue relative "
      }
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        About Me
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      {/* --------------- image section---------------*/}
      <div
        className={" flex flex-col xl:col-start-1 xl:col-end-3 2xl:col-end-2"}
      >
        <div className="flex flex-col relative justify-center items-center max-md:mx-auto max-md:w-full   p-2 xl:p-4 pb-4 pr-4 md:pb-2 md:pr-2">
          <div className="absolute bg-transparent size-10 xl:size-16 top-0 left-0 border-secondary border-l border-t rounded-tl-[4px]"></div>
          <div className="absolute bg-transparent size-10 lg:size-16 bottom-0 right-0  border-primary/40 border-r-1 border-b-1 rounded-br-sm "></div>
          <Image
            src={me}
            alt={"me"}
            className={"  w-full h-full  object-contain"}
          />
        </div>
      </div>

      {/* ------------------ content section --------------- */}
      <div
        className={
          "xl:col-start-3 xl:col-end-6 2xl:col-span-2 flex flex-col justify-center items-center md:items-start gap-3 xl:p-10 xl:pt-0 "
        }
      >
        <h1
          className={
            "flex md:flex-col gap-2 text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-georgia  "
          }
        >
          <span className={"text-white"}>Mostafa</span>
          <span className={"text-primary "}>Meerzad</span>
        </h1>
        <h2
          className={
            "text-xs lg:text-sm  font-courier text-muted-foreground/60 xl:text-muted-foreground/30"
          }
        >
          Full-stack Engineer · Product-Focused · AI Curious
        </h2>
        <p
          className={
            "font-georgia text-sm lg:text-base text-[#c6c6c699] text-center md:text-start 2xl:w-4/6 max-w-[590px]  mt-4 leading-relaxed"
          }
        >
          Self-taught full-stack developer based in{" "}
          <strong className={"font-semibold text-white"}>
            Kabul, Afghanistan
          </strong>
          . I started in 2019 with a university seat and a lot of curiosity.
          When that path closed, I didn&apos;t stop — I opened a browser and
          <em className={"text-primary"}> taught myself </em> everything from
          scratch through FreeCodeCamp, YouTube, and relentless project
          building.
        </p>
        <hr className={"w-3/6 h-0.5 bg-muted/10"} />
        <p
          className={
            "font-georgia text-sm lg:text-base text-[#c6c6c699] text-center md:text-start 2xl:w-4/6 max-w-[590px]  mt-2 leading-relaxed"
          }
        >
          Now I&apos;m{" "}
          <em className={"text-white"}>shipping production software</em> for
          real clients at{" "}
          <strong className={"font-semibold text-primary"}>
            <Link
              href={"https://www.webistan.cloud"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Webistan.cloud
            </Link>
          </strong>{" "}
          — and I&apos;m open to my next challenge. I work across the full stack
          but what drives me is the final product: something that works
          reliably, feels polished, and makes sense to the person using it.
        </p>
        <hr className={"w-2/6 h-0.5 bg-darkblue/10"} />
        <p
          className={
            "font-georgia text-sm md:hidden lg:visible lg:text-base text-[#c6c6c699] text-center md:text-start 2xl:w-4/6 max-w-[590px] mt-2 leading-relaxed"
          }
        >
          <em className={"text-white"}>Clean UI isn&apos;t decoration</em> to me
          — it&apos;s part of the job. I&apos;m available for{" "}
          <strong className={"font-semibold text-white"}>remote roles</strong>{" "}
          or{" "}
          <strong className={"font-semibold text-white"}>
            onsite in Kabul
          </strong>{" "}
          — startups, product companies, or agencies that value people who take
          ownership and follow through.
        </p>
      </div>

      {/* ----------------- github account --------------- */}
      <div
        className={
          "md:col-span-2 xl:col-start-1 xl:col-end-6 2xl:col-start-3 px-5 md:pr-7  mt-10 2xl:pr-12  2xl:absolute self-center xl:self-end 2xl:items-end justify-center w-full h-full xl:h-fit 2xl:h-full flex flex-col md:flex-row max-md:items-center 2xl:flex-col md:items-center gap-10 md:gap-5 lg:gap-20 2xl:gap-5 perspective-normal max-md:pr-12"
        }
      >
        {/* ----------- old lost github account -------------- */}
        <div
          className={
            "flex flex-col justify-center gap-1.5 xl:gap-2 px-5 xl:px-8 py-2 md:py-5 bg-gradient-to-r from-transparent to-primary/30 rounded-xl w-sm md:w-[28rem] font-georgia text-sm  -rotate-y-16 relative md:self-end md:-top-5"
          }
        >
          <div
            className={
              "absolute inset-0 bg-gradient-to-r from-darkblue/70 to-black/5"
            }
          ></div>

          <div className="flex justify-between items-center ">
            <h2 className={"text-gray-300 font-georgia text-base"}>
              mostafa-meerzad
            </h2>
            <span
              className={
                "text-[#ffa55099] text-xs xl:text-sm font-georgia tracking-wider"
              }
            >
              lost access
            </span>
          </div>
          <span className={"text-muted-foreground"}>
            <strong className={"text-sx xl:text-base text-white"}>160+</strong>{" "}
            public repos{" "}
          </span>
          <span
            className={
              "text-muted-foreground font-courier text-xs xl:text-[0.76rem]"
            }
          >
            <strong className={"text-base text-white"}>6</strong>{" "}
            <strong className={"text-white"}>years</strong> of projects still
            publicly viewable
          </span>
          <div className={"flex justify-between"}>
            <span className={"text-mute text-xs xl:text-base"}>2020-2026</span>{" "}
            <span className={"uppercase font-courier text-xs tracking-wider"}>
              github account
            </span>
          </div>
        </div>

        {/* -------------- new github account ------------ */}
        <div
          className={
            "flex flex-col justify-center gap-2 md:gap-3 2xl:gap-2 px-5 xl:px-8 py-2 md:py-5 bg-gradient-to-r from-gray-800/30 to-primary/50 rounded-xl w-sm md:w-[28rem] font-georgia text-sm  -rotate-y-16 relative border-r border-r-primary"
          }
        >
          {/* <div
            className={
              "absolute inset-0 bg-gradient-to-r from-darkblue/70 to-black/5"
            }
          ></div> */}

          <div className="flex justify-between items-center ">
            <h2 className={"text-gray-300 font-georgia text-base"}>
              mostafa-mz-code
            </h2>
            <span
              className={"text-primary text-sm font-georgia tracking-wider"}
            >
              Active
            </span>
          </div>

          <span
            className={
              "text-muted-foreground font-courier text-xs xl:text-base"
            }
          >
            Production-focused work
          </span>
          <div className={"flex justify-between"}>
            <span className={"text-muted-foreground text-xs xl:text-base"}>
              CURRENT
            </span>{" "}
            <span className={"uppercase font-courier text-xs tracking-wider"}>
              github account
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
