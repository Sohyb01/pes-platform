/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { EmployeeIcon } from "../icons/EmployeeIcon";
import { CertificateIcon } from "../icons/CertificateIcon";
import { ClassIcon } from "../icons/ClassIcon";
import { MaterialIcon } from "../icons/MaterialIcon";
import { ProgramIcon } from "../icons/ProgramIcon";
import { ProjectIcon } from "../icons/ProjectIcon";
import { QuizIcon } from "../icons/QuizIcon";
import { ReviewIcon } from "../icons/ReviewIcon";
import { StudentIcon } from "../icons/StudentIcon";
import { AssignmentIcon } from "../icons/AssignmentIcon";
import { usePathname } from "next/navigation";
import { ActivityLogIcon } from "../icons/ActivityLogIcon";
import { PartnershipIcon } from "../icons/PartnershipIcon";
import { FranchiseIcon } from "../icons/FranchiseIcon";
import { FinancesIcon } from "../icons/FinancesIcon";

import { UserNav } from "./UserNav";
import { PersonIcon } from "../icons/PersonIcon";
import NotificationsTab from "./NotificationsTab";
import { ScheduleIcon } from "../icons/ScheduleIcon";
import PESLogo from "@/components/pes-custom/PESLogo";

const SuperadminNavbar = () => {
  // Search functionality
  const [open, setOpen] = React.useState(false);

  // Get the current pathname
  const pathname = usePathname();

  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];

  return (
    <nav className="nav">
      <div className="nav-internal">
        <div className="flex gap-4">
          <PESLogo />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`${buttonVariants({
                variant: "outline",
                size: "icon",
              })} lg:hidden`}
            >
              <AlignLeft size={16} className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="p-8 gap-8 flex flex-col items-start overflow-scroll lg:hidden"
            >
              <p className="text-lead">Superadmin Dashboard</p>
              {/* All Platform Tab Links */}
              <div className="sidebar-groups-container">
                {/* Platform Tab Title & Links */}
                {/* Company Tab  Title &Links */}
                <div className="sidebar-group">
                  <p>Company</p>
                  {/* Links */}
                  <div className="sidebar-links-container">
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/finances"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "finances" ? "default" : "outline"
                        }
                      >
                        <FinancesIcon /> Finances
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/franchises"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "franchises" ? "default" : "outline"
                        }
                      >
                        <FranchiseIcon /> Franchises
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/partnerships"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "partnerships" ? "default" : "outline"
                        }
                      >
                        <PartnershipIcon /> Partnerships
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="sidebar-group">
                  <p>Platform</p>
                  {/* Links */}
                  <div className="sidebar-links-container">
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/employees"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "employees" ? "default" : "outline"
                        }
                      >
                        <EmployeeIcon /> Employees
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/students"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "students" ? "default" : "outline"
                        }
                      >
                        <StudentIcon /> Students
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/parents"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "parents" ? "default" : "outline"
                        }
                      >
                        <PersonIcon /> Parents
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/classes"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "classes" ? "default" : "outline"
                        }
                      >
                        <ClassIcon /> Classes
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/assignments"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "assignments" ? "default" : "outline"
                        }
                      >
                        <AssignmentIcon /> Assignments
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/schedules"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "schedules" ? "default" : "outline"
                        }
                      >
                        <ScheduleIcon /> Schedules
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/quizzes"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "quizzes" ? "default" : "outline"
                        }
                      >
                        <QuizIcon /> Quizzes
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/materials"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "materials" ? "default" : "outline"
                        }
                      >
                        <MaterialIcon /> Materials
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/certificates"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "certificates" ? "default" : "outline"
                        }
                      >
                        <CertificateIcon /> Certificates
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/reviews"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "reviews" ? "default" : "outline"
                        }
                      >
                        <ReviewIcon /> Reviews
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/projects"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "projects" ? "default" : "outline"
                        }
                      >
                        <ProjectIcon /> Projects
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/programs"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "programs" ? "default" : "outline"
                        }
                      >
                        <ProgramIcon /> Programs
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/superadmin/activity-log"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "activity-log" ? "default" : "outline"
                        }
                      >
                        <ActivityLogIcon /> Activity Log
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-4">
          {/* Notifications */}
          <NotificationsTab />
          {/* User button */}
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default SuperadminNavbar;
