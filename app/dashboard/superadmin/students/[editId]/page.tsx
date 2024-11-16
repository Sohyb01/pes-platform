import FormAddStudent from "@/components/pes-custom/forms/FormAddStudent";
import { exampleStudents } from "@/lib/data";
import {} from "@/lib/types-forms";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const student = exampleStudents.find(
    (student) => student.id == params.editId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing student</h3>
      {student == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <FormAddStudent editObj={student} />
      )}
    </div>
  );
};

export default EditPage;
