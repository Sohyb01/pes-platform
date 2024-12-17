import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { exampleExams } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, ChartArea, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";

const getQuizzes = async () => {
  return exampleExams;
};

interface PastQuizzesProps {
  params: {
    classId: string;
  };
}

const PastQuizzes = async ({ params: { classId } }: PastQuizzesProps) => {
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
            </CardHeader>
            <CardContent className="grid grid-cols-2">
              <p className="text-muted-foreground col-span-2">
                {quiz.questions.length} questions - 120 minutes
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy size={16} />
                <p>Grade: A</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ChartArea size={16} />
                <p>Score: 90%</p>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Link
                href={`${classId}/${quiz.id}`}
                className={cn(buttonVariants(), "group")}
              >
                View Details
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </CardFooter>
          </M_Card>
        ))}
      </div>
    </div>
  );
};

export default PastQuizzes;
