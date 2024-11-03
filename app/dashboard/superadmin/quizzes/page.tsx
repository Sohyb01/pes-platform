import { examsColumns } from "@/components/pes-custom/table-columns/examsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleExams } from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddExam[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleExams;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Quizzes</h3>
      <DataTable columns={examsColumns} data={data} />
    </div>
  );
}
