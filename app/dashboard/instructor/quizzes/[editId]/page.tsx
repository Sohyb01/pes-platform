import FormAddExam from "@/components/pes-custom/forms/FormAddExam";
import { exampleExams } from "@/lib/data";
import React from "react";

const EditPage = ({ params }: { params: { editId: string } }) => {
  const exam = exampleExams.find((exam) => exam.id === params.editId);
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Editing exam</h3>
      <FormAddExam editObj={exam} />
    </div>
  );
};

export default EditPage;
