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
  title: "Off-Page SEO Services",
  description:
    "Professional Off-Page SEO services to build high-quality backlinks, improve online reputation, and boost your website's authority and rankings.",
  alternates: {
    canonical: "https://www.theshamimahsan.com/services/off-page-seo",
  },
};

export default function OffPageSEOPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Off-Page SEO Services
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Build high-quality backlinks, improve your online reputation,
                and boost your website's authority and rankings.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started with Off-Page SEO</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/off-page-seo.webp"
                alt="Off-Page SEO Services"
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
              What is Off-Page SEO?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Off-Page SEO refers to all the activities you do outside of your
                website to improve its search engine rankings. While on-page SEO
                focuses on optimizing elements within your website, off-page SEO
                is about building your site's reputation and authority through
                external signals.
              </p>
              <p>
                The primary focus of off-page SEO is building high-quality
                backlinks—links from other websites to yours. Search engines
                view these backlinks as votes of confidence in your content. The
                more quality backlinks your website has, the more authoritative
                and trustworthy it appears to search engines.
              </p>
              <p>
                However, off-page SEO isn't just about link building. It also
                encompasses activities like brand mentions, social media
                marketing, influencer outreach, and online reputation
                management—all of which contribute to your website's authority
                and visibility in search results.
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
                title: "Strategic Link Building",
                description:
                  "Developing and implementing a customized strategy to acquire high-quality, relevant backlinks from authoritative websites in your industry.",
              },
              {
                title: "Local Citation Building",
                description:
                  "Creating and optimizing business listings across relevant directories and platforms to improve local search visibility.",
              },
              {
                title: "Online Reputation Management",
                description:
                  "Monitoring and improving your brand's online reputation through review management and strategic content placement.",
              },
              {
                title: "Competitor Backlink Analysis",
                description:
                  "Analyzing your competitors' backlink profiles to identify opportunities and develop strategies to outperform them.",
              },
              {
                title: "Content Promotion",
                description:
                  "Strategically promoting your content to increase visibility, engagement, and natural link acquisition.",
              },
              {
                title: "Guest Posting Opportunities",
                description:
                  "Identifying and securing guest posting opportunities on relevant, high-authority websites in your industry.",
              },
              {
                title: "Social Signals Development",
                description:
                  "Enhancing your social media presence to generate social signals that complement your SEO efforts.",
              },
              {
                title: "Local Partnerships",
                description:
                  "Identifying and developing partnerships with local businesses and organizations for mutual promotion and link building.",
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
                title: "Increased Domain Authority",
                description:
                  "Quality backlinks and positive brand signals help increase your website's domain authority, leading to better rankings across all pages.",
              },
              {
                title: "Improved Search Rankings",
                description:
                  "A strong off-page SEO profile helps your website rank higher in search results for your target keywords.",
              },
              {
                title: "More Referral Traffic",
                description:
                  "Quality backlinks not only improve SEO but also drive direct referral traffic from other websites to yours.",
              },
              {
                title: "Enhanced Brand Visibility",
                description:
                  "Off-page activities increase your brand's visibility across multiple platforms and websites.",
              },
              {
                title: "Greater Trust and Credibility",
                description:
                  "Mentions and links from authoritative sources build trust with both search engines and potential customers.",
              },
              {
                title: "Competitive Advantage",
                description:
                  "A comprehensive off-page SEO strategy helps you outperform competitors in search results and market presence.",
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
            My Off-Page SEO Process
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

              {[
                {
                  step: "Backlink Profile Audit",
                  description:
                    "I conduct a comprehensive analysis of your current backlink profile to identify strengths, weaknesses, and potentially harmful links.",
                },
                {
                  step: "Competitor Analysis",
                  description:
                    "I analyze your competitors' backlink profiles to identify opportunities and develop strategies to gain a competitive edge.",
                },
                {
                  step: "Strategy Development",
                  description:
                    "Based on the audit and analysis, I develop a customized off-page SEO strategy tailored to your business goals and industry.",
                },
                {
                  step: "Local Citation Building",
                  description:
                    "I create and optimize business listings across relevant directories and platforms to improve local search visibility.",
                },
                {
                  step: "Content-Driven Link Building",
                  description:
                    "I develop and promote high-quality content that naturally attracts backlinks from authoritative sources.",
                },
                {
                  step: "Outreach and Relationship Building",
                  description:
                    "I identify and reach out to relevant websites, influencers, and industry partners to secure quality backlinks and mentions.",
                },
                {
                  step: "Monitoring and Reporting",
                  description:
                    "I continuously monitor your backlink profile, track progress, and provide regular reports on key metrics and improvements.",
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
                    "How long does it take to see results from off-page SEO?",
                  answer:
                    "Off-page SEO is a long-term strategy that typically takes 3-6 months to show significant results. The timeline depends on factors like your website's current authority, the competitiveness of your industry, and the quality and quantity of your off-page efforts. While some improvements may be visible earlier, building a strong backlink profile and online reputation is an ongoing process that continues to yield benefits over time.",
                },
                {
                  question: "Are all backlinks good for SEO?",
                  answer:
                    "No, not all backlinks are beneficial. Quality matters more than quantity. Backlinks from spammy, low-quality, or irrelevant websites can actually harm your SEO efforts and potentially lead to penalties. I focus on acquiring high-quality, relevant backlinks from authoritative sources that provide genuine value and signal trust to search engines.",
                },
                {
                  question: "How do you build backlinks ethically?",
                  answer:
                    "I use white-hat, ethical link building strategies that comply with search engine guidelines. These include creating valuable content that naturally attracts links, guest posting on reputable websites, building relationships with industry influencers, securing local citations, and leveraging existing partnerships. I never use automated link building, link farms, paid links, or other black-hat techniques that could harm your website's reputation.",
                },
                {
                  question: "How important are social media signals for SEO?",
                  answer:
                    "While social media signals (likes, shares, comments) aren't direct ranking factors, they play an important role in your overall off-page SEO strategy. Social media activity increases brand visibility, drives traffic to your website, amplifies your content, and creates opportunities for natural link building. A strong social media presence complements your SEO efforts and contributes to your overall online authority.",
                },
                {
                  question:
                    "Can off-page SEO help with local business visibility?",
                  answer:
                    "Off-page SEO is crucial for local businesses. Local citation building, managing online reviews, securing backlinks from local websites, and engaging with local online communities all significantly impact your visibility in local search results. These activities help Google understand your business's relevance and prominence in your geographic area.",
                },
                {
                  question:
                    "How do you measure the success of off-page SEO efforts?",
                  answer:
                    "I track multiple metrics to measure the success of off-page SEO, including: domain authority growth, backlink quality and quantity, referral traffic, brand mentions, social engagement, local citation accuracy and consistency, review quantity and quality, and ultimately, improvements in search rankings and organic traffic. I provide regular reports that track these metrics and demonstrate the ROI of your off-page SEO investment.",
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
            Ready to Improve Your Off-Page SEO?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to build your website's authority and improve
            your rankings through strategic off-page SEO.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
