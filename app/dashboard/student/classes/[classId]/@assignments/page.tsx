import PESStudentAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { exampleAssignments } from "@/lib/data";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { compareAsc } from "date-fns";
import { ChevronsUpDown } from "lucide-react";

const getPendingAssignments = async () => {
  return exampleAssignments.filter(
    (assignment) => assignment.status === "pending"
  );
};

const getSubmittedAssignments = async () => {
  return exampleAssignments.filter(
    (assignment) => assignment.status === "submitted"
  );
};

const getPastAssignments = async () => {
  return exampleAssignments.filter(
    (assignment) => compareAsc(new Date(), assignment.assignment_duedate) === 1
  );
};

const Assignments = async () => {
  const pendingAssignments = await getPendingAssignments();
  const submittedAssignments = await getSubmittedAssignments();
  const pastAssignments = await getPastAssignments();

  return (
    <div className="px-4 h-[68vh] overflow-y-scroll flex flex-col gap-8">
      {/* Pending Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Pending Assignments</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {pendingAssignments.map((assignment) => {
              return (
                <PESStudentAssignmentCard
                  key={assignment.assignment_id}
                  assignment={assignment}
                />
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Submitted Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Submitted Assignments</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {submittedAssignments.map((assignment) => {
              return (
                <PESStudentAssignmentCard
                  key={assignment.assignment_id}
                  assignment={assignment}
                />
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Past Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Past Assignments</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {pastAssignments.map((assignment) => {
              return (
                <PESStudentAssignmentCard
                  key={assignment.assignment_id}
                  assignment={assignment}
                />
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Assignments;
