import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamim Ahsan",
  description:
    "I'm a versatile web developer, adept at both front-end and full-stack development. With my knowledge of HTML, CSS, Tailwind, React, NextJS, JavaScript, TypeScript, I can build robust and scalable web applications from scratch.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className}`}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <Navbar />
            <main>{children}</main>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
