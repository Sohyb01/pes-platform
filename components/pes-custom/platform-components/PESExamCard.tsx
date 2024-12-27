import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddExam, TFormSchemaSolvedExam } from "@/lib/types-forms";
import { getNameById } from "@/lib/getNameById";
import { exampleClasses, examplePrograms } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define the possible states for the exam card
type ExamStatus = "active" | "upcoming" | "past";

// Define the grade type
interface Grade {
  value: number | null;
  isPending: boolean;
}

// Base props that are common to all states
type BaseExamCardProps = {
  exam: TFormSchemaAddExam;
};

// Type for active exam state
type ActiveExamProps = BaseExamCardProps & {
  status: "active";
  examLink: string;
  feedbackLink?: never;
  grade?: never;
};

// Type for upcoming exam state
type UpcomingExamProps = BaseExamCardProps & {
  status: "upcoming";
  examLink?: never;
  feedbackLink?: never;
  grade?: never;
};

// Type for past exam state
type PastExamProps = { exam: TFormSchemaSolvedExam } & {
  status: "past";
  feedbackLink: string;
  grade: Grade;
};

// Union type of all possible props
type PESExamCardProps = ActiveExamProps | UpcomingExamProps | PastExamProps;

// Helper function to determine date badge variant based on urgency
const getDateBadgeVariant = (status: ExamStatus) => {
  switch (status) {
    case "active":
      return "success";
    case "upcoming":
      return "default";
    case "past":
      return "outline";
  }
};

const PESExamCard = (props: PESExamCardProps) => {
  const { exam, status, grade } = props;

  const renderActionButton = () => {
    switch (status) {
      case "active":
        const { examLink } = props;
        return (
          <Link
            href={examLink}
            className={cn("w-full", buttonVariants({ size: "sm" }))}
          >
            Start Quiz
          </Link>
        );
      case "past":
        const { feedbackLink } = props;
        return (
          <Link
            href={feedbackLink}
            className={cn("w-full", buttonVariants({ size: "sm" }))}
          >
            View Feedback
          </Link>
        );
      default:
        return null;
    }
  };

  const renderGrade = () => {
    if (status === "past" && grade) {
      return (
        <Badge
          variant={grade.isPending ? "secondary" : "success"}
          className="ml-2"
        >
          {grade.isPending ? "Grading Pending" : `Grade: ${grade.value}/100`}
        </Badge>
      );
    }
    return null;
  };

  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:min-w-[300px] md:max-w-[480px] bg-card rounded-[1rem]"
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center flex-wrap gap-2">
          <div>{exam.quizname}</div>
          {renderGrade()}
          {!renderGrade() && (
            <Badge
              className="flex items-center gap-2"
              variant={getDateBadgeVariant(status)}
            >
              <Calendar size={16} />
              {format(exam.timestamp, "MMMM dd, hh:mm a")}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground text-subtle">
          <div className="items-center stroke-muted-foreground text-muted-foreground pb-2">
            <div>{getNameById(exam.class_field, "Class")}</div>
            <div>{exampleClasses[0].class_times}</div>
          </div>
          <div>
            {exam.questions.length} questions - {exam.duration} minutes
          </div>
        </div>
        <div className="text-muted-foreground text-subtle">
          {examplePrograms[0].program_name}
        </div>
        {renderGrade() && (
          <Badge
            className="mt-4 w-fit flex items-center gap-2"
            variant={getDateBadgeVariant(status)}
          >
            <Calendar size={16} />
            {format(exam.timestamp, "MMMM dd, hh:mm a")}
          </Badge>
        )}
      </CardContent>
      <CardFooter>{renderActionButton()}</CardFooter>
    </M_Card>
  );
};

export default PESExamCard;
