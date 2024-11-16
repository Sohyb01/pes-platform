import FormAddAssignment from "@/components/pes-custom/forms/FormAddAssignment";
import { exampleAssignments } from "@/lib/data";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const assignment = exampleAssignments.find(
    (assignment) => assignment.assignment_id === params.editId
  );
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing assignment</h3>
      <FormAddAssignment editObj={assignment} />
    </div>
  );
};

export default EditPage;
