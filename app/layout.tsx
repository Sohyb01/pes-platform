import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "./css/components.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const coolvetica = localFont({
  src: "./fonts/Coolvetica/coolvetica-rg.otf",
  variable: "--header",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PES | Robotics & AI School for Kids",
  description:
    "Free Session Available! Programming, Robotics, and AI courses for kids in Alexandria, Egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${coolvetica.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
