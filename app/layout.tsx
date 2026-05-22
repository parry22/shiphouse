import type { Metadata } from "next";
import { Instrument_Serif, Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: "Shiphouse",
  description:
    "Shiphouse brings cracked founders under one roof and helps them scale and get funded.",
  icons: {
    icon: "/assets/favicon.svg",
    shortcut: "/assets/favicon.svg",
    apple: "/assets/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
