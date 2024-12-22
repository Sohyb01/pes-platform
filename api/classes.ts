import { exampleClasses, exampleClassMapping } from "@/lib/data";
import { getStudentById } from "./students";

export const getClasses = async () => {
  return exampleClasses;
};

export const getClassStudents = async (classId: string) => {
  const classMapping = exampleClassMapping.filter(
    (classMapping) => classMapping.class_id === classId
  );

  const students = classMapping.map(
    async (classMapping) => await getStudentById(classMapping.student_id)
  );

  return Promise.all(students);
};
