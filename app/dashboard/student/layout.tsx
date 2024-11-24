import StudentNavbar from "@/components/pes-custom/platform-components/StudentNavbar";
import StudentSidebar from "@/components/pes-custom/platform-components/StudentSidebar";
import { SuperadminDashboadBreadcrumb } from "@/components/pes-custom/platform-components/SuperadminDashboardBreadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased flex flex-col w-full h-[100vh] overflow-hidden`}
    >
      <StudentNavbar />
      <div className="flex w-full overflow-hidden dashboard-sizing">
        <StudentSidebar />
        {/* Main Content */}
        <main className="w-full flex flex-col gap-8 p-4 md:p-8 dashboard-sizing overflow-scroll bg-shade/50">
          <SuperadminDashboadBreadcrumb />
          {children}
        </main>
      </div>
    </div>
  );
}
