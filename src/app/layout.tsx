import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ofrisites | משפרים את העסק שלך",
  description: "פתרונות טכנולוגיות לעסקים קטנים בישראל - אתרים, אוטומציות, בוטים חכמים",
  metadataBase: new URL("https://ofrisites.vercel.app"),
  openGraph: {
    title: "ofrisites | משפרים את העסק שלך",
    description: "פתרונות טכנולוגיות לעסקים קטנים בישראל",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
