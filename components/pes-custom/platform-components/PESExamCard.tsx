import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { Button } from "@/components/ui/button";

const PESExamCard = ({ exam }: { exam: TFormSchemaAddExam }) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:max-w-[352px]"
    >
      <CardHeader>
        <CardTitle>
          {exam.quizname} 📝
          <span className="ml-2 text-muted-foreground">{`${exam.timestamp.getUTCDate()}/${
            exam.timestamp.getUTCMonth() + 1
          }/${exam.timestamp.getFullYear()}`}</span>
          <p className="text-muted-foreground pt-4 text-subtle">
            {exam.questions.length} questions - {exam.duration} minutes
          </p>
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          <JoinArrowIcon />
          Revise Questions
        </Button>
      </CardFooter>
    </M_Card>
  );
};

export default PESExamCard;
