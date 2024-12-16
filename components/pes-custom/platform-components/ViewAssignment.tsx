import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Button, buttonVariants } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UploadIcon } from "@/components/pes-custom/icons/UploadIcon";

const ViewAssignment = ({
  assignment,
}: {
  assignment: TFormSchemaAddAssignment;
}) => {
  return (
    <div className="flex-col max-w-screen-md">
      <div className="text-h3">
        Robotics class B assignment
        <span className="text-muted-foreground ml-4">
          {" Due " +
            assignment.assignment_duedate.getUTCDate() +
            "/" +
            (assignment.assignment_duedate.getMonth() + 1)}
        </span>
      </div>
      <div className="text-muted-foreground mt-8">Description</div>
      <div>{assignment.assignment_description}</div>
      <div className="grid grid-cols-2 gap-4 mt-8 mb-2">
        <div>
          <div className="text-muted-foreground mb-2">Attachments</div>
          <div className="flex justify-between items-center">
            {assignment.assignment_attachment ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <BadgeLink href="#" className="w-fit">
                    Attachments 📂
                  </BadgeLink>
                </HoverCardTrigger>
                <HoverCardContent className="w-60 text-subtle flex flex-col gap-2">
                  {assignment.assignment_attachment.map(
                    (
                      attachment: { name: string; size: number },
                      idx: number
                    ) => {
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
                        className={`flex items-center w-full gap-2 ${buttonVariants(
                          { variant: "outline", size: "sm" }
                        )}`}
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
            )}
          </div>
        </div>
        <div className="text-muted-foreground">ENG. Ahmed Reda 👨‍🏫</div>
      </div>
      <Button variant="default" size="sm" className="w-fit mt-8">
        <UploadIcon />
        Submit solution
      </Button>
    </div>
  );
};

export default ViewAssignment;
