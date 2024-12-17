import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import AttendancePercentages from "@/components/pes-custom/platform-components/AttendancePercentages";
import { AvgPerformanceLineChart } from "@/components/pes-custom/platform-components/AvgPerformanceLineChart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleProgress, Progress } from "@/components/ui/progress";
import { exampleClasses } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { ArrowRight, Book } from "lucide-react";
import Link from "next/link";

const getClasses = async () => {
  return exampleClasses;
};

const PerformanceInsights = async () => {
  const classes = await getClasses();
  return (
    <section className="dashboard-tab-wrapper">
      <div className="flex flex-col gap-4">
        <h2 className="text-h2">Courses Progress</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          {classes.map((pesClass, idx) => {
            const randomValue = Math.floor(Math.random() * 100);
            return (
              <M_Card
                variants={VariantSlideInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.05 }} // Custom delay for each item
                key={idx}
                className="lg:w-[32rem] bg-background"
              >
                <CardHeader>
                  <CardTitle className="text-nowrap">
                    📘 {pesClass.class_name}
                  </CardTitle>
                  <div className="w-full flex gap-1 flex-wrap justify-between items-center text-subtle pt-2">
                    <Link href="#">
                      <span className="max-w-[12ch] overflow-hidden">
                        ENG. Ahmed Reda
                      </span>
                    </Link>
                    <div className="text-muted-foreground">
                      {`${pesClass.classbegindate.getUTCDate()}/${
                        pesClass.classbegindate.getUTCMonth() + 1
                      }
-
${pesClass.classenddate.getUTCDate()}/${pesClass.classenddate.getUTCMonth() + 1}
`}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <div>
                    <p>Total Lessons Completed</p>
                    <div className="flex items-center gap-2">
                      <Progress
                        className="h-2 bg-muted"
                        value={Math.floor((randomValue * 2.5) % 100)}
                      />
                      {Math.floor((randomValue * 2.5) % 100)}%
                    </div>
                  </div>
                  <div>
                    <p>Quizzes Passed</p>
                    <div className="flex items-center gap-2">
                      <Progress
                        className="h-2 bg-muted"
                        value={Math.floor((randomValue * 1.2) % 100)}
                      />
                      {(randomValue * 2.5) % 100}%
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                  <p className="text-large">Overall Progress</p>
                  <div className="w-full flex items-center gap-2">
                    <Progress className="h-2 bg-muted" value={randomValue} />
                    <span className="text-muted-foreground">
                      {randomValue}%
                    </span>
                  </div>
                </CardFooter>
              </M_Card>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <h3 className="text-h3">Attendance</h3>
          <AttendancePercentages />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-h3">Average Performance</h3>
          <Card className="bg-background flex justify-center items-center flex-1 p-4">
            <AvgPerformanceLineChart className="max-w-[18rem] lg:max-w-full min-h-[50px]" />
          </Card>
        </div>
        <div className="flex flex-col gap-4 lg:row-span-2 md:col-span-2 lg:col-span-1">
          <h3 className="text-h3">Average Grades (Per Class)</h3>
          <Card className="max-h-[39rem] overflow-y-scroll flex-1 bg-background">
            <CardHeader></CardHeader>
            <CardContent className="flex flex-col gap-12">
              {[...new Array(5)].fill(0).map((_, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-1 text-muted-foreground text-small flex flex-col gap-4">
                    <p className="flex items-center gap-2">
                      <Book size={16} />
                      Math
                    </p>
                    <div className="flex items-center gap-2">
                      <span>80%</span>
                      <Progress className="h-2 bg-muted" value={78} />
                    </div>
                    <p>Total Class Tests: 2</p>
                    <p>Total Marks: 8</p>
                    <p>Obtained Marks: 10</p>
                  </div>
                  <CircleProgress value={80} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 md:col-span-3 lg:col-span-2">
          <h3 className="text-h3">Examination Report</h3>
          <Card className="bg-background">
            <CardHeader className="flex flex-col gap-2">
              <Progress value={79} className="bg-muted h-2" />
              <div className="flex justify-between">
                <p>Total Quiz Grades</p>
                <p>
                  <span className="text-secondary font-bold">290</span> / 400
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row gap-8">
              <Card className="lg:min-w-[16rem]">
                <CardContent className="pt-4">
                  <h4 className="text-h4">Obtained</h4>
                  <div className="flex items-center justify-between">
                    <ArrowRight className="ml-2" size={16} />
                    <p className="text-secondary text-large font-bold">290</p>
                  </div>
                  <p className="text-muted-foreground">In All Quizzes</p>
                </CardContent>
              </Card>
              <Card className="min-w-[16rem]">
                <CardContent className="pt-4">
                  <h4 className="text-h4">Total</h4>
                  <div className="flex items-center justify-between">
                    <ArrowRight className="ml-2" size={16} />
                    <p className="text-secondary text-large font-bold">400</p>
                  </div>
                  <p className="text-muted-foreground">In All Quizzes</p>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-2 items-center justify-center">
                <CircleProgress value={78} />
                <h4 className="text-h4">Overall</h4>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceInsights;
