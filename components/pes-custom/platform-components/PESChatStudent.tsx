"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/pes-custom/platform-components/chat-bubble";
import { ChatInput } from "@/components/pes-custom/platform-components/chat-input";
import {
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChat,
} from "@/components/pes-custom/platform-components/expandable-chat";
import { ChatMessageList } from "@/components/pes-custom/platform-components/chat-message-list";
import { AnimatePresence, motion } from "framer-motion";
import { ChatSidebar } from "./ChatSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  TFormSchemaAddConversation,
  TFormSchemaSendMessage,
} from "@/lib/types-forms";

export default function PESChatStudent({
  messagesData,
  conversationsData,
}: {
  messagesData: TFormSchemaSendMessage[];
  conversationsData: TFormSchemaAddConversation[];
}) {
  const [conversationsDataState, setConversationsDataState] =
    useState(conversationsData);

  // Set the selected conversation
  const [selectedConversation, setSelectedConversation] = useState(
    conversationsDataState[0]
  );

  const [messages, setMessages] = useState(
    messagesData.filter(
      (message) =>
        message.conversation_id == selectedConversation.conversation_id
    )
  ); // Check if the messages are part of the selected conversations

  useEffect(() => {
    setMessages(
      messagesData.filter(
        (message) =>
          message.conversation_id == selectedConversation.conversation_id
      )
    );
  }, [messagesData, selectedConversation]);

  const [inputMessage, setInputMessage] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: TFormSchemaSendMessage = {
        message_text: inputMessage,
        sent_datetime: new Date(),
        received_datetime: new Date(), // Change later
        from_id: "student1", // Change later
        to_id: "to_id", // Change later
        conversation_id: "conv1", // Change later
        contact_id: "contact ID", // Change later
        message_id: Date.now().toString(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ExpandableChat
      icon={<MessageCircle className="h-6 w-6" />}
      size="lg"
      position="bottom-right"
    >
      <div className="flex gap-2 h-full max-h-[90vh]">
        <ChatSidebar
          conversationsDataState={conversationsDataState}
          setConversationsDataState={setConversationsDataState}
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />
        <div className="w-full h-full flex flex-col">
          <ExpandableChatHeader>
            <div className="flex gap-2 items-center">
              <SidebarTrigger />
              <h1 className="">{selectedConversation.conversation_name}</h1>
            </div>
          </ExpandableChatHeader>
          {/* Messages here */}
          <ExpandableChatBody>
            <ChatMessageList
              ref={messagesContainerRef}
              className="dark:bg-muted/40"
            >
              <AnimatePresence>
                {messages.map((message, index) => {
                  return (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                      transition={{
                        opacity: { duration: 0.1 },
                        layout: {
                          type: "spring",
                          bounce: 0.3,
                          duration: index * 0.05 + 0.2,
                        },
                      }}
                      style={{ originX: 0.5, originY: 0.5 }}
                      className="flex flex-col my-2"
                    >
                      <ChatBubble
                        key={message.message_id}
                        variant={
                          message.from_id === "student1" ? "sent" : "received"
                        }
                      >
                        <ChatBubbleAvatar
                          src={
                            message.from_id === "student1"
                              ? "https://avatars.githubusercontent.com/u/114422072?s=400&u=8a176a310ca29c1578a70b1c33bdeea42bf000b4&v=4"
                              : ""
                          }
                          fallback={
                            message.from_id === "student1" ? "ST" : "IN"
                          }
                        />
                        <ChatBubbleMessage
                          variant={
                            message.from_id === "student1" ? "sent" : "received"
                          }
                        >
                          {message.message_text}
                        </ChatBubbleMessage>
                      </ChatBubble>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </ChatMessageList>
          </ExpandableChatBody>
          <ExpandableChatFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex relative gap-2"
            >
              <ChatInput
                onKeyDown={onKeyDown}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
                className="resize-none"
              />
              <Button
                disabled={!inputMessage.trim()}
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 shrink-0"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </ExpandableChatFooter>
        </div>
      </div>
    </ExpandableChat>
  );
}
