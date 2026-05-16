import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Urbanist } from "next/font/google";
import structuredData from "../structured-data.json";
import Footer from "./Footer";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import Navbar from "./_components/Navbar";
import ToasterComponent from "./_components/ToasterComponent";
import MoziWidget from "@/components/mozi/MoziWidget";

export const metadata = {
  title: "Mostafa Meerzad | Full Stack Developer",
  description:
    "Portfolio of Mostafa Meerzad - React, Node.js, MongoDB, Tailwind, and more.",
  keywords: [
    "Mostafa Meerzad",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Mostafa Meerzad | Full Stack Developer",
    description:
      "Showcasing beautiful, real-world projects built with modern web tech.",
    url: "https://portfolio-navy-seven-11.vercel.app",
    siteName: "Mostafa Meerzad Portfolio",
    images: [
      {
        url: "/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Meerzad | Full Stack Developer",
    description: "Explore Mostafa's projects and experience.",
    images: ["/preview-image.webp"],
  },
  metadataBase: new URL("https://portfolio-navy-seven-11.vercel.app"),
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
    <html lang="en" suppressHydrationWarning>
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
        <LayoutWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LayoutWrapper>
        <MoziWidget />
      </body>
    </html>
  );
}
