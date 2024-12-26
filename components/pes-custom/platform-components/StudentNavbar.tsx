/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Search, User } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserNav } from "./UserNav";
import PESLogo from "@/components/pes-custom/PESLogo";
import { STUDENT_SIDE_BAR_ITEMS } from "./StudentSidebar";

const NAVBAR_ITEMS = [{}];

const StudentNavbar = () => {
  // Search functionality
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Get the current pathname
  const pathname = usePathname();

  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean)[2];

  return (
    <nav className="nav">
      <div className="nav-internal">
        <div className="flex gap-4">
          {/* Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`${buttonVariants({
                variant: "ghost",
                size: "icon",
              })} lg:hidden`}
            >
              <AlignLeft size={16} className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="p-4 md:p-6 pt-20 w-[280px] gap-8 flex flex-col items-start overflow-scroll lg:hidden student-sidebar-bg bg-background text-foreground"
            >
              {/* <p className="text-lead">Student Dashboard</p> */}
              {/* All Platform Link Groups */}
              <div className="flex-1 justify-between sidebar-groups-container">
                {/* Platform Group Title & Links */}
                <div className="sidebar-group justify-between">
                  {/* Links */}
                  <div className="sidebar-links-container">
                    {STUDENT_SIDE_BAR_ITEMS.map((item) => (
                      <Link
                        key={item.title}
                        href={`/dashboard/student/${item.url}`}
                      >
                        <Button
                          className="sidebar-button"
                          variant={
                            lastSegment == item.url ? "default" : "ghost"
                          }
                          size="lg"
                        >
                          {item.icon} {item.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="sidebar-group">
                  <div className="sidebar-links-container">
                    <Link href={`/dashboard/student/portfolio`}>
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "portfolio" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        <User />
                        Portfolio
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <PESLogo />
        </div>

        <div className="flex gap-2">
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;
