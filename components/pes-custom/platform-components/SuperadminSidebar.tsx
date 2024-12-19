"use client";

import React from "react";
import { ActivityLogIcon } from "@/components/pes-custom/icons/ActivityLogIcon";
import { AssignmentIcon } from "@/components/pes-custom/icons/AssignmentIcon";
import { CertificateIcon } from "@/components/pes-custom/icons/CertificateIcon";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { FinancesIcon } from "@/components/pes-custom/icons/FinancesIcon";
import { FranchiseIcon } from "@/components/pes-custom/icons/FranchiseIcon";
import { MaterialIcon } from "@/components/pes-custom/icons/MaterialIcon";
import { SchedulesIcon } from "@/components/pes-custom/icons/MeetingIcon";
import { PartnershipIcon } from "@/components/pes-custom/icons/PartnershipIcon";
import { ProgramIcon } from "@/components/pes-custom/icons/ProgramIcon";
import { ProjectIcon } from "@/components/pes-custom/icons/ProjectIcon";
import { QuizIcon } from "@/components/pes-custom/icons/QuizIcon";
import { ReviewIcon } from "@/components/pes-custom/icons/ReviewIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PersonIcon } from "../icons/PersonIcon";
import { StudentIcon } from "../icons/StudentIcon";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import {
  ChartSpline,
  ChevronRight,
  HandCoins,
  ReceiptText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SuperadminSidebar = () => {
  // Get the current pathname
  const pathname = usePathname();
  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];
  const lastSubSegment = pathname.split("/").filter(Boolean)[3];

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
            <Collapsible defaultOpen className="group/collapsible">
              <CollapsibleTrigger
                className={cn(
                  buttonVariants({
                    variant: lastSegment === "finances" ? "default" : "outline",
                    size: "sm",
                  }),
                  "group w-full justify-between"
                )}
              >
                <div className="flex gap-2 items-center">
                  <FinancesIcon /> Finances
                </div>
                <ChevronRight
                  className="group-data-[state=open]/collapsible:rotate-90 transition-transform"
                  size={16}
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-4 ml-4 mt-2 border-l border-muted p-2 ">
                  <Link href="/dashboard/superadmin/finances/overview">
                    <Button
                      className="sidebar-button"
                      variant={
                        lastSubSegment == "overview" ? "reversed" : "ghost"
                      }
                      size="sm"
                    >
                      <ChartSpline size={16} /> Overview
                    </Button>
                  </Link>
                  <Link href="/dashboard/superadmin/finances/bills">
                    <Button
                      className="sidebar-button"
                      variant={lastSubSegment == "bills" ? "reversed" : "ghost"}
                      size="sm"
                    >
                      <ReceiptText size={16} /> Bills
                    </Button>
                  </Link>
                  <Link href="/dashboard/superadmin/finances/transactions">
                    <Button
                      className="sidebar-button"
                      variant={
                        lastSubSegment == "transactions" ? "reversed" : "ghost"
                      }
                      size="sm"
                    >
                      <HandCoins size={16} /> Transactions
                    </Button>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
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
            <Link href="/dashboard/superadmin/parents">
              <Button
                className="sidebar-button"
                variant={lastSegment == "parents" ? "default" : "outline"}
                size="sm"
              >
                <PersonIcon /> Parents
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
            <Link href="/dashboard/superadmin/schedules">
              <Button
                className="sidebar-button"
                variant={lastSegment == "schedules" ? "default" : "outline"}
                size="sm"
              >
                <SchedulesIcon /> Schedules
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
