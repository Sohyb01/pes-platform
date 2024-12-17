import { ReactNode } from "react";

const AssignmentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard-tab-wrapper">
      <h2 className="text-h2 pb-4">Assignments 📗</h2>
      {children}
    </div>
  );
};

export default AssignmentsLayout;
