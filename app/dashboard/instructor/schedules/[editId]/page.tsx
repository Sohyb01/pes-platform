import FormAddSchedule from "@/components/pes-custom/forms/FormAddSchedule";
import { exampleSchedules } from "@/lib/data";
import {} from "@/lib/types-forms";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const schedule = exampleSchedules.find(
    (schedule) => schedule.id == params.editId
  );

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing Schedule Event</h3>
      {schedule == undefined ? (
        <div>Invalid ID provided</div>
      ) : (
        <FormAddSchedule editObj={schedule} />
      )}
    </div>
  );
};

export default EditPage;
