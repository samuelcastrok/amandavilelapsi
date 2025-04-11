import type { Metadata } from "next";
import { Quicksand  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import image from '../public/ogimage.jpg'

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda Vilela",
  description: "Amanda Vilela - Psicoterapia",
  openGraph: {
    title: "Amanda Vilela", 
    description: "Amanda Vilela - Psicoterapia",
    url: "https://amandavilela.com",
    images: [
      {
        url: "../public/ogimage.jpg",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Amanda Vilela",
    type: "website",
    locale: "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={quicksand.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
