import React from "react";
import ClassChat from "./chat";
import ClassChatSidebar from "./chat-sidebar";

const ClassChatLayout = () => {
  return (
    <div className="grid grid-cols-4 bg-background border rounded-lg p-4">
      <ClassChatSidebar className="col-span-1" />
      <ClassChat className="col-span-3" />
    </div>
  );
};

export default ClassChatLayout;
