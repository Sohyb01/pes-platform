import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exampleAssignments } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Clock, DownloadIcon, PenIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

async function getData(): Promise<TFormSchemaAddAssignment[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleAssignments;
}

export default async function AssignmentsPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <div className="flex justify-between">
        <h3 className="text-h3">Assignments</h3>
        <Link
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          href="/dashboard/instructor/assignments/new"
        >
          <PlusIcon className="size-4" />
          Add Assignment
        </Link>
      </div>
      <Tabs defaultValue="schedule-assignments" className="">
        <TabsList className="flex justify-between bg-background border-b-[1px] border-b-muted rounded-none mb-4 h-fit">
          <div className="flex gap-4">
            <TabsTrigger className="tab-trigger" value="schedule-assignments">
              Schedule Assignments
            </TabsTrigger>
            <TabsTrigger className="tab-trigger" value="history">
              History
            </TabsTrigger>
          </div>
          {/* <div */}
          {/*   className={cn( */}
          {/*     inputVariants(), */}
          {/*     "w-1/4 flex items-center gap-2 has-[:focus]:ring-2 has-[:focus]:ring-ring has-[:focus]:ring-offset-2" */}
          {/*   )} */}
          {/* > */}
          {/*   <SearchIcon className="size-4" /> */}
          {/*   <input */}
          {/*     className="flex-1 bg-transparent outline-none w-full" */}
          {/*     placeholder="Search..." */}
          {/*   /> */}
          {/* </div> */}
        </TabsList>
        <TabsContent value="schedule-assignments">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((assignment, idx) => {
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="w-full"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      {assignment.name}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {assignment.assignment_description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex lg:flex-col lg:items-start items-center justify-between gap-4">
                      <div className="w-full grid grid-cols-2 gap-4 gap-y-2 text-muted-foreground stroke-muted-foreground">
                        <p className="flex items-center gap-2">
                          <ClassIcon />
                          {assignment.class_id}
                        </p>
                        <p className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>
                            {format(assignment.assignment_duedate, "dd-LL-y")}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>
                            {format(assignment.assignment_duedate, "h:mm bb")}
                          </span>
                        </p>
                      </div>
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
                                assignment_attachment: {
                                  name: string;
                                  size: number;
                                },
                                idx: number
                              ) => {
                                return (
                                  <Link
                                    key={idx}
                                    href="#"
                                    className={`flex items-center w-full gap-2 !justify-start ${buttonVariants(
                                      {
                                        variant: "outline",
                                        size: "sm",
                                      }
                                    )}`}
                                  >
                                    {assignment_attachment.name} 📁
                                    <DownloadIcon
                                      className="ml-auto"
                                      size={16}
                                    />
                                  </Link>
                                );
                              }
                            )}
                            {assignment.assignment_attachment.length > 1 && (
                              <>
                                <Separator className="my-1" />
                                <Link
                                  key={idx}
                                  href="#"
                                  className={`flex items-center w-full gap-2 ${buttonVariants(
                                    {
                                      variant: "outline",
                                      size: "sm",
                                    }
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
                    <Link
                      href={`assignments/${assignment.assignment_id}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full"
                      )}
                    >
                      <PenIcon size={16} />
                      View / Edit
                    </Link>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
