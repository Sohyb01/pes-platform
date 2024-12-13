import { ReactNode } from "react";

const MySessionsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-4 h-[25rem]">{children}</div>;
};

export default MySessionsLayout;
