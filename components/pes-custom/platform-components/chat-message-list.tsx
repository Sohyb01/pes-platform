import * as React from "react";
import { cn } from "@/lib/utils";

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn(
        "flex flex-col w-full h-full p-4 gap-0 overflow-y-auto text-subtle",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList };
