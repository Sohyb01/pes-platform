import { buttonVariants } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getNameById } from "@/lib/getNameById";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import { cn } from "@/lib/utils";
import { Calendar, Clock, PenIcon } from "lucide-react";
import React from "react";
import { ClassIcon } from "../icons/ClassIcon";
import { M_Card } from "../motion/Shadcn-Motion-Components";
import AssignmentAttachmentsBadge from "./AttachmentsBadge";
import { format } from "date-fns";
import Link from "next/link";

const PESInstructorAssignmentCard = ({
  assignment,
}: {
  assignment: TFormSchemaAddAssignment;
}) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="w-full min-w-[300px] lg:min-w-[480px] md:max-w-[480px]"
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          {assignment.name}
        </CardTitle>
        <p className="text-muted-foreground h-12 line-clamp-2">
          {assignment.assignment_description}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex lg:flex-col lg:items-start items-center justify-between gap-4">
          <div className="w-full grid grid-cols-2 gap-4 gap-y-2 text-muted-foreground stroke-muted-foreground">
            <p className="flex items-center gap-2 col-span-2">
              <ClassIcon />
              {getNameById(assignment.class_id, "Class")}
            </p>
            <p className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{format(assignment.assignment_duedate, "dd-LL-y")}</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} />
              <span>{format(assignment.assignment_duedate, "h:mm bb")}</span>
            </p>
          </div>
          <AssignmentAttachmentsBadge
            attachment={assignment.assignment_attachment}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link
          href={`assignments/${assignment.assignment_id}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full"
          )}
        >
          <PenIcon size={16} />
          View / Edit
        </Link>
      </CardFooter>
    </M_Card>
  );
};

export default PESInstructorAssignmentCard;
