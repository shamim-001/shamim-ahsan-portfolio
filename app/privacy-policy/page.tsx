import type { Metadata } from "next"
import { generateBreadcrumbSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Shamim Ahsan's SEO services website",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-4">Last updated: March 16, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how Shamim Ahsan ("we," "us," or "our") collects, uses, and discloses your
                personal information when you visit our website or use our services. By accessing or using our website,
                you agree to this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, website URL)</li>
                <li>Communications you send to us</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your requests and inquiries</li>
                <li>Communicate with you about our services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to
                distinguish you from other users of our website. This helps us provide you with a good experience when
                you browse our website and allows us to improve our site.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by
                us. We have no control over and assume no responsibility for the content, privacy policies, or practices
                of any third-party websites or services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: theshamimahsan@gmail.com
                <br />
                Phone: +8801749181410
                <br />
                Address: 52/6, Mujahid Nagar, Old Passport Road, Dhaka-1362
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

