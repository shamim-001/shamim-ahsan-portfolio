import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, service } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@shamimahsan.com>",
      to: ["theshamimahsan@gmail.com"],
      subject: `New Contact Form Submission: ${service || "General Inquiry"}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "An error occurred while sending the email" }, { status: 500 })
  }
}

