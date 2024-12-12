"use client";

import React from "react";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { SchedulesIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Phone } from "lucide-react";

const InstructorSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];
  return (
    <nav className="bg-background hidden lg:flex p-8 gap-8 flex-col items-start w-full max-w-[280px] dashboard-sizing border-r border-border overflow-scroll">
      <p className="text-lead">Parent Dashboard</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/parent/home">
              <Button
                className="sidebar-button"
                variant={lastSegment == "home" ? "default" : "outline"}
                size="sm"
              >
                <Home size={16} /> Home
              </Button>
            </Link>
            <Link href="/dashboard/parent/assignments">
              <Button
                className="sidebar-button"
                variant={lastSegment == "assignments" ? "default" : "outline"}
                size="sm"
              >
                <AssignmentIcon /> Assignments
              </Button>
            </Link>
            <Link href="/dashboard/parent/schedule">
              <Button
                className="sidebar-button"
                variant={lastSegment == "schedule" ? "default" : "outline"}
                size="sm"
              >
                <SchedulesIcon /> Schedule
              </Button>
            </Link>
            <Link href="/dashboard/parent/quizzes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "quizzes" ? "default" : "outline"}
                size="sm"
              >
                <QuizIcon /> Quizzes
              </Button>
            </Link>
            <Link href="/dashboard/parent/book-a-call">
              <Button
                className="sidebar-button"
                variant={lastSegment == "book-a-call" ? "default" : "outline"}
                size="sm"
              >
                <Phone size={16} /> Book a call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InstructorSidebar;
