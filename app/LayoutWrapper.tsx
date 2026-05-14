"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();

  // const backgroundClass = (() => {
  //   if (pathname === "/")
  //     return "dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

  //   if (pathname.startsWith("/about"))
  //     return "dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

  //   if (pathname.startsWith("/projects"))
  //     return "dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

  //   if (pathname.startsWith("/contact"))
  //     return "dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

  //   return "bg-[url('/bg-default.webp')]";
  // })();

  const isProjectsOrContactPage =
    pathname.startsWith("/projects") || pathname.startsWith("/contact");

  return (
    <div
      className={`relative mx-auto bg-contain md:bg-cover bg-repeat-y ${"bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]"}`}
    >
      {isProjectsOrContactPage && (
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
