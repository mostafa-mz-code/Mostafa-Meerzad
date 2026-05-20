"use client";

import { motion } from "motion/react";
import MobileDrawer from "./MobileDrawer";
import ModeToggle from "./ModeToggle";
import Name from "./Name";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center  p-5 px-3 md:px-8 lg:px-12"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
    >
      <Name />
      <div className="md:flex gap-3 items-center hidden">
        <Navigation />
      </div>
      <MobileDrawer />
    </motion.nav>
  );
};

export default Navbar;
