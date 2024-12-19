import {
  exampleAdmins,
  exampleClasses,
  exampleExams,
  exampleInstructors,
  exampleMaterials,
  examplePrograms,
  exampleSessions,
  exampleStudents,
} from "./data";

export const getNameById = (
  id: string,
  type:
    | "Employee"
    | "Student"
    | "Material"
    | "Class"
    | "Program"
    | "Exam"
    | "Session"
) => {
  switch (type) {
    case "Employee":
      return [...exampleAdmins, ...exampleInstructors].find(
        (obj) => obj.id == id
      )?.employee_name;
    case "Student":
      return exampleStudents.find((obj) => obj.id == id)?.student_name;
    case "Material":
      return exampleMaterials.find((obj) => obj.id == id)?.name;
    case "Class":
      return exampleClasses.find((obj) => obj.id == id)?.class_name;
    case "Program":
      return examplePrograms.find((obj) => obj.program_id == id)?.program_name;
    case "Exam":
      return exampleExams.find((obj) => obj.id == id)?.quizname;
    case "Session":
      return exampleSessions.find((obj) => obj.sessionid == id)?.name;
  }
};
