import React from "react";

const Header = () => {
  return (
    <section
      className={
        "flex flex-col md:flex-row justify-between items-center max-md:gap-5 relative section-padding "
      }
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        My work
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* -------------- title ------------ */}
      <h1 className={"flex md:flex-col text-5xl font-georgia"}>
        <span className={""}>Projects &</span>
        <span className={"text-primary"}>Products</span>
      </h1>

      <p
        className={
          "text-base text-muted-foreground/80 w-md text-center md:text-right font-courier"
        }
      >
        From production systems serving real clients to personal projects built
        for the love of building.
      </p>
      {/* <hr className={"w-[90%]  h-[1px] bg-muted/20 absolute bottom-0"} /> */}
    </section>
  );
};

export default Header;
