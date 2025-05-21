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
    "Psicóloga em Apucarana",
    "Psicóloga comportamental",
    "Psicoterapia",
    "Psicologia",
    "Londrina",
    "Apucarana",
    "Clínica em Londrina",
    "Clínica em Apucarana",
    "Terapia Comportamental",
    "Terapia Cognitivo Comportamental",
  ],
  description: "Amanda Vilela é psicóloga comportamental que oferece atendimentos online e presenciais nas cidades de Londrina e Apucarana. Agende sua consulta e conte com um atendimento especializado para o seu bem-estar emocional.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Amanda Vilela - Psicóloga Comportamental",
    description: "Amanda Vilela é psicóloga comportamental que oferece atendimentos online e presenciais nas cidades de Londrina e Apucarana. Agende sua consulta e conte com um atendimento especializado para o seu bem-estar emocional.",
    url: "https://amandavilela.com",
    siteName: "Amanda Vilela - Psicóloga Comportamental",
    images: [
      {
        url: "https://amandavilela.com/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Amanda Vilela - Psicóloga Comportamental",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Vilela - Psicóloga Comportamental",
    description: "Amanda Vilela é psicóloga comportamental que oferece atendimentos online e presenciais nas cidades de Londrina e Apucarana.",
    images: ["https://amandavilela.com/ogimage.jpg"],
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
        <Header />
        {children}
      </body>
    </html>
  );
}
