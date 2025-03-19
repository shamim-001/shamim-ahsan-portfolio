"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Md. Saiful Islam",
    position: "Owner, Meat & Marrow",
    image: "/images/testimonials/saiful-islam.jpg",
    content:
      "Shamim helped my restaurant rank higher in local search results, which significantly increased our foot traffic and online orders. His expertise in Google Business Profile optimization was invaluable.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Manager, Dentis",
    image: "/images/testimonials/sarah-johnson.jpg",
    content:
      "We've seen a dramatic improvement in our online visibility since working with Shamim. His SEO strategies helped us attract more local patients and grow our practice.",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "CEO, Dmart",
    image: "/images/testimonials/michael-brown.jpg",
    content:
      "Shamim's technical SEO expertise helped us fix critical issues with our website, resulting in better rankings and more customers. His attention to detail is impressive.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="w-full flex-shrink-0 mx-2 border-none shadow-lg"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-lg text-gray-700 mb-6 italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full z-10"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
