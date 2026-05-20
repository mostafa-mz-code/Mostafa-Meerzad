"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaLongArrowAltRight } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useInView } from "motion/react";

import { fadeUp } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(50, "Name is too long"),

  email: z.string().email("Please enter a valid email address"),

  subject: z
    .string()
    .min(2, "Subject is required")
    .max(100, "Subject is too long"),

  message: z
    .string()
    .min(15, "message is required and cannot be shorter that 15 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClass =
  "bg-gray-900/20 text-muted-foreground rounded-md px-4 py-2 outline-none border border-gray-500/25 transition-all duration-200 ease-out focus:border-primary/70 focus:bg-[#131320] focus:shadow-[0_0_0_3px_rgba(62,207,142,0.08)] hover:border-primary/40";

const errorClass = "text-red-400 text-xs mt-1";

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const isInView = useInView(formRef, {
    once: true,
    margin: "-80px",
  });

  const fade = useAnimationVariants(fadeUp);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        toast.error(
          errorData?.error || "Unable to send message. Please try again.",
        );

        return;
      }

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={formRef}
      variants={fade}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-col p-5 md:p-10 gap-6"
    >
      {/* badge */}
      <div className="flex justify-start items-center gap-3 badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Send a message
        <div className="w-14 h-[1px] bg-muted-foreground/30" />
      </div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},

          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="w-full grid gap-5 p-3 md:p-5 rounded-lg font-courier text-sm bg-gradient-to-r from-gray-800/25"
      >
        <div className="flex flex-col md:flex-row gap-5">
          {/* Name */}
          <motion.div
            variants={fieldVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 w-full"
          >
            <label
              htmlFor="name"
              className="text-sm font-medium text-muted-foreground"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Full name"
              {...register("name")}
              className={`${inputClass} ${
                errors.name
                  ? "border-red-400/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
                  : ""
              }`}
            />

            {errors.name && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={errorClass}
              >
                {errors.name.message}
              </motion.span>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            variants={fieldVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 w-full"
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={`${inputClass} ${
                errors.email
                  ? "border-red-400/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
                  : ""
              }`}
            />

            {errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={errorClass}
              >
                {errors.email.message}
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div
          variants={fieldVariants}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor="subject"
            className="text-sm font-medium text-muted-foreground"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            placeholder="Your subject"
            {...register("subject")}
            className={`${inputClass} ${
              errors.subject
                ? "border-red-400/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
                : ""
            }`}
          />

          {errors.subject && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={errorClass}
            >
              {errors.subject.message}
            </motion.span>
          )}
        </motion.div>

        {/* Message */}
        <motion.div
          variants={fieldVariants}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor="message"
            className="text-sm font-medium text-muted-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            placeholder="Your message..."
            {...register("message")}
            className={`resize-none ${inputClass} ${
              errors.message
                ? "border-red-400/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]"
                : ""
            }`}
          />

          {errors.message && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={errorClass}
            >
              {errors.message.message}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          variants={fieldVariants}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs text-muted-foreground/80 font-courier">
            I&apos;ll reply within 24 hours.
          </span>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={
              "self-end bg-primary/70 text-primary-foreground hover:bg-primary/80 active:bg-primary/90 font-courier text-sm transition-all duration-200 mt-2 rounded-md px-6 py-2 cursor-pointer flex justify-center items-center gap-2 shadow-sm hover:shadow-md [will-change:transform] " +
              (isSubmitting ? "opacity-70 cursor-not-allowed" : "")
            }
            whileHover={{
              scale: 1.02,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
              y: 0,
            }}
            transition={{ duration: 0.15 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}

            <motion.div
              animate={{
                x: isSubmitting ? 0 : [0, 3, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              <FaLongArrowAltRight />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
