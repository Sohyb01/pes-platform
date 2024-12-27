import { exampleExams, pastExams } from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";

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
            {exampleExams
              .filter((e) => e.timestamp > new Date())
              .map((exam, idx) => {
                return <PESExamCard exam={exam} key={idx} status="upcoming" />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="Past Exams">
          <div className="flex gap-4 flex-wrap">
            {pastExams.map((exam, idx) => {
              return (
                <PESExamCard
                  exam={exam}
                  key={idx}
                  status="past"
                  feedbackLink="#"
                  grade={{ value: 58, isPending: true }}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
