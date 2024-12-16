import ViewAssignment from "@/components/pes-custom/platform-components/ViewAssignment";
import { exampleAssignments } from "@/lib/data";
import React from "react";

const ViewAssignmentPage = ({
  params,
}: {
  params: { assignmentId: string };
}) => {
  const assignment = exampleAssignments.find(
    (assignment) => assignment.assignment_id == params.assignmentId
  );

  return (
    <div className="dashboard-tab-wrapper">
      {assignment == undefined ? (
        <h3 className="text-h3">Invalid ID provided</h3>
      ) : (
        <ViewAssignment assignment={assignment} />
      )}
    </div>
  );
};

export default ViewAssignmentPage;
