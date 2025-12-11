import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3Currency - Learn, Trade & Earn in Crypto",
  description:
    "Join W3C community to master crypto, make P2P trades, and discover Web3 opportunities. Beginner-friendly guidance, trusted support, and verified airdrops.",
  keywords: [
    "crypto trading",
    "P2P crypto exchange",
    "Web3 community",
    "crypto education",
    "learn cryptocurrency",
    "Pi Network Nigeria",
    "Nigeria crypto community",
    "Nigeria web3 community",
    "Crypto whatsapp group",
    "Bitcoin trading Nigeria",
    "USDT P2P",
    "crypto airdrops",
    "blockchain education",
    "safe crypto trading",
    "W3C community",
    "Web3Currency",
  ],
  authors: [{ name: "Web3Currency" }],
  creator: "JAKE",
  publisher: "Web3Currency",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Web3Currency - Learn, Trade & Earn in Crypto",
    description:
      "Master crypto & Web3 with trusted community support. Safe P2P trading, beginner-friendly education, and verified opportunities.",
    url: "https://w3c.vercel.app",
    siteName: "Web3Currency",
    images: [
      {
        url: "https://i.imgur.com/p7XzeI4.jpeg",
        width: 1200,
        height: 630,
        alt: "Web3Currency - Crypto Trading & Web3 Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3Currency - Learn, Trade & Earn in Crypto",
    description:
      "Master crypto & Web3 with trusted community support. Safe P2P trading and beginner-friendly guidance.",
    images: ["https://i.imgur.com/p7XzeI4.jpeg"],
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Material Icons — for FAST, FAIR RATE, VERIFIED badges */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
