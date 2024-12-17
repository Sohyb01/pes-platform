"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleProgress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

const attendanceData = [
  {
    subject: "Math",
    percentage: 87,
  },
  {
    subject: "Intro To Computers",
    percentage: 97,
  },
];

const AttendancePercentages = () => {
  const [activeSubject, setActiveSubject] = useState("Math");
  const curSubjectIdx = useMemo(
    () => attendanceData.findIndex((data) => data.subject === activeSubject),
    [activeSubject]
  );

  return (
    <Card className="bg-background p-4 space-y-8">
      <CardHeader>
        <Select value={activeSubject} onValueChange={setActiveSubject}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Math">Math</SelectItem>
            <SelectItem value="Intro To Computers">
              Intro To Computers
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="gap-8 flex flex-col justify-center items-center">
        <CircleProgress
          className="scale-150"
          value={attendanceData[curSubjectIdx].percentage}
        />
        <h4 className="text-center text-h4">
          {activeSubject} Attendance Percentage
        </h4>
      </CardContent>
    </Card>
  );
};

export default AttendancePercentages;
