"use client";

import { cn } from "@/lib/utils";
import { Message } from "../data";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";

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

const ClassChatMobileSidebar = ({
  conversations,
  className,
}: ClassChatSidebarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 p-4 border-r bg-background transition-all",
        className
      )}
    >
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
              {conv.messages.length > 0 && (
                <span className="text-zinc-300 text-xs truncate ">
                  {conv.messages[conv.messages.length - 1].name.split(" ")[0]}:{" "}
                  {conv.messages[conv.messages.length - 1].isLoading
                    ? "Typing..."
                    : conv.messages[conv.messages.length - 1].message}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassChatMobileSidebar;
