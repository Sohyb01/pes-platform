import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaSolvedExam } from "@/lib/types-forms";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { Button } from "@/components/ui/button";
import { getNameById } from "@/lib/getNameById";
import { examplePrograms } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChartNoAxesColumn, Eye } from "lucide-react";
import { format } from "date-fns";

const PESSolvedExamCard = ({ exam }: { exam: TFormSchemaSolvedExam }) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:max-w-[352px] bg-background rounded-[1rem]"
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <div>{exam.quizname} 📝</div>
          {exam.student_grade ? (
            <Badge
              className={`flex items-center gap-2 bg-destructive-foreground ${
                exam.student_grade >= exam.max_grade / 2
                  ? `bg-success hover:bg-success`
                  : `bg-destructive hover:bg-destructive`
              }`}
            >
              <ChartNoAxesColumn size={16} />
              <span className="text-nowrap">
                Grade: {exam.student_grade}/{exam.max_grade}
              </span>
            </Badge>
          ) : (
            <Badge variant="outline" className="flex items-center gap-2">
              <Eye size={16} />
              <span className="text-nowrap">Under Review</span>
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge className="flex items-center gap-2 w-fit" variant="outline">
          <Calendar size={16} />
          {format(new Date(), "MM / dd")}
        </Badge>
        <div className="text-muted-foreground text-subtle pt-4">
          <div>{getNameById(exam.class_field, "Class")}</div>
          <div>
            {exam.questions.length} questions - {exam.duration} minutes
          </div>
        </div>
        <div className="text-muted-foreground text-subtle">
          {examplePrograms[0].program_name}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <JoinArrowIcon />
          Revise Questions
        </Button>
      </CardFooter>
    </M_Card>
  );
};

export default PESSolvedExamCard;
