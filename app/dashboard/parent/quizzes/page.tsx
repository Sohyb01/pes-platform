import { exampleExams, exampleSolvedExams } from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";
import PESSolvedExamCard from "@/components/pes-custom/platform-components/PESSolvedExamCard";

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
      </div>
      {/* Tabs */}
      <Tabs defaultValue="Scheduled" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
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
                return <PESExamCard exam={exam} key={idx} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="Past Exams">
          <div className="flex gap-4 flex-wrap">
            {exampleSolvedExams
              .filter((e) => e.timestamp <= new Date())
              .map((exam, idx) => {
                return <PESSolvedExamCard exam={exam} key={idx} />;
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
