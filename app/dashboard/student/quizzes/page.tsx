import * as React from "react";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { Button } from "@/components/ui/button";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { exampleExams } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
// import { CheckIcon } from "lucide-react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Quizzes 💯</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleExams.map((exam, idx) => {
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
                <CardTitle>
                  {exam.quizname}
                  {exam.timestamp && (
                    <span className="ml-2 text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                      exam.timestamp.getUTCMonth() + 1
                    }/${exam.timestamp.getFullYear()}`}</span>
                  )}
                </CardTitle>
                <CardDescription className="flex justify-between pt-2">
                  <BadgeLink href="#">
                    <EmployeeIcon />
                    {/* {exam.instructor_id} */}
                    Mahmoud A
                  </BadgeLink>
                  <BadgeLink href="#">
                    <ClassIcon />
                    {exam.class_field}
                  </BadgeLink>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-subtle">
                <p>{exam.questions.length} questions</p>
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm" className="w-full">
                  <JoinArrowIcon />
                  Start Quiz
                </Button>
              </CardFooter>
            </M_Card>
          );
        })}
        {/* Card example */}
        {/* <Card className="w-full md:max-w-[352px]">
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
            <p>12 questions</p>
          </CardContent>
          <CardFooter>
            <Button disabled variant="secondary" size="sm" className="w-full">
              <JoinArrowIcon />
              Available in 00:05:04
            </Button>
          </CardFooter>
        </Card> */}
        {/* Card example */}
        {/* <Card className="w-full md:max-w-[352px]">
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
            <p>24 questions</p>
          </CardContent>
          <CardFooter>
            <Button disabled variant="outline" size="sm" className="w-full">
              <CheckIcon /> Quiz Completed
            </Button>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
};

export default page;
