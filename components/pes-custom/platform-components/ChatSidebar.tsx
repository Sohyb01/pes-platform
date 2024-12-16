import { buttonVariants } from "@/components/ui/button";
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
import {
  TFormSchemaAddConversation,
  TFormSchemaAddInstructor,
} from "@/lib/types-forms";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { exampleInstructors } from "@/lib/data";

export function ChatSidebar({
  conversationsDataState,
  setConversationsDataState,
  selectedConversation,
  setSelectedConversation,
}: {
  conversationsDataState: TFormSchemaAddConversation[];
  setConversationsDataState: React.Dispatch<
    React.SetStateAction<
      {
        conversation_name: string;
        host_id: string;
        conversation_id?: string | undefined;
      }[]
    >
  >;
  selectedConversation: TFormSchemaAddConversation;
  setSelectedConversation: React.Dispatch<
    React.SetStateAction<{
      conversation_name: string;
      host_id: string;
      conversation_id?: string | undefined;
    }>
  >;
}) {
  const handleCreateNewChatInstructor = (
    instructor: TFormSchemaAddInstructor
  ) => {
    if (
      conversationsDataState.some((item) => item.host_id === instructor.id!)
    ) {
      setSelectedConversation(
        () =>
          conversationsDataState[
            conversationsDataState.findIndex(
              (item) => item.host_id === instructor.id
            )
          ]
      );
    }

    // Create conversation in back end and get data back
    const newConversation: TFormSchemaAddConversation = {
      conversation_name: instructor.employee_name,
      host_id: instructor.id!,
      conversation_id: instructor.id!, // Changel ater
    };

    // Check if conversations already have a conversation with a host id equal to the instructor id, in which case do not add a new conversation
    if (
      conversationsDataState.some((item) => item.host_id === instructor.id!) ==
      false
    ) {
      setConversationsDataState((prev) => {
        const newConvos = [...prev, newConversation];

        setSelectedConversation(
          () =>
            newConvos[newConvos.findIndex((item) => item === newConversation)]
        );

        return newConvos;
      });
    }
  };

  return (
    <Sidebar className="h-full">
      <SidebarContent className="bg-background py-8 lg:py-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-large py-4 pb-8">
            Class Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {conversationsDataState.map((convo, idx) => (
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
                      setSelectedConversation(conversationsDataState[idx]);
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

        <div className="mt-auto px-4 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`bg-secondary text-primary-foreground hover:bg-secondary w-full mb-4 ${buttonVariants(
                { size: "sm", variant: "secondary" }
              )}`}
            >
              Message Instructor
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top">
              {exampleInstructors.map((instructor) => {
                return (
                  <DropdownMenuItem
                    key={instructor.id}
                    onClick={() => handleCreateNewChatInstructor(instructor)}
                  >
                    {instructor.employee_name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
