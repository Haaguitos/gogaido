import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

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
      <body
        className={`${hk.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
