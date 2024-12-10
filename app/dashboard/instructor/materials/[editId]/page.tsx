import FormAddMaterial from "@/components/pes-custom/forms/FormAddMaterial";
import { exampleMaterials } from "@/lib/data";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const material = exampleMaterials.find(
    (material) => material.id === params.editId
  );
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing material</h3>
      <FormAddMaterial editObj={material} />
    </div>
  );
};

export default EditPage;
