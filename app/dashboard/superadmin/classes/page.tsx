import { classesColumns } from "@/components/pes-custom/table-columns/classesColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleClasses } from "@/lib/data";
import { TFormSchemaAddClass } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddClass[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleClasses;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Classes</h3>
      <DataTable columns={classesColumns} data={data} />
    </div>
  );
}
