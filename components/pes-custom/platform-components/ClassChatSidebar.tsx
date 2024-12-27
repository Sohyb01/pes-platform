"use client";

import Link from "next/link";
import { MoreHorizontal, SquarePen } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TFormSchemaSendMessage } from "@/lib/types-forms";

interface SidebarProps {
  isCollapsed: boolean;
  chats: {
    name: string;
    messages: TFormSchemaSendMessage[];
    avatar: string;
    variant: "secondary" | "ghost";
  }[];
  onClick?: () => void;
  isMobile: boolean;
}

export function ClassChatSidebar({ chats }: SidebarProps) {
  return (
    <div className="relative group flex flex-col h-full bg-muted/10 dark:bg-muted/20 gap-4 p-2 data-[collapsed=true]:p-2 ">
      <div className="flex justify-between p-2 items-center">
        <div className="flex gap-2 items-center text-2xl">
          <p className="font-medium">Chats</p>
          <span className="text-zinc-300">({chats.length})</span>
        </div>

        <div>
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <MoreHorizontal size={20} />
          </Link>

          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <SquarePen size={20} />
          </Link>
        </div>
      </div>
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {chats.map((chat, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: chat.variant, size: "lg" }),
              chat.variant === "secondary" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
              "justify-start gap-4"
            )}
          >
            <Avatar className="flex justify-center items-center">
              <AvatarImage
                src={chat.avatar}
                alt={chat.avatar}
                width={6}
                height={6}
                className="w-10 h-10 "
              />
            </Avatar>
            <div className="flex flex-col max-w-28">
              <span>{chat.name}</span>
              {chat.messages.length > 0 && (
                <span className="text-zinc-300 text-xs truncate ">
                  Bob: {chat.messages[chat.messages.length - 1].message_text}
                </span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
