import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exampleParents } from "@/lib/data";

const getParents = async () => {
  return exampleParents;
};

const ParentHome = async () => {
  const parent = (await getParents())[0];

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Hello, Mr. {parent.name}</h3>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[340px] max-w-[580px] grow h-fit">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Attendance</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="flex-1 min-w-[340px] max-w-[580px] grow h-fit">
          <Card className="row-span-2 col-span-3">
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <PESCalendar />
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 min-w-[340px] max-w-[580px] grow h-fit">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Quizes</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="flex-1 min-w-[340px] max-w-[580px] grow h-fit">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Latest Grades</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentHome;
