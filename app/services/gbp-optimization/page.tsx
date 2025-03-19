import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization",
  description:
    "Professional Google Business Profile optimization services to improve your local visibility",
};

export default function GBPOptimizationPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "GBP Optimization", url: "/services/gbp-optimization" },
  ]);

  // FAQ data
  const faqs = [
    {
      question: "What is Google Business Profile optimization?",
      answer:
        "Google Business Profile optimization is the process of improving your business listing on Google to increase visibility in local search results and attract more customers.",
    },
    {
      question:
        "Why is Google Business Profile important for local businesses?",
      answer:
        "Google Business Profile is crucial for local businesses because it helps them appear in local search results, Google Maps, and the local pack. It provides potential customers with important information about your business, such as location, hours, and reviews.",
    },
    {
      question: "How long does it take to see results from GBP optimization?",
      answer:
        "While some improvements can be seen immediately after optimization, significant results typically take 1-3 months, depending on your industry, competition, and the current state of your profile.",
    },
    {
      question: "What does GBP optimization include?",
      answer:
        "GBP optimization includes verifying your business, ensuring accurate NAP (Name, Address, Phone) information, selecting appropriate categories, adding high-quality photos, writing a compelling business description, managing reviews, and posting regular updates.",
    },
  ];

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Google Business Profile Optimization
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Boost your local visibility and attract more customers with
                professional Google Business Profile optimization services.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative h-[400px] shadow-xl rounded-lg overflow-hidden ">
              <Image
                src="/images/gbp-optimization.jpg"
                alt="Google Business Profile Optimization"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Optimize Your Google Business Profile?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A well-optimized Google Business Profile can significantly improve
              your local visibility and attract more customers to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Increased Visibility
              </h3>
              <p className="text-gray-700">
                Appear in local search results, Google Maps, and the local pack
                when potential customers search for your products or services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Build Trust</h3>
              <p className="text-gray-700">
                Showcase your business with accurate information, high-quality
                photos, and positive customer reviews.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Drive Traffic</h3>
              <p className="text-gray-700">
                Make it easy for customers to find your location, visit your
                website, or contact you directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              My GBP Optimization Services
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I provide comprehensive Google Business Profile optimization
              services to help your business stand out in local search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Profile Setup & Verification",
                description:
                  "I'll help you set up and verify your Google Business Profile to ensure it's properly claimed and ready for optimization.",
              },
              {
                title: "NAP Consistency",
                description:
                  "I'll ensure your Name, Address, and Phone number are consistent across your GBP and other online directories.",
              },
              {
                title: "Category Selection",
                description:
                  "I'll help you select the most appropriate primary and secondary categories for your business.",
              },
              {
                title: "Photo Optimization",
                description:
                  "I'll add high-quality, relevant photos to showcase your business, products, and services.",
              },
              {
                title: "Business Description",
                description:
                  "I'll write a compelling business description that includes relevant keywords and highlights your unique selling points.",
              },
              {
                title: "Review Management",
                description:
                  "I'll help you implement a strategy for generating and responding to customer reviews.",
              },
              {
                title: "Regular Posts",
                description:
                  "I'll create and schedule regular posts to keep your profile active and engage with potential customers.",
              },
              {
                title: "Performance Tracking",
                description:
                  "I'll monitor your GBP performance and provide regular reports on views, actions, and other key metrics.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Optimize Your Google Business Profile?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to improve your local visibility and attract
            more customers to your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
