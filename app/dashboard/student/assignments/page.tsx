import * as React from "react";

import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Button, buttonVariants } from "@/components/ui/button";
import { UploadIcon } from "@/components/pes-custom/icons/UploadIcon";
import { exampleAssignments } from "@/lib/data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { DownloadIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments ⏰</h3>
      <Tabs defaultValue="Due Assignments" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Due Assignments"
          >
            Due Assignments
          </TabsTrigger>
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Past Assignments"
          >
            Past Assignments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Due Assignments">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleAssignments.map((assignment, idx) => {
              return (
                <Link
                  key={idx}
                  href={`assignments/${assignment.assignment_id}`}
                >
                  <M_Card
                    variants={VariantSlideInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: idx * 0.05 }} // Custom delay for each item
                    className="w-full md:max-w-[352px] border-primary/50 duration-100 border-[1px] hover:border-primary"
                  >
                    <CardHeader>
                      <CardTitle>Robotics Class B Assignment ⏱️</CardTitle>
                      <Link href="#">
                        <span className="max-w-[12ch] overflow-hidden text-subtle text-muted-foreground">
                          ENG. Ahmed Reda 👨‍🏫
                          {/* {assignment.sent_by} */}
                        </span>
                      </Link>
                    </CardHeader>
                    <CardContent className="text-subtle">
                      <p>Task Description</p>
                      <p className="text-muted-foreground line-clamp-2 h-[40px]">
                        {assignment.assignment_description || "No description"}
                      </p>
                    </CardContent>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        {assignment.assignment_attachment ? (
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <BadgeLink href="#" className="w-fit">
                                Attachments 📂
                              </BadgeLink>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-60 text-subtle flex flex-col gap-2">
                              {assignment.assignment_attachment.map(
                                (
                                  attachment: { name: string; size: number },
                                  idx: number
                                ) => {
                                  return (
                                    <Link
                                      key={idx}
                                      href="#"
                                      className={`flex items-center w-full gap-2 !justify-start ${buttonVariants(
                                        { variant: "outline", size: "sm" }
                                      )}`}
                                    >
                                      {attachment.name} 📁
                                      <DownloadIcon
                                        className="ml-auto"
                                        size={16}
                                      />
                                    </Link>
                                  );
                                }
                              )}
                              {assignment.assignment_attachment.length > 1 && (
                                <>
                                  <Separator className="my-1" />
                                  <Link
                                    key={idx}
                                    href="#"
                                    className={`flex items-center w-full gap-2 ${buttonVariants(
                                      { variant: "outline", size: "sm" }
                                    )}`}
                                  >
                                    Download all (
                                    {assignment.assignment_attachment.length})
                                  </Link>
                                </>
                              )}
                            </HoverCardContent>
                          </HoverCard>
                        ) : (
                          <div className="w-fit focus:outline-none flex gap-2 items-center stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade opacity-50">
                            No attachments
                          </div>
                        )}
                        <div className="flex w-fit gap-1 items-center stroke-secondary text-secondary">
                          ⚠️<span className="text-detail">Due in 2d 4h</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="default" size="sm" className="w-full">
                        <UploadIcon />
                        Submit
                      </Button>
                    </CardFooter>
                  </M_Card>
                </Link>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="Past Assignments">
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleAssignments.map((assignment, idx) => {
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
                    <CardTitle>Robotics Class B Assignment ⏱️</CardTitle>
                    <Link href="#">
                      <span className="max-w-[12ch] overflow-hidden text-subtle text-muted-foreground">
                        ENG. Ahmed Reda 👨‍🏫
                        {/* {assignment.sent_by} */}
                      </span>
                    </Link>
                  </CardHeader>
                  <CardContent className="text-subtle">
                    <p>Task Description</p>
                    <p className="text-muted-foreground line-clamp-2 h-[40px]">
                      {assignment.assignment_description || "No description"}
                    </p>
                  </CardContent>
                  <CardContent>
                    <span className="text-success text-detail">
                      Submission Accepted
                    </span>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View feedback
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
