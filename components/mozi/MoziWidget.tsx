"use client";
import { useState } from "react";
import MoziButton from "./MoziButton";
import MoziModal from "./MoziModal";
import { usePathname } from "next/navigation";

export default function MoziWidget() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathName !== "/")
    return (
      <>
        <MoziModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <MoziButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </>
    );
}
