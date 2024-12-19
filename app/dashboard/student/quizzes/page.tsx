import * as React from "react";

import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { exampleExams } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
// import { CheckIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Quizzes 💯</h3>
      {/* Container */}
      <Tabs defaultValue="Active / Upcoming" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Active / Upcoming"
          >
            Active / Upcoming
          </TabsTrigger>
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Past Exams"
          >
            Past Exams
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Active / Upcoming">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleExams
              .filter((e) => e.timestamp > new Date())
              .map((exam, idx) => {
                return <PESExamCard exam={exam} key={idx} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="Past Exams">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleExams
              .filter((e) => e.timestamp > new Date())
              .map((exam, idx) => {
                return <PESExamCard exam={exam} key={idx} />;
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
