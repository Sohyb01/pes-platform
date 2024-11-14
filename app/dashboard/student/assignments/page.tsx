import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { ProgramIcon } from "@/components/pes-custom/icons/ProgramIcon";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { FileIcon } from "@/components/pes-custom/icons/FileIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { TimeIcon } from "@/components/pes-custom/icons/TimeIcon";
import { UploadIcon } from "@/components/pes-custom/icons/UploadIcon";
import { exampleAssignments } from "@/lib/data";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleAssignments.map((assignment, idx) => {
          return (
            <Card key={idx} className="w-full md:max-w-[352px]">
              <CardHeader>
                <CardTitle>Robotics Class B Assignment</CardTitle>
                <CardDescription className="flex justify-between pt-2">
                  <BadgeLink href="#">
                    <ProgramIcon />
                    Programming Basics
                  </BadgeLink>
                  <BadgeLink href="#">
                    <EmployeeIcon />
                    {assignment.sent_by}
                  </BadgeLink>
                </CardDescription>
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
                          <FileIcon />
                          Attachments
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
                                <DownloadIcon size={12} />
                                {attachment.name}
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
                    <div className="w-fit focus:outline-none flex gap-2 items-center stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade text-muted-foreground">
                      No attachments
                    </div>
                  )}
                  <div className="flex w-fit gap-1 items-center stroke-secondary text-secondary">
                    <TimeIcon />
                    <span className="text-detail">Due in 2d 4h</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm" className="w-full">
                  <UploadIcon />
                  Submit
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default page;
