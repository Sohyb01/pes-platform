import { parentsColumns } from "@/components/pes-custom/table-columns/parentsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleParents } from "@/lib/data";
import React from "react";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleParents;
}

const page = async () => {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Parents</h3>
      <DataTable columns={parentsColumns} data={data} />
    </div>
  );
};

export default page;
