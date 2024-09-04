import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SuezConnect',
  description: 'Empowering startups to reach their goals faster through strategic outsourcing solutions.',
  openGraph: {
    title: 'SuezConnect',
    description: 'Empowering startups to reach their goals faster through strategic outsourcing solutions.',
    images: [
      {
        url: 'https://suezconnect.co/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://suezconnect.co',
    siteName: 'SuezConnect',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <Header />
        <main className="pt-16 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}