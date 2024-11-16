import FormAddAdmin from "@/components/pes-custom/forms/FormAddAdmin";
import FormAddInstructor from "@/components/pes-custom/forms/FormAddInstructor";
import FormAddReceptionist from "@/components/pes-custom/forms/FormAddReceptionist";
import {
  exampleAdmins,
  exampleEmployees,
  exampleInstructors,
} from "@/lib/data";
import {
  TFormSchemaAddAdmin,
  TFormSchemaAddInstructor,
  TFormSchemaAddReceptionist,
} from "@/lib/types-forms";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const allEmployees = [
    ...exampleEmployees,
    ...exampleAdmins,
    ...exampleInstructors,
  ];

  const employee = allEmployees.find(
    (employee) => employee.id == params.editId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing employee</h3>
      {employee == undefined ? (
        <div>Invalid ID provided</div>
      ) : employee.user_type === "Admin" ? (
        <FormAddAdmin editObj={employee as TFormSchemaAddAdmin} />
      ) : employee.user_type === "Instructor" ? (
        <FormAddInstructor editObj={employee as TFormSchemaAddInstructor} />
      ) : employee.user_type === "Receptionist" ? (
        <FormAddReceptionist editObj={employee as TFormSchemaAddReceptionist} />
      ) : (
        <div>Invalid ID provided</div>
      )}
    </div>
  );
};

export default EditPage;
