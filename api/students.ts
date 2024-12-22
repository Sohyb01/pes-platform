import { exampleStudents } from "@/lib/data";

export const getStudents = async () => {
  return exampleStudents;
};

export const getStudentById = async (studentId: string) => {
  return exampleStudents.find((student) => student.id === studentId);
};
