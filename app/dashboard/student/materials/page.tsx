import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/BadgeLink";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { FileIcon } from "@/components/pes-custom/icons/FileIcon";
import { Button } from "@/components/ui/button";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { DownloadIcon } from "@/components/pes-custom/icons/DownloadIcon";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Materials</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Material</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <ClassIcon />
                Programming Basics
              </BadgeLink>
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Material Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardContent>
            <p className="text-detail">Attachments</p>
            <BadgeLink href="#" className="w-fit">
              <FileIcon />
              Starting Files
            </BadgeLink>
          </CardContent>
          <CardFooter className="flex flex-col gap-1">
            <Button variant="outline" size="sm" className="w-full">
              <JoinArrowIcon />
              Session link (how to use)
            </Button>
            <Button variant="default" size="sm" className="w-full">
              <DownloadIcon />
              Download
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
