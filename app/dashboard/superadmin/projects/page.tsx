import { projectsColumns } from "@/components/pes-custom/table-columns/projectsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleProjects } from "@/lib/data";
import { TFormSchemaAddProject } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddProject[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleProjects;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Projects</h3>
      <DataTable columns={projectsColumns} data={data} />
    </div>
  );
}
