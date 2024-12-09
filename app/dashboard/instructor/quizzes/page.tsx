import { exampleExams } from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { Button, buttonVariants } from "@/components/ui/button";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import Link from "next/link";
import { PenIcon } from "@/components/pes-custom/icons/PenIcon";
import { PlusIcon } from "lucide-react";

async function getData(): Promise<TFormSchemaAddExam[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleExams;
}

export default async function ExampleDashboardPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <div className="flex w-full justify-between">
        <h3 className="text-h3">Quizzes</h3>
        <Link
          href="/dashboard/instructor/quizzes/new"
          className={`${buttonVariants({
            variant: "outline",
            size: "sm",
          })} flex gap-1 items-center w-fit`}
        >
          <PlusIcon size={16} />
          Add
        </Link>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="Scheduled" className="w-full">
        <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger className="tab-trigger" value="Scheduled">
            Scheduled
          </TabsTrigger>
          <TabsTrigger className="tab-trigger" value="Past Exams">
            Past Exams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Scheduled">
          <div className="flex gap-4 flex-wrap">
            {exampleExams.map((exam, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full max-w-[250px]"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      {exam.quizname} 📝
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-subtle text-muted-foreground flex flex-col gap-1">
                    <p className="text-foreground">Grade: 79%</p>
                    {exam.timestamp && (
                      <span className="text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                        exam.timestamp.getUTCMonth() + 1
                      }/${exam.timestamp.getFullYear()}`}</span>
                    )}
                    <p>{exam.questions.length} Questions</p>
                    <p>{exam.duration} Minutes</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Link
                      href={`/dashboard/instructor/quizzes/${exam.id}`}
                      className={`${buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })} w-full`}
                    >
                      <PenIcon />
                      View / Edit
                    </Link>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="Past Exams">
          <div className="flex gap-4 flex-wrap">
            {exampleExams.map((exam, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full max-w-[250px]"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      {exam.quizname} 📝
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-subtle text-muted-foreground flex flex-col gap-1">
                    <p className="text-foreground">Grade: 79%</p>
                    {exam.timestamp && (
                      <span className="text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                        exam.timestamp.getUTCMonth() + 1
                      }/${exam.timestamp.getFullYear()}`}</span>
                    )}
                    <p>{exam.questions.length} Questions</p>
                    <p>{exam.duration} Minutes</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 ml-auto"
                    >
                      <JoinArrowIcon />
                      View Exam
                    </Button>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
