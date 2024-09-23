import { studentsColumns } from "@/components/pes-custom/table-columns/studentsColumns";
import { DataTable } from "@/components/ui/data-table";
import { students } from "@/lib/data";
import { Student } from "@/lib/types";
import React from "react";

async function getData(): Promise<Student[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return students;
}

const page = async () => {
  const data = await getData();

  return (
    <div className="flex w-full flex-col">
      <h3 className="text-h3">Students</h3>
      <DataTable columns={studentsColumns} data={data} />
    </div>
  );
};

export default page;
