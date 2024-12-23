import {
  exampleClasses,
  exampleConversationMapping,
  exampleConversations,
  exampleMessages,
} from "@/lib/data";

export const getClassConversation = (classId: string) => {
  const classConvoId = exampleConversationMapping.find(
    (map) => map.class_id === classId
  )?.conversation_id;

  const classConversation = exampleConversations.find(
    (convo) => convo.conversation_id === classConvoId
  );

  return classConversation;
};

export const getInstructorConversation = (classId: string) => {
  const _class = exampleClasses.find((_class) => _class.id === classId);
  console.log(_class?.instructor_id);
  const instructorConvoId = exampleConversationMapping.find(
    (map) => map.user_id == _class?.instructor_id
  )?.conversation_id;

  const instructorConvo = exampleConversations.find(
    (convo) => convo.conversation_id === instructorConvoId
  );
  return instructorConvo;
};

export const getConversationMessages = (convoId: string) => {
  return exampleMessages.filter(
    (message) => message.conversation_id === convoId
  );
};
