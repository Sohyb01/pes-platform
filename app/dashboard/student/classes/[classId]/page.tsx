import { redirect } from "next/navigation";

interface ClassRootProps {
  params: {
    classId: string;
  };
}

const ClassRoot = ({ params: { classId } }: ClassRootProps) => {
  return redirect(`/dashboard/student/classes/${classId}/overview`);
};

export default ClassRoot;
