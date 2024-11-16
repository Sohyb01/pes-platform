import { employeesColumns } from "@/components/pes-custom/table-columns/employeesColumns";
import { DataTable } from "@/components/ui/data-table";
import {
  exampleAdmins,
  exampleEmployees,
  exampleInstructors,
} from "@/lib/data";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return [...exampleAdmins, ...exampleInstructors, ...exampleEmployees];
}

export default async function EmployeesPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Employees</h3>
      <DataTable columns={employeesColumns} data={data} />
    </div>
  );
}
