"use client";

import { useEffect, useRef } from "react";
import { ChatMessageList } from "@/components/pes-custom/platform-components/chat-message-list";
import { AnimatePresence, motion } from "motion/react";
import {
  ChatBubble,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
} from "@/components/pes-custom/platform-components/chat-bubble";
import { TFormSchemaSendMessage } from "@/lib/types-forms";
import { format } from "date-fns";

interface ChatListProps {
  messages: TFormSchemaSendMessage[];
}

const getMessageVariant = (messageSender: string, curUserId: string) =>
  messageSender === curUserId ? "sent" : "received";

const ClassChatList = ({ messages }: ChatListProps) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // temp until we get the auth api
  const curUserId = "student1";

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full overflow-y-auto h-full flex flex-col">
      <ChatMessageList ref={messagesContainerRef}>
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message.from_id, curUserId);
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
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
                className="flex flex-col gap-2 p-4"
              >
                {/* Usage of ChatBubble component */}
                <ChatBubble variant={variant}>
                  <ChatBubbleMessage>
                    {message.message_text}
                    {message.received_datetime && (
                      <ChatBubbleTimestamp
                        timestamp={format(message.received_datetime, "hh:mm a")}
                      />
                    )}
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>
    </div>
  );
};

export default ClassChatList;
