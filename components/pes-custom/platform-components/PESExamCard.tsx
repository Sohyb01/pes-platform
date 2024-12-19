import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { getNameById } from "@/lib/getNameById";
import { exampleClasses, examplePrograms } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

const PESExamCard = ({ exam }: { exam: TFormSchemaAddExam }) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full md:max-w-[352px] bg-background rounded-[1rem]"
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div>{exam.quizname}</div>
          <div className="flex gap-2 items-center stroke-muted-foreground text-muted-foreground pb-2"></div>
          <Badge className="flex items-center gap-2" variant="outline">
            <Calendar size={16} />
            {format(exam.timestamp, "MMMM dd, hh:mm a")}
          </Badge>
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
      </CardContent>
    </M_Card>
  );
};

export default PESExamCard;
