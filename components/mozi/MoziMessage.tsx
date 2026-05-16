import { motion } from "motion/react";

interface MoziMessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function MoziMessage({ role, content }: MoziMessageProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[80%] px-4 py-3 rounded-lg font-mono text-[13px] leading-relaxed
          ${
            isUser
              ? "bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 text-[#3ecf8e]"
              : "bg-[#13131f] border border-white/[0.06] text-white/70"
          }
        `}
      >
        {content}
      </div>
    </motion.div>
  );
}
