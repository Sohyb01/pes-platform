import { schedulesColumns } from "@/components/pes-custom/table-columns/schedulesColumns";
import {} from "@/components/pes-custom/table-columns/studentsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleSchedules } from "@/lib/data";
import React from "react";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleSchedules;
}

const page = async () => {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Students</h3>
      <DataTable columns={schedulesColumns} data={data} />
    </div>
  );
};

export default page;