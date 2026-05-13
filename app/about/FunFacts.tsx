import React from "react";
import { IconType } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import { GiFullMotorcycleHelmet, GiGamepad, GiTinker } from "react-icons/gi";
type Fact = {
  title: string;
  desc: string;
  icon: IconType;
};

const facts: Fact[] = [
  {
    title: "Gamer",
    desc: "GTA, COD, story-driven chaos — gaming is my favorite way to unwind and explore creative worlds.",
    icon: GiGamepad,
  },
  {
    title: "Tinkerer",
    desc: "I naturally look for hidden potential in things. If it can be opened, customized, or improved, I've probably tried it.",
    icon: GiTinker,
  },
  {
    title: "Bike enthusiast",
    desc: "Adventure rides, late-night tuning, engine sounds — I love bikes. Debugging code and fixing machines feel surprisingly similar.",
    icon: GiFullMotorcycleHelmet,
  },
  {
    title: "Creative roots",
    desc: "Growing up with a designer brother and painter sister made creativity part of everyday life. Good design feels personal to me.",
    icon: FaPaintbrush,
  },
];

type Props = { title: string; desc: string; icon: IconType; index: number };
const FactCard = ({ title, desc, icon: Icon, index }: Props) => {
  return (
    <li
      className={`flex flex-col gap-3 p-5 font-georgia ${index % 2 !== 0 ? "bg-primary/20 rounded-lg" : "bg-muted/30 rounded-lg"}`}
    >
      <Icon className={"text-primary size-5"} />
      <h3 className={"text-xl text-foreground"}>{title}</h3>
      <p className={"text-muted-foreground text-sm font-courier"}>{desc}</p>
    </li>
  );
};
const FunFacts = () => {
  return (
    <section className="relative flex flex-col gap-10 section-padding !pt-10 bg-radial from-[rgba(10,10,15,0.6)]/20 to-darkblue">
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        A bit more about me
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* ------------ more about me ------------- */}
      <ul className={"flex flex-col md:flex-row mt-5 gap-1"}>
        {facts.map((item, index) => (
          <FactCard {...item} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default FunFacts;
