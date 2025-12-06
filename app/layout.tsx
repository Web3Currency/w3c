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
  title: "WEB3CURRENCY - Learn Crypto, Trade P2P & Access Web3 Opportunities",
  description:
    "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading, and real guidance. Join our supportive environment to master crypto basics, gain practical trading experience, and discover verified airdrops and early opportunities.",
  keywords: [
    "crypto trading",
    "P2P crypto exchange",
    "Web3 community",
    "crypto education",
    "learn cryptocurrency",
    "Bitcoin trading Nigeria",
    "USDT P2P",
    "crypto airdrops",
    "blockchain education",
    "safe crypto trading",
    "W3C community",
    "Web3Currency",
  ],
  authors: [{ name: "Web3Currency" }],
  creator: "Web3Currency",
  publisher: "Web3Currency",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "WEB3CURRENCY - Learn Crypto, Trade P2P & Access Web3 Opportunities",
    description:
      "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading, and real guidance. Join our supportive environment to master crypto basics, gain practical trading experience, and discover verified airdrops and early opportunities.",
    url: "https://w3c.vercel.app",
    siteName: "WEB3CURRENCY",
    images: [
      {
        url: "https://i.imgur.com/p7Xzel4.jpeg",
        width: 1200,
        height: 630,
        alt: "WEB3CURRENCY - Crypto Trading & Web3 Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB3CURRENCY - Learn Crypto, Trade P2P & Access Web3 Opportunities",
    description:
      "Learn, Trade, and Grow with W3C - Your trusted community for crypto and Web3 education, safe P2P trading, and real guidance. Join our supportive environment to master crypto basics, gain practical trading experience, and discover verified airdrops and early opportunities.",
    images: ["https://i.imgur.com/p7Xzel4.jpeg"],
    creator: "@Web3CurrencyNG",
  },
  metadataBase: new URL("https://w3c.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
