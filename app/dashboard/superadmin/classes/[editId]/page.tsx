import FormAddClass from "@/components/pes-custom/forms/FormAddClass";
import { exampleClasses } from "@/lib/data";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const pesClass = exampleClasses.find(
    (pesClass) => pesClass.id == params.editId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing Class</h3>
      {pesClass == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <FormAddClass editObj={pesClass} />
      )}
    </div>
  );
};

export default EditPage;
