"use client";

import { type ChatStore, createChatStore } from "@/stores/chat-store";
import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type ChatStoreApi = ReturnType<typeof createChatStore>;

export const ChatStoreContext = createContext<ChatStoreApi | undefined>(
  undefined
);

export interface ChatStoreProviderProps {
  children: ReactNode;
}

const ChatStoreProvider = ({ children }: ChatStoreProviderProps) => {
  const storeRef = useRef<ChatStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createChatStore();
  }

  return (
    <ChatStoreContext.Provider value={storeRef.current}>
      {children}
    </ChatStoreContext.Provider>
  );
};

export const useChatStore = <T,>(selector: (store: ChatStore) => T): T => {
  const chatStoreContext = useContext(ChatStoreContext);

  if (!chatStoreContext) {
    throw new Error("useChatStore must be within ChatStoreProvider");
  }

  return useStore(chatStoreContext, selector);
};

export default ChatStoreProvider;
