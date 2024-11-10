import { examplePendingPartnerships } from "@/lib/data";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PartnershipPDFButton from "@/components/pes-custom/pdf/PartnershipPDFButton";

async function getData(): Promise<null> {
  // Fetch data from your API here.
  // Must fit the type definition to be inserted into the table
  return null;
}

export default async function ExampleDashboardPage() {
  const data = await getData();

  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Partnership Applications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {examplePendingPartnerships.map((partnership, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{partnership.applicant_organization}</CardTitle>
                <CardDescription>{partnership.applicant_name}</CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-3">
                {partnership.partnership_description}
              </CardContent>
              <CardFooter className="flex justify-between">
                <PartnershipPDFButton />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
