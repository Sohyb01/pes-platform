"use client";

import React from "react";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { SchedulesIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Gauge, Home, Phone, Trophy } from "lucide-react";

export const PARENT_SIDE_BAR_ITEMS = [
  {
    title: "Home",
    url: "home",
    icon: Home,
  },
  {
    title: "Assignments",
    url: "assignments",
    icon: AssignmentIcon,
  },
  {
    title: "Quizzes",
    url: "quizzes",
    icon: QuizIcon,
  },
  {
    title: "Schedule",
    url: "schedule",
    icon: SchedulesIcon,
  },
  {
    title: "Performance Insights",
    url: "performance-insights",
    icon: Gauge,
  },
  {
    title: "Achievements",
    url: "achievements",
    icon: Trophy,
  },
  {
    title: "Book a Call",
    url: "book-a-call",
    icon: Phone,
  },
];

const InstructorSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean).pop();

  return (
    <nav className="bg-background hidden lg:flex p-8 gap-8 flex-col items-start w-full max-w-[280px] dashboard-sizing border-r border-border overflow-scroll">
      <p className="text-lead">Parent Dashboard</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          {/* Links */}
          <div className="sidebar-links-container">
            {PARENT_SIDE_BAR_ITEMS.map((item) => (
              <Link key={item.title} href={`/dashboard/parent/${item.url}`}>
                <Button
                  className="sidebar-button"
                  variant={lastSegment == item.url ? "default" : "outline"}
                  size="sm"
                >
                  <item.icon size={16} /> {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InstructorSidebar;
