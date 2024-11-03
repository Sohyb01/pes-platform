import { logsColumns } from "@/components/pes-custom/table-columns/logsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleLogs } from "@/lib/data";
import { TFormSchemaAddLog } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddLog[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleLogs;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Platform Activity History</h3>
      <DataTable columns={logsColumns} data={data} />
    </div>
  );
}
