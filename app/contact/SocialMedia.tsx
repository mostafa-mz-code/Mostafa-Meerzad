import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { socialMedia } from "../constants/socialMedia";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div
      className={
        "flex flex-col gap-5 md:gap-8 p-5 md:p-10 font-courier text-muted-foreground/85"
      }
    >
      <p>
        I&apos;m currently open to{" "}
        <strong className={"text-white"}>full-time remote roles</strong> and
        onsite opportunities in Kabul. If you&apos;re building something
        interesting and need a developer who takes ownership —{" "}
        <strong className={"text-white"}>let&apos;s talk. </strong>
      </p>

      <div
        className={
          "flex flex-row items-center gap-3 border rounded-lg p-5 text-sm bg-gradient-to-tl from-primary/5 border-primary/10"
        }
      >
        <IoMdStopwatch className={"text-primary/70"} />
        <div className={"flex flex-col"}>
          <span>Typical response time: under 24 hours.</span>
          <span className={"text-muted-foreground/50"}>
            {" "}
            Prefer a quick call? WhatsApp works great.
          </span>
        </div>
      </div>

      <ul className={"flex flex-col bg-gray-900/20 overflow-hidden gap-2"}>
        {socialMedia.map(
          ({ Img, btnLabel, label, href, link, opts, diff }, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-5 gap-5  ${index % 2 === 0 ? "bg-gradient-to-r from-primary/20 border-l border-primary/70 rounded-lg" : " bg-gradient-to-l from-gray-800/20 border-r border-gray-800 rounded-lg"}`}
            >
              <div className={"flex items-center justify-center gap-3"}>
                <Img
                  className={`size-10 border rounded-md p-2.5 ${diff ? " border-gray-500/30 bg-gray-500/10" : "border-primary/20 bg-primary/10"}`}
                />
                <div className={"flex flex-col items-start justify-center"}>
                  <span className={"text-base "}>{label}</span>
                  <span className={"text-xs"}>{link}</span>
                </div>
              </div>

              <Link
                href={href}
                {...opts}
                className={`flex items-center justify-center gap-1.5  border ${diff ? "border-gray-500/30" : "border-primary/30"}  rounded-sm text-xs py-1.5 px-4 cursor-pointer`}
              >
                {btnLabel}{" "}
                <GoArrowUpRight
                  className={`${diff ? "text-muted-foreground/80" : "text-primary/60"}`}
                />
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default SocialMedia;
