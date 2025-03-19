"use server"

import { Resend } from "resend"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data)
    const { name, email, phone, service, message } = validatedData

    // Check if API key exists
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return {
        success: false,
        error: "Email service configuration error. Please contact the administrator.",
      }
    }

    // Initialize Resend with the API key
    const resend = new Resend(resendApiKey)

    const { data: emailData, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "theshamimahsan@gmail.com",
      subject: `New Contact Form: ${service || "General Inquiry"}`,
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
      console.error("Resend API error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

