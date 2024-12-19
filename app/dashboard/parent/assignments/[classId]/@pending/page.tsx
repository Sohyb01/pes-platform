import PESAssignmentCard from "@/components/pes-custom/platform-components/PESStudentAssignmentCard";
import { exampleAssignments } from "@/lib/data";

const getCourseAssignmnets = async () => {
  return exampleAssignments;
};

const PendingAssignments = async () => {
  const assignments = await getCourseAssignmnets();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {assignments.map((assignment, idx) => {
        return <PESAssignmentCard assignment={assignment} key={idx} />;
      })}
    </div>
  );
};
export default PendingAssignments;
