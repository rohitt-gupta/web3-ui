import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { manrope } from "@/fonts";



export const metadata: Metadata = {
  title: "Wallet",
  description: "Swapr Wallet for ETH, MATIC, USDT, USDC, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-white antialiased relative`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
