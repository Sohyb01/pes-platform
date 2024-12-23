"use client";
import { cn } from "@/lib/utils";
import { UserData } from "../data";
import ClassChatTopbar from "./chat-topbar";
import ClassChatList from "./chat-list";
import ClassChatBottomBar from "./chat-bottombar";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";

interface ClassChatProps {
  selectedUser: UserData;
  className?: string;
}

const ClassChat = ({ selectedUser, className }: ClassChatProps) => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div
      className={cn("flex flex-col justify-between w-full h-full", className)}
    >
      <ClassChatTopbar selectedUser={selectedUser} />
      <ClassChatList messages={messages} />
      <ClassChatBottomBar />
    </div>
  );
};

export default ClassChat;
