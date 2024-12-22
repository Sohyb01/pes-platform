import {
  exampleExams,
  exampleExamSubmitions,
  exampleSolvedExams,
  selectClassExampleData,
} from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { compareAsc, compareDesc, isSameHour } from "date-fns";

export const getExams = async () => {
  return exampleExams;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getActiveExams = async () => {
  return exampleExams.filter((exam) => isSameHour(exam.timestamp, new Date()));
};

export const getUpcomingExams = async () => {
  return exampleExams.filter(
    (exam) => compareAsc(new Date(), exam.timestamp) === 1
  );
};

export const getPastExams = async () => {
  return exampleExams.filter(
    (exam) => compareDesc(new Date(), exam.timestamp) === 1
  );
};

export const getExamById = async (examId: string) => {
  return exampleExams.find((exam) => exam.id === examId);
};

export const getExamEvaluationById = async (examId: string) => {
  return exampleExamSubmitions.find((exam) => exam.solved_exam_id === examId);
};

export const getSolvedExam = async (examId: string) => {
  return exampleSolvedExams.find((exam) => exam.id === examId);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCompletedExams = async () => {
  return exampleExams;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getExamClass = async (exam: TFormSchemaAddExam) => {
  const examClass = selectClassExampleData.find(
    (select_class) => select_class.id === exam.class_field
  );

  return examClass?.name;
};
