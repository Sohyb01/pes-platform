"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const StudentSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];
  return (
    <nav className="hidden lg:flex rounded-[1rem] p-4 md:p-6 gap-8 flex-col items-start w-full max-w-[280px] h-full bg-background">
      <p className="text-h3">Hello, Omar!</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/student/home">
              <Button
                className="sidebar-button"
                variant={lastSegment == "home" ? "default" : "ghost"}
                size="lg"
              >
                🏠 Home
              </Button>
            </Link>
            <Link href="/dashboard/student/schedule">
              <Button
                className="sidebar-button"
                variant={lastSegment == "schedule" ? "default" : "ghost"}
                size="lg"
              >
                📆 Schedule
              </Button>
            </Link>
            <Link href="/dashboard/student/classes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "classes" ? "default" : "ghost"}
                size="lg"
              >
                📚 Classes
              </Button>
            </Link>
            <Link href="/dashboard/student/assignments">
              <Button
                className="sidebar-button"
                variant={lastSegment == "assignments" ? "default" : "ghost"}
                size="lg"
              >
                ⏰ Assignments
              </Button>
            </Link>
            <Link href="/dashboard/student/quizzes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "quizzes" ? "default" : "ghost"}
                size="lg"
              >
                💯 Quizzes
              </Button>
            </Link>
            <Link href="/dashboard/student/materials">
              <Button
                className="sidebar-button"
                variant={lastSegment == "materials" ? "default" : "ghost"}
                size="lg"
              >
                🧊 Materials
              </Button>
            </Link>
            <Link href="/dashboard/student/leaderboard">
              <Button
                className="sidebar-button"
                variant={lastSegment == "leaderboard" ? "default" : "ghost"}
                size="lg"
              >
                🏅 Leaderboard
              </Button>
            </Link>
            <Link href="/dashboard/student/certificates">
              <Button
                className="sidebar-button"
                variant={lastSegment == "certificates" ? "default" : "ghost"}
                size="lg"
              >
                📜 My Certificates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StudentSidebar;
