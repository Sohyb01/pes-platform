"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Book,
  ClipboardPen,
  MessageSquare,
  NotepadText,
  SquareChartGantt,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CLASS_ITEMS = [
  {
    title: "Overview",
    url: "overview",
    icon: SquareChartGantt,
  },
  {
    title: "Chat",
    url: "chat",
    icon: MessageSquare,
  },
  {
    title: "Exams",
    url: "exams",
    icon: ClipboardPen,
  },
  {
    title: "Assignments",
    url: "assignments",
    icon: NotepadText,
  },
  {
    title: "Materials",
    url: "materials",
    icon: Book,
  },
];

const ClassNavMenu = ({ classId }: { classId: string }) => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean)[4];
  console.log(lastSegment);
  const [isMobile, setIsMobile] = useState(window && window.innerWidth <= 468);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window && window.innerWidth <= 468) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setIsMobile]);

  if (isMobile) {
    return (
      <div className="w-full h-12 bg-background shadow shadow-black/60 absolute bottom-0 left-0 z-20 flex items-center justify-center gap-4">
        {CLASS_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={`/dashboard/student/classes/${classId}/${item.url}`}
            className={cn(
              "",
              buttonVariants({
                variant: lastSegment === item.url ? "default" : "ghost",
                size: "sm",
              })
            )}
          >
            <item.icon size={24} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="border-b  border-muted-foreground/60 py-2">
      <div className="hidden md:flex gap-4">
        {CLASS_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={`/dashboard/student/classes/${classId}/${item.url}`}
            className={cn(
              lastSegment !== item.url && "text-muted-foreground",
              buttonVariants({
                variant: lastSegment === item.url ? "default" : "ghost",
                size: "sm",
              })
            )}
          >
            <item.icon size={16} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassNavMenu;
