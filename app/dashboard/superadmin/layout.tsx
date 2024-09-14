"use client";

import SuperadminNavbar from "@/components/pes-custom/SuperadminNavbar";
import SuperadminSidebar from "@/components/pes-custom/SuperadminSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col w-full h-[100vh] overflow-hidden`}
      >
        <SuperadminNavbar />
        <div className="flex w-full overflow-hidden dashboard-sizing">
          <SuperadminSidebar />
          {/* Main Content */}
          <main className="w-full flex p-4 md:p-8 dashboard-sizing overflow-scroll">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
