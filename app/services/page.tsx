import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Comprehensive SEO services to improve your business visibility and rankings",
  alternates: {
    canonical: "https://www.theshamimahsan.com/services",
  },
};

export default function ServicesPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const services = [
    {
      title: "Google Business Profile Optimization",
      description:
        "Optimize your Google Business Profile to improve local visibility and attract nearby customers. I'll help you set up and optimize your profile with accurate information, compelling photos, and regular posts.",
      image: "/images/services/gbp-optimization.webp",
      link: "/services/gbp-optimization",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize your website content and structure to rank higher in search engine results. This includes keyword research, content optimization, meta tags, and internal linking strategies.",
      image: "/images/services/on-page-seo.webp",
      link: "/services/on-page-seo",
    },
    {
      title: "Off-Page SEO",
      description:
        "Build high-quality backlinks and improve your online reputation to boost rankings. I'll help you develop a strategy for acquiring relevant, authoritative links to your website.",
      image: "/images/services/off-page-seo.webp",
      link: "/services/off-page-seo",
    },
    {
      title: "Technical SEO",
      description:
        "Ensure your website's technical aspects are optimized for search engines and users. This includes site speed optimization, mobile-friendliness, structured data, and fixing crawl errors.",
      image: "/images/services/technical-seo.webp",
      link: "/services/technical-seo",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My SEO Services
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to help your local business
              thrive online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-4">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-700 mb-6">
                        {service.description}
                      </p>
                    </div>
                    <Button asChild className="self-start group">
                      <Link href={service.link} className="flex items-center">
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions About SEO Services
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Why should I invest in SEO services?",
                  answer:
                    "Investing in SEO services is crucial for long-term online success. Unlike paid advertising, SEO provides sustainable organic traffic, builds credibility, and offers a high ROI. It helps you reach your target audience when they're actively searching for your products or services, leading to higher quality leads and conversions.",
                },
                {
                  question: "How long does it take to see results from SEO?",
                  answer:
                    "SEO is a long-term strategy, and results typically become noticeable within 3-6 months. However, the timeline can vary depending on factors like your website's current state, competition, and the scope of SEO work. Some improvements may be visible sooner, while significant ranking changes for competitive keywords may take longer.",
                },
                {
                  question: "Do I need all these SEO services for my business?",
                  answer:
                    "Not necessarily. The SEO services your business needs depend on various factors, including your current online presence, business goals, and target audience. I offer customized SEO strategies tailored to your specific needs. After a thorough analysis of your website and business, I can recommend the most effective combination of services for your situation.",
                },
                {
                  question: "How do you measure the success of SEO services?",
                  answer:
                    "I measure SEO success through various metrics, including organic traffic growth, keyword rankings, conversion rates, and ROI. I provide regular reports that track these key performance indicators (KPIs) and demonstrate the impact of our SEO efforts on your business goals. This data-driven approach allows us to continually refine and improve our strategy.",
                },
                {
                  question: "Is SEO a one-time task or ongoing process?",
                  answer:
                    "SEO is an ongoing process. While initial optimizations can provide a solid foundation, search engines constantly update their algorithms, and your competitors are always working to improve their rankings. Ongoing SEO efforts are necessary to maintain and improve your search visibility, adapt to algorithm changes, and stay ahead of the competition.",
                },
                {
                  question:
                    "How do you stay up-to-date with SEO best practices?",
                  answer:
                    "I stay current with SEO best practices through continuous learning, attending industry conferences, participating in professional SEO communities, and closely monitoring official communications from search engines. This commitment to ongoing education ensures that I can provide you with the most effective and up-to-date SEO strategies.",
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

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Improve Your Local SEO?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to boost your local visibility and attract more
            customers to your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
