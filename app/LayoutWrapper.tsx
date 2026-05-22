"use client";

import ClickSpark from "@/components/ClickSpark";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useNotFound } from "./context/NotFoundContext";

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();
  const { isNotFound } = useNotFound(); // Destructure state

  // Set your backgrounds dynamically based on page or 404 state
  const backgroundClass = (() => {
    if (isNotFound) {
      return "bg-[url('/bg-404.webp')]"; // Your 404 background
    }
    return "bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-dark.png')] md:dark:bg-[url('/bg-home-dark.png')]";
  })();

  const isProjectsOrContactPage =
    pathname.startsWith("/projects") || pathname.startsWith("/contact");

  return (
    <div
      className={`relative mx-auto bg-contain md:bg-cover bg-repeat-y ${backgroundClass}`}
    >
      {isProjectsOrContactPage && !isNotFound && (
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      )}

      <div className="relative z-10">
        <ClickSpark
          sparkColor="#10B981"
          sparkSize={10}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
        >
          {children}
        </ClickSpark>
      </div>
    </div>
  );
}
