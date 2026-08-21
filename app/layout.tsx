import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Velasquez",
  description: "Portfolio de Diego Velasquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.className} flex flex-col min-h-screen`}>
        <Navbar />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
