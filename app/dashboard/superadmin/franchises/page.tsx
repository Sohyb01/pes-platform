import { exampleColumns } from "@/components/pes-custom/table-columns/exampleColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleData } from "@/lib/data";
import { exampleObject } from "@/lib/types-backend-data";

async function getData(): Promise<exampleObject[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleData;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Assignments</h3>
      <DataTable columns={exampleColumns} data={data} />
    </div>
  );
}
