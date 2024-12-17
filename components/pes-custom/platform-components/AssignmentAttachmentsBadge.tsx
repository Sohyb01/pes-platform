import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const AssignmentAttachmentsBadge = ({
  assignment,
}: {
  assignment: TFormSchemaAddAssignment;
}) => {
  return assignment.assignment_attachment ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="w-fit py-2 px-4 border-secondary/50 hover:border-secondary duration-100 border-[1px] rounded-[0.5rem] text-detail cursor-pointer">
          Attachments 📂
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-60 text-subtle flex flex-col gap-2">
        {assignment.assignment_attachment.map(
          (attachment: { name: string; size: number }, idx: number) => {
            return (
              <Link
                key={idx}
                href="#"
                className={`flex items-center w-full gap-2 !justify-start ${buttonVariants(
                  { variant: "outline", size: "sm" }
                )}`}
              >
                {attachment.name} 📁
                <DownloadIcon className="ml-auto" size={16} />
              </Link>
            );
          }
        )}
        {assignment.assignment_attachment.length > 1 && (
          <>
            <Separator className="my-1" />
            <Link
              href="#"
              className={`flex items-center w-full gap-2 ${buttonVariants({
                variant: "outline",
                size: "sm",
              })}`}
            >
              Download all ({assignment.assignment_attachment.length})
            </Link>
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  ) : (
    <div className="w-fit focus:outline-none flex gap-2 items-center stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade opacity-50">
      No attachments
    </div>
  );
};

export default AssignmentAttachmentsBadge;
