import AttendanceBarChart from "@/components/pes-custom/platform-components/AttendanceBarChart";
import { GradesAreaChart } from "@/components/pes-custom/platform-components/GradesAreaChart";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exampleExams, exampleParents } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChartArea, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";

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
    <div className="dashboard-tab-wrapper w-full overflow-x-hidden">
      <h2 className="text-h2 pb-4">Hello, Mr. {parent.name} 👋</h2>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[340px] max-w-[800px] grow h-fit">
          <div className="w-full h-fit">
            <div className="flex justify-between items-center py-4">
              <h3 className="text-h3">Latest Grades</h3>
              <Link
                href="quizzes"
                className={cn(buttonVariants({ size: "sm" }), "w-fit group")}
              >
                View More
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="overflow-y-scroll max-h-[300px] flex flex-wrap gap-4 items-start w-full mb-4 pr-4">
              {quizzes.map((quiz) => (
                <>
                  <Card
                    className="bg-background w-full flex-1 grow min-w-[240px]"
                    key={quiz.id}
                  >
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
                  <Card
                    className="bg-background w-full flex-1 grow min-w-[240px]"
                    key={quiz.id}
                  >
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
                  <Card
                    className="bg-background w-full flex-1 grow min-w-[240px]"
                    key={quiz.id}
                  >
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
                  <Card
                    className="bg-background w-full flex-1 grow min-w-[240px]"
                    key={quiz.id}
                  >
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
                  <Card
                    className="bg-background w-full flex-1 grow min-w-[240px]"
                    key={quiz.id}
                  >
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
                </>
              ))}
            </div>
          </div>
          <h3 className="text-h3 py-4">Schedule</h3>
          <div className="flex-1">
            <PESCalendar />
          </div>
        </div>
        <div className="flex-1 min-w-[340px] md:max-w-[580px] grow h-fit py-4">
          <h3 className="text-h3 pb-4">Perfomance Summary</h3>
          <Card className="bg-background flex flex-col gap-4 justify-center flex-1">
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-4">
                <div className="">
                  <h4 className="text-center text-h4 text-card-foreground">
                    Attendance
                  </h4>
                  <AttendanceBarChart className="w-full" />
                </div>
                <div className="">
                  <h4 className="text-center text-h4 text-card-foreground">
                    Avg Grades
                  </h4>
                  <GradesAreaChart />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentHome;
