"use client";

import { userData } from "@/lib/shadcn-chat-data";
import React, { useEffect, useState } from "react";
import {} from "@/components/ui/resizable";
import { Chat } from "./chat";

interface ChatLayoutProps {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function ChatLayout({}: // defaultCollapsed = false,
// navCollapsedSize,
ChatLayoutProps) {
  // const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedUser, setSelectedUser] = React.useState(userData[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <Chat
      messages={selectedUser.messages}
      selectedUser={selectedUser}
      isMobile={isMobile}
    />
  );
}
