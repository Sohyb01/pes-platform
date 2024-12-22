import { exampleAssignments } from "@/lib/data";

export const getDueAssignments = async () => {
  return exampleAssignments.filter((assignment) => assignment.status === "due");
};

export const getAssignments = async () => {
  return exampleAssignments;
};

export const getCompletedAssignments = async () => {
  return exampleAssignments.filter(
    (assignment) => assignment.status === "submitted"
  );
};
