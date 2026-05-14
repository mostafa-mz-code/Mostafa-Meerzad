"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();

  const backgroundClass = (() => {
    if (pathname === "/")
      return "bg-[url('/bg-home-light-mobile.jpg')] dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

    if (pathname.startsWith("/about"))
      return "bg-[url('/bg-home-light-mobile.jpg')] dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

    if (pathname.startsWith("/projects"))
      return "bg-[url('/bg-home-light-mobile.jpg')] dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

    if (pathname.startsWith("/contact"))
      return "bg-[url('/bg-home-light-mobile.jpg')] dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')]";

    return "bg-[url('/bg-default.webp')]";
  })();

  const isProjectsOrContactPage =
    pathname.startsWith("/projects") || pathname.startsWith("/contact");

  return (
    <div className={`relative mx-auto bg-cover bg-repeat-y ${backgroundClass}`}>
      {isProjectsOrContactPage && (
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
