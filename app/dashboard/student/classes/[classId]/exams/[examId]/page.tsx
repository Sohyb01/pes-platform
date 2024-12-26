import ActiveExam from "@/components/pes-custom/platform-components/ActiveExam";
import { exampleExams } from "@/lib/data";
import React from "react";

const ActiveExamPage = ({ params }: { params: { examId: string } }) => {
  const activeExam = exampleExams.find((exam) => exam.id == params.examId);

  return (
    <div className="dashboard-tab-wrapper">
      {activeExam == undefined ? (
        <h3 className="text-h3">Invalid ID provided</h3>
      ) : (
        <ActiveExam exam={activeExam} />
      )}
    </div>
  );
};

export default ActiveExamPage;
