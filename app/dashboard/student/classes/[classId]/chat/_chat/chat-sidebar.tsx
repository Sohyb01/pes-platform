"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import { Conversation } from "@/stores/chat-store";
import { MessageSquare } from "lucide-react";

interface ClassChatSidebarProps {
  className?: string;
  conversations: Conversation[];
}

// all the data are just for testing I'm waiting for the backend to get me a clear picture of how does the conversations system works
// NOTE: There're still changes that will be made to conversations to fit our needs

const ClassChatSidebar = ({
  conversations,
  className,
}: ClassChatSidebarProps) => {
  // can't do it rn cuz of wrong types ( once I know the exact type of each convo I'll implement it )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedConvo = useChatStore((state) => state.selectedConversation);
  const setSelectedConvo = useChatStore((state) => state.setSelectedConvo);

  return (
    <div className={cn("flex flex-col gap-8 p-4 border-r", className)}>
      <h3 className="text-h3">Chats</h3>
      <div className="flex flex-col gap-4">
        {conversations?.map((conv, index) => (
          <Button
            key={index}
            variant={
              selectedConvo.conversation_id === conv.conversation_id
                ? "default"
                : "ghost"
            }
            size="xl"
            className="justify-start items-center gap-2"
            onClick={() => setSelectedConvo(conv)}
          >
            <MessageSquare className="hidden lg:block shrink-0" />
            <span>{conv.conversation_name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ClassChatSidebar;
