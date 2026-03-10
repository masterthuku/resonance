import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

;

export const metadata: Metadata = {
  title: "Resonance",
  description: "Resonance. Your AI Voice Assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={inter.className}
      >
        {children}
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
    
  );
}
