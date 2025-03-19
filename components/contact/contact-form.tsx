"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendContactEmail } from "@/lib/actions"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    setFormError(null)
    setFormSuccess(null)

    try {
      const result = await sendContactEmail(values)

      if (result.success) {
        setFormSuccess("Thank you for your message. I'll get back to you soon.")
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        form.reset()
      } else {
        setFormError(result.error || "Failed to send message. Please try again later.")
        toast({
          title: "Something went wrong.",
          description: result.error || "Your message couldn't be sent. Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setFormError(errorMessage)
      toast({
        title: "Something went wrong.",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      {formError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}

      {formSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">{formSuccess}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="GBP Optimization">GBP Optimization</SelectItem>
                    <SelectItem value="On-Page SEO">On-Page SEO</SelectItem>
                    <SelectItem value="Off-Page SEO">Off-Page SEO</SelectItem>
                    <SelectItem value="Technical SEO">Technical SEO</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="How can I help you?" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}

