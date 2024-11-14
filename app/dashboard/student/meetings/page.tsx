import * as React from "react";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { exampleMeetings } from "@/lib/data";
import TableTimestampFormatter from "@/components/pes-custom/platform-components/TableTimestampFormatter";
import { EyeIcon } from "lucide-react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Meetings</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleMeetings.map((meeting, idx) => {
          return (
            <Card key={idx} className="w-full md:max-w-[352px]">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  Meeting{" "}
                  <span className="text-muted-foreground text-subtle">
                    <TableTimestampFormatter
                      date={new Date(meeting.session_time)}
                    />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardFooter className="text-detail">
                <Button variant="outline" size="sm" className="flex gap-2">
                  <EyeIcon size={16} />
                  View details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
        {/* Example meetings */}
        {/* <Card className="w-full md:max-w-[352px]">
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
        </Card> */}
        {/* <Card className="w-full md:max-w-[352px]">
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
        </Card> */}
      </div>
    </div>
  );
};

export default page;
