import { ExpandableChatHeader } from "@/components/pes-custom/platform-components/expandable-chat";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "../data";

interface ClassChatTopbarProps {
  selectedUser: UserData;
}

const ClassChatTopbar = ({ selectedUser }: ClassChatTopbarProps) => {
  return (
    <ExpandableChatHeader>
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <p className="font-medium">{selectedUser.name}</p>
      </div>
    </ExpandableChatHeader>
  );
};

export default ClassChatTopbar;
