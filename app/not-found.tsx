import Link from "next/link";
import { Button } from "@/components/ui/button";
import StaticHeader from "@/components/layout/static-header";
import Footer from "@/components/layout/footer";
import NotFoundLayout from "./not-found-layout";

export default function NotFound() {
  return (
    <NotFoundLayout>
      <StaticHeader />
      <main>
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </NotFoundLayout>
  );
}
