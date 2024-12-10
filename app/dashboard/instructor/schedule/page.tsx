import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { exampleSchedules } from "@/lib/data";
import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FormAddScheduleEvent from "@/components/pes-custom/forms/FormAddScheduleEvent";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleSchedules;
}

const page = async () => {
  const data = await getData();
  console.log(data);

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
          <SheetContent className="w-[100vw] md:max-w-[540px] px-2">
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

export default page;
