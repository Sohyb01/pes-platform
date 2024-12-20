import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import "@schedule-x/theme-default/dist/index.css";
import "./globals.css";
import "./css/components.css";
import "./css/backgrounds.css";

import { Inter } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";

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
    <html lang="en" className="min-h-[100vh] h-full">
      <body
        className={`${coolvetica.variable} ${inter.className} flex flex-col items-center h-full`}
      >
        <SidebarProvider>
          {children}
          <Toaster />
        </SidebarProvider>
        {/* Chat support component */}
      </body>
    </html>
  );
}
