"use client";

import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import React from "react";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { VariantSlideInUp } from "@/lib/motion-constants";
import {
  Calendar,
  ChartNoAxesColumn,
  CheckCircle,
  Eye,
  TriangleAlert,
  UploadIcon,
} from "lucide-react";
import Link from "next/link";
import AssignmentAttachmentsBadge from "./AttachmentsBadge";
import { getNameById } from "@/lib/getNameById";
import { XMarkIcon } from "../icons/XMarkIcon";
import { DownloadIcon } from "../icons/DownloadIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";

const PESStudentAssignmentCard = ({
  assignment,
}: {
  assignment: TFormSchemaAddAssignment;
}) => {
  const pathname = usePathname();
  console.log(pathname.split("/"));
  return (
    <AnimatePresence>
      <M_Card
        variants={VariantSlideInUp}
        initial="initial"
        animate="animate"
        className="w-full rounded-[1rem] md:min-w-[300px] lg:min-w-[480px] max-w-[480px]"
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h4 className="text-h4">{assignment.name}</h4>
            {assignment.status !== "missed" && assignment.student_grade ? (
              <Badge
                className={`flex items-center gap-2 bg-destructive-foreground ${
                  assignment.student_grade >= assignment.max_grade / 2
                    ? `bg-success hover:bg-success`
                    : `bg-destructive hover:bg-destructive`
                }`}
              >
                <ChartNoAxesColumn size={16} />
                <span className="text-nowrap">
                  Grade: {assignment.student_grade}/{assignment.max_grade}
                </span>
              </Badge>
            ) : (
              assignment.status !== "missed" &&
              assignment.status !== "due" && (
                <Badge variant="outline" className="flex items-center gap-2">
                  <Eye size={16} />
                  <span className="text-nowrap">Awaiting Review</span>
                </Badge>
              )
            )}
          </CardTitle>
          <Link href="#">
            <span className="max-w-[12ch] overflow-hidden text-subtle text-muted-foreground">
              {getNameById(assignment.sent_by, "Employee")}
            </span>
          </Link>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-subtle">
          <div>
            <p>Task Description</p>
            <p className="text-muted-foreground line-clamp-2 h-[40px]">
              {assignment.assignment_description || "No description"}
            </p>
          </div>

          <AssignmentAttachmentsBadge
            attachment={assignment.assignment_attachment}
          />

          <div className="flex flex-wrap gap-2 gap-y-1">
            <Badge className="flex items-center gap-2">
              <Calendar size={16} />
              Due {format(assignment.assignment_duedate, "MMMM dd, hh:mm a")}
            </Badge>
            {assignment.status == "due" && (
              <Badge variant="secondary" className="flex items-center gap-2">
                <TriangleAlert size={16} />2 days left
              </Badge>
            )}
            {(assignment.status == "submitted" ||
              assignment.status == "reviewed") && (
              <Badge className="bg-green-500 hover:bg-green-500 flex items-center gap-2">
                <CheckCircle size={16} />
                Submitted
              </Badge>
            )}
            {assignment.status == "missed" && (
              <Badge className="flex items-center gap-2 bg-destructive hover:bg-destructive w-fit">
                <XMarkIcon className="stroke-destructive-foreground" />
                Missed
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-auto flex flex-col md:flex-row gap-2">
          {/* Download submission */}
          {assignment.status !== "due" && assignment.status !== "missed" && (
            <Link
              href={`#`}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full"
              )}
            >
              <DownloadIcon />
              Download Submission
            </Link>
          )}
          {/* Submit */}
          {assignment.assignment_duedate >= new Date() &&
            pathname.split("/").filter(Boolean)[1] == "student" && (
              <>
                {assignment.status == "due" && (
                  <Link
                    href={`#`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "w-full"
                    )}
                  >
                    <UploadIcon size={16} />
                    Submit
                  </Link>
                )}
                {assignment.status == "submitted" && (
                  <Link
                    href={`#`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "w-full"
                    )}
                  >
                    <UploadIcon size={16} />
                    Re-submit
                  </Link>
                )}
              </>
            )}
        </CardFooter>
      </M_Card>
    </AnimatePresence>
  );
};

export default PESStudentAssignmentCard;
