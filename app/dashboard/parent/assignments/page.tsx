import PESAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";
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
      <Tabs defaultValue="submitted" className="">
        <TabsList className="flex justify-between bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 h-fit">
          <div className="flex gap-4">
            <TabsTrigger className="tab-trigger" value="submitted">
              Submitted
            </TabsTrigger>
            <TabsTrigger className="tab-trigger" value="reviewed">
              Reviewed
            </TabsTrigger>
            <TabsTrigger className="tab-trigger" value="missed">
              Missed
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="submitted">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data
              .filter((a) => a.status == "submitted")
              .map((assignment, idx) => {
                return <PESAssignmentCard key={idx} assignment={assignment} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="reviewed">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data
              .filter((a) => a.status == "reviewed")
              .map((assignment, idx) => {
                return <PESAssignmentCard key={idx} assignment={assignment} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="missed">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data
              .filter((a) => a.status == "missed")
              .map((assignment, idx) => {
                return <PESAssignmentCard key={idx} assignment={assignment} />;
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
