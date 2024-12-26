import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ArrowLinkProps {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
  href: string;
}

const ArrowLink = ({
  children,
  variant = "default",
  className,
  href,
}: ArrowLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group",
        buttonVariants({ variant, size: "sm" }),
        className
      )}
    >
      {children}
      <ChevronRight
        size={16}
        className="group-hover:translate-x-1 transition-transform"
      />
    </Link>
  );
};

export default ArrowLink;
