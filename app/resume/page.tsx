export const metadata = {
  title: "Resume | Mostafa Meerzad",
  description:
    "View the resume of Mostafa Meerzad, showcasing experience, education, certifications, and technical skills across full stack web development.",
  keywords: [
    "Mostafa Meerzad",
    "Resume",
    "Experience",
    "Web development",
    "Full stack developer",
    "Certifications",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Mostafa Meerzad",
    description:
      "View the resume of Mostafa Meerzad, showcasing experience, education, certifications, and technical skills across full stack web development.",
    url: "https://portfolio-navy-seven-11.vercel.app/resume",
    type: "website",
    images: [
      {
        url: "/avatar-bg-pattern.webp",
        alt: "Mostafa Meerzad resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Mostafa Meerzad",
    description:
      "View Mostafa's full stack resume with experience, certifications, and web development skills.",
    images: ["/avatar-bg-pattern.webp"],
  },
};

import React from "react";

const ResumePage = () => {
  return (
    <section
      className={
        "section-padding min-h-screen bg-gradient-to-b from-darkblue/8 to-darkblue text-foreground"
      }
      aria-labelledby="resume-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 uppercase text-xs text-muted-foreground/70 font-courier tracking-[0.25em]">
            Resume
            <span className="w-14 h-[1px] bg-muted-foreground/30 block" />
          </div>
          <h1 id="resume-heading" className="text-4xl font-georgia">
            Professional Resume
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground/80 font-courier">
            Download Mostafa Meerzad’s resume or review a short summary of his
            full stack experience, certifications, and technical strengths.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-[#0f1320] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-georgia mb-4">Resume download</h2>
            <p className="text-sm text-muted-foreground/80 mb-6 font-courier">
              Get the latest resume file for Mostafa, including work history,
              education, certifications, and technical skills.
            </p>
            <a
              href="/Mostafa_Meerzad_Resume.docx"
              download
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-primary/90"
            >
              Download resume
            </a>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-[#0f1320] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-georgia mb-4">Resume summary</h2>
            <ul className="space-y-4 text-sm text-muted-foreground/80 font-courier">
              <li>
                <strong className="text-white">Full stack engineer</strong> with
                experience building production MERN/PERN applications and
                business software at Webistan.cloud.
              </li>
              <li>
                <strong className="text-white">Technical stack</strong>: React,
                Next.js, TypeScript, Node.js, Prisma, PostgreSQL, MongoDB,
                Tailwind CSS.
              </li>
              <li>
                <strong className="text-white">Certifications</strong>:
                FreeCodeCamp certifications in responsive web design, front-end
                libraries, backend APIs, and JavaScript algorithms.
              </li>
              <li>
                <strong className="text-white">Availability</strong>: Remote and
                onsite work, open to full-time positions and contract work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
