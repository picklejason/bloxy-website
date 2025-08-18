import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.bloxyapp.com"),
  title: {
    default: "Bloxy — Build better habits, one block at a time",
    template: "%s — Bloxy",
  },
  description:
    "Bloxy turns your daily tasks into a satisfying game. Complete tasks, drop blocks, clear lines, and unlock themes while staying consistent.",
  applicationName: "Bloxy",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bloxy — Build better habits, one block at a time",
    description:
      "Complete tasks to place blocks, earn points, unlock themes, and keep your streak alive.",
    type: "website",
    url: "/",
    siteName: "Bloxy",
    images: [
      {
        url: "/assets/images/logo.svg",
        alt: "Bloxy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxy — Build better habits, one block at a time",
    description:
      "Turn tasks into blocks. Clear lines. Unlock rewards. Stay consistent.",
    images: [
      { url: "/assets/images/logo.svg", alt: "Bloxy logo" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://tally.so" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://tally.so" />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Bloxy",
                  url: "https://www.bloxyapp.com/",
                  logo: "https://www.bloxyapp.com/assets/images/logo.svg",
                },
                {
                  "@type": "WebSite",
                  name: "Bloxy",
                  url: "https://www.bloxyapp.com/",
                  inLanguage: "en",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
