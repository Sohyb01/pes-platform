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
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { Button } from "@/components/ui/button";
import { TimeIcon } from "@/components/pes-custom/icons/TimeIcon";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Meetings</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Project Meeting</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
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
          <CardFooter className="text-detail">
            <span className="flex w-fit gap-1 items-center stroke-foreground">
              <TimeIcon />
              <span>19:00 August 14th</span>
            </span>
            <span className="w-fit ml-auto">2d 4h left</span>
            {/* <Button variant="secondary" size="sm" className="w-full">
              <UploadIcon />
              Submit
            </Button> */}
          </CardFooter>
        </Card>
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Project Meeting</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
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
          <CardFooter className="text-detail">
            <Button disabled variant="secondary" size="sm" className="w-full">
              <JoinArrowIcon />
              Starting in 00:05:04
            </Button>
          </CardFooter>
        </Card>
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Project Meeting</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
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
          <CardFooter>
            <Button variant="default" size="sm" className="w-full">
              <JoinArrowIcon />
              Join Meeting
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
