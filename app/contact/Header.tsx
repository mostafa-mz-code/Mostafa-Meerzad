import React from "react";

const Header = () => {
  return (
    <section
      className={
        "flex flex-colflex-row justify-between items-center max-md:gap-5 relative section-padding  "
      }
    >
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Get in touch
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      {/* -------------- title ------------ */}
      <h1 className={"flex flex-col text-[3.1rem] leading-tight font-georgia"}>
        <span className={""}>Let&apos;s</span>
        <span className={"text-primary"}>Talk</span>
      </h1>

      <div
        className={
          "flex flex-col items-end text-xs md:text-[0.85rem] text-muted-foreground/70 w-fit text-center md:text-right font-courier border border-primary/50 rounded-lg p-6 pl-14 bg-primary/5 shadow-2xl shadow-primary/10"
        }
      >
        <span className={"flex items-center justify-between gap-2"}>
          {" "}
          <div
            className={"size-1.5 bg-primary rounded-full animate-pulse"}
          />{" "}
          Available for new roles
        </span>
        <span>Remote · worldwide</span>
        <span>Onsite · Kabul, Afghanistan</span>
        <span>Open to full-time positions</span>
      </div>
    </section>
  );
};

export default Header;
