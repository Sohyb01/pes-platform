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
        "w-fit max-w-[140px] overflow-hidden focus:outline-none flex gap-2 stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade text-foreground hover:opacity-80")
      }
      {...props}
    >
      {children}
    </Link>
  );
}

export { BadgeLink };
