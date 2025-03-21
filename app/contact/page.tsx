import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import GoogleMap from "@/components/contact/google-map";
import WhatsAppChat from "@/components/contact/whatsapp-chat";

export const metadata: Metadata = {
  title: "Contact | Shamim Ahsan",
  description:
    "Get in touch with Shamim Ahsan for professional Local SEO services. Contact for a free consultation to improve your business visibility and rankings.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Have questions about my services or ready to improve your local SEO?
            I'm here to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Send a Message
                  </h2>
                  <Suspense
                    fallback={
                      <div className="h-[400px] flex items-center justify-center">
                        <div className="h-8 w-8 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                      </div>
                    }
                  >
                    <ContactForm />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:theshamimahsan@gmail.com"
                          className="text-primary hover:underline"
                        >
                          theshamimahsan@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+8801749181410"
                          className="text-primary hover:underline"
                        >
                          +8801749181410
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-gray-700">
                          52/6, Mujahid Nagar, Old Passport Road, Dhaka-1362
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-700">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-700">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                        <p className="text-gray-700">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="h-8 w-8 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
              }
            >
              <GoogleMap
                latitude={23.6971398}
                longitude={90.4595524}
                zoom={15}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly do you respond to inquiries?",
                  answer:
                    "I typically respond to all inquiries within 24 hours during business days. For urgent matters, please feel free to call directly.",
                },
                {
                  question: "Do you offer free consultations?",
                  answer:
                    "Yes, I offer a free initial consultation to discuss your business needs, current SEO status, and how I can help you achieve your goals.",
                },
                {
                  question:
                    "What information should I prepare for our first meeting?",
                  answer:
                    "It's helpful to have information about your business goals, target audience, current marketing efforts, and any specific challenges you're facing with your online visibility.",
                },
                {
                  question: "Do you work with businesses outside of Dhaka?",
                  answer:
                    "Yes, I work with businesses throughout Bangladesh and can provide remote services for clients in other locations.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Widget */}
      <Suspense fallback={null}>
        <WhatsAppChat phoneNumber="8801749181410" />
      </Suspense>
    </>
  );
}
