import { assignmentsColumns } from "@/components/pes-custom/table-columns/assignmentsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleAssignments } from "@/lib/data";
import { TFormSchemaAddAssignment } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddAssignment[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleAssignments;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments</h3>
      <DataTable columns={assignmentsColumns} data={data} />
    </div>
  );
}
