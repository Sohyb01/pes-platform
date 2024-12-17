import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { exampleAssignments } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  ChartNoAxesColumn,
  DownloadIcon,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";

interface AssignmentDetailsProps {
  params: {
    assignmentId: string;
    classId: string;
  };
}

const getAssignment = async (assignmentId: string) => {
  return exampleAssignments.find(
    (assignment) => assignment.assignment_id === assignmentId
  );
};

const AssignmentDetails = async ({
  params: { assignmentId, classId },
}: AssignmentDetailsProps) => {
  const assignment = await getAssignment(assignmentId);

  return (
    <div className="flex flex-col gap-4">
      <Link
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "self-start"
        )}
        href={`/dashboard/parent/assignments/${classId}`}
      >
        <ArrowLeft size={16} />
        Back
      </Link>
      <div className="grid gap-8 lg:grid-cols-7">
        <div className="space-y-2 lg:col-span-4">
          <h3 className="text-h3">Details</h3>
          <Card className="bg-background">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-h4">{assignmentId}</CardTitle>
              <Badge className="bg-success hover:bg-success/80 flex items-center gap-2">
                <ChartNoAxesColumn size={24} />
                <h4 className="text-nowrap">Grade: 14/20</h4>
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="text-h4">Description</h4>
                <p>{assignment?.assignment_description}</p>
              </div>
              {assignment?.assignment_attachment ? (
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
                            <DownloadIcon className="ml-auto" size={16} />
                          </Link>
                        );
                      }
                    )}
                    {assignment.assignment_attachment.length > 1 && (
                      <>
                        <Separator className="my-1" />
                        <Link
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
            </CardContent>
            <CardFooter>
              <div className="flex gap-4">
                <Badge className="flex items-center gap-2">
                  <Calendar size={16} />
                  Assigned 1/30
                </Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-2 lg:col-span-3">
          <h3 className="text-h3">Instructors Notes</h3>
          <div className="max-h-[16rem]"></div>
          <Card className="bg-background">
            <CardHeader className="">
              <CardTitle className="flex items-center gap-2">
                <User size={16} />
                <span>Instructor Name</span>
              </CardTitle>
              <CardDescription>{assignmentId}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Ahmed needs to work on his math</p>
            </CardContent>
            <CardFooter>
              <Link
                href="book-a-call"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-2 w-full"
                )}
              >
                <Phone size={16} />
                Contact Instructor
              </Link>
            </CardFooter>
          </Card>{" "}
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
