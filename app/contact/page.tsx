export const metadata = {
  title: "Contact | Mostafa Meerzad",
  description:
    "Reach out to Mostafa Meerzad for web development work, collaboration, or consulting on React, Next.js, and full stack projects.",
  keywords: [
    "Mostafa Meerzad",
    "Contact",
    "Hire",
    "Software development",
    "Web development",
    "React",
    "Next.js",
    "Consulting",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mostafa Meerzad",
    description:
      "Reach out to Mostafa Meerzad for web development work, collaboration, or consulting on React, Next.js, and full stack projects.",
    url: "https://portfolio-navy-seven-11.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "/avatar-bg-pattern.webp",
        alt: "Contact Mostafa Meerzad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mostafa Meerzad",
    description:
      "Get in touch with Mostafa for web development, freelance projects, and software consulting.",
    images: ["/avatar-bg-pattern.webp"],
  },
};

import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const page = () => {
  return (
    <section className={"bg-gradient-to-b from-darkblue/8 to-darkblue"}>
      <Header />
      <div className={"grid grid-cols-1 lg:grid-cols-2 border-t "}>
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
};

export default page;
