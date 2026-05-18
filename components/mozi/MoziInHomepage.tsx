"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import DarkVeil from "../DarkVeil";
import Orb from "../Orb";
import MoziModal from "./MoziModal";

const MoziInHomepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MoziModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`relative flex justify-center items-center  bg-radial from-black/80 to-transparent   text-[#3ecf8e] font-mono text-sm  w-36 py-[1.08rem] overflow-hidden rounded-md border-primary/30 border`}
        aria-label="Open Mozi AI Assistant"
        whileHover={{ scale: 1.05, borderColor: "rgba(62,207,142,0.6)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        <div className={"absolute overflow-hidden z-20 top-0 h-sm  "}>
          <DarkVeil
            hueShift={52}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.8}
            scanlineFrequency={0.8}
            warpAmount={2.9}
          />
          <div className={`absolute z-30 scale-60 hidden`}>
            <Orb
              hoverIntensity={0.3}
              rotateOnHover
              hue={73}
              forceHoverState
              backgroundColor="#000000"
            />
          </div>
          <div
            className={`absolute size-24  rounded-full overflow-hidden scale-70 hidden`}
          >
            <div className={" w-md h-md"}>
              <DarkVeil
                hueShift={52}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={0.8}
                scanlineFrequency={0.8}
                warpAmount={2.9}
              />
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={"z-20 absolute"}
          >
            ✦ Ask Mozi
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default MoziInHomepage;
