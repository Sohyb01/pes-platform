"use client";

import React from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Home, Phone, Search } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { QuizIcon } from "../icons/QuizIcon";
import { AssignmentIcon } from "../icons/AssignmentIcon";
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
import MessagesTab from "./MessagesTab";
import NotificationsTab from "./NotificationsTab";
import { ScheduleIcon } from "../icons/ScheduleIcon";

const InstructorNavbar = () => {
  // Search functionality
  const [open, setOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Get the current pathname
  const pathname = usePathname();

  // Split the pathname and get the last segment
  const lastSegment = pathname.split("/").filter(Boolean).pop();

  return (
    <nav className="nav">
      <div className="nav-internal">
        <div className="flex gap-4">
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
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/parent/home"
                    >
                      <Button
                        className="sidebar-button"
                        variant={lastSegment == "home" ? "default" : "outline"}
                      >
                        <Home size={16} /> Home
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/parent/assignments"
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
                      href="/dashboard/parent/schedule"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "schedule" ? "default" : "outline"
                        }
                      >
                        <ScheduleIcon /> Schedule
                      </Button>
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/dashboard/parent/quizzes"
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
                      href="/dashboard/parent/book-a-cool"
                    >
                      <Button
                        className="sidebar-button"
                        variant={
                          lastSegment == "book-a-call" ? "default" : "outline"
                        }
                      >
                        <Phone size={16} /> Book a call
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* Searchbar */}
          <Button
            className="hidden md:flex gap-2 text-muted-foreground w-[160px] justify-start"
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
        <div className="flex gap-4">
          {/* Messages */}
          <MessagesTab />
          {/* Notifications */}
          <NotificationsTab />
          {/* User button */}
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default InstructorNavbar;
