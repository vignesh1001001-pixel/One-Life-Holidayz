import type { Metadata } from "next";
import {
  Poppins,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quote",
});

export const metadata: Metadata = {
  title: "One Life Holidayz",
  description: "Travel the World with One Life Holidayz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <body className="font-[var(--font-body)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}