import { productionProjects, ProductionType } from "@/app/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowTurnUp } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = ProductionType & { index: number };
const Project = ({
  name,
  description,

  desktopImg,
  mobileImg,
  preview,
  technologies,
  badges,
  isPublic,
  subtitle,
  index: i,
}: Props) => {
  const isEven = i % 2 === 0;
  return (
    <li className=" ">
      <Card
        className={`grid grid-cols-1 max-lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-[28rem] border-0 p-0  ${isEven ? "bg-gradient-to-r border-l-2 border-l-primary" : "bg-gradient-to-l border-r-2 border-r-primary"} from-primary/20 to-[rgba(10,10,15,0.9)] relative`}
      >
        {/* <Card
        className={`grid grid-cols-2 grid-rows-[28rem]  p-0  ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)] relative`}
      > */}
        {/* ----------- content --------------- */}
        <div
          className={`max-lg:row-start-1 max-lg:row-end-2 ${isEven ? "lg:col-start-2 lg:pl-2" : "lg:col-start-1 lg:pr-2"} row-start-1 flex flex-col h-full items-start justify-around gap-5 px-5 py-8 lg:p-10`}
        >
          {/* --------------- badges ------------- */}
          <ul className={"flex flex-wrap lg:flex-row gap-3"}>
            {badges.map((item, index) => (
              <li
                key={index}
                className={` px-4 py-1 border rounded-full text-muted-foreground text-[.7rem] font-courier w-fit ${index === 0 ? "bg-primary/20 border-primary/40" : "bg-muted/70 border-muted-foreground/20"}`}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* ----------------- title and subtitle -------------- */}
          <h2 className="text-3xl font-semibold font-georgia">{name}</h2>
          <h3
            className={
              "flex items-center justify-center gap-2 text-[.8rem] text-primary/50 font-courier"
            }
          >
            <FaArrowTurnUp className={"size-3 rotate-90"} />
            {subtitle}
          </h3>
          {/* ---------------- description -------------- */}
          <p className=" text-base text-muted-foreground/80 lg:text-start font-courier ">
            {description}
          </p>
          <ul className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <li key={tech}>
                <Badge
                  className={
                    "text-muted-foreground/60 bg-muted/30 !border border-gray-600/30 px-3 py-0.5 rounded-full text-[0.7rem]"
                  }
                >
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
          <div className="flex  gap-10 w-full justify-start">
            {isPublic && preview ? (
              <Link
                href={preview.href}
                target="_blank"
                rel={"noopener noreferrer"}
                className={
                  "flex  justify-center items-center  gap-2 border-primary bg-primary/20 text-primary !px-5 !py-2 rounded-md font-courier text-sm"
                }
              >
                {preview.title} <MdOutlineArrowOutward />
              </Link>
            ) : (
              <div
                className={
                  "px-5 py-2 bg-darkblue/20 text-muted-foreground/50 text-xs border rounded-md font-courier"
                }
              >
                Internal · not public
              </div>
            )}
          </div>
        </div>
        {/* ------------ spacer ------------- */}
        {/* <hr */}
        {/* className={"absolute left-0 right-0 mx-auto w-[1px] h-full bg-muted "} */}
        {/* /> */}
        {/* --------------- Image --------------- */}
        <div
          className={`max-lg:row-start-2 max-lg:row-end-3 ${isEven ? "lg:col-start-1 lg:pr-0 lg:pl-8" : "lg:col-start-2 lg:pl-0 lg:pr-8"} row-start-1 px-5 pb-8  lg:py-10 `}
        >
          <Image
            width={800}
            height={800}
            placeholder="blur"
            aria-label="card-image"
            alt={name}
            src={desktopImg}
            className="w-full h-full object-cover object-top-left rounded-lg hidden sm:block sm:object-center"
          />
          <Image
            width={400}
            height={400}
            placeholder="blur"
            aria-label="card-image"
            alt={name}
            src={mobileImg}
            className="w-full h-full object-cover object-top rounded-lg sm:hidden"
          />
        </div>
      </Card>
    </li>
  );
};

const ProjectsList = ({ limit }: { limit?: number }) => {
  return (
    <section className={"relative flex flex-col"}>
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Professional work · Webistan.cloud
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      {/* --------------- production project ------------- */}

      <ul className="flex flex-col gap-2 section-padding  relative ">
        {productionProjects.slice(0, limit).map((item, index) => (
          <Project {...item} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
