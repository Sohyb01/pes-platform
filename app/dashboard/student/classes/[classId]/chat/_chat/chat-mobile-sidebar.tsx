"use client";

import { cn } from "@/lib/utils";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import { Conversation } from "@/stores/chat-store";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface ClassChatSidebarProps {
  className?: string;
  conversations: Conversation[];
}

const ClassChatMobileSidebar = ({
  conversations,
  className,
}: ClassChatSidebarProps) => {
  const setSelectedConvo = useChatStore((store) => store.setSelectedConvo);
  const selectedConvo = useChatStore((store) => store.selectedConversation);
  const setShowMobileSidebar = useChatStore(
    (state) => state.setShowMobileSidebar
  );

  return (
    <div
      className={cn(
        "min-w-[275px] h-full flex flex-col gap-8 p-4 border-r bg-background transition-all",
        className
      )}
    >
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
            onClick={() => {
              setSelectedConvo(conv);
              setShowMobileSidebar(false);
            }}
          >
            <MessageSquare className="shrink-0" />
            <span>{conv.conversation_name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ClassChatMobileSidebar;
