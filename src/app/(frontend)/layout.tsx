import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer/index";
import "./globals.css";

const OverusedGrotesk = localFont({
  variable: "--font-overused-grotesk",
  display: "swap",
  src: [
    {
      path: "../fonts/OverusedGrotesk-VF.woff2",
      weight: "400 500 700 900",
      style: "normal",
    },
    {
      path: "../fonts/OverusedGrotesk-VF.woff",
      weight: "400 500 700 900",
      style: "normal",
    },
    {
      path: "../fonts/OverusedGrotesk-VF.ttf",
      weight: "400 500 700 900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Christine Wessa",
  description: "Worship Leader + Speaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${OverusedGrotesk.variable}`}>
      <body className="bg-gray-50 text-gray-800 antialiased">
        <main className="flex min-h-svh flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </main>
        <Script
          src="https://js.usebasin.com/v2.3.0.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
