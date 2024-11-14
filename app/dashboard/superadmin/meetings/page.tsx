import TableTimestampFormatter from "@/components/pes-custom/platform-components/TableTimestampFormatter";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { exampleMeetings } from "@/lib/data";
import { EyeIcon } from "lucide-react";

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
      <h3 className="text-h3">Meetings</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleMeetings.map((meeting, idx) => {
          return (
            <Card key={idx} className="w-full md:max-w-[352px]">
              <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                  Meeting{" "}
                  <span className="text-muted-foreground text-subtle">
                    <TableTimestampFormatter
                      date={new Date(meeting.session_time)}
                    />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardFooter className="text-detail">
                <Button variant="outline" size="sm" className="flex gap-2">
                  <EyeIcon size={16} />
                  View details
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
