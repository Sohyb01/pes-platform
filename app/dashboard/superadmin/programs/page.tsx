import { programsColumns } from "@/components/pes-custom/table-columns/programsColumns";
import { DataTable } from "@/components/ui/data-table";
import { examplePrograms } from "@/lib/data";
import { TFormSchemaAddProgram } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddProgram[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return examplePrograms;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Programs</h3>
      <DataTable columns={programsColumns} data={data} />
    </div>
  );
}
