import StudentNavbar from "@/components/pes-custom/platform-components/StudentNavbar";
import StudentSidebar from "@/components/pes-custom/platform-components/StudentSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased flex flex-col w-full h-[100vh] overflow-hidden bg-shade`}
    >
      <StudentNavbar />
      <div className="flex w-full dashboard-sizing gradient-bg p-4 gap-4 md:gap-8">
        <StudentSidebar />
        {/* Main Content */}
        <main className="w-full p-4 overflow-scroll">{children}</main>
      </div>
    </div>
  );
}
