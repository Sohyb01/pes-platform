import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bell, CheckIcon } from "lucide-react";

const NotificationsTab = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="p-2 relative rounded-full"
        >
          <Bell width={16} />
          <div className="absolute -top-0 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            1
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[20rem] p-2">
        <ScrollArea className="max-h-[24rem] overflow-y-scroll">
          <p className="text-large p-4 pt-2">Notifications</p>
          <Separator />
          <div className="space-y-8 p-4 pt-6 pb-8">
            {false && <p>You have no unread notifications.</p>}

            {true && (
              <div className="grid grid-cols-[1fr_auto] items-start gap-4 relative">
                <div className="space-y-1 text-p_ui">
                  <p>Welcome!</p>
                  <p className="text-muted-foreground text-subtle">
                    Your account has been created aaaa succesfully. You now have
                    access to the PES platform features.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full absolute -top-0.5 -right-2 h-8 w-8"
                >
                  <CheckIcon className="h-4 w-4" />
                </Button>
              </div>
            )}
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 relative">
              <div className="space-y-1 text-p_ui">
                <p>Welcome!</p>
                <p className="text-muted-foreground text-subtle">
                  Your account has been created aaaa succesfully. You now have
                  access to the PES platform features.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full absolute -top-0.5 -right-2 h-8 w-8"
              >
                <CheckIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 relative">
              <div className="space-y-1 text-p_ui">
                <p>Welcome!</p>
                <p className="text-muted-foreground text-subtle">
                  Your account has been created aaaa succesfully. You now have
                  access to the PES platform features.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full absolute -top-0.5 -right-2 h-8 w-8"
              >
                <CheckIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-start gap-4 relative">
              <div className="space-y-1 text-p_ui">
                <p>Welcome!</p>
                <p className="text-muted-foreground text-subtle">
                  Your account has been created aaaa succesfully. You now have
                  access to the PES platform features.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full absolute -top-0.5 -right-2 h-8 w-8"
              >
                <CheckIcon className="h-4 w-4" />
              </Button>
            </div>
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

export default NotificationsTab;
