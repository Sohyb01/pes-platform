import * as React from "react";
import { ChatLayout } from "@/components/pes-custom/platform-components/chat-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exampleAssignments } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardFooter, Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper h-full">
      <div className="flex flex-wrap gap-8 h-full">
        <div className="flex-1 min-w-[340px] grow max-h-full overflow-y-scroll bg-background border-border border-[1px] rounded-[1rem]">
          <ChatLayout defaultLayout={undefined} navCollapsedSize={8} />
        </div>
        <div className="flex-1 min-w-[340px] lg:max-w-[400px] grow h-fit lg:h-full flex-col gap-8">
          <Tabs
            defaultValue="Due"
            className="w-full border-border bg-background border-[1px] rounded-[1rem]"
          >
            <div className="text-p_ui mb-4 pt-4 px-4">Assignments ⏰</div>
            <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start">
              <TabsTrigger className="tab-trigger ml-4" value="Due">
                Due
              </TabsTrigger>
              <TabsTrigger className="tab-trigger " value="Submitted">
                Submitted
              </TabsTrigger>
            </TabsList>
            <TabsContent
              className="max-h-[400px] overflow-y-scroll"
              value="Due"
            >
              {exampleAssignments.map((assignment, idx) => {
                return (
                  <>
                    <Card
                      key={idx}
                      className="w-full bg-transparent border-none rounded-none p-4"
                    >
                      <CardHeader className="px-0 pb-2 pt-0">
                        <CardTitle>Homework Assignment</CardTitle>
                        <div className="text-subtle text-muted-foreground">
                          {" Due " +
                            assignment.assignment_duedate.getUTCDate() +
                            "/" +
                            (assignment.assignment_duedate.getMonth() + 1)}
                        </div>
                      </CardHeader>
                      <CardFooter className="pb-2 px-0 pt-2 justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-fit ml-auto"
                        >
                          <ArrowRight size={16} />
                          View Assignment
                        </Button>
                      </CardFooter>
                    </Card>
                    <div className="w-full h-[1px] bg-muted"></div>
                  </>
                );
              })}
            </TabsContent>
            <TabsContent
              className="max-h-[400px] overflow-y-scroll"
              value="Submitted"
            >
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-success">Submitted</div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Feedback
                  </Button>
                </CardFooter>
              </Card>
              <div className="w-full h-[1px] bg-muted"></div>
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-muted-foreground">
                    Waiting for review...
                  </div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Submission
                  </Button>
                </CardFooter>
              </Card>
              <div className="w-full h-[1px] bg-muted"></div>
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-destructive">Failed</div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Feedback
                  </Button>
                </CardFooter>
              </Card>
              <div className="w-full h-[1px] bg-muted"></div>
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-success">Submitted</div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Feedback
                  </Button>
                </CardFooter>
              </Card>
              <div className="w-full h-[1px] bg-muted"></div>
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-muted-foreground">
                    Waiting for review...
                  </div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Submission
                  </Button>
                </CardFooter>
              </Card>
              <div className="w-full h-[1px] bg-muted"></div>
              <Card className="w-full bg-transparent border-none rounded-none p-4">
                <CardHeader className="px-0 pb-2 pt-0">
                  <CardTitle>Homework Assignment</CardTitle>
                  <div className="text-subtle text-destructive">Failed</div>
                </CardHeader>
                <CardFooter className="pb-2 px-0 pt-2 justify-between">
                  <Button variant="outline" size="sm" className="w-fit ml-auto">
                    <ArrowRight size={16} />
                    View Feedback
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
