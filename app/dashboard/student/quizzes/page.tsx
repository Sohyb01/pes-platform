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
import { Button } from "@/components/ui/button";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Quizzes</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Quiz</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
              <BadgeLink href="#">
                <ClassIcon />
                Class B
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" size="sm" className="w-full">
              <JoinArrowIcon />
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Quiz</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
              <BadgeLink href="#">
                <ClassIcon />
                Class B
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardFooter>
            <Button disabled variant="secondary" size="sm" className="w-full">
              <JoinArrowIcon />
              Available in 00:05:04
            </Button>
          </CardFooter>
        </Card>
        {/* Card */}
        <Card className="w-full md:max-w-[352px]">
          <CardHeader>
            <CardTitle>Robotics Quiz</CardTitle>
            <CardDescription className="flex justify-between pt-2">
              <BadgeLink href="#">
                <EmployeeIcon />
                Mahmoud A
              </BadgeLink>
              <BadgeLink href="#">
                <ClassIcon />
                Class B
              </BadgeLink>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-subtle">
            <p>Description</p>
            <p className="text-muted-foreground line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              ullam aspernatur adipisci dolores porro doloribus numquam
              assumenda quae ut qui.
            </p>
          </CardContent>
          <CardFooter>
            <Button disabled variant="outline" size="sm" className="w-full">
              Quiz Completed
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
