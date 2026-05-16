"use client";
import { useState } from "react";
import MoziButton from "./MoziButton";
import MoziModal from "./MoziModal";

export default function MoziWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MoziModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <MoziButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
}
