import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { ClassIcon } from "../icons/ClassIcon";

const MessagesTab = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="p-2 relative rounded-full"
        >
          <MessageCircle width={16} />
          <div className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            1
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[20rem] p-2">
        <ScrollArea className="max-h-[24rem] overflow-y-scroll">
          <p className="text-large p-4 pt-2">Messages</p>
          <Separator />
          <div className="space-y-8 p-4 pt-6 pb-8">
            {false && <p>You have no new messages.</p>}

            {true && (
              <div className="grid grid-cols-1 items-start gap-y-4">
                <div className="space-y-1 text-p_ui px-4 py-4 border-[1px] border-border rounded-md cursor-pointer bg-muted hover:bg-muted/80 duration-100">
                  <p className="flex items-center gap-2">
                    <ClassIcon className="stroke-foreground" /> Robotics 3
                  </p>
                  <p className="text-muted-foreground line-clamp-2 text-subtle">
                    John: how many questions will be in the exam? and what will
                    the exam cover?
                  </p>
                </div>
                <div className="space-y-1 text-p_ui px-4 py-4 border-[1px] border-border rounded-md cursor-pointer hover:bg-muted/80 duration-100">
                  <p className="flex items-center gap-2">
                    <ClassIcon className="stroke-foreground" /> AI Class
                  </p>
                  <p className="text-muted-foreground line-clamp-2 text-subtle">
                    John: how many questions will be in the exam? and what will
                    the exam cover?
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        {true && (
          <>
            <Separator />
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Mark all as read
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default MessagesTab;
