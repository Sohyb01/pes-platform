import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { User } from "lucide-react";

interface CourseAssignmentsProps {
  params: {
    classId: string;
  };
}

const CourseAssignments = async ({
  params: { classId },
}: CourseAssignmentsProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2 lg:col-span-3 space-y-2">
        <h3 className="text-h3">{classId} Summary</h3>
        <Card className="bg-background">
          <CardHeader className="text-h4">Instructor feedback</CardHeader>
          <CardContent>
            <div className="pr-4 flex flex-col gap-4 max-h-[18rem] overflow-y-scroll">
              {[...new Array(5)].fill(0).map((_, idx) => (
                <Card key={idx}>
                  <CardHeader className="">
                    <CardTitle className="flex items-center gap-2">
                      <User size={16} />
                      <span>Instructor Name</span>
                    </CardTitle>
                    <CardDescription>Assignment Name</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Ahmed needs to work on his math</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseAssignments;
