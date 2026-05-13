import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const certificates = [
  {
    title: "Responsive Web Design",
    subtitle: "FreeCodeCamp · V8",
    href: "",
  },
  {
    title: "Front-End Development Libraries",
    subtitle: "FreeCodeCamp · V8",
    href: "",
  },
  {
    title: "Back-End Development and APIs",
    subtitle: "FreeCodeCamp · V8",
    href: "",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    subtitle: "FreeCodeCamp · V7",
    href: "",
  },
  {
    title: "Full Stack Development Internship",
    subtitle: "Coding Samurai · 2025",
    href: "",
  },
];

type Props = { title: string; subtitle: string; href: string; index: number };
const CertificateCard = ({ title, subtitle, href, index }: Props) => {
  return (
    <li
      className={`flex flex-col md:flex-row items-start max-md:gap-5 md:items-center justify-between p-5 font-courier ${(index + 1) % 2 === 0 && "bg-primary/10 rounded-lg border-l-1 border-primary"} `}
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
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-sm  text-primary px-5 leading-tight border border-primary/20 rounded-md flex justify-center items-center gap-2 h-10"
      >
        verify <FaLongArrowAltRight className="size-3" />
      </Link>
    </li>
  );
};
const Certificates = () => {
  return (
    <section className="relative flex flex-col gap-10 section-padding !pt-10 bg-radial from-[rgba(10,10,15,0.6)]/20 to-darkblue">
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Certifications
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* ------------- certificates --------------- */}

      <ul className="flex flex-col">
        {certificates.map((item, index) => (
          <CertificateCard {...item} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
