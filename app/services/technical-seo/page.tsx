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
  title: "Technical SEO Services | Shamim Ahsan",
  description:
    "Professional Technical SEO services to optimize your website's technical aspects for better search engine crawling, indexing, and user experience.",
};

export default function TechnicalSEOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technical SEO Services
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Optimize your website's technical aspects for better search
                engine crawling, indexing, and user experience.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started with Technical SEO</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/technical-seo.jpg"
                alt="Technical SEO Services"
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
              What is Technical SEO?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Technical SEO refers to the process of optimizing the technical
                aspects of your website to improve its search engine visibility.
                While content and backlinks are important, technical SEO ensures
                that search engines can effectively crawl, index, and render
                your website.
              </p>
              <p>
                Technical SEO focuses on improving website infrastructure
                elements like site speed, mobile-friendliness, indexability,
                crawlability, site architecture, structured data, and security.
                These technical elements form the foundation of your SEO efforts
                and can significantly impact your search rankings.
              </p>
              <p>
                Without proper technical SEO, even the best content and
                strongest backlinks may not help your website rank well.
                Technical issues can prevent search engines from properly
                understanding and indexing your content, limiting your
                visibility in search results.
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
                title: "Technical SEO Audit",
                description:
                  "Comprehensive analysis of your website's technical aspects to identify issues and opportunities for improvement.",
              },
              {
                title: "Site Speed Optimization",
                description:
                  "Improving page load times through image optimization, code minification, browser caching, and other performance enhancements.",
              },
              {
                title: "Mobile-Friendliness Optimization",
                description:
                  "Ensuring your website provides an optimal experience across all devices, especially mobile.",
              },
              {
                title: "Schema Markup Implementation",
                description:
                  "Adding structured data to help search engines better understand your content and display rich snippets in search results.",
              },
              {
                title: "XML Sitemap Creation",
                description:
                  "Developing and optimizing XML sitemaps to help search engines discover and index all important pages on your website.",
              },
              {
                title: "Robots.txt Optimization",
                description:
                  "Configuring your robots.txt file to guide search engine crawlers on which pages to crawl and which to ignore.",
              },
              {
                title: "Core Web Vitals Improvement",
                description:
                  "Optimizing Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) metrics.",
              },
              {
                title: "Crawl Error Resolution",
                description:
                  "Identifying and fixing crawl errors, broken links, and other issues that prevent proper indexing.",
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
                title: "Improved Search Rankings",
                description:
                  "A technically sound website is more likely to rank higher in search results for relevant queries.",
              },
              {
                title: "Better User Experience",
                description:
                  "Technical optimizations like faster page speeds and mobile-friendliness create a better experience for your visitors.",
              },
              {
                title: "Increased Organic Traffic",
                description:
                  "Better visibility in search results leads to more organic traffic to your website.",
              },
              {
                title: "Higher Conversion Rates",
                description:
                  "A fast, user-friendly website with clear navigation encourages visitors to take desired actions.",
              },
              {
                title: "Enhanced Crawling and Indexing",
                description:
                  "Technical improvements help search engines discover, crawl, and index your content more effectively.",
              },
              {
                title: "Competitive Advantage",
                description:
                  "Many businesses neglect technical SEO, giving you an edge when you prioritize these optimizations.",
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
            My Technical SEO Process
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

              {[
                {
                  step: "Comprehensive Technical Audit",
                  description:
                    "I conduct a thorough analysis of your website's technical aspects using advanced tools to identify issues and opportunities.",
                },
                {
                  step: "Prioritization of Issues",
                  description:
                    "Based on the audit findings, I prioritize technical issues according to their impact on search visibility and user experience.",
                },
                {
                  step: "Site Speed Optimization",
                  description:
                    "I implement various optimizations to improve page load times, including image compression, code minification, and caching configurations.",
                },
                {
                  step: "Mobile Optimization",
                  description:
                    "I ensure your website provides an optimal experience across all devices, with special attention to mobile responsiveness.",
                },
                {
                  step: "Structured Data Implementation",
                  description:
                    "I add appropriate schema markup to help search engines better understand your content and display rich snippets in search results.",
                },
                {
                  step: "Crawlability & Indexability Improvements",
                  description:
                    "I optimize your site architecture, XML sitemaps, and robots.txt to ensure search engines can effectively crawl and index your content.",
                },
                {
                  step: "Ongoing Monitoring & Maintenance",
                  description:
                    "I continuously monitor your website's technical health, addressing new issues as they arise and adapting to search engine algorithm updates.",
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
                    "How important is technical SEO compared to content and backlinks?",
                  answer:
                    "Technical SEO is equally important as content and backlinks. Think of it as the foundation of your SEO efforts. Without a technically sound website, even the best content and strongest backlinks may not help you rank well. Technical issues can prevent search engines from properly crawling, indexing, and understanding your content, limiting your visibility in search results. A comprehensive SEO strategy needs all three components: technical optimization, quality content, and authoritative backlinks.",
                },
                {
                  question:
                    "How long does it take to see results from technical SEO improvements?",
                  answer:
                    "The timeline for seeing results from technical SEO improvements varies depending on the issues being addressed and the size of your website. Some changes, like fixing critical crawl errors or improving site speed, can show results within days or weeks as search engines recrawl your site. Other improvements may take 1-3 months to fully impact your rankings. Technical SEO is often the fastest-acting aspect of SEO, especially when addressing significant issues that were previously holding your site back.",
                },
                {
                  question:
                    "Will technical SEO improvements disrupt my website?",
                  answer:
                    "When implemented correctly, most technical SEO improvements should not disrupt your website's functionality. I take a careful, methodical approach to technical changes, often implementing them in stages and thoroughly testing before and after each change. For more significant changes, I recommend implementing them during low-traffic periods and having a rollback plan in place. I always communicate clearly about any potential disruptions and work to minimize their impact on your business.",
                },
                {
                  question:
                    "How does site speed affect SEO and user experience?",
                  answer:
                    "Site speed is a critical factor for both SEO and user experience. From an SEO perspective, Google has explicitly stated that page speed is a ranking factor, and it's a key component of Core Web Vitals. From a user experience standpoint, studies show that users abandon sites that take more than a few seconds to load, with each second of delay increasing the bounce rate. Faster sites lead to better user engagement, higher conversion rates, and improved search rankings.",
                },
                {
                  question:
                    "What are Core Web Vitals and why are they important?",
                  answer:
                    "Core Web Vitals are a set of specific factors that Google considers important for user experience, including Largest Contentful Paint (loading performance), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). They're important because Google uses them as ranking signals in its algorithm. Websites that provide a good user experience according to these metrics are more likely to rank higher in search results. Additionally, these metrics directly impact how users experience your website, affecting engagement and conversion rates.",
                },
                {
                  question:
                    "How often should technical SEO audits be performed?",
                  answer:
                    "I recommend conducting a comprehensive technical SEO audit every 6-12 months, depending on your website's size and complexity. However, ongoing monitoring should be in place to catch issues as they arise. Websites that undergo frequent changes, updates, or redesigns may require more frequent audits. Additionally, after major search engine algorithm updates, it's often beneficial to review your technical SEO to ensure alignment with new requirements or best practices.",
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
                title: "On-Page SEO",
                description:
                  "Optimize your website content and structure to rank higher in search engine results.",
                link: "/services/on-page-seo",
              },
              {
                title: "Off-Page SEO",
                description:
                  "Build high-quality backlinks and improve your online reputation to boost rankings.",
                link: "/services/off-page-seo",
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
            Ready to Improve Your Technical SEO?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to optimize your website's technical aspects for
            better search engine visibility and user experience.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
