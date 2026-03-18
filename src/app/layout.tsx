import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import DirectionSwitcher from "@/components/DirectionSwitcher";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OKAI | סוכנות דיגיטל",
  description: "אתרים, אוטומציות ועוזרי AI לעסקים קטנים בישראל. Websites, automations, and AI assistants for Israeli small businesses.",
  metadataBase: new URL("https://ofrisites.com"),
  keywords: "עסקים קטנים, אתרים, אוטומציה, AI, ישראל, OKAI, small business, website, automation",
  openGraph: {
    title: "OKAI | סוכנות דיגיטל",
    description: "אתרים, אוטומציות ועוזרי AI לעסקים קטנים בישראל",
    locale: "he_IL",
    type: "website",
    url: "https://ofrisites.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased bg-[#0a0a0a] text-white`}>
        <LanguageProvider>
          <DirectionSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
