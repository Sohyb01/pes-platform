"use client";
import { cn } from "@/lib/utils";
import { UserData } from "../data";
import ClassChatTopbar from "./chat-topbar";
import ClassChatList from "./chat-list";
import ClassChatBottomBar from "./chat-bottombar";
import useChatStore from "@/components/hooks/useChatStore";

interface ClassChatProps {
  selectedUser: UserData;
  className?: string;
}

const ClassChat = ({ selectedUser, className }: ClassChatProps) => {
  const messagesState = useChatStore((state) => state.messages);

  return (
    <div
      className={cn(
        "flex flex-col justify-between w-full h-[70vh] md:h-[65vh]",
        className
      )}
    >
      <ClassChatTopbar selectedUser={selectedUser} />
      <ClassChatList selectedUser={selectedUser} messages={messagesState} />
      <ClassChatBottomBar />
    </div>
  );
};

export default ClassChat;
