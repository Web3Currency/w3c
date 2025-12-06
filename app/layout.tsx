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

// ← THIS IS THE FINAL, WORKING METADATA
export const metadata: Metadata = {
  title: "WEB3CURRENCY",
  description:
    "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading, and real guidance.",
  openGraph: {
    title: "WEB3CURRENCY",
    description:
      "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading and real guidance.",
    url: "https://w3c.vercel.app",
    siteName: "W3C",
    images: [
      {
        url: "https://i.imgur.com/p7Xzel4.jpeg",
        width: 1200,
        height: 630,
        alt: "WEB3CURRENCY",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB3CURRENCY",
    description:
      "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading and real guidance.",
    images: ["https://i.imgur.com/p7Xzel4.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`\( {geistSans.variable} \){geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
