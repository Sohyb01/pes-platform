"use client";

import React from "react";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { CertificateIcon } from "@/components/pes-custom/icons/CertificateIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { MaterialIcon } from "@/components/pes-custom/icons/MaterialIcon";
import { MeetingIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ScheduleIcon } from "../icons/ScheduleIcon";
import { LeaderboardIcon } from "../icons/LeaderboardIcon";

const StudentSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  return (
    <nav className="hidden lg:flex p-8 gap-8 flex-col items-start w-full max-w-[280px] dashboard-sizing border-r border-border overflow-scroll">
      <p className="text-lead">Student Dashboard</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          <p>Platform</p>
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/student/schedule">
              <Button
                className="sidebar-button"
                variant={lastSegment == "schedule" ? "default" : "outline"}
                size="sm"
              >
                <ScheduleIcon /> Schedule
              </Button>
            </Link>
            <Link href="/dashboard/student/classes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "classes" ? "default" : "outline"}
                size="sm"
              >
                <ClassIcon /> Classes
              </Button>
            </Link>
            <Link href="/dashboard/student/assignments">
              <Button
                className="sidebar-button"
                variant={lastSegment == "assignments" ? "default" : "outline"}
                size="sm"
              >
                <AssignmentIcon /> Assignments
              </Button>
            </Link>
            <Link href="/dashboard/student/meetings">
              <Button
                className="sidebar-button"
                variant={lastSegment == "meetings" ? "default" : "outline"}
                size="sm"
              >
                <MeetingIcon /> Meetings
              </Button>
            </Link>
            <Link href="/dashboard/student/quizzes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "quizzes" ? "default" : "outline"}
                size="sm"
              >
                <QuizIcon /> Quizzes
              </Button>
            </Link>
            <Link href="/dashboard/student/materials">
              <Button
                className="sidebar-button"
                variant={lastSegment == "materials" ? "default" : "outline"}
                size="sm"
              >
                <MaterialIcon /> Materials
              </Button>
            </Link>
            <Link href="/dashboard/student/leaderboard">
              <Button
                className="sidebar-button"
                variant={lastSegment == "leaderboard" ? "default" : "outline"}
                size="sm"
              >
                <LeaderboardIcon /> Leaderboard
              </Button>
            </Link>
            <Link href="/dashboard/student/certificates">
              <Button
                className="sidebar-button"
                variant={lastSegment == "certificates" ? "default" : "outline"}
                size="sm"
              >
                <CertificateIcon /> My Certificates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StudentSidebar;
