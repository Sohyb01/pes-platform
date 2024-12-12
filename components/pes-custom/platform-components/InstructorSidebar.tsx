"use client";

import React from "react";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { MaterialIcon } from "@/components/pes-custom/icons/MaterialIcon";
import { SchedulesIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { StudentIcon } from "../icons/StudentIcon";

const InstructorSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];
  return (
    <nav className="hidden lg:flex p-8 gap-8 flex-col items-start w-full max-w-[280px] dashboard-sizing border-r border-border overflow-scroll">
      <p className="text-lead">Instructor Dashboard</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          <p>Platform</p>
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/instructor/students">
              <Button
                className="sidebar-button"
                variant={lastSegment == "students" ? "default" : "outline"}
                size="sm"
              >
                <StudentIcon /> Students
              </Button>
            </Link>
            <Link href="/dashboard/instructor/classes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "classes" ? "default" : "outline"}
                size="sm"
              >
                <ClassIcon /> Classes
              </Button>
            </Link>
            <Link href="/dashboard/instructor/assignments">
              <Button
                className="sidebar-button"
                variant={lastSegment == "assignments" ? "default" : "outline"}
                size="sm"
              >
                <AssignmentIcon /> Assignments
              </Button>
            </Link>
            <Link href="/dashboard/instructor/schedule">
              <Button
                className="sidebar-button"
                variant={lastSegment == "schedule" ? "default" : "outline"}
                size="sm"
              >
                <SchedulesIcon /> Schedule
              </Button>
            </Link>
            <Link href="/dashboard/instructor/quizzes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "quizzes" ? "default" : "outline"}
                size="sm"
              >
                <QuizIcon /> Quizzes
              </Button>
            </Link>
            <Link href="/dashboard/instructor/materials">
              <Button
                className="sidebar-button"
                variant={lastSegment == "materials" ? "default" : "outline"}
                size="sm"
              >
                <MaterialIcon /> Materials
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InstructorSidebar;
