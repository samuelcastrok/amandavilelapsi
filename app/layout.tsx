import type { Metadata } from "next";
import { Quicksand  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import image from '../public/ogimage.jpg'

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda Vilela - Psicóloga Comportamental",
  keywords: [
    "Psicóloga",
    "Comportamental",
    "Psicóloga online",
    "Psicóloga em Londrina",
    "Psicóloga comportamental",
    "Psicoterapia",
    "Psicologia",
    "Londrina",
    "Clínica em Londrina",
    "Terapia Comportamental",
    "Terapia Cognitivo Comportamental",
  ],
  description: "Amanda Vilela - Psicoterapia",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Amanda Vilela - Psicóloga Comportamental", 
    description: "Amanda Vilela - Psicóloga Comportamental",
    url: "https://amandavilela.com",
    images: [
      {
        url: image.src,
        width: image.width,
        height: image.height,
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
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body className={quicksand.className}>
        <link itemProp="url" href="https://example.com" />
        <meta itemProp="name" content="Example"/>
        <Header />
        {children}
      </body>
    </html>
  );
}
