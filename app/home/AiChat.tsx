import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowUp, FaLocationArrow } from "react-icons/fa";
import StarBorder from "@/components/StarBorder";

const AiChat = () => {
  const messages = [
    { msg: "Does he know PostgreSQL?", from: "user" },
    {
      msg: "Yes — Mostafa uses PostgreSQL with Prisma ORM and has shipped it in production at Webistan.cloud.",
      from: "system",
    },
    { msg: "Is he open to remote work?", from: "user" },
    {
      msg: "Yes, fully remote or onsite in Kabul, Afghanistan.",
      from: "system",
    },
  ];
  return (
    <section
      className={
        "section-padding  bg-gradient-to-r from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)] !pt-14 relative "
      }
    >
      <div
        className={
          "text-[#378add] font-courier uppercase text-xs badge-position absolute"
        }
      >
        ✦ AI-powered
      </div>
      <div
        className={
          "flex flex-col lg:flex-row gap-16 lg:gap-5 justify-between  "
        }
      >
        {/*--------- AI chat ----------*/}
        <div className={"flex flex-col items-start gap-4 mt-14"}>
          <h1 className={"text-2xl font-georgia"}>Ask me anything</h1>

          <p
            className={"text-sm text-muted-foreground/70 font-courier max-w-xl"}
          >
            Don&#39;t want to scroll? Ask my AI assistant about my experience,
            projects, stack, or availability. It knows everything about my work
            — and nothing else.
          </p>

          <Button
            className={"!border-[#378add] !px-10 mt-10 "}
            variant={"outline"}
          >
            Start Chat <FaLocationArrow className={"size-3 text-[#378add]"} />
          </Button>

          {/*<StarBorder*/}
          {/*  as="button"*/}
          {/*  className=" text-xs font-courier p-0 "*/}
          {/*  color="cyan"*/}
          {/*  speed="4s"*/}
          {/*  thickness={3}*/}
          {/*>*/}
          {/*  <div className={"flex justify-around items-center gap-4 mx-5 "}>*/}
          {/*    Start Chat*/}
          {/*    <FaLocationArrow className={"size-3 text-[#378add]"} />*/}
          {/*  </div>*/}
          {/*</StarBorder>*/}
        </div>

        {/* ------------ chat sample ----------*/}
        <div className={"min-w-sm border bg-darkblue/70 p-6 rounded-lg "}>
          <ul className={"list-none flex flex-col gap-3 w-lg"}>
            {messages.map(({ msg, from }, index) => (
              <li
                key={index}
                className={`text-xs border-[0.5px] w-fit max-w-sm py-2 px-3 rounded-sm font-courier ${from === "user" ? "bg-lightblue/20 text-[#378add] text-right self-end" : " border-gray-600 bg-gray-800 text-gray-300/70 self-start"}`}
              >
                {msg}
              </li>
            ))}
          </ul>

          <hr className={"my-5"} />

          <div
            className={
              "flex items-center gap-4 border rounded-full py-2 px-3 bg-muted-foreground/10 "
            }
          >
            <p
              className={
                "text-sm font-georgia text-muted-foreground w-full mx-4"
              }
            >
              Ask me anything
            </p>
            <div
              className={
                "border border-lightblue bg-lightblue w-fit p-2 rounded-full"
              }
            >
              <FaArrowUp className={"size-3"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AiChat;
