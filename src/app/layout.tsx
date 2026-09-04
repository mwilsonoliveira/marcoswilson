import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Marcos Wilson — Full-Stack Developer", template: "%s — Marcos Wilson" },
  description: "Full-Stack Developer building modern web, mobile and API experiences with React, Next.js and Node.js.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${manrope.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
