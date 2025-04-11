import type { Metadata } from "next";
import { Quicksand  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

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
        url: "./public/images/favicon.svg",
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
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      </head>
      <body className={quicksand.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
