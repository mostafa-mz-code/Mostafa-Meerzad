"use client";
import { useState, KeyboardEvent } from "react";
import { motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";

interface MoziInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function MoziInput({ onSend, isLoading }: MoziInputProps) {
  const [value, setValue] = useState("");

  function handleSend() {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex gap-2 p-4 border-t border-white/[0.06]">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, 500))}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything about Mostafa..."
        disabled={isLoading}
        className="flex-1 bg-[#0e0e18] border border-white/[0.08] rounded-md px-4 py-2.5 text-[13px] font-mono text-white/70 placeholder-white/20 outline-none focus:border-[#3ecf8e]/30 transition-colors disabled:opacity-50"
      />
      <motion.button
        onClick={handleSend}
        disabled={!value.trim() || isLoading}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
        className="px-4 py-2.5 rounded-md bg-[#3ecf8e] text-[#0a0a0f] font-mono text-[12px] font-bold disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {isLoading ? "..." : <FaArrowUp className={"size-3"} />}
      </motion.button>
    </div>
  );
}
