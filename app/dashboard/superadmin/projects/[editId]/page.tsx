import FormAddProject from "@/components/pes-custom/forms/FormAddProject";
import { exampleProjects } from "@/lib/data";
import {} from "@/lib/types-forms";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const project = exampleProjects.find(
    (project) => project.project_id == params.editId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing Project</h3>
      {project == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <FormAddProject editObj={project} />
      )}
    </div>
  );
};

export default EditPage;
