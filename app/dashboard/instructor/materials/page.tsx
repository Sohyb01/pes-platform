import { exampleMaterials } from "@/lib/data";

async function getData() {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleMaterials;
}

export default async function EmployeesPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Materials</h3>
    </div>
  );
}
