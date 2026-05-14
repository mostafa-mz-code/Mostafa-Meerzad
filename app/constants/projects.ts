import { StaticImageData } from "next/image";
import chattyMobile from "../assets/chatty-mobile.webp";
import gameHubMobile from "../assets/game-hub-mobile.webp";
import promptopiaMobile from "../assets/promptopia-mobile.webp";
import spaceTourismMobile from "../assets/space-tourism-mobile.webp";
import urlShortenerMobile from "../assets/urlshortener-mobile.webp";

import chattyDesktop from "../assets/chatty-desktop.webp";
import gameHubDesktop from "../assets/game-hub-desktop.webp";
import posSystemDesktop from "../assets/pos-system-desktop.webp";
import promptopiaDesktop from "../assets/promptopia-desktop.webp";
import shereadsDesktop from "../assets/shereads-desktop.webp";
import spaceTourismDesktop from "../assets/space-tourism-desktop.webp";
import urlShortenerDesktop from "../assets/urlshortener-desktop.webp";

export type ProjectType = {
  name: string;
  description: string;
  desktopImg: StaticImageData;
  mobileImg: StaticImageData;
  technologies: string[];
  github?: string | null;
  preview?: string | null;
  type?: string;
};

export type ProductionType = Omit<ProjectType, "preview"> & {
  badges: string[];
  isPublic: boolean;
  subtitle: string;
  preview?: { href: string; title: string };
};

const productionProjects: ProductionType[] = [
  {
    name: "POS System",
    subtitle: "My role: Full-stack · Backend-heavy",
    badges: [" Production", "Webistan.cloud", "Backend focus"],
    description:
      "Custom point-of-sale platform built for a local pet supplies business. Manages sales, inventory, customers, suppliers, deliveries, and multi-branch operations — with no branch limit. Currently live across 3 branches with full management control.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Zustand",
      "ShadCN",
      "Tailwind",
      "Framer Motion",
    ],
    isPublic: false,
    desktopImg: posSystemDesktop,
    mobileImg: posSystemDesktop,
  },
  {
    name: "SheReads",
    subtitle: " My role: Full frontend · Admin panel",
    badges: [" Production", "Webistan.cloud", "Frontend focus"],
    description:
      "Online reading platform serving users globally. Features book discovery, preference-based recommendations, search and filtering, and a full admin panel for content and user management.",
    technologies: [
      "Next.js",
      "MySQL",
      "Prisma",
      "ShadCN",
      "Tailwind",
      "Framer Motion",
    ],
    preview: { href: "https://shereadsapp.com", title: "shereads.com" },
    isPublic: true,

    desktopImg: shereadsDesktop,
    mobileImg: shereadsDesktop,
  },
];

const personalProjects: ProjectType[] = [
  {
    type: "01 · Full Stack",
    name: "Promptopia",
    description:
      "AI prompt sharing platform. Users create, manage, and discover high-quality prompts. Full auth, CRUD, and a responsive prompt explorer — built with the PERN stack.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Axios",
      "PostgreSQL",
      "Radix UI",
      "Zod",
      "Tailwindcss",
    ],
    github: "https://github.com/mostafa-meerzad/promptopia.git",
    preview: "https://promptopia-black-beta.vercel.app",
    desktopImg: promptopiaDesktop,
    mobileImg: promptopiaMobile,
  },
  {
    type: "02 · Full Stack",
    name: "Game Hub",
    description:
      "Video game discovery platform with search, genre and platform filtering. Built with React 18, TypeScript, and React Query — focused on fast UI and clean state management.",
    technologies: [
      "React.js",
      "TypeScript",
      "Radix UI",
      "React Query",
      "Zustand",
      "Tailwindcss",
    ],
    github: "https://github.com/mostafa-meerzad/game-hub.git",
    preview: "https://game-hub-psi-khaki.vercel.app/",
    desktopImg: gameHubDesktop,
    mobileImg: gameHubMobile,
  },
  {
    type: "03 · Full Stack · Real-time",
    name: "Chatty",
    description:
      "Real-time chat app with the MERN stack and Socket.io. Auth, scalable messaging, and responsive UI. Built during Coding Samurai internship — focused on performance and security.",
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Socket.io",
      "Express.js",
      "axios",
      "Tailwindcss",
    ],

    github: "https://github.com/mostafa-meerzad/realtime-chat-app.git",
    preview: "https://realtime-chat-app-r0wc.onrender.com/",
    desktopImg: chattyDesktop,
    mobileImg: chattyMobile,
  },
  {
    type: "04 · Frontend · Landing page",
    name: "Space Tourism",
    description:
      "A sleek, multi-page space tourism website built with Next.js 13 App Router, Tailwind CSS, and TypeScript. This project showcases a modern frontend architecture, dynamic routing, responsive layouts, and clean UI inspired by the original Frontend Mentor challenge. ",
    technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
    github: "https://github.com/mostafa-meerzad/space-tourism-next.js.git",
    preview: "https://space-tourism-mocha-three.vercel.app/",
    desktopImg: spaceTourismDesktop,
    mobileImg: spaceTourismMobile,
  },

  // {
  //   type: "05 · Full Stack · Feature Rich",
  //   name: "Issue Tracker",
  //   description:
  //     "A full-featured Issue Tracking System built with Next.js 14, TypeScript, Prisma, and MySQL. Designed for developers and teams to manage bugs, tasks, and feature requests with ease — complete with filtering, role-based assignment, validation, and interactive charts.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Prisma",
  //     "Axios",
  //     "MySQL",
  //     "Zod",
  //     "Tailwindcss",
  //     "Chakra UI",
  //   ],

  //   github: "https://github.com/mostafa-meerzad/issue-tracker.git",
  //   preview: "https://issue-tracker-two-smoky.vercel.app/",
  //   desktopImg: issueTrackerDesktop,
  //   mobileImg: issueTrackerMobile,
  // },
  // {
  //   type: "06 · Landing page Replica",
  //   name: "Nike",
  //   description:
  //     "A clean, responsive Nike-themed landing page built with React and Tailwind CSS. This project was created as part of my journey to master modern CSS utility-first design using Tailwind, inspired by a tutorial by JavaScript Mastery.",
  //   technologies: ["React.js", "Tailwindcss", "Vite"],
  //   github: "https://github.com/mostafa-meerzad/nike.git",
  //   preview: "https://serene-biscotti-6c2764.netlify.app/",
  //   desktopImg: nikeDesktop,
  //   mobileImg: nikeMobile,
  // },
  {
    type: "05 · Full Stack · MERN",
    name: "URL Shortener",
    description:
      "A feature-rich URL shortener application built with the MERN stack. Users can shorten long URLs, manage them through CRUD operations, and even add custom aliases. Authenticated users enjoy advanced features, while guests can still shorten links effortlessly.",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/mostafa-meerzad/url-shortener.git",
    preview: "https://github.com/mostafa-meerzad/url-shortener.git",
    desktopImg: urlShortenerDesktop,
    mobileImg: urlShortenerMobile,
  },
];

export { personalProjects, productionProjects };
