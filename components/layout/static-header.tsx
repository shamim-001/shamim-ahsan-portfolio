import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function StaticHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground">
                Shamim
                <span className="text-primary">Ahsan</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
