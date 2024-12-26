import ClassChatLayout from "./_chat/chat-layout";

interface ClassChatRoomProps {
  params: {
    classId: string;
  };
}

const ClassChatRoom = ({ params: { classId } }: ClassChatRoomProps) => {
  return <ClassChatLayout classId={classId} />;
};

export default ClassChatRoom;
