/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "@/lib/shadcn-chat-data";
import { Info, Phone, Video } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ExpandableChatHeader } from "@/components/pes-custom/platform-components/expandable-chat";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ChatTopbarProps {
  selectedUser: UserData;
}

export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];

export default function ChatTopbar({ selectedUser }: ChatTopbarProps) {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-4">
        {/* <Avatar className="flex justify-center items-center h-8 w-8">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            // width={3}
            // height={3}
          />
        </Avatar> */}
        <div className="flex flex-col">
          <span className="font-medium">Class Chat</span>
        </div>
        {/* Class Members List */}
        <Dialog>
          <DialogTrigger>
            <div className="flex gap-1 items-center group cursor-pointer">
              {Array.from({ length: 3 }).map((_, index) => (
                <Avatar key={index} className="w-5 h-5">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
              <span className="text-muted-foreground text-detail group group-hover:text-foreground duration-100">
                +5 Members
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[400px]">
            <div className="text-p_ui">Group Members</div>
            <div className="max-h-[400px] overflow-y-scroll flex flex-col gap-4 text-subtle pt-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>Student Name</div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
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
