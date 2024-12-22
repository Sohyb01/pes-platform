import { getExamById } from "@/api/exams";

interface ExamFeedbackProps {
  params: {
    examId: string;
  };
}

const ExamFeedback = async ({ params: { examId } }: ExamFeedbackProps) => {
  const exam = await getExamById(examId);

  return (
    <div>
      <h3 className="text-h3">{exam?.quizname}</h3>
    </div>
  );
};

export default ExamFeedback;
