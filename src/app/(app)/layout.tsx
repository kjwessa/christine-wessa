import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
