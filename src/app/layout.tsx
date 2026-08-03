import type { Metadata } from "next";
import { Big_Shoulders, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { withBasePath } from "@/lib/base-path";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://lomamuaythai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Loma Muay Thai Camp | 10-Day Training Retreat in Phuket, Thailand",
  description:
    "Join a 10-day Muay Thai training camp in Phuket, Thailand, coached by two-time World Champion Paloma Arranz. Twice-daily training, boutique resort stay, small groups, and the real Phuket most visitors never see.",
  keywords: [
    "muay thai camp phuket",
    "muay thai training holiday",
    "phuket muay thai retreat",
    "muay thai camp thailand",
    "paloma arranz muay thai",
    "muay thai training camp for beginners",
  ],
  openGraph: {
    title: "Loma Muay Thai Camp | 10-Day Training Retreat in Phuket, Thailand",
    description:
      "Train twice a day with a 2x Muay Thai World Champion, stay in a boutique Phuket resort, and explore the island like an insider. Small groups, three camps a year.",
    url: siteUrl,
    siteName: "Loma Muay Thai Camp",
    images: [{ url: "/images/hero-fight-club-kick.jpg", width: 2400, height: 1601 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loma Muay Thai Camp | 10-Day Training Retreat in Phuket, Thailand",
    description:
      "Train twice a day with a 2x Muay Thai World Champion in Phuket. Small groups, boutique resort, real Thailand.",
    images: ["/images/hero-fight-club-kick.jpg"],
  },
  icons: {
    icon: withBasePath("/images/logo.jpg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
