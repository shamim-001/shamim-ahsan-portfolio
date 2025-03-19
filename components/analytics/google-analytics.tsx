"use client";

import Script from "next/script";
import ClientAnalytics from "./client-analytics"; // Import the new client-side analytics component
import { Suspense } from "react";

export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  if (!measurementId) return null;

  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Handle client-side tracking separately */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClientAnalytics measurementId={measurementId} />
      </Suspense>
    </>
  );
}
