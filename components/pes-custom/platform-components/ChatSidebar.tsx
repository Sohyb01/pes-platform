import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TFormSchemaAddConversation } from "@/lib/types-forms";

export function ChatSidebar({
  conversationsData,
  selectedConversation,
  setSelectedConversation,
}: {
  conversationsData: TFormSchemaAddConversation[];
  selectedConversation: TFormSchemaAddConversation;
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<{
      conversation_name: string;
      host_id: string;
      conversation_id?: string | undefined;
    }>
  >;
}) {
  return (
    <Sidebar className="h-full">
      <SidebarContent className="bg-background py-8 lg:py-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-large py-4 pb-8">
            Class Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {conversationsData.map((convo, idx) => (
                <SidebarMenuItem
                  className={`text-subtle cursor-pointer`}
                  key={idx}
                >
                  <SidebarMenuButton
                    className={`hover:bg-transparent  ${
                      selectedConversation.conversation_id ==
                      convo.conversation_id
                        ? `bg-primary text-primary-foreground hover:bg-primary`
                        : `bg-transparent hover:bg-muted`
                    }`}
                    onClick={() => {
                      setSelectedConversation(conversationsData[idx]);
                    }}
                    asChild
                  >
                    <span>{convo.conversation_name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
