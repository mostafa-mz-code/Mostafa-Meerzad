import React from "react";

const About = () => {
  const info = [
    { item: "4", addon: "+", desc: "years of experience" },
    { item: "160", addon: "+", desc: "public repos" },
    { item: "top", addon: "10", desc: "github · committer" },
    { item: "2", addon: null, desc: "professional apps shipped" },
  ];
  return (
    <div
      className={
        "flex max-md:flex-wrap justify-around gap-4 lg:justify-between lg:items-stretch my-5  w-full padding  "
      }
    >
      {info.map(({ item, addon, desc }, index) => (
        <div
          key={index}
          className={"borde lg:w-full lg:h-full min-h-32 px-10 py-5 "}
        >
          <div className="text-3xl lg:text-4xl font-georgia capitalize mb-2">
            {item}{" "}
            <span
              className={
                "text-primary text-2xl lg:text-2xl font-light font-georgia -mx-2"
              }
            >
              {addon}
            </span>{" "}
          </div>
          <p className=" text-[10px] lg:text-xs font-georgia text-muted-foreground uppercase w-24 md:w-20 lg:w-36 [word-spacing:5px]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
};
export default About;
