"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaLongArrowAltRight } from "react-icons/fa";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.email("Please enter a valid email address"),

  subject: z
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject is too long"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate with Zod
    const validation = contactSchema.safeParse({
      name,
      email,
      subject,
      message,
    });

    if (!validation.success) {
      const firstError =
        validation.error.issues[0]?.message || "Please check your inputs.";

      toast.error(firstError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(validation.data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        const errorMessage =
          errorData?.error || "Unable to send message. Please try again.";

        toast.error(errorMessage);
        return;
      }

      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={"flex flex-col p-5 md:p-10 gap-6 "}>
      {/*--------------- badge -------------*/}
      <div className="flex justify-start items-center gap-3 badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Send a message
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full grid gap-5 p-3 md:p-5 rounded-lg font-courier text-sm bg-gradient-to-r from-gray-800/25"
      >
        <div className={"flex gap-5"}>
          {/* ----------- Name--------------- */}
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="name"
              className="text-sm font-medium text-muted-foreground"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-900/20 text-muted-foreground rounded-md px-4 py-2 outline-none border border-gray-500/25 focus:border-primary transition-all"
            />
          </div>

          {/* --------- Email ------------ */}
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900/20 text-muted-foreground rounded-md px-4 py-2 outline-none border border-gray-500/25 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-muted-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Your subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-gray-900/20 text-muted-foreground rounded-md px-4 py-2 outline-none border border-gray-500/25 focus:border-primary transition-all"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-muted-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none bg-gray-900/20 text-muted-foreground rounded-md px-4 py-2 outline-none border border-gray-500/25 focus:border-primary transition-all"
          />
        </div>

        <div className={"flex items-center justify-between"}>
          <span className={"text-xs text-muted-foreground/80 font-courier"}>
            I&apos;ll reply within 24 hours.
          </span>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              "self-end bg-primary/70 text-primary-foreground hover:bg-primary/80 font-courier text-sm transition-all mt-2 rounded-md px-6 py-2 cursor-pointer flex justify-center items-center gap-2 " +
              (isSubmitting ? "opacity-70 cursor-not-allowed" : "")
            }
          >
            {isSubmitting ? "Sending..." : "Send Message"}

            <FaLongArrowAltRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
