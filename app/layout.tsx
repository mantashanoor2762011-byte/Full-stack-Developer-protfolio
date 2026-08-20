import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mantasha Noor | Full Stack Developer Intern",
  description: "Portfolio of Mantasha Noor - Full Stack Developer Intern, BS Information Technology student from Pakistan. Building real projects with React, Next.js, Node.js, and more.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Intern",
  ],
  authors: [{ name: "Mantasha Noor" }],
  creator: "Mantasha Noor",
  publisher: "Mantasha Noor",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mantashanoor.dev",
    title: "Mantasha Noor | Full Stack Developer Intern",
    description: "Portfolio of Mantasha Noor - Full Stack Developer Intern building real projects with modern web technologies.",
    siteName: "Mantasha Noor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantasha Noor | Full Stack Developer Intern",
    description: "Portfolio of Mantasha Noor - Full Stack Developer Intern building real projects with modern web technologies.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}