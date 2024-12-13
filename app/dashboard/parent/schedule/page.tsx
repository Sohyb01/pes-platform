import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import * as React from "react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h2 className="text-h2 pb-4">Ahmed&apos;s Schedule 🗓️</h2>
      <PESCalendar />
    </div>
  );
};

export default page;
