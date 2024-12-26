"use client";
import { ExpandableChatHeader } from "@/components/pes-custom/platform-components/expandable-chat";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import { useEffect } from "react";

const ClassChatTopbar = () => {
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
        <p className="font-medium">Omar</p>
      </div>
    </ExpandableChatHeader>
  );
};

export default ClassChatTopbar;
