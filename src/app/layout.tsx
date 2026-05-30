import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pemhida Tegal - Portal Berita dan Jasa",
  description: "Portal resmi Pemuda Hidayatullah Tegal dengan berita, artikel, dan jasa pembuatan website.",
  openGraph: {
    title: "Pemhida Tegal - Portal Berita dan Jasa",
    description: "Portal resmi Pemuda Hidayatullah Tegal dengan berita, artikel, dan jasa pembuatan website.",
    type: "website",
    url: "https://pemhida-tegal.vercel.app",
    siteName: "Pemhida Tegal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        width: 1200,
        height: 630,
        alt: "Pemhida Tegal - Portal Berita dan Jasa",
      },
    ],
    locale: "id_ID",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
