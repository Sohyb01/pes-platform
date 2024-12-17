import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

const ClassAssignmentsLayout = ({
  pending,
  completed,
  missed,
  children,
}: {
  pending: ReactNode;
  completed: ReactNode;
  missed: ReactNode;
  children: ReactNode;
}) => {
  return (
    <>
      {children}
      <Tabs defaultValue="Pending">
        <TabsList className="bg-transparent flex gap-4 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Pending"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Completed"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Missed"
          >
            Missed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Pending">{pending}</TabsContent>
        <TabsContent value="Completed">{completed}</TabsContent>
        <TabsContent value="Missed">{missed}</TabsContent>
      </Tabs>
    </>
  );
};

export default ClassAssignmentsLayout;
