// import React from "react";

// const NotFound = () => {
//   return (
//     <section
//       className={
//         "h-[75svh] flex justify-center items-center bg-gradient-to-b from-0% to-black"
//       }
//     >
//       <div className={"flex flex-col justify-center items-center gap-5"}>
//         <span className={"!text-3xl scale-150"}>
//           <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
//             404
//           </FuzzyText>
//         </span>
//         <span className={"scale-30 font-courier"}>
//           <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
//             not found
//           </FuzzyText>
//         </span>
//       </div>
//     </section>
//   );
// };

// export default NotFound;

// app/not-found.tsx
"use client";

import FuzzyText from "@/components/FuzzyText";

import { useEffect } from "react";

import Link from "next/link";
import { useNotFound } from "./context/NotFoundContext";

export default function NotFound() {
  const { setIsNotFound } = useNotFound();

  useEffect(() => {
    setIsNotFound(true);
    // Reset state when navigating away
    return () => setIsNotFound(false);
  }, [setIsNotFound]);

  return (
    <section className={"h-[85svh] flex justify-center items-center "}>
      <div className={"flex flex-col justify-center items-center gap-5"}>
        <span className={"!text-3xl scale-200 md:scale-150"}>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            404
          </FuzzyText>
        </span>
        <span className={"scale-50 md:scale-30 font-courier"}>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            not found
          </FuzzyText>
        </span>
        <Link
          href={"/"}
          className={
            "font-courier capitalize text-primary/80 -mt-2 md:-mt-5 hover:text-primary hover:scale-105 transition-all "
          }
        >
          go home
        </Link>
      </div>
    </section>
  );
}
