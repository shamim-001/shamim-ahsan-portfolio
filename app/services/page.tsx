import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Comprehensive SEO services to improve your business visibility and rankings",
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
