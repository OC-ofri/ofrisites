import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Mono, Heebo, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "OKAI — AI Automation Agency",
  description: "We build websites, automations, and AI assistants that scale your business smarter and faster.",
  metadataBase: new URL("https://ofrisites.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${spaceMono.variable} ${heebo.variable} ${frankRuhl.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
