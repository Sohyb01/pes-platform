import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import AssignmentAttachmentsBadge from "@/components/pes-custom/platform-components/AssignmentAttachmentsBadge";
import PESInstructorAssignmentCard from "@/components/pes-custom/platform-components/PESInstructorAssignmentCard";
import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exampleAssignments } from "@/lib/data";
import { getNameById } from "@/lib/getNameById";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Clock, PenIcon, PlusIcon } from "lucide-react";
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
      <Tabs defaultValue="scheduled" className="">
        <TabsList className="flex justify-between bg-background border-b-[1px] border-b-muted rounded-none mb-4 h-fit">
          <div className="flex gap-4">
            <TabsTrigger className="tab-trigger" value="scheduled">
              Scheduled Assignments
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
        <TabsContent value="scheduled">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data
              .filter((a) => a.assignment_duedate > new Date())
              .map((assignment, idx) => {
                return (
                  <PESInstructorAssignmentCard
                    assignment={assignment}
                    key={idx}
                  />
                );
              })}
          </div>
        </TabsContent>
        <TabsContent value="history">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data
              .filter((a) => a.assignment_duedate <= new Date())
              .map((assignment, idx) => {
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
                      <p className="text-muted-foreground h-12 line-clamp-2">
                        {assignment.assignment_description}
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex lg:flex-col lg:items-start items-center justify-between gap-4">
                        <div className="w-full grid grid-cols-2 gap-4 gap-y-2 text-muted-foreground stroke-muted-foreground">
                          <p className="flex items-center gap-2 col-span-2">
                            <ClassIcon />
                            {getNameById(assignment.class_id, "Class")}
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
                        <AssignmentAttachmentsBadge assignment={assignment} />
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
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
