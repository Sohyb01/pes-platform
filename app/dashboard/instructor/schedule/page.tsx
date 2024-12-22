import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FormAddScheduleEvent from "@/components/pes-custom/forms/FormAddScheduleEvent";

const Schedule = async () => {
  return (
    <div className="dashboard-tab-wrapper">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-h3">Schedule 📆</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={`flex gap-1 items-center w-fit`}
            >
              <PlusIcon size={16} />
              Add Event
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[100vw] md:max-w-[540px] px-4 overflow-y-scroll"
          >
            <SheetTitle className="text-h2">Add Event</SheetTitle>
            <FormAddScheduleEvent />
          </SheetContent>
        </Sheet>
      </div>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        <PESCalendar />
      </div>
    </div>
  );
};

export default Schedule;
