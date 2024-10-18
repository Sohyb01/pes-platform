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
import { Button } from "@/components/ui/button";
import { TimeIcon } from "@/components/pes-custom/icons/TimeIcon";
import { UploadIcon } from "@/components/pes-custom/icons/UploadIcon";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Assignment</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <ProgramIcon />
                Programming Basics
              </BadgeLink>
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Task Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardContent>
            <p className="text-detail">Attachments</p>
            <div className="flex w-full justify-between items-cente">
              <BadgeLink href="#" className="w-fit">
                <FileIcon />
                Starting Files
              </BadgeLink>
              <div className="flex w-fit gap-1 items-center stroke-secondary text-secondary">
                <TimeIcon />
                <span className="text-detail">Due in 2d 4h</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" size="sm" className="w-full">
              <UploadIcon />
              Submit
            </Button>
          </CardFooter>
        </Card>
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Assignment</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <ProgramIcon />
                Programming Basics
              </BadgeLink>
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Task Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardContent>
            <p className="text-detail">Attachments</p>
            <div className="flex w-full justify-between items-center">
              <BadgeLink href="#" className="w-fit">
                <FileIcon />
                Starting Files
              </BadgeLink>
              <div className="flex w-fit gap-1 items-center stroke-muted-foreground text-muted-foreground">
                <TimeIcon />
                <span className="text-detail">Due in 2d 4h</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <UploadIcon />
              Re-Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
