import {
  exampleAssignments,
  exampleClasses,
  exampleSolvedExams,
  exampleStudents,
} from "@/lib/data";
import {} from "@/lib/types-forms";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleProgress, Progress } from "@/components/ui/progress";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Separator } from "@radix-ui/react-select";
import PESClassCard from "@/components/pes-custom/platform-components/PESClassCard";

const ViewStudentPage = ({ params }: { params: { viewId: string } }) => {
  const student = exampleStudents.find(
    (student) => student.id == params.viewId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Student Profile</h3>
      {student == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <div className="flex flex-col gap-8 items-center lg:items-start justify-start pt-8 w-full">
          {/* Info and Avatar */}
          <div className="flex items-center lg:items-start gap-8 flex-wrap md:flex-nowrap w-full">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-subtle">
              <h4 className="text-h4">{student?.student_name}</h4>
              <p className="pt-2">Student ID: {student?.id}</p>
              <p>{student?.student_email}</p>
            </div>
            {/* progress indicators */}
            <div className="flex flex-col w-full md:w-fit md:flex-row gap-4 lg:gap-10 md:ml-12 justify-center">
              {/* Attendance */}
              <div className="flex flex-col gap-2 items-start md:items-center text-center">
                <div className="text-p_ui md:text-detail">Attendance (88%)</div>
                <CircleProgress
                  value={88}
                  className="h-[60px] w-[60px] hidden md:flex"
                />
                <Progress
                  value={88}
                  className="md:hidden bg-muted h-2 w-full"
                />
              </div>
              {/* Submissions */}
              <div className="flex flex-col gap-2 items-start md:items-center text-center">
                <div className="text-p_ui md:text-detail">
                  Assignments (82%)
                </div>
                <CircleProgress
                  value={82}
                  className="h-[60px] w-[60px] hidden md:flex"
                />
                <Progress
                  value={82}
                  className="md:hidden bg-muted h-2 w-full"
                />
              </div>
            </div>
          </div>
          {/* Tabs */}
          <Tabs defaultValue="General" className="w-full">
            <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
              <TabsTrigger className="tab-trigger" value="General">
                General
              </TabsTrigger>
              <TabsTrigger className="tab-trigger" value="Exams">
                Exams
              </TabsTrigger>
              <TabsTrigger className="tab-trigger" value="Assignments">
                Assignments
              </TabsTrigger>
              <TabsTrigger className="tab-trigger" value="Classes">
                Classes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="General" className="px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 flex-col gap-4 text-foreground/90">
                <p>
                  {"Joined " +
                    student.student_dateofadmission.getDay() +
                    "/" +
                    student.student_dateofadmission.getMonth() +
                    "/" +
                    student.student_dateofadmission.getFullYear()}
                </p>

                {/*  */}
                {student.student_whatsappnum && (
                  <p>Address: {student.student_address}</p>
                )}
                {student.student_religion && (
                  <p>Religion: {student.student_religion}</p>
                )}
                {student.student_bloodgroup && (
                  <p>Blood type: {student.student_bloodgroup}</p>
                )}
                {student.student_diseases && (
                  <p>Diseases: {student.student_diseases}</p>
                )}
                {student.student_additionalnotes && (
                  <p>Notes: {student.student_additionalnotes}</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="Exams" className="px-4 pb-4">
              <div className="flex gap-8 text-subtle">
                <span>Exams Taken: 14</span>
                <span className="text-success">Passed: 12</span>
                <span className="text-destructive">Failed: 2</span>
              </div>
              <div className="flex gap-4 overflow-x-scroll pt-8">
                {exampleSolvedExams.map((exam, idx) => {
                  return (
                    <M_Card
                      variants={VariantSlideInUp}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: idx * 0.05 }} // Custom delay for each item
                      key={idx}
                      className="w-full max-w-[250px]"
                    >
                      <CardHeader>
                        <CardTitle className="flex justify-between">
                          {exam.quizname} 📝
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-subtle text-muted-foreground flex flex-col gap-1">
                        <p className="text-foreground">Grade: 79%</p>
                        {exam.timestamp && (
                          <span className="text-muted-foreground text-subtle">{`${exam.timestamp.getUTCDate()}/${
                            exam.timestamp.getUTCMonth() + 1
                          }/${exam.timestamp.getFullYear()}`}</span>
                        )}
                        <p>{exam.questions.length} Questions</p>
                        <p>{exam.duration} Minutes</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 ml-auto"
                        >
                          <JoinArrowIcon />
                          View answers
                        </Button>
                      </CardFooter>
                    </M_Card>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="Assignments" className="px-4 pb-4">
              <div className="flex gap-8 text-subtle">
                <span>Assignments: 14</span>
                <span className="text-green-500">Passed: 12</span>
                <span className="text-destructive">Failed: 2</span>
              </div>
              <div className="flex gap-4 overflow-x-scroll pt-8">
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
                        <div>
                          {assignment.assignment_duedate && (
                            <span className="text-muted-foreground text-subtle">{`${assignment.assignment_duedate.getUTCDate()}/${
                              assignment.assignment_duedate.getUTCMonth() + 1
                            }/${assignment.assignment_duedate.getFullYear()}`}</span>
                          )}
                        </div>
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
                          {assignment.assignment_description ||
                            "No description"}
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
                                      </Link>
                                    );
                                  }
                                )}
                                {assignment.assignment_attachment.length >
                                  1 && (
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
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 ml-auto"
                        >
                          <JoinArrowIcon />
                          View Submission
                        </Button>
                      </CardFooter>
                    </M_Card>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="Classes" className="px-4 pb-4">
              <div className="flex gap-4 overflow-x-scroll">
                {exampleClasses.map((pesClass, idx) => {
                  return <PESClassCard pesClass={pesClass} />;
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ViewStudentPage;
