export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shamim Ahsan - Local SEO Expert",
    image: "https://theshamimahsan.com/icon-512.png",
    url: "https://theshamimahsan.com",
    telephone: "+8801749181410",
    email: "theshamimahsan@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "52/6, Mujahid Nagar, Old Passport Road",
      addressLocality: "Dhaka",
      postalCode: "1362",
      addressCountry: "Bangladesh",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.6971398",
      longitude: "90.4595524",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://facebook.com/theshamimahsan",
      "https://twitter.com/theshamimahsan",
      "https://linkedin.com/in/theshamimahsan",
      "https://instagram.com/theshamimahsan",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Optimization",
            description:
              "Optimize your Google Business Profile to improve local visibility and attract nearby customers.",
            url: "https://theshamimahsan.com/services/gbp-optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-Page SEO",
            description:
              "Optimize your website content and structure to rank higher in search engine results.",
            url: "https://theshamimahsan.com/services/on-page-seo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Off-Page SEO",
            description:
              "Build high-quality backlinks and improve your online reputation to boost rankings.",
            url: "https://theshamimahsan.com/services/off-page-seo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO",
            description:
              "Ensure your website's technical aspects are optimized for search engines and users.",
            url: "https://theshamimahsan.com/services/technical-seo",
          },
        },
      ],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shamim Ahsan - Local SEO Expert",
    url: "https://theshamimahsan.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://theshamimahsan.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
