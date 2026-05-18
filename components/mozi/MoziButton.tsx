"use client";
import { AnimatePresence, motion } from "motion/react";
import DarkVeil from "../DarkVeil";
import Orb from "../Orb";

interface MoziButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MoziButton({ onClick, isOpen }: MoziButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-24 right-16 z-50 flex items-center justify-center gap-2 px-4 py-3 rounded-full  text-[#3ecf8e] font-mono text-sm shadow-lg shadow-black/40 "
      whileHover={{ scale: 1.05, borderColor: "rgba(62,207,142,0.6)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      aria-label="Open Mozi AI Assistant"
    >
      <div className={`absolute z-30 scale-60 ${isOpen && "hidden"}`}>
        <Orb
          hoverIntensity={0.3}
          rotateOnHover
          hue={73}
          forceHoverState
          backgroundColor="#000000"
        />
      </div>

      <div
        className={`absolute size-24 z-20 rounded-full overflow-hidden scale-70 ${isOpen && "hidden"}`}
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

      <AnimatePresence mode="wait">
        {isOpen ? null : (
          <>
            <motion.div
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                "flexe flex-row w-16 items-centerr justify-centerr text-[1rem] z-50 text-white absolute top-14"
              }
            >
              ✦ Mozi
              <span className={"text-[0.55rem] text-gray-300 hidden"}>
                AI Assistant
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
