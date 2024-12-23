"use client";
import { ExpandableChatHeader } from "@/components/pes-custom/platform-components/expandable-chat";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "../data";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import { useEffect } from "react";

interface ClassChatTopbarProps {
  selectedUser: UserData;
}

const ClassChatTopbar = ({ selectedUser }: ClassChatTopbarProps) => {
  const showMobileSidebar = useChatStore((state) => state.showMobileSidebar);
  const setShowMobileSidebar = useChatStore(
    (state) => state.setShowMobileSidebar
  );
  const isMobile = useChatStore((state) => state.isMobile);
  const setIsMobile = useChatStore((state) => state.setIsMobile);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 744) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setIsMobile]);

  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        {isMobile && (
          <Button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            variant="sorting"
          >
            <Menu />
          </Button>
        )}
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <p className="font-medium">{selectedUser.name}</p>
      </div>
    </ExpandableChatHeader>
  );
};

export default ClassChatTopbar;
