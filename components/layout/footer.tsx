import Link from "next/link";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Shamim Ahsan</h3>
            <p className="mb-4">
              Professional Local SEO Expert helping businesses improve their
              online visibility and rankings.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/theshamimahsan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-secondary transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/theshamimahsan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-secondary transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/gbp-optimization"
                  className="hover:text-secondary transition-colors"
                >
                  GBP Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/on-page-seo"
                  className="hover:text-secondary transition-colors"
                >
                  On-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/off-page-seo"
                  className="hover:text-secondary transition-colors"
                >
                  Off-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-seo"
                  className="hover:text-secondary transition-colors"
                >
                  Technical SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">
                52/6, Mujahid Nagar, Old Passport Road, Dhaka-1362
              </p>
              <p className="mb-2">
                <a
                  href="mailto:theshamimahsan@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  theshamimahsan@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="tel:+8801749181410"
                  className="hover:text-secondary transition-colors"
                >
                  +8801749181410
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Shamim Ahsan. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
