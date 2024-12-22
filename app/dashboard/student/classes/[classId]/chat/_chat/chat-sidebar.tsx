"use client";

import { cn } from "@/lib/utils";
import { Message } from "../data";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";

interface ClassChatSidebarProps {
  className?: string;
  conversations: {
    name: string;
    messages: Message[];
    avatar: string;
    variant: "default" | "ghost";
  }[];
}

// all the data are just for testing I'm waiting for the backend to get me a clear picture of how does the conversations system works
// NOTE: There're still changes that will be made to conversations to fit our needs

const ClassChatSidebar = ({
  conversations,
  className,
}: ClassChatSidebarProps) => {
  // can't do it rn cuz of wrong types ( once I know the exact type of each convo I'll implement it )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setSelectedConvo = useChatStore((state) => state.setSelectedConvo);

  return (
    <div className={cn("flex flex-col gap-8 p-4 border-r", className)}>
      <h3 className="text-h3">Chats</h3>
      <div className="flex flex-col gap-4">
        {conversations.map((conv, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: conv.variant, size: "xl" }),
              conv.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
              "justify-start gap-4"
            )}
            onClick={() => console.log("active")}
          >
            <Avatar className="flex justify-center items-center">
              <AvatarImage
                src={conv.avatar}
                alt={conv.avatar}
                width={6}
                height={6}
                className="w-10 h-10 "
              />
            </Avatar>
            <div className="flex flex-col max-w-28">
              <span>{conv.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassChatSidebar;
