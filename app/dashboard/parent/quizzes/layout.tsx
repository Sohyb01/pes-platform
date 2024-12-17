import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

const ConnectWithInstructorsLayout = ({
  scheduled,
  pastQuizzes,
}: {
  scheduled: ReactNode;
  pastQuizzes: ReactNode;
}) => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2 pb-4">Quizzes</h2>

      <Tabs defaultValue="Scheduled">
        <TabsList className="bg-transparent flex gap-4 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Scheduled"
          >
            Scheduled
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Past Quizzes"
          >
            Past Quizzes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Scheduled">{scheduled}</TabsContent>
        <TabsContent value="Past Quizzes">{pastQuizzes}</TabsContent>
      </Tabs>
    </section>
  );
};

export default ConnectWithInstructorsLayout;
