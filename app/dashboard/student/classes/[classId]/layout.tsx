import ClassNavMenu from "@/components/pes-custom/platform-components/ClassNavMenu";
import { getNameById } from "@/lib/getNameById";
import { ReactNode } from "react";

interface ClassLayoutProps {
  params: {
    classId: string;
  };
  children: ReactNode;
}

const ClassLayout = ({ params: { classId }, children }: ClassLayoutProps) => {
  const class_name = getNameById(classId, "Class");

  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="hidden md:block text-h2">{class_name}</h2>
      <ClassNavMenu classId={classId} />
      {children}
    </section>
  );
};

export default ClassLayout;
