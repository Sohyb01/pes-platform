import { GradesAreaChart } from "@/components/pes-custom/platform-components/GradesAreaChart";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import PESSolvedExamCard from "@/components/pes-custom/platform-components/PESSolvedExamCard";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircleProgress } from "@/components/ui/progress";
import { exampleParents, exampleSolvedExams } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRight, Phone } from "lucide-react";
import Link from "next/link";

const getParents = async () => {
  return exampleParents;
};

const ParentHome = async () => {
  const parent = (await getParents())[0];

  return (
    <div className="dashboard-tab-wrapper">
      <h2 className="text-h2 pb-2">Hello, Mr. {parent.name} 👋</h2>
      <div className="flex gap-8 flex-wrap">
        {/* Exams */}
        <div className="flex flex-col gap-4 w-full h-fit grow lg:min-w-[600px]">
          <div className="flex justify-between pr-4">
            <h3 className="text-h3">Exams performance</h3>
            <Link
              href="quizzes"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "self-end group"
              )}
            >
              View More
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="overflow-y-scroll flex gap-4 overflow-x-scroll pb-4">
            {exampleSolvedExams.map((exam, idx) => {
              return <PESSolvedExamCard exam={exam} key={idx} />;
            })}
            {exampleSolvedExams.map((exam, idx) => {
              return <PESSolvedExamCard exam={exam} key={idx} />;
            })}
            {exampleSolvedExams.map((exam, idx) => {
              return <PESSolvedExamCard exam={exam} key={idx} />;
            })}
            {exampleSolvedExams.map((exam, idx) => {
              return <PESSolvedExamCard exam={exam} key={idx} />;
            })}
          </div>
        </div>
        {/* Schedule */}
        <div className="flex w-full min-w-[90%] md:min-w-[300px] lg:max-w-[400px] flex-col gap-4 grow flex-1">
          <h3 className="text-h3">Schedule</h3>
          <div className="flex-1">
            <PESCalendar />
          </div>
        </div>
        {/* Performance summary */}
        <div className="flex-1 md:min-w-[540px] max-w-[1000px] lg:max-w-[700px] flex flex-col gap-4 w-full">
          <h3 className="text-h3">Perfomance Summary</h3>
          <div className="grid grid-cols-2 grid-flow-row w-full gap-4">
            <div className="col-span-2 md:col-span-1 w-full flex flex-col items-center gap-2 p-4 border-border border-[1px] bg-background rounded-[1rem] h-full aspect-video">
              <h4 className="text-center text-p_ui text-foreground">
                Grades history
              </h4>
              <GradesAreaChart className="w-full" />
            </div>
            <div className="col-span-2 md:col-span-1 w-full flex flex-col items-center gap-2 p-4 border-border border-[1px] bg-background rounded-[1rem] h-full aspect-video">
              <h4 className="text-center text-p_ui text-card-foreground">
                Attendance
              </h4>
              <div className="aspect-square h-full grid place-items-center">
                <CircleProgress
                  className="aspect-square w-full h-full"
                  value={87}
                />
              </div>
            </div>
            <div className="w-full col-span-2 h-fit">
              <Card className="h-full bg-background flex flex-col justify-center flex-1">
                <CardHeader>
                  <div className="flex gap-2 items-center">
                    <Phone />
                    <h3 className="text-h3">Need to Contact an Instructor?</h3>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Have questions or need help with the course? Connect directly
                  with your instructor for personalized guidance and support.
                  Whether it’s about lessons, assignments, or general inquiries,
                  they’re here to assist you!
                </CardContent>
                <CardFooter>
                  <Link
                    href="book-a-call"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "ml-auto group"
                    )}
                  >
                    Contact Now!
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentHome;
