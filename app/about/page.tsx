import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Shamim Ahsan, a professional Local SEO expert with years of experience",
};

export default function AboutPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden  order-2 md:order-1">
              <Image
                src="/images/shamim-ahsan-local-seo-expert.jpg"
                alt="Shamim Ahsan - Local SEO Expert"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-lg shadow-xl"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-gray-700 mb-4">
                I'm Shamim Ahsan, a dedicated Local SEO expert with over 5 years
                of experience helping businesses improve their online visibility
                and attract more customers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in SEO began when I realized how many local
                businesses were struggling to be found online despite offering
                excellent products and services. I made it my mission to help
                these businesses thrive in the digital landscape.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I specialize in helping local businesses improve their online
              presence through proven SEO strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Local SEO</h3>
                <p className="text-gray-700">
                  I help businesses rank higher in local search results, making
                  it easier for nearby customers to find them.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Google Business Profile
                </h3>
                <p className="text-gray-700">
                  I optimize Google Business Profiles to improve local
                  visibility and attract more customers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Website Optimization
                </h3>
                <p className="text-gray-700">
                  I ensure your website is optimized for both search engines and
                  users to improve rankings and conversions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Approach</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I believe in a transparent, results-driven approach to SEO that
              focuses on long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Research & Analysis
              </h3>
              <p className="text-gray-700 mb-6">
                I start by thoroughly researching your business, competitors,
                and target audience to develop a customized SEO strategy.
              </p>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-700">
                I implement proven SEO techniques to improve your online
                visibility, focusing on both on-page and off-page optimization.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Monitoring & Reporting
              </h3>
              <p className="text-gray-700 mb-6">
                I continuously monitor your SEO performance and provide regular
                reports to keep you informed of your progress.
              </p>
              <h3 className="text-xl font-semibold mb-4">Refinement</h3>
              <p className="text-gray-700">
                I refine and adjust your SEO strategy based on performance data
                to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Boost Your Local SEO?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's work together to improve your online visibility and attract
            more customers to your business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
