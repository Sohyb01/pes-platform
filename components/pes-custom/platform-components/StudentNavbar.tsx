"use client";

import React from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Search } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { UserNav } from "./UserNav";

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
              <div className="sidebar-groups-container">
                {/* Platform Group Title & Links */}
                <div className="sidebar-group">
                  {/* <p>Platform</p> */}
                  {/* Links */}
                  <div className="sidebar-links-container">
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/home"
                    >
                      <Button
                        className="sidebar-button"
                        variant={lastSegment == "home" ? "default" : "ghost"}
                        size="lg"
                      >
                        🏠 Home
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/schedule"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "schedule" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        📆 Schedule
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/classes"
                    >
                      <Button
                        className="sidebar-button"
                        variant={lastSegment == "classes" ? "default" : "ghost"}
                        size="lg"
                      >
                        📚 Classes
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/assignments"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "assignments" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        ⏰ Assignments
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/quizzes"
                    >
                      <Button
                        className="sidebar-button"
                        variant={lastSegment == "quizzes" ? "default" : "ghost"}
                        size="lg"
                      >
                        💯 Quizzes
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/materials"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "materials" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        🧊 Materials
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/leaderboard"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "leaderboard" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        🏅 Leaderboard
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/student/certificates"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "certificates" ? "default" : "ghost"
                        }
                        size="lg"
                      >
                        📜 My Certificates
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* Searchbar */}
          <Button
            className="gap-2 text-muted-foreground w-[160px] justify-start"
            variant={"outline"}
            onClick={() => setSearchOpen((searchOpen) => !searchOpen)}
          >
            <Search size={16} />
            Search...
          </Button>
        </div>
        {/* Search Dialog */}
        <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        {/* Avatar */}
        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <UserNav />
      </div>
    </nav>
  );
};

export default StudentNavbar;
