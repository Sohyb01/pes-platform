import { createStore } from "zustand/vanilla";
import { Message } from "@/app/dashboard/student/classes/[classId]/@chat/_chat/data";

export interface ChatState {
  coversation: Message[];
}
