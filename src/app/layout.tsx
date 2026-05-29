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
  title: "Aaryan Nighut | portfolio",
  description: "Explore the futuristic, premium developer portfolio of Aaryan Nighut. Designer, Developer, AI Enthusiast, and Problem Solver crafting immersive digital experiences.",
  keywords: ["Aaryan Nighut", "Developer Portfolio", "Next.js Portfolio", "Framer Motion Portfolio", "Cinematic Web Design", "AI Integration", "Full Stack Developer Pune"],
  authors: [{ name: "Aaryan Nighut" }],
  creator: "Aaryan Nighut",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
