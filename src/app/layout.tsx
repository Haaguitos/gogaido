import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const hk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hk" });

export const metadata = {
  title: "gogaido",
  description: "Find your next anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${hk.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
