"use client";

import Link from "next/link";
import { motion } from "motion/react";

const NavItem = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <Link
        href={href}
        className="block p-3 hover:bg-zinc-600/10 active:bg-zinc-600/10 dark:hover:bg-zinc-800 dark:active:bg-zinc-800 rounded-lg"
      >
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </Link>
    </motion.div>
  );
};
export default NavItem;
