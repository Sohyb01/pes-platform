/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Search } from "lucide-react";
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
import MessagesTab from "./MessagesTab";
import NotificationsTab from "./NotificationsTab";
import { PARENT_SIDE_BAR_ITEMS } from "./ParentSidebar";
import PESLogo from "@/components/pes-custom/PESLogo";

const ParentNavbar = () => {
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
          {/* Searchbar */}
          {/* <Button
            className="hidden md:flex gap-2 text-muted-foreground w-[160px] justify-start"
            variant={"outline"}
            onClick={() => setSearchOpen((searchOpen) => !searchOpen)}
          >
            <Search size={16} />
            Search...
          </Button> */}
        </div>
        {/* Search Dialog */}
        {/* <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
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
        </CommandDialog> */}
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

export default ParentNavbar;
