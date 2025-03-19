"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"

interface WhatsAppChatProps {
  phoneNumber: string
  welcomeMessage?: string
}

export default function WhatsAppChat({
  phoneNumber,
  welcomeMessage = "Hello, I'd like to inquire about your SEO services.",
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle client-side only rendering
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleOpenChat = () => {
    const encodedMessage = encodeURIComponent(welcomeMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-green-600">WhatsApp Chat</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm mb-4">Chat with me directly on WhatsApp for quick responses.</p>
          <Button onClick={handleOpenChat} className="w-full bg-green-500 hover:bg-green-600">
            Start Chat
          </Button>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}

