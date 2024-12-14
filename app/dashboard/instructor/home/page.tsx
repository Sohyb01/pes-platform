"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { exampleAssignments, exampleClasses } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TFormSchemaAddClass } from "@/lib/types-forms";
import ChatMembersList from "@/components/pes-custom/platform-components/chat-members-list";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const fakeMembersData = [
  {
    img: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    id: "m001",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Bob Smith",
    id: "m002",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Charlie Davis",
    id: "m003",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Diana Miller",
    id: "m004",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Evan Thompson",
    id: "m005",
  },
];
const page = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h3 className="text-h2">Hello, Omar! 👋</h3>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[340px] max-w-[580px] grow h-fit">
          <p className="text-h3 pb-4">Schedule</p>
          <PESCalendar />
        </div>
        <div className="flex-1 min-w-[300px] max-w-[580px] grow h-fit flex flex-col gap-4">
          <p className="text-h3">Classes</p>
          {exampleClasses.map((studentClass: TFormSchemaAddClass) => {
            return (
              <div
                key={studentClass.id}
                className="bg-background rounded-[1rem] flex flex-col text-p_ui overflow-hidden border-border border-[1px] px-6"
              >
                <div className="flex justify-between text-large pt-6">
                  {studentClass.class_name}
                </div>
                {/* Extra data */}
                <div className="pt-2">
                  <ChatMembersList members={fakeMembersData} />
                </div>
                {/* Buttons */}
                {/* Progress & Dates */}
                <div className="pt-6 px-0">
                  <div className="flex justify-between px-6 text-muted-foreground text-detail">
                    <span>
                      {" Started " +
                        studentClass.classbegindate.getUTCDate() +
                        "/" +
                        (studentClass.classbegindate.getMonth() + 1)}
                    </span>
                    <span>
                      {" Ends " +
                        studentClass.classenddate.getUTCDate() +
                        "/" +
                        (studentClass.classenddate.getMonth() + 1)}
                    </span>
                  </div>
                  <Progress
                    className="bg-muted mt-2 h-1"
                    value={Math.random() * 100}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 min-w-[340px] lg:max-w-[400px] grow h-fit lg:h-full flex-col gap-8">
          <Tabs
            defaultValue="Class A"
            className="w-full border-border bg-background border-[1px] rounded-[1rem]"
          >
            <div className="text-p_ui mb-4 pt-4 px-4">Student Submissions</div>
            <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start">
              <TabsTrigger className="tab-trigger ml-4" value="Class A">
                Class A
              </TabsTrigger>
              <TabsTrigger className="tab-trigger " value="Class B">
                Class B
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="max-h-[400px] overflow-y-scroll"
              value="Class A"
            >
              {exampleAssignments.map((assignment, idx) => {
                return (
                  <>
                    <Card
                      key={idx}
                      className="w-full bg-transparent border-none rounded-none p-4"
                    >
                      <CardHeader className="px-0 pb-2 pt-0">
                        <CardTitle>Class A</CardTitle>
                        <div className="text-subtle text-muted-foreground">
                          Omar Mohamed
                        </div>
                      </CardHeader>
                      <CardFooter className="pb-2 px-0 pt-2 justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-fit ml-auto"
                        >
                          <ArrowRight size={16} />
                          View Assignment
                        </Button>
                      </CardFooter>
                    </Card>
                    <div className="w-full h-[1px] bg-muted"></div>
                  </>
                );
              })}
            </TabsContent>
            <TabsContent
              className="max-h-[400px] overflow-y-scroll"
              value="Class B"
            >
              {exampleAssignments.map((assignment, idx) => {
                return (
                  <>
                    <Card
                      key={idx}
                      className="w-full bg-transparent border-none rounded-none p-4"
                    >
                      <CardHeader className="px-0 pb-2 pt-0">
                        <CardTitle>Class B</CardTitle>
                        <div className="text-subtle text-muted-foreground">
                          Omar Mohamed
                        </div>
                      </CardHeader>
                      <CardFooter className="pb-2 px-0 pt-2 justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-fit ml-auto"
                        >
                          <ArrowRight size={16} />
                          View Assignment
                        </Button>
                      </CardFooter>
                    </Card>
                    <div className="w-full h-[1px] bg-muted"></div>
                  </>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* Container */}
    </div>
  );
};

export default page;
