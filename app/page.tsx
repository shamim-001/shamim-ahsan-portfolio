import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import TestimonialSlider from "@/components/home/testimonial-slider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shamim Ahsan | Local SEO Expert",
  description:
    "Professional Local SEO services to improve your business visibility and rankings",
  keywords: [
    "Local SEO",
    "SEO Expert",
    "Google Business Profile",
    "GBP Optimization",
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Dhaka SEO",
    "Bangladesh SEO",
  ],
  alternates: {
    canonical: "https://www.theshamimahsan.com/",
  },
};

// Static generation
export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boost Your Local Business with Expert SEO Services
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                I help local businesses improve their online visibility and
                attract more customers through proven SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/shamim-ahsan-seo-expert.webp"
                alt="Shamim Ahsan SEO Expert"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-lg shadow-xl"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Comprehensive SEO solutions tailored to help your local business
              thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "GBP Optimization",
                description:
                  "Optimize your Google Business Profile to improve local visibility and attract nearby customers.",
                link: "/services/gbp-optimization",
                image: "/images/services/gbp-optimization.webp",
              },
              {
                title: "On-Page SEO",
                description:
                  "Optimize your website content and structure to rank higher in search engine results.",
                link: "/services/on-page-seo",
                image: "/images/services/on-page-seo.webp",
              },
              {
                title: "Off-Page SEO",
                description:
                  "Build high-quality backlinks and improve your online reputation to boost rankings.",
                link: "/services/off-page-seo",
                image: "/images/services/off-page-seo.webp",
              },
              {
                title: "Technical SEO",
                description:
                  "Ensure your website's technical aspects are optimized for search engines and users.",
                link: "/services/technical-seo",
                image: "/images/services/technical-seo.webp",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="h-full transition-all hover:shadow-md"
              >
                <CardHeader>
                  <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="group">
                    <Link href={service.link} className="flex items-center">
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Me
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I deliver results-driven SEO strategies tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Results",
                description:
                  "Track record of improving rankings and driving organic traffic for local businesses.",
              },
              {
                title: "Customized Strategy",
                description:
                  "Tailored SEO approach based on your specific business goals and target audience.",
              },
              {
                title: "Transparent Reporting",
                description:
                  "Regular, easy-to-understand reports showing your SEO progress and ROI.",
              },
              {
                title: "Local Expertise",
                description:
                  "Specialized knowledge in local SEO to help you dominate your geographic market.",
              },
              {
                title: "Ethical Practices",
                description:
                  "White-hat SEO techniques that build sustainable, long-term results.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Always updated with the latest SEO trends and algorithm changes.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              See what my clients have to say about my SEO services.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
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
