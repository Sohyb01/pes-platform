import FormAddParent from "@/components/pes-custom/forms/FormAddParent";
import { exampleParents } from "@/lib/data";
import {} from "@/lib/types-forms";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const parent = exampleParents.find((parent) => parent.id == params.editId);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing parent</h3>
      {parent == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <FormAddParent editObj={parent} />
      )}
    </div>
  );
};

export default EditPage;
