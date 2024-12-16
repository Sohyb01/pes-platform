import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RequiredActionWidget = ({
  label,
  link,
}: {
  label: string;
  link: string;
}) => {
  return (
    <div className="rounded-[1rem] bg-background border-green-500/50 hover:border-green-500 border-[1px] p-4 flex gap-4 flex-col">
      {label}
      <Link
        href={link}
        className={`w-fit self-end gap-2 items-center bg-green-500 hover:bg-green-500/90 ${buttonVariants(
          {
            size: "sm",
            variant: "ghost",
          }
        )}`}
      >
        <ArrowRight size={16} />
        Join Exam
      </Link>
    </div>
  );
};

export default RequiredActionWidget;
