import React from "react";
import { socialMedia } from "./constants/socialMedia";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center border-t p-8 px-3 md:px-8 lg:px-12 bg-darkblue text-muted-foreground">
      <h2 className="font-courier text-sm tracking-widest text-muted-foreground/50">
        Mostafa Meerzad · Full Stack Developer
      </h2>
      <ul className="flex justify-center gap-5">
        {socialMedia
          .slice(0, 4)
          .map(({ Img, hover, href, opts: { ariaLabel, rel, target } }) => (
            <li key={href}>
              <Link
                href={href}
                rel={rel}
                target={target}
                aria-label={ariaLabel}
                className={"border py-2 px-3 text-sm font-courier rounded-sm"}
              >
                {/*<Tooltip>*/}
                {/*  <TooltipTrigger asChild>*/}
                {/*    <Img className="size-[25px]" />*/}
                {/*  </TooltipTrigger>*/}
                {/*  <TooltipContent className="font-semibold">*/}
                {hover}
                {/*  </TooltipContent>*/}
                {/*</Tooltip>*/}
              </Link>
            </li>
          ))}
      </ul>
    </footer>
  );
};

export default Footer;
