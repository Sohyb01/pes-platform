import { certificatesColumns } from "@/components/pes-custom/table-columns/certificatesColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleCertificates } from "@/lib/data";
import { TFormSchemaAddCertificate } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddCertificate[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleCertificates;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Certificates</h3>
      <DataTable columns={certificatesColumns} data={data} />
    </div>
  );
}
