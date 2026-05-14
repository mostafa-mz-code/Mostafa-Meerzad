"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NavMenuTriggerLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      className="inline-flex [will-change:transform]"
      whileHover={{ color: "#3ecf8e" }}
      transition={{ duration: 0.15 }}
    >
      <Link href={href} className="[color:inherit] no-underline">
        {children}
      </Link>
    </motion.span>
  );
}
