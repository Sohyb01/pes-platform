import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LeaderboardStudent } from "@/lib/data";
import React from "react";

const LeaderboardPosition = ({
  student,
  variant,
  idx,
}: {
  student: LeaderboardStudent;
  variant: "month" | "week";
  idx: number;
}) => {
  return (
    <div className="flex items-center px-4 py-2 rounded-[0.5rem] border-border border-[1px] bg-background w-full">
      <span className="w-[3ch]">{idx + 1}</span>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="pl-4">{student.name}</span>
        </div>
        <span>
          {variant == "month"
            ? student.pointsThisMonth
            : student.pointsThisWeek}
        </span>
      </div>
    </div>
  );
};

const Leaderboard = ({
  students,
  variant,
}: {
  students: LeaderboardStudent[];
  variant: "month" | "week";
}) => {
  const sortedWeeklyPositions = students.sort(
    (a, b) => b.pointsThisWeek - a.pointsThisWeek
  );
  const sortedMonthlyPositions = students.sort(
    (a, b) => b.pointsThisWeek - a.pointsThisWeek
  );

  return variant === "week" ? (
    <div className="flex flex-col gap-2">
      {sortedWeeklyPositions.map((student, idx) => {
        return (
          <LeaderboardPosition
            student={student}
            key={idx}
            idx={idx}
            variant={variant}
          />
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      {sortedMonthlyPositions.map((student, idx) => {
        return (
          <LeaderboardPosition
            student={student}
            key={idx}
            idx={idx}
            variant={variant}
          />
        );
      })}
    </div>
  );
};

export default Leaderboard;
