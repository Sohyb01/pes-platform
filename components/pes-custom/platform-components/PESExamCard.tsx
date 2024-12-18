import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { Button } from "@/components/ui/button";
import { getNameById } from "@/lib/getNameById";
import { examplePrograms } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

const PESExamCard = ({ exam }: { exam: TFormSchemaAddExam }) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:max-w-[352px]"
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>{exam.quizname} 📝</div>
          <Badge className="flex items-center gap-2" variant="outline">
            <Calendar size={16} />
            {format(new Date(), "MM / dd")}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground text-subtle">
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

export default PESExamCard;
