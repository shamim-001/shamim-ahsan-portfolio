"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello, I'm interested in your SEO services.",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodedMessage}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Button onClick={handleClick} className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
      <WhatsappIcon className="mr-2 h-5 w-5" />
      Chat on WhatsApp
    </Button>
  )
}

