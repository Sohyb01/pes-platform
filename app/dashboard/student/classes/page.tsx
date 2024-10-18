import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { TimeIcon } from "@/components/pes-custom/icons/TimeIcon";
import { ProgramIcon } from "@/components/pes-custom/icons/ProgramIcon";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Classes</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Class A</CardTitle>
            <CardDescription>
              <span className="text-detail">Subjects</span>
              <div className="w-full flex gap-1 flex-wrap justify-start items-start text-badge">
                <Badge variant="default" className="bg-primary">
                  Subject
                </Badge>
                <Badge variant="default" className="bg-primary">
                  Subject
                </Badge>
                <Badge variant="default" className="bg-primary">
                  Subject
                </Badge>
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="gap-4 flex flex-col">
            <div className="horizontal-divider" />
            <CardDescription>
              <span className="text-detail">Assignments</span>
              <div className="w-full flex gap-1 flex-wrap justify-start items-start text-badge">
                <BadgeLink href="#">
                  <TimeIcon />
                  Assignment
                </BadgeLink>
                <BadgeLink href="#">
                  <TimeIcon />
                  Assignment
                </BadgeLink>
              </div>
            </CardDescription>
            <div className="horizontal-divider" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <BadgeLink href="#">
              <ProgramIcon />
              Programming Basics
            </BadgeLink>
            <BadgeLink href="#">
              <EmployeeIcon />
              Mahmoud A
            </BadgeLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
