"use client";
import { motion, AnimatePresence } from "motion/react";
import MoziChat from "./MoziChat";

interface MoziModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MoziModal({ isOpen, onClose }: MoziModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed items-center justify-center inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-10 md:top-32 lg:top-auto lg:bottom-40 right-0 left-0 mx-auto z-50 w-[95%] md:w-xl lg:w-3xl h-[75vh]  lg:h-[35rem]  bg-[#0a0a0f] border border-primary/70 lg:border-primary/30 rounded-xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col "
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0e0e18] ">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 flex items-center justify-center text-[#3ecf8e] text-xs">
                  ✦
                </div>
                <div>
                  <div className="text-[13px] font-mono text-white/80">
                    Mozi
                  </div>
                  <div className="text-[10px] font-mono text-white/30">
                    Mostafa&apos;s AI assistant
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white/60 font-mono text-lg transition-colors leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="flex-1 min-h-0 ">
              <MoziChat />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
