import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

function BadgeLink({
  href,
  className,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        (cn(className),
        "w-fit focus:outline-none flex gap-1 items-center stroke-foreground rounded-full border px-2.5 py-1.5 text-badge font-semibold transition-colors border-border bg-card text-foreground hover:opacity-80")
      }
      {...props}
    >
      {children}
    </Link>
  );
}

export { BadgeLink };
