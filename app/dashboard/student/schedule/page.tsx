import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import * as React from "react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Schedule 📆</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        <PESCalendar />
      </div>
    </div>
  );
};

export default page;
