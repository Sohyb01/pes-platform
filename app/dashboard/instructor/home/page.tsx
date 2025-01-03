"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { exampleAssignments, exampleClasses } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { TFormSchemaAddClass } from "@/lib/types-forms";
import ChatMembersList from "@/components/pes-custom/platform-components/chat-members-list";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { getNameById } from "@/lib/getNameById";

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
          <p className="text-h3">Student submissions</p>
          <div className="max-h-[600px] overflow-y-scroll border-border border-[1px] rounded-[1rem]">
            {exampleAssignments.map((assignment, idx) => {
              return (
                <Card
                  key={idx}
                  className="w-full bg-transparent border-b-none border-x-0 border-t-[1px] border-t-border rounded-none p-4"
                >
                  <CardHeader className="px-0 pb-2 pt-0 gap-0">
                    <CardTitle>Omar Mohamed</CardTitle>
                    <div className="text-muted-foreground text-subtle">
                      {getNameById(assignment.class_id, "Class")}
                      <div>8/10/2024 5:42</div>
                    </div>
                  </CardHeader>
                  <CardFooter className="pb-2 px-0 pt-2 justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-fit ml-auto"
                    >
                      <ArrowRight size={16} />
                      View Submission
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex-1 min-w-[340px] lg:max-w-[400px] grow h-fit lg:h-full flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2 text-subtle">
            {/* Achievements */}
            <div className="flex flex-col text-center items-center justify-center px-2 py-4 rounded-[2rem] bg-background border-primary/50 hover:border-primary duration-100 border-[2px] gap-1">
              <div className="text-h1 line-clamp-1">12</div>
              Sessions finished
            </div>
            <div className="flex flex-col text-center items-center justify-center px-2 py-4 rounded-[2rem] bg-background border-secondary/50 hover:border-secondary duration-100 border-[2px] gap-1">
              <div className="text-h1 line-clamp-1">17</div>
              Assignments reviewed
            </div>
            <div className="flex flex-col text-center items-center justify-center px-2 py-4 rounded-[2rem] bg-background border-success/50 hover:border-success duration-100 border-[2px] gap-1">
              <div className="text-h1 line-clamp-1">5</div>
              Calls finished
            </div>
            <div className="flex flex-col text-center items-center justify-center px-2 py-4 rounded-[2rem] bg-background border-destructive/50 hover:border-destructive duration-100 border-[2px] gap-1">
              <div className="text-h1 line-clamp-1">12</div>
              Free sessions given
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <div className="text-h4">Classes</div>
            <div className="flex flex-col gap-4 h-full max-h-[400px] overflow-y-scroll pr-4">
              {exampleClasses.map((studentClass: TFormSchemaAddClass, idx) => {
                return (
                  <Link
                    key={idx}
                    href={`classes/${studentClass.id}`}
                    className="bg-background rounded-[1rem] flex flex-col text-p_ui overflow-hidden border-primary/50 border-[1px] hover:border-primary duration-100 px-6 h-fit"
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
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
    </div>
  );
};

export default page;
