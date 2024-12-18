import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  exampleAssignments,
  exampleExams,
  exampleSolvedExams,
} from "@/lib/data";
import PESStudentAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";
import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";
import PESSolvedExamCard from "@/components/pes-custom/platform-components/PESSolvedExamCard";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper h-full">
      <div className="flex flex-wrap gap-8 h-full">
        <div className="flex-1 min-w-[340px] grow max-h-full overflow-y-scroll rounded-[1rem]">
          {/* Tabs */}
          <Tabs defaultValue="Scheduled" className="w-full">
            <div className="text-h4">Exams</div>
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
        <div className="flex-1 min-w-[340px] lg:max-w-[400px] grow h-fit lg:h-full flex-col gap-8">
          <Tabs defaultValue="due">
            <div className="text-h4">Assignments</div>
            <TabsList className="flex justify-between bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 h-fit">
              <div className="flex gap-4">
                <TabsTrigger className="tab-trigger" value="due">
                  Due
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="reviewed">
                  Reviewed
                </TabsTrigger>
                <TabsTrigger className="tab-trigger" value="missed">
                  Missed
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent
              className="flex flex-col gap-2 max-h-[70vh] overflow-y-scroll pr-2"
              value="due"
            >
              {exampleAssignments
                .filter((a) => a.status == "submitted" || a.status == "due")
                .map((assignment, idx) => {
                  return (
                    <PESStudentAssignmentCard
                      key={idx}
                      assignment={assignment}
                    />
                  );
                })}
            </TabsContent>
            <TabsContent
              className="flex flex-col gap-2 max-h-[70vh] overflow-y-scroll pr-2"
              value="reviewed"
            >
              {exampleAssignments
                .filter((a) => a.status == "reviewed")
                .map((assignment, idx) => {
                  return (
                    <PESStudentAssignmentCard
                      key={idx}
                      assignment={assignment}
                    />
                  );
                })}
            </TabsContent>
            <TabsContent
              className="flex flex-col gap-2 max-h-[70vh] overflow-y-scroll pr-2"
              value="missed"
            >
              {exampleAssignments
                .filter((a) => a.status == "missed")
                .map((assignment, idx) => {
                  return (
                    <PESStudentAssignmentCard
                      key={idx}
                      assignment={assignment}
                    />
                  );
                })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
