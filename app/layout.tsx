import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Ikhtiar — From a Swipe to Niqah",
    template: "%s | Ikhtiar",
  },
  description:
    "Ikhtiar is a halal Muslim matrimonial app designed to help you find your life partner the right way — safe, serious, and Shariah-conscious.",
  metadataBase: new URL("https://ikhtiar.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ikhtiar.app",
    siteName: "Ikhtiar",
    title: "Ikhtiar — From a Swipe to Niqah",
    description:
      "A halal Muslim matrimonial app designed to help you find your life partner the right way.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikhtiar — From a Swipe to Niqah",
    description:
      "A halal Muslim matrimonial app designed to help you find your life partner the right way.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-cream font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
