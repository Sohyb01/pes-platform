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

const ClassChatSidebar = ({
  conversations,
  className,
}: ClassChatSidebarProps) => {
  const selectedConvo = useChatStore((state) => state.selectedConversation);
  const setSelectedConvo = useChatStore((state) => state.setSelectedConvo);

  return (
    <div className={cn("flex flex-col gap-8 p-4 border-r", className)}>
      <h3 className="text-h3">Chats</h3>
      <div className="flex flex-col gap-4">
        {conversations.map(
          (conv, index) =>
            conv && ( // Check if conv is undefined first
              <Button
                key={index}
                variant={
                  selectedConvo.conversation_id === conv.conversation_id
                    ? "default"
                    : "ghost"
                }
                size="lg"
                className="justify-start items-center gap-2"
                onClick={() => setSelectedConvo(conv)}
              >
                <MessageSquare className="hidden lg:block shrink-0" />
                <span>{conv.conversation_name}</span>
              </Button>
            )
        )}
      </div>
    </div>
  );
};

export default ClassChatSidebar;
