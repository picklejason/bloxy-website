import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloxy — Build better habits, one block at a time",
  description:
    "Bloxy turns your daily tasks into a satisfying game. Complete tasks, drop blocks, clear lines, and unlock themes while staying consistent.",
  metadataBase: new URL("https://bloxy.app"),
  keywords: [
    "habit tracker",
    "productivity app",
    "task manager",
    "gamified to-do",
    "streaks",
    "block game",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bloxy — Build better habits, one block at a time",
    description:
      "Complete tasks to place blocks, earn points, unlock themes, and keep your streak alive.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxy — Build better habits, one block at a time",
    description:
      "Turn tasks into blocks. Clear lines. Unlock rewards. Stay consistent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
