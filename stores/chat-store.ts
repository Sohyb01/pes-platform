import { createStore } from "zustand/vanilla";
import {
  type TFormSchemaAddConversation as Conversation,
  type TFormSchemaSendMessage as Message,
} from "@/lib/types-forms";
import { exampleConversations, exampleMessages } from "@/lib/data";

export interface ChatState {
  // Chat States
  messages: Message[];
  isMessagesLoading: boolean;
  conversations: Conversation[];
  selectedConversation: Conversation;
  isConversationLoading: boolean;

  // Responsivness States
  showMobileSidebar: boolean;
  isMobile: boolean;
}

export interface ChatActions {
  getConversations: () => Promise<Conversation[]>;
  setSelectedConvo: (selectedConversation: Conversation) => void;

  setShowMobileSidebar: (showSidebar: boolean) => void;
  setIsMobile: (isMobile: boolean) => void;

  sendMessage: (message: Message) => Promise<void>;
  getMessages: (conversationId: string) => Promise<Message[]>;

  // connect to backend's socket to setup live chatting
  subscribeToConvo: () => void;
  // disconnect from backend's socket
  unsubscribeToConvo: () => void;
}

export type ChatStore = ChatState & ChatActions;

export const createChatStore = () => {
  return createStore<ChatStore>()((set) => ({
    // Chat States
    messages: exampleMessages,
    conversations: exampleConversations,
    selectedConversation: exampleConversations[0],
    isMessagesLoading: false,
    isConversationLoading: false,

    // Responsivness States
    showMobileSidebar: false,
    isMobile: window.innerWidth <= 468 ? true : false,

    // Chat Actions
    sendMessage: async (message) =>
      set((state) => ({ messages: [...state.messages, message] })),
    getMessages: async (conversationId) => exampleMessages,

    // Sidebar
    setShowMobileSidebar: (showMobileSidebar) => set({ showMobileSidebar }),
    setIsMobile: (isMobile) => set({ isMobile }),

    getConversations: async () => exampleConversations,
    setSelectedConvo: (selectedConversation: Conversation) =>
      set({ selectedConversation }),
    subscribeToConvo: () => console.log("Subscribed to Convo"),
    unsubscribeToConvo: () => console.log("Unsubscribed to Convo"),
  }));
};
