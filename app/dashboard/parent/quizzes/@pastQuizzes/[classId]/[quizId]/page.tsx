import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { exampleExams } from "@/lib/data";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  ChartNoAxesColumn,
  Clock,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";

interface QuizDetailsProps {
  params: {
    quizId: string;
    classId: string;
  };
}

const getQuiz = async (quizId: string) => {
  return exampleExams.find((quiz) => quiz.id === quizId);
};

const AssignmentDetails = async ({
  params: { quizId, classId },
}: QuizDetailsProps) => {
  const quiz = await getQuiz(quizId);

  return (
    <div className="flex flex-col gap-4">
      <Link
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "self-start"
        )}
        href={`/dashboard/parent/quizzes/${classId}`}
      >
        <ArrowLeft size={16} />
        Back
      </Link>
      <div className="grid gap-8 lg:grid-cols-7">
        <div className="space-y-2 lg:col-span-4">
          <h3 className="text-h3">Details</h3>
          <Card className="bg-background">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-h4">{quizId}</CardTitle>
              <Badge className="bg-success hover:bg-success/80 flex items-center gap-2">
                <ChartNoAxesColumn size={24} />
                <h4 className="text-nowrap">Grade: 14/20</h4>
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-muted-foreground">
                <h4 className="text-card-foreground text-h4">Description</h4>
                <div className="space-y-2">
                  <p>
                    {quiz?.quizname} - {quiz?.questions.length} Questions
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16} />
                    {format(new Date(), "MM / dd")}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={16} />
                    1:00 PM - 2:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-4">
                <Badge className="flex items-center gap-2">
                  <Calendar size={16} />
                  Exammed 1/30
                </Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-2 lg:col-span-3">
          <h3 className="text-h3">Instructors Notes</h3>
          <div className="max-h-[16rem]"></div>
          <Card className="bg-background">
            <CardHeader className="">
              <CardTitle className="flex items-center gap-2">
                <User size={16} />
                <span>Instructor Name</span>
              </CardTitle>
              <CardDescription>{quizId}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Ahmed needs to work on his math</p>
            </CardContent>
            <CardFooter>
              <Link
                href="book-a-call"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 w-full"
                )}
              >
                <Phone size={16} />
                Contact Instructor
              </Link>
            </CardFooter>
          </Card>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
