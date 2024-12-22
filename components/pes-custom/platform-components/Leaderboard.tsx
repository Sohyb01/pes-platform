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
      <div className="space-y-4">
        {/* 1st */}
        <div className="mx-auto md:min-w-[280px] lg:max-w-[25vw] col-span-2 flex items-center px-4 py-5 rounded-[0.5rem] border-border border-[1px] bg-primary text-primary-foreground w-full">
          <span className="w-[3ch]">1</span>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="pl-4">
                {sortedWeeklyPositions[0].name} ⭐⭐⭐
              </span>
            </div>
            <span>{sortedWeeklyPositions[0].pointsThisWeek}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {/* 2nd */}
          <div className="md:min-w-[280px] lg:max-w-[25vw] flex items-center px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-secondary text-secondary-foreground w-full">
            <span className="w-[3ch]">2</span>
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="pl-4">
                  {sortedWeeklyPositions[1].name} ⭐⭐
                </span>
              </div>
              <span>{sortedWeeklyPositions[1].pointsThisWeek}</span>
            </div>
          </div>

          {/* 3rd */}
          <div className="md:min-w-[280px] lg:max-w-[25vw] grow flex items-center px-4 py-3 rounded-[0.5rem] border-border border-[1px] bg-success text-success-foreground w-full ">
            <span className="w-[3ch]">3</span>
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="pl-4">{sortedWeeklyPositions[2].name} ⭐</span>
              </div>
              <span>{sortedWeeklyPositions[2].pointsThisWeek}</span>
            </div>
          </div>
        </div>
      </div>
      {sortedWeeklyPositions.slice(3).map((student, idx) => {
        return (
          <LeaderboardPosition
            student={student}
            key={idx}
            idx={idx + 3}
            variant={variant}
          />
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 flex-col md:flex-row flex-wrap py-2 items-end">
        {/* 1st */}
        <div className="md:min-w-[280px] grow flex items-center px-4 py-5 rounded-[0.5rem] border-border border-[1px] bg-primary text-primary-foreground w-full h-fit">
          <span className="w-[3ch]">1</span>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="pl-4">
                {sortedMonthlyPositions[0].name} ⭐⭐⭐
              </span>
            </div>
            <span>{sortedMonthlyPositions[0].pointsThisMonth}</span>
          </div>
        </div>
        {/* 2nd */}
        <div className="md:min-w-[280px] grow flex items-center px-4 py-4 rounded-[0.5rem] border-border border-[1px] bg-secondary text-secondary-foreground w-full h-fit">
          <span className="w-[3ch]">2</span>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="pl-4">
                {sortedMonthlyPositions[1].name} ⭐⭐
              </span>
            </div>
            <span>{sortedMonthlyPositions[1].pointsThisMonth}</span>
          </div>
        </div>
        {/* 3rd */}
        <div className="md:min-w-[280px] grow flex items-center px-4 py-3 rounded-[0.5rem] border-border border-[1px] bg-success text-success-foreground w-full h-fit">
          <span className="w-[3ch]">3</span>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="pl-4">{sortedMonthlyPositions[2].name} ⭐</span>
            </div>
            <span>{sortedMonthlyPositions[2].pointsThisMonth}</span>
          </div>
        </div>
      </div>
      {sortedMonthlyPositions.slice(3).map((student, idx) => {
        return (
          <LeaderboardPosition
            student={student}
            key={idx}
            idx={idx + 3}
            variant={variant}
          />
        );
      })}
    </div>
  );
};

export default Leaderboard;
