import ParentNavbar from "@/components/pes-custom/platform-components/ParentNavbar";
import ParentSidebar from "@/components/pes-custom/platform-components/ParentSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased flex flex-col w-full h-[100vh] overflow-hidden bg-shade`}
    >
      <ParentNavbar />
      <div className="flex w-full dashboard-sizing gradient-bg">
        <ParentSidebar />
        {/* Main Content */}
        <main className="w-full p-4 lg:p-8 overflow-scroll">{children}</main>
      </div>
    </div>
  );
}
