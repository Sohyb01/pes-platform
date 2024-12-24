"use client";
import ClassChat from "./chat";
import ClassChatSidebar from "./chat-sidebar";
import { useChatStore } from "@/components/pes-custom/platform-components/providers/ChatStoreProvider";
import ClassChatMobileSidebar from "./chat-mobile-sidebar";
import { AnimatePresence, motion } from "motion/react";
import {
  getClassConversation,
  getInstructorConversation,
} from "@/api/conversations";
import { Conversation } from "@/stores/chat-store";

interface ClassChatLayoutProps {
  classId: string;
}

const ClassChatLayout = ({ classId }: ClassChatLayoutProps) => {
  const showMobileSidebar = useChatStore((state) => state.showMobileSidebar);
  const isMobile = useChatStore((state) => state.isMobile);
  const setShowMobileSidebar = useChatStore(
    (state) => state.setShowMobileSidebar
  );

  const classConvo = getClassConversation(classId) as Conversation;
  const instructorConvo = getInstructorConversation(classId) as Conversation;

  return (
    <div className="relative grid md:grid-cols-4 bg-background border rounded-lg overflow-hidden">
      {!isMobile && (
        <ClassChatSidebar
          conversations={[classConvo, instructorConvo]}
          className="flex col-span-1 "
        />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileSidebar && isMobile && (
          <div className="absolute inset-0 size-full">
            <motion.div
              key="mobile-sidebar" // Add this
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -250 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute h-full left-0 top-0 bg-background z-20"
            >
              <ClassChatMobileSidebar
                conversations={[classConvo, instructorConvo]}
              />
            </motion.div>
            <motion.div
              key="overlay" // Add this
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowMobileSidebar(false)}
              className="absolute size-full inset-0 bg-background/80 z-10"
            />
          </div>
        )}
      </AnimatePresence>

      <ClassChat className="h-[calc(80dvh)] md:h-[calc(72dvh)] md:col-span-3" />
    </div>
  );
};

export default ClassChatLayout;
