import { GradesAreaChart } from "@/components/pes-custom/platform-components/GradesAreaChart";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleProgress } from "@/components/ui/progress";
import { exampleExams, exampleParents } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChartArea, ChevronRight, Phone, Trophy } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const getParents = async () => {
  return exampleParents;
};

const getQuizzes = async () => {
  return exampleExams;
};

const ParentHome = async () => {
  const parent = (await getParents())[0];
  const quizzes = await getQuizzes();

  return (
    <div className="dashboard-tab-wrapper">
      <h2 className="text-h2">Hello, Mr. {parent.name} 👋</h2>
      <div className="grid gap-8 lg:grid-rows-2 lg:grid-cols-7">
        <div className="flex flex-col gap-4 lg:col-span-4">
          <div className="flex justify-between">
            <h3 className="text-h3">Latest Grades</h3>
            <Link
              href="quizzes"
              className={cn(buttonVariants({ size: "sm" }), "self-end group")}
            >
              View More
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="p-2 overflow-y-scroll max-h-[36vh] flex flex-col gap-4">
            {[...new Array(4)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {quizzes.map((quiz) => (
                  <Card className="bg-background" key={quiz.id}>
                    <CardHeader>
                      <CardTitle>{quiz.quizname} 📝</CardTitle>
                      <p className="text-muted-foreground">
                        {quiz.class_field}
                      </p>
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
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:row-span-2 lg:col-span-3">
          <h3 className="text-h3">Schedule</h3>
          <div className="flex-1">
            <PESCalendar />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <h3 className="text-h3">Perfomance Summary</h3>
          <Card className="bg-background flex flex-col justify-center flex-1">
            <CardContent className="flex flex-col lg:flex-row gap-4 p-4">
              <div className="flex flex-col justify-center items-center gap-4 flex-1">
                <h4 className="text-center text-h4 text-card-foreground">
                  Average Attendance
                </h4>
                <CircleProgress className="bg-secondary size-40" value={87} />
              </div>
              <div className="flex-1">
                <h4 className="text-center text-h4 text-card-foreground">
                  Avg Grades
                </h4>
                <GradesAreaChart className="min-h-[100px]" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 lg:col-span-4">
          <h3 className="text-h3">Achievments Summary</h3>
          <div className="flex flex-col rounded-[1rem] bg-background border-border border-[1px]">
            <div className="px-4 pt-4">
              <div className="text-p_ui">Omar Mohamed</div>
              <span className="flex gap-1 text-muted-foreground text-subtle items-center">
                Alexandria, EG
              </span>
            </div>
            <div className="flex gap-4 p-4 pt-4 flex-wrap lg:flex-nowrap">
              {/* Certificates */}
              <Link
                href="#"
                className="bg-background lg:border-primary/50 duration-100 lg:hover:border-primary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
              >
                <span className="text-h3 lg:text-h2">5</span>
                <span className="text-detail">Certificates</span>
              </Link>
              {/* Completed tracks */}
              <Link
                href="#"
                className="bg-background lg:border-secondary/50 duration-100 lg:hover:border-secondary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
              >
                <span className="text-h3 lg:text-h2">10</span>
                <span className="text-detail">Achievements</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-3">
          <Card className="h-full bg-background flex flex-col justify-center flex-1">
            <CardHeader>
              <div className="flex gap-2 items-center">
                <Phone />
                <h3 className="text-h3">Need to Contact an Instructor?</h3>
              </div>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Have questions or need help with the course? Connect directly with
              your instructor for personalized guidance and support. Whether
              it’s about lessons, assignments, or general inquiries, they’re
              here to assist you!
            </CardContent>
            <CardFooter>
              <Link
                href="book-a-call"
                className={cn(buttonVariants({ size: "sm" }), "ml-auto group")}
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
  );
};

export default ParentHome;
