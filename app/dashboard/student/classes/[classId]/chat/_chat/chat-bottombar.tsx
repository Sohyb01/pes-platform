"use client";
import { FileImage, Paperclip, SendHorizontal, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { EmojiPicker } from "@/components/pes-custom/platform-components/emoji-picker";
import { ChatInput } from "@/components/pes-custom/platform-components/chat-input";

import { TFormSchemaSendMessage } from "@/lib/types-forms";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];

const ChatBottombar = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setisLoading] = useState(false);
  const sendMessage = useChatStore((state) => state.sendMessage);
  const selectedConvo = useChatStore((state) => state.selectedConversation);

  // temp till auth
  const curUserId = "student1";

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleThumbsUp = () => {
    const newMessage: TFormSchemaSendMessage = {
      message_text: "👍",
      sent_datetime: new Date(),
      received_datetime: new Date(),
      from_id: curUserId,
      to_id: "user1",
      conversation_id: selectedConvo.conversation_id,
      contact_id: selectedConvo.conversation_id,
    };

    sendMessage(newMessage);
    setMessage("");
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: TFormSchemaSendMessage = {
        message_text: message,
        sent_datetime: new Date(),
        received_datetime: new Date(),
        from_id: curUserId,
        to_id: "user1",
        conversation_id: selectedConvo.conversation_id,
        contact_id: selectedConvo.conversation_id,
      };

      sendMessage(newMessage);
      setMessage("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  return (
    <div className="px-2 py-4 flex justify-between w-full items-center gap-2">
      <div className="flex">
        <div className="flex">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
              "shrink-0"
            )}
          >
            <FileImage size={22} className="text-muted-foreground" />
          </Link>
        </div>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="w-full relative"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: "spring",
              bounce: 0.15,
            },
          }}
        >
          <form>
            <ChatInput
              value={message}
              ref={inputRef}
              onKeyDown={handleKeyPress}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className=""
            />
          </form>
          <div className="absolute right-4 bottom-2  ">
            <EmojiPicker
              onChange={(value) => {
                setMessage(message + value);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            />
          </div>
        </motion.div>

        {message.trim() ? (
          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleSend}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <SendHorizontal size={22} className="text-muted-foreground" />
          </Button>
        ) : (
          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleThumbsUp}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <ThumbsUp size={22} className="text-muted-foreground" />
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBottombar;
