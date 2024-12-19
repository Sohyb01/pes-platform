import * as React from "react";
import { exampleAssignments } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PESStudentAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments ⏰</h3>
      <Tabs defaultValue="Current Assignments" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Current Assignments"
          >
            Current Assignments
          </TabsTrigger>
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Past Assignments"
          >
            Past Assignments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Current Assignments">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleAssignments
              .filter((a) => new Date() <= a.assignment_duedate)
              .map((assignment, idx) => {
                return <PESStudentAssignmentCard assignment={assignment} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="Past Assignments">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleAssignments
              .filter((a) => new Date() > a.assignment_duedate)
              .map((assignment, idx) => {
                return <PESStudentAssignmentCard assignment={assignment} />;
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
