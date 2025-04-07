import type { Metadata } from "next";
import { Quicksand  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda Vilela",
  description: "Amanda Vilela - Psicoterapia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={quicksand.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
