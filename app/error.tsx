"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Something went wrong!</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        We apologize for the inconvenience. Please try again or return to the home page.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={reset} variant="outline">
          Try again
        </Button>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

