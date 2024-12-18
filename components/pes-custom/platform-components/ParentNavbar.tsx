/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserNav } from "./UserNav";
import NotificationsTab from "./NotificationsTab";
import { PARENT_SIDE_BAR_ITEMS } from "./ParentSidebar";
import PESLogo from "@/components/pes-custom/PESLogo";

const ParentNavbar = () => {
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
          {/* Sheet */}
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
              <p className="text-lead">Instructor Dashboard</p>
              {/* All Platform Tab Links */}
              <div className="sidebar-groups-container">
                {/* Platform Tab Title & Links */}
                <div className="sidebar-group">
                  {/* Links */}
                  <div className="sidebar-links-container">
                    {PARENT_SIDE_BAR_ITEMS.map((item) => (
                      <Link
                        key={item.title}
                        href={`/dashboard/parent/${item.url}`}
                      >
                        <Button
                          className="sidebar-button"
                          variant={
                            lastSegment == item.url ? "default" : "outline"
                          }
                          size="sm"
                        >
                          <item.icon size={16} /> {item.title}
                        </Button>
                      </Link>
                    ))}
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

export default ParentNavbar;
