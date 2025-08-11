import type { Metadata } from "next";
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
  title: "Bloxy — Build better habits, one block at a time",
  description:
    "Bloxy turns your daily tasks into a satisfying game. Complete tasks, drop blocks, clear lines, and unlock themes while staying consistent.",
  metadataBase: new URL("https://www.bloxyapp.com"),
  applicationName: "Bloxy",
  icons: {
    icon: "/assets/images/icon.png",
    shortcut: "/assets/images/icon.png",
    apple: "/assets/images/icon.png",
  },
  keywords: [
    "habit tracker",
    "habit tracker app",
    "gamified habit tracker",
    "gamified productivity app",
    "to-do list game",
    "task gamification",
    "build habits",
    "daily routine",
    "streak tracker",
    "iOS habit tracker",
    "Android habit tracker",
    "productivity app",
    "task manager",
  ],
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
        url: "/assets/images/home.png",
        width: 1200,
        height: 1800,
        alt: "Bloxy Home screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloxy — Build better habits, one block at a time",
    description:
      "Turn tasks into blocks. Clear lines. Unlock rewards. Stay consistent.",
    images: [
      {
        url: "/assets/images/home.png",
        alt: "Bloxy Home screenshot",
      },
    ],
  },
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
        <link rel="manifest" href="/manifest.webmanifest" />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bloxy",
              url: "https://www.bloxyapp.com/",
              logo: "https://www.bloxyapp.com/assets/images/icon.png",
            }),
          }}
        />
        <Script
          id="ld-json-softwareapp"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Bloxy",
              applicationCategory: "Productivity",
              operatingSystem: "iOS, Android",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              url: "https://www.bloxyapp.com/",
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bloxy",
              url: "https://www.bloxyapp.com/",
              inLanguage: "en",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.bloxyapp.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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
