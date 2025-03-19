import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <title>Page Not Found | Shamim Ahsan</title>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
