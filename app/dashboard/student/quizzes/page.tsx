import * as React from "react";

import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { exampleExams } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
// import { CheckIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            {exampleExams.map((exam, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full md:max-w-[352px]"
                >
                  <CardHeader>
                    <CardTitle>
                      {exam.quizname} 📝
                      {exam.timestamp && (
                        <span className="ml-2 text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                          exam.timestamp.getUTCMonth() + 1
                        }/${exam.timestamp.getFullYear()}`}</span>
                      )}
                      <p className="text-muted-foreground pt-2">
                        {exam.questions.length} questions - {exam.duration}{" "}
                        minutes
                      </p>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="default" size="sm" className="w-full">
                      <JoinArrowIcon />
                      Start Quiz
                    </Button>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="Past Exams">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleExams.map((exam, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full md:max-w-[352px]"
                >
                  <CardHeader>
                    <CardTitle>
                      {exam.quizname} 📝
                      {exam.timestamp && (
                        <span className="ml-2 text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                          exam.timestamp.getUTCMonth() + 1
                        }/${exam.timestamp.getFullYear()}`}</span>
                      )}
                      <p className="text-muted-foreground pt-2">
                        {exam.questions.length} questions - {exam.duration}{" "}
                        minutes
                      </p>
                    </CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      <JoinArrowIcon />
                      Revise Questions
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
};

export default page;
