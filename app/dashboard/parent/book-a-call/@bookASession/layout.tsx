import { ReactNode } from "react";

const BookASessionLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-[25rem] space-y-4">{children}</div>;
};

export default BookASessionLayout;
