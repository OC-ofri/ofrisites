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
  description: "פתרונות טכנולוגיות חכמות לעסקים קטנים בישראל - אתרים, אוטומציות, בוטים חכמים שמגבירים מכירות",
  metadataBase: new URL("https://ofrisites.vercel.app"),
  keywords: "עסקים קטנים, אתרים, אוטומציה, בוטים, טכנולוגיה",
  openGraph: {
    title: "ofrisites | משפרים את העסק שלך",
    description: "פתרונות טכנולוגיות חכמות לעסקים בישראל",
    locale: "he_IL",
    type: "website",
    url: "https://ofrisites.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-white text-[#1A1A1A]`}>
        {/* Add padding-top to account for fixed navigation */}
        <div className="pt-16 md:pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
