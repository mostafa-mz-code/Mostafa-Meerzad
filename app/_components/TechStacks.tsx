import React from "react";

const TechStacks = ({ tech}: { tech:string}) => {
  return (
    <li
      className={
        "border border-muted-foreground/20 text-muted-foreground/60 py-0.5 px-3 rounded-full font-courier text-[12px]"
      }

    >
      {tech}
    </li>
  );
};
export default TechStacks;
