import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const SessionTypeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-2">
      <Link
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "self-start hover:bg-shade"
        )}
        href="/dashboard/parent/book-a-call"
      >
        <ArrowLeft size={16} />
        Back
      </Link>
      {children}
    </div>
  );
};

export default SessionTypeLayout;
