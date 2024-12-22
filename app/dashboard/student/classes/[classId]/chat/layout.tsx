import ChatStoreProvider from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import { PropsWithChildren } from "react";

const ChatLayout = ({ children }: PropsWithChildren) => {
  return <ChatStoreProvider>{children}</ChatStoreProvider>;
};

export default ChatLayout;
