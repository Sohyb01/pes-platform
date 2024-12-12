import * as React from "react";
import { ChatLayout } from "@/components/pes-custom/platform-components/chat-layout";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper h-full">
      <div className="h-full w-full bg-background overflow-y-scroll rounded-[1rem] max-w-[50%]">
        <ChatLayout defaultLayout={undefined} navCollapsedSize={8} />
      </div>
    </div>
  );
};

export default page;
