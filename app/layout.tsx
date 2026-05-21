import localFont from "next/font/local";
import { Urbanist } from "next/font/google";
import structuredData from "../structured-data.json";
import Footer from "./Footer";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import Navbar from "./_components/Navbar";
import ToasterComponent from "./_components/ToasterComponent";
import MoziWidget from "@/components/mozi/MoziWidget";
import { NotFoundProvider } from "./context/NotFoundContext";

export const metadata = {
  title: {
    default: "Mostafa Meerzad | Full Stack Developer",
    template: "%s | Mostafa Meerzad",
  },
  description:
    "Mostafa Meerzad is a full stack developer from Kabul building production MERN/PERN apps, open-source tools, and business web experiences at Webistan.cloud.",
  keywords: [
    "Mostafa Meerzad",
    "Full Stack Developer",
    "MERN",
    "PERN",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "Portfolio",
    "Kabul developer",
    "Webistan.cloud",
  ],
  authors: [
    {
      name: "Mostafa Meerzad",
      url: "https://www.linkedin.com/in/mostafa-meerzad-a753371b7/",
    },
  ],
  creator: "Mostafa Meerzad",
  publisher: "Mostafa Meerzad",
  openGraph: {
    title: "Mostafa Meerzad | Full Stack Developer",
    description:
      "Explore production web applications, open-source projects, and developer experience from Mostafa Meerzad.",
    url: "https://portfolio-navy-seven-11.vercel.app",
    siteName: "Mostafa Meerzad Portfolio",
    images: [
      {
        url: "/avatar-bg-pattern.webp",
        width: 1200,
        height: 630,
        alt: "Mostafa Meerzad portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Meerzad | Full Stack Developer",
    description:
      "Explore Mostafa's portfolio—production apps, GitHub work, and software projects built with Next.js, React, and Node.js.",
    images: ["/avatar-bg-pattern.webp"],
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://portfolio-navy-seven-11.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 400,
    },
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-sans",
});
const courier = localFont({
  src: "../public/fonts/courier-new-regular.ttf",
  variable: "--font-courier",
});
const georgia = localFont({
  src: "../public/fonts/georgia.ttf",
  variable: "--font-georgia",
});
const georgiaBold = localFont({
  src: "../public/fonts/georgiab.ttf",
  variable: "--font-georgia-bold",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${urbanist.variable} ${courier.variable} ${georgia.variable} ${georgiaBold.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ToasterComponent />
        <NotFoundProvider>
          <LayoutWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LayoutWrapper>
        </NotFoundProvider>
        <MoziWidget />
      </body>
    </html>
  );
}
