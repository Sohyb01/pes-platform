import { exampleStudents } from "@/lib/data";
import React from "react";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleStudents;
}

const page = async () => {
  const data = await getData();

  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Students</h3>
    </div>
  );
};

export default page;
