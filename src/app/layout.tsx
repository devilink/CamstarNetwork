import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Camstar Network | Creative Content & Influencer Marketing",
  description: "Helping brands dominate online with aggressive engagement strategies, stunning visuals, and top-tier influencer collaborations.",
  keywords: ["Camstar Network", "Camstar", "Influencer Marketing", "Creative Content", "Brand Growth", "Digital Marketing"],
  openGraph: {
    title: "Camstar Network",
    description: "Helping brands dominate online with aggressive engagement strategies and stunning visuals.",
    url: "https://camstarnetwork.com",
    siteName: "Camstar Network",
    locale: "en_US",
    type: "website",
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
      className={`${inter.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
