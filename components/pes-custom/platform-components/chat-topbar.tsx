/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "@/lib/shadcn-chat-data";
import { Info, Phone, Video } from "lucide-react";
import { ExpandableChatHeader } from "@/components/pes-custom/platform-components/expandable-chat";
import ChatMembersList from "@/components/pes-custom/platform-components/chat-members-list";

interface ChatTopbarProps {
  selectedUser: UserData;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

const fakeMembersData = [
  {
    img: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    id: "m001",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Bob Smith",
    id: "m002",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Charlie Davis",
    id: "m003",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Diana Miller",
    id: "m004",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Evan Thompson",
    id: "m005",
  },
];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-4">
        <Avatar className="flex justify-center items-center h-8 w-8">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            // width={3}
            // height={3}
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">Class Chat</span>
        </div>
        {/* Class Members List */}
        <ChatMembersList members={fakeMembersData} />
      </div>

      {/* <div className="flex gap-1">
        {TopbarIcons.map((icon, index) => (
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9"
            )}
          >
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        ))}
      </div> */}
    </ExpandableChatHeader>
  );
}
