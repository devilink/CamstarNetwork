import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Camstar Network | Creative Digital Agency",
  description:
    "Camstar Network is a creative digital agency specializing in Influencer Marketing, Social Media Profile Management, Video Editing, and Ad Designing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-[#fafafa] text-[#111111] font-sans selection:bg-[#9f7aea] selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
