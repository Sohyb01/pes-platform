import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import * as React from "react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Ahmed&apos;s Schedule</h3>
      <PESCalendar />
    </div>
  );
};

export default page;
