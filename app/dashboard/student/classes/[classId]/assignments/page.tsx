import PESStudentAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { exampleAssignments } from "@/lib/data";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { compareAsc } from "date-fns";
import { ChevronUp } from "lucide-react";

const getPendingAssignments = async () => {
  return exampleAssignments.filter((assignment) => assignment.status === "due");
};

const getSubmittedAssignments = async () => {
  return exampleAssignments.filter(
    (assignment) => assignment.status === "submitted"
  );
};

const getPastAssignments = async () => {
  return exampleAssignments.filter((assignment) => {
    return compareAsc(new Date(), assignment.assignment_duedate) === 1;
  });
};

const Assignments = async () => {
  const dueAssignments = await getPendingAssignments();
  const submittedAssignments = await getSubmittedAssignments();
  const pastAssignments = await getPastAssignments();

  return (
    <div className="px-4 overflow-y-scroll flex flex-col gap-8">
      {/* Due Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Due Assignments{" "}
            <span className="font-normal text-muted-foreground">
              ({dueAssignments.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild className="group">
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {dueAssignments.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Due Assignments
            </h4>
          ) : (
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
              {dueAssignments.map((assignment) => {
                return (
                  <PESStudentAssignmentCard
                    key={assignment.assignment_id}
                    assignment={assignment}
                  />
                );
              })}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Submitted Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Submitted Assignments{" "}
            <span className="font-normal text-muted-foreground">
              ({submittedAssignments.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild className="group">
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {submittedAssignments.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Submitted Assignments
            </h4>
          ) : (
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
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Past Assignments */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Past Assignments{" "}
            <span className="font-normal text-muted-foreground">
              ({pastAssignments.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild className="group">
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {pastAssignments.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Past Assignments
            </h4>
          ) : (
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
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Assignments;
