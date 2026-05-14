import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.email("Invalid email address"),

  subject: z
    .string()
    .trim()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.issues[0]?.message || "Invalid form data",
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = validation.data;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mostafameerzad@gmail.com",
      subject,
      replyTo: email,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong></p>
        <p>${subject}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong while sending the message.",
      },
      { status: 500 },
    );
  }
}
