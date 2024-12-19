import PESInstructorAssignmentCard from "@/components/pes-custom/platform-components/PESInstructorAssignmentCard";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { exampleAssignments } from "@/lib/data";
import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
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
      <Tabs defaultValue="active" className="">
        <TabsList className="flex justify-between bg-background border-b-[1px] border-b-muted rounded-none mb-4 h-fit">
          <div className="flex gap-4">
            <TabsTrigger className="tab-trigger" value="active">
              Active Assignments
            </TabsTrigger>
            <TabsTrigger className="tab-trigger" value="history">
              History
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="active">
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
                  <PESInstructorAssignmentCard
                    assignment={assignment}
                    key={idx}
                  />
                );
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
