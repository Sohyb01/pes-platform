interface ClassChatProps {
  className?: string;
}

const ClassChat = ({ className }: ClassChatProps) => {
  return <div className={className}>Class Chat</div>;
};

export default ClassChat;
