import { TFormSchemaAddConversation } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { MessageSquareCode, User } from "lucide-react";

interface ClassChatSidebarProps {
  className?: string;
  conversations?: TFormSchemaAddConversation[];
}

// just waiting for the backend to get me a clear picture of how does the conversations system works
// NOTE: There're still changes that will be made to conversations to fit our needs
const MOCK_CONVERSATIONS = [
  {
    name: "Class Group",
    Icon: MessageSquareCode,
    active: true,
  },
  {
    name: "Instructor Name",
    Icon: User,
    active: false,
  },
];

const ClassChatSidebar = ({ className }: ClassChatSidebarProps) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <h3 className="text-h3">Chats</h3>
      <div className="flex flex-col gap-4">
        {MOCK_CONVERSATIONS.map((conv) => (
          <div key={conv.name}>
            <div className="size-12 rounded-full bg-shade p-2">
              <conv.Icon className="size-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassChatSidebar;
