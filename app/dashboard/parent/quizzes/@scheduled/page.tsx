import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exampleExams } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const getQuizzes = async () => {
  return exampleExams;
};

const PastQuizzes = async () => {
  const quizzes = await getQuizzes();

  return (
    <div className="h-[26rem] overflow-y-scroll dashboard-tab-wrapper">
      {/* TODO: Think of a better way to display this (this is just an initial way of doing it) */}
      <div className="lg:self-baseline grid lg:grid-cols-2 gap-4">
        <Select>
          <SelectTrigger className="bg-background w-full lg:w-[180px]">
            <SelectValue placeholder="Filter By Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-subjects">All Subjcets</SelectItem>
            <SelectItem value="subject-1">Subject 1</SelectItem>
            <SelectItem value="subject-2">Subject 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-background w-full lg:w-[180px]">
            <SelectValue placeholder="Default Sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Sort by date</SelectItem>
            <SelectItem value="subject">Sort by Subject</SelectItem>
            <SelectItem value="scores-asc">
              Sort By Scores: Low to High
            </SelectItem>
            <SelectItem value="scores-desc">
              Sort By Scores: High to Low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
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
              <CardTitle>{quiz.quizname} 📝</CardTitle>
              <p className="text-muted-foreground">{quiz.class_field}</p>
            </CardHeader>
            <CardContent className="grid grid-cols-2">
              <p className="text-muted-foreground col-span-2">
                {quiz.questions.length} questions - 120 minutes
              </p>
            </CardContent>
            <CardFooter className="gap-4">
              <Link
                href={`quiz-results/${quiz.id}`}
                className={cn(buttonVariants(), "group flex-1")}
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
