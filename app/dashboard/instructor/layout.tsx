import PESChatSupport from "@/components/pes-custom/platform-components/chat-support-pes";
import InstructorNavbar from "@/components/pes-custom/platform-components/InstructorNavbar";
import InstructorSidebar from "@/components/pes-custom/platform-components/InstructorSidebar";
import { exampleConversations, exampleMessages } from "@/lib/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased flex flex-col w-full h-[100vh] overflow-hidden`}
    >
      <InstructorNavbar />
      <div className="flex w-full overflow-hidden dashboard-sizing">
        <InstructorSidebar />
        {/* Main Content */}
        <main className="w-full flex flex-col gap-8 p-4 md:p-8 lg:pl-12 dashboard-sizing overflow-scroll bg-background">
          <PESChatSupport
            messagesData={exampleMessages}
            conversationsData={exampleConversations}
          />
          {children}
        </main>
      </div>
    </div>
  );
}
