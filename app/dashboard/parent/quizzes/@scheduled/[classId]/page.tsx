import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { exampleExams } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

const getQuizzes = async () => {
  return exampleExams;
};

const PastQuizzes = async () => {
  const quizzes = await getQuizzes();

  return (
    <div className="h-[26rem] overflow-y-scroll dashboard-tab-wrapper">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz, idx) => (
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            key={quiz.id}
            className="bg-background"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{quiz.quizname} 📝</span>
                <Badge className="flex items-center gap-2" variant="outline">
                  <Calendar size={16} />
                  {format(new Date(), "MM / dd")}
                </Badge>
              </CardTitle>
              <CardDescription>{quiz.class_field}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2">
              <p className="text-muted-foreground col-span-2">
                {quiz.questions.length} questions - 120 minutes
              </p>
            </CardContent>
          </M_Card>
        ))}
      </div>
    </div>
  );
};

export default PastQuizzes;
