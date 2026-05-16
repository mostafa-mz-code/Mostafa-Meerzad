"use client";
import { motion, AnimatePresence } from "motion/react";

interface MoziButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function MoziButton({ onClick, isOpen }: MoziButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#0e0e18] border border-[#3ecf8e]/30 text-[#3ecf8e] font-mono text-sm shadow-lg shadow-black/40"
      whileHover={{ scale: 1.05, borderColor: "rgba(62,207,142,0.6)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      aria-label="Open Mozi AI Assistant"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]" />
      </span>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Close
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✦ Ask Mozi
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
