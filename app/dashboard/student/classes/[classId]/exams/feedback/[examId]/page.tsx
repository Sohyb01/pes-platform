import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { exampleSolvedExams } from "@/lib/data";
import { EvaluationSchema, QuestionSchema } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Book, Clock } from "lucide-react";
import { z } from "zod";

interface ExamFeedbackProps {
  params: {
    examId: string;
  };
}

const ExamFeedback = async ({}: ExamFeedbackProps) => {
  const exam = exampleSolvedExams[0];
  const { questions, evaluation } = exampleSolvedExams[0];

  const renderAnswers = (
    question: z.infer<typeof QuestionSchema>,
    evaluation: z.infer<typeof EvaluationSchema>
  ) => {
    switch (question.type) {
      case "mcq": {
        return (
          <RadioGroup
            className="gap-4"
            defaultValue={String(evaluation.student_answer)}
          >
            {question.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem
                  className={cn(
                    "border-destructive text-destructive",
                    evaluation.correct_answer === option &&
                      "border-success text-success"
                  )}
                  disabled
                  value={option}
                  id={option}
                />
                <Label htmlFor={option}>
                  {option}{" "}
                  <span className="text-success">
                    {evaluation.correct_answer === option && "(Correct Answer)"}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      }
      case "true_false": {
        return (
          <RadioGroup
            className="flex-row gap-4"
            defaultValue={String(evaluation.student_answer)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className={cn(
                  "border-destructive text-destructive",
                  evaluation.correct_answer && "border-success text-success"
                )}
                disabled
                value={"true"}
                id={"true"}
              />
              <Label htmlFor={"true"}>
                True
                <span className="text-success">
                  {evaluation.correct_answer && "(Correct Answer)"}
                </span>
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className={cn(
                  "border-destructive text-destructive",
                  !evaluation.correct_answer && "border-success text-success"
                )}
                disabled
                value={"false"}
                id={"false"}
              />
              <Label htmlFor={"false"}>
                False{" "}
                <span className="text-success">
                  {!evaluation.correct_answer && "(Correct Answer)"}
                </span>
              </Label>
            </div>
          </RadioGroup>
        );
      }
      case "essay": {
        return (
          <div>
            <Textarea
              disabled
              defaultValue={String(evaluation.student_answer)}
            />
          </div>
        );
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero */}
      <Card>
        <CardHeader>
          <CardTitle className="text-h3">{exam?.quizname}</CardTitle>
          <CardDescription className="space-x-4">
            <span className="inline-flex items-center gap-2">
              <Book size={16} />
              {exam?.class_field}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} />
              {format(exam?.timestamp as Date, "hh:mm a")}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>

      {questions.map((question, idx) => (
        <Card
          className={cn(
            evaluation[idx].is_correct ? "border-success" : "border-destructive"
          )}
          key={idx}
        >
          <CardHeader className="flex space-y-0 flex-row items-center gap-2">
            <CardTitle className="text-h3">Question {idx + 1}</CardTitle>
            <p className="text-muted-foreground">
              ({evaluation[idx].score} / {question.points}) points
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-large">{question.questionText}</p>
            </div>

            {/* Answers */}
            {renderAnswers(question, evaluation[idx])}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExamFeedback;
