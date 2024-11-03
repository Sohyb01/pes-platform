import { reviewsColumns } from "@/components/pes-custom/table-columns/reviewsColumns";
import { DataTable } from "@/components/ui/data-table";
import { exampleReviews } from "@/lib/data";
import { TFormSchemaAddReview } from "@/lib/types-forms";

async function getData(): Promise<TFormSchemaAddReview[]> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return exampleReviews;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Reviews</h3>
      <DataTable columns={reviewsColumns} data={data} />
    </div>
  );
}
