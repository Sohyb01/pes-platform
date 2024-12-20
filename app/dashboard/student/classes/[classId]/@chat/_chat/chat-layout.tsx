import ClassChat from "./chat";
import ClassChatSidebar from "./chat-sidebar";
import { userData } from "../data";

const ClassChatLayout = () => {
  const selectedUser = userData[0];

  return (
    <div className="grid md:grid-cols-4 bg-background border rounded-lg">
      <ClassChatSidebar
        conversations={userData.map((user) => ({
          name: user.name,
          messages: user.messages ?? [],
          avatar: user.avatar,
          variant: selectedUser.name === user.name ? "default" : "ghost",
        }))}
        className="hidden md:flex col-span-1"
      />
      <ClassChat selectedUser={selectedUser} className="md:col-span-3" />
    </div>
  );
};

export default ClassChatLayout;
