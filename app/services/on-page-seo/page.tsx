import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Page SEO Services | Shamim Ahsan",
  description:
    "Professional On-Page SEO services to optimize your website content and structure for better search engine rankings and user experience.",
  alternates: {
    canonical: "https://www.theshamimahsan.com/services/on-page-seo",
  },
};

export default function OnPageSEOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                On-Page SEO Services
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Optimize your website content and structure to rank higher in
                search engine results and provide a better user experience.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started with On-Page SEO</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/on-page-seo.webp"
                alt="On-Page SEO Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What is On-Page SEO?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                On-Page SEO refers to the practice of optimizing individual web
                pages to rank higher and earn more relevant traffic in search
                engines. It involves optimizing both the content and HTML source
                code of a page.
              </p>
              <p>
                Unlike off-page SEO, which focuses on signals and relationships
                outside your website, on-page SEO is something you have direct
                control over. It's about making your website more search engine
                friendly while also providing value to your users.
              </p>
              <p>
                Effective on-page SEO helps search engines understand your
                content, determine its relevance to search queries, and assess
                whether it provides value to users. When done correctly, it can
                significantly improve your visibility in search results and
                drive more qualified traffic to your website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Keyword Research & Strategy",
                description:
                  "Identifying the most valuable and relevant keywords for your business and creating a strategic plan to target them effectively.",
              },
              {
                title: "Content Optimization",
                description:
                  "Optimizing existing content and creating new content that satisfies user intent and incorporates target keywords naturally.",
              },
              {
                title: "Title Tags & Meta Descriptions",
                description:
                  "Crafting compelling, keyword-rich title tags and meta descriptions that improve click-through rates from search results.",
              },
              {
                title: "Header Structure (H1, H2, H3)",
                description:
                  "Implementing a logical header structure that helps search engines understand your content hierarchy and improves readability.",
              },
              {
                title: "URL Structure Optimization",
                description:
                  "Creating clean, descriptive URLs that include target keywords and are easy for both users and search engines to understand.",
              },
              {
                title: "Internal Linking Strategy",
                description:
                  "Developing a strategic internal linking structure that distributes page authority and helps users navigate your website.",
              },
              {
                title: "Image Optimization",
                description:
                  "Optimizing images with descriptive file names, alt text, and proper sizing to improve page load speed and accessibility.",
              },
              {
                title: "Local Content Creation",
                description:
                  "Creating location-specific content that targets local keywords and addresses the needs of your local audience.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Benefits for Your Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Higher Search Rankings",
                description:
                  "Properly optimized pages have a better chance of ranking higher in search engine results for relevant queries.",
              },
              {
                title: "Increased Organic Traffic",
                description:
                  "Better visibility in search results leads to more clicks and visitors to your website.",
              },
              {
                title: "Improved User Experience",
                description:
                  "Well-structured, relevant content provides a better experience for your website visitors.",
              },
              {
                title: "Better Conversion Rates",
                description:
                  "Content that addresses user intent and provides value is more likely to convert visitors into customers.",
              },
              {
                title: "Local Market Dominance",
                description:
                  "Location-specific optimization helps you stand out in local search results and attract nearby customers.",
              },
              {
                title: "Long-term Results",
                description:
                  "Unlike paid advertising, the benefits of on-page SEO continue to deliver results over time.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="bg-blue-50 rounded-full p-4 mb-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My On-Page SEO Process
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

              {[
                {
                  step: "Comprehensive Audit",
                  description:
                    "I begin with a thorough analysis of your current website content, structure, and on-page elements to identify strengths, weaknesses, and opportunities.",
                },
                {
                  step: "Keyword Research",
                  description:
                    "Using advanced tools and techniques, I identify the most valuable keywords for your business based on search volume, competition, and relevance.",
                },
                {
                  step: "Content Strategy Development",
                  description:
                    "I create a detailed content strategy that maps keywords to existing pages and identifies opportunities for new content creation.",
                },
                {
                  step: "On-Page Element Optimization",
                  description:
                    "I optimize title tags, meta descriptions, headers, URLs, and other on-page elements to improve search visibility and click-through rates.",
                },
                {
                  step: "Content Optimization",
                  description:
                    "I enhance existing content and develop new content that satisfies user intent, incorporates target keywords naturally, and provides value to your audience.",
                },
                {
                  step: "Internal Linking Implementation",
                  description:
                    "I create a strategic internal linking structure that distributes page authority and improves user navigation throughout your website.",
                },
                {
                  step: "Performance Monitoring",
                  description:
                    "I track key metrics like rankings, organic traffic, and conversions to measure the effectiveness of the on-page optimizations and make data-driven adjustments.",
                },
              ].map((process, index) => (
                <div key={index} className="flex mb-8 relative">
                  <div className="mr-8 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-2">{process.step}</h3>
                    <p className="text-gray-700">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question:
                    "How long does it take to see results from on-page SEO?",
                  answer:
                    "The timeline for seeing results from on-page SEO varies depending on factors like your website's current state, competition, and the scope of optimizations. Generally, you may start seeing improvements in rankings within 2-4 weeks, with more significant results appearing after 2-3 months. Some competitive keywords may take longer to show improvement. On-page SEO is an ongoing process that continues to build results over time.",
                },
                {
                  question: "How is on-page SEO different from off-page SEO?",
                  answer:
                    "On-page SEO focuses on optimizing elements within your website that you have direct control over, such as content, HTML code, meta tags, and internal linking. Off-page SEO, on the other hand, involves activities outside your website that impact your rankings, such as backlink building, social media marketing, and brand mentions. Both are essential components of a comprehensive SEO strategy.",
                },
                {
                  question:
                    "Will I need to make significant changes to my website content?",
                  answer:
                    "The extent of changes needed depends on your website's current state. In some cases, minor adjustments to existing content and structure may be sufficient. In others, more substantial changes or new content creation may be necessary. I always provide clear recommendations based on a thorough audit and work with you to implement changes in a way that aligns with your brand voice and business goals.",
                },
                {
                  question: "How do you determine which keywords to target?",
                  answer:
                    "I use a combination of industry-leading tools and methodologies to identify the most valuable keywords for your business. This includes analyzing search volume, competition, relevance to your business, user intent, and conversion potential. I also consider your specific business goals, target audience, and local market to develop a customized keyword strategy that will drive qualified traffic to your website.",
                },
                {
                  question:
                    "Can on-page SEO help with local search visibility?",
                  answer:
                    "On-page SEO is crucial for local search visibility. By incorporating location-specific keywords, creating locally relevant content, optimizing meta tags and headers with geographic terms, and ensuring consistent NAP (Name, Address, Phone) information across your website, on-page SEO significantly improves your visibility in local search results.",
                },
                {
                  question:
                    "Do you follow Google's guidelines for on-page SEO?",
                  answer:
                    "Yes, I strictly adhere to Google's webmaster guidelines and best practices for on-page SEO. I focus on white-hat, sustainable optimization techniques that provide value to users while improving search visibility. This approach ensures long-term results without risking penalties from search engines. I stay updated with the latest algorithm changes and industry developments to ensure all optimizations align with current best practices.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "GBP Optimization",
                description:
                  "Optimize your Google Business Profile to improve local visibility and attract nearby customers.",
                link: "/services/gbp-optimization",
              },
              {
                title: "Off-Page SEO",
                description:
                  "Build high-quality backlinks and improve your online reputation to boost rankings.",
                link: "/services/off-page-seo",
              },
              {
                title: "Technical SEO",
                description:
                  "Ensure your website's technical aspects are optimized for search engines and users.",
                link: "/services/technical-seo",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href={service.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Improve Your On-Page SEO?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to optimize your website content and structure
            for better search engine rankings and user experience.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
