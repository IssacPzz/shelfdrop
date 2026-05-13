import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShelfDrop — Real Clearance Deals Near You",
  description: "Find deep clearance discounts from Walmart, Home Depot, Target, Lowe's, Costco, Best Buy and Amazon. See what's in stock at stores near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name='impact-site-verification' content='98fb0eab-dabf-43b3-b8e4-85c0aedc7146' />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}