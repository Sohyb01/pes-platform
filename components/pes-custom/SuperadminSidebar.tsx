"use client";

import React from "react";
import { ActivityLogIcon } from "@/components/pes-custom/icons/ActivityLogIcon";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { CertificateIcon } from "@/components/pes-custom/icons/CertificateIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { FinancesIcon } from "@/components/pes-custom/icons/FinancesIcon";
import { FranchiseIcon } from "@/components/pes-custom/icons/FranchiseIcon";
import { InfoCircleIcon } from "@/components/pes-custom/icons/InfoCircleIcon";
import { MaterialIcon } from "@/components/pes-custom/icons/MaterialIcon";
import { MeetingIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { PartnershipIcon } from "@/components/pes-custom/icons/PartnershipIcon";
import { ProgramIcon } from "@/components/pes-custom/icons/ProgramIcon";
import { ProjectIcon } from "@/components/pes-custom/icons/ProjectIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { ReviewIcon } from "@/components/pes-custom/icons/ReviewIcon";
import { StudentIcon } from "@/components/pes-custom/icons/StudentIcon";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SuperadminSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean).pop();
  return (
    <nav className="hidden lg:flex p-8 gap-8 flex-col items-start w-full max-w-[280px] dashboard-sizing border-r border-border overflow-scroll">
      <p className="text-lead">Superadmin Dashboard</p>
      {/* All Platform Link Groups */}
      <div className="sidebar-groups-container">
        {/* Company Group  Title &Links */}
        <div className="sidebar-group">
          <p>Company</p>
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/superadmin/finances">
              <Button
                className="sidebar-button"
                variant={lastSegment == "finances" ? "default" : "outline"}
                size="sm"
              >
                <FinancesIcon /> Finances
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/franchises">
              <Button
                className="sidebar-button"
                variant={lastSegment == "franchises" ? "default" : "outline"}
                size="sm"
              >
                <FranchiseIcon /> Franchises
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/partnerships">
              <Button
                className="sidebar-button"
                variant={lastSegment == "partnerships" ? "default" : "outline"}
                size="sm"
              >
                <PartnershipIcon /> Partnerships
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/company-info">
              <Button
                className="sidebar-button"
                variant={lastSegment == "company-info" ? "default" : "outline"}
                size="sm"
              >
                <InfoCircleIcon /> Company Info
              </Button>
            </Link>
          </div>
        </div>
        {/* Platform Group Title & Links */}
        <div className="sidebar-group">
          <p>Platform</p>
          {/* Links */}
          <div className="sidebar-links-container">
            <Link href="/dashboard/superadmin/employees">
              <Button
                className="sidebar-button"
                variant={lastSegment == "employees" ? "default" : "outline"}
                size="sm"
              >
                <EmployeeIcon /> Employees
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/students">
              <Button
                className="sidebar-button"
                variant={lastSegment == "students" ? "default" : "outline"}
                size="sm"
              >
                <StudentIcon /> Students
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/classes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "classes" ? "default" : "outline"}
                size="sm"
              >
                <ClassIcon /> Classes
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/assignments">
              <Button
                className="sidebar-button"
                variant={lastSegment == "assignments" ? "default" : "outline"}
                size="sm"
              >
                <AssignmentIcon /> Assignments
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/meetings">
              <Button
                className="sidebar-button"
                variant={lastSegment == "meetings" ? "default" : "outline"}
                size="sm"
              >
                <MeetingIcon /> Meetings
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/quizzes">
              <Button
                className="sidebar-button"
                variant={lastSegment == "quizzes" ? "default" : "outline"}
                size="sm"
              >
                <QuizIcon /> Quizzes
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/materials">
              <Button
                className="sidebar-button"
                variant={lastSegment == "materials" ? "default" : "outline"}
                size="sm"
              >
                <MaterialIcon /> Materials
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/certificates">
              <Button
                className="sidebar-button"
                variant={lastSegment == "certificates" ? "default" : "outline"}
                size="sm"
              >
                <CertificateIcon /> Certificates
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/reviews">
              <Button
                className="sidebar-button"
                variant={lastSegment == "reviews" ? "default" : "outline"}
                size="sm"
              >
                <ReviewIcon /> Reviews
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/projects">
              <Button
                className="sidebar-button"
                variant={lastSegment == "projects" ? "default" : "outline"}
                size="sm"
              >
                <ProjectIcon /> Projects
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/programs">
              <Button
                className="sidebar-button"
                variant={lastSegment == "programs" ? "default" : "outline"}
                size="sm"
              >
                <ProgramIcon /> Programs
              </Button>
            </Link>
            <Link href="/dashboard/superadmin/activity-log">
              <Button
                className="sidebar-button"
                variant={lastSegment == "activity-log" ? "default" : "outline"}
                size="sm"
              >
                <ActivityLogIcon /> Activity Log
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SuperadminSidebar;
