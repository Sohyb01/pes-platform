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

const PESStudentAssignmentCard = ({
  assignment,
}: {
  assignment: TFormSchemaAddAssignment;
}) => {
  return (
    <M_Card
      variants={VariantSlideInUp}
      initial="initial"
      animate="animate"
      className="bg-background w-full rounded-[1rem] md:min-w-[300px] max-w-[480px]"
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-h4">{assignment.name}</span>
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
            assignment.status !== "missed" && (
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

        <div className="flex gap-2 gap-y-1">
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
      <CardFooter className="mt-auto flex gap-2">
        {/* Download submission */}
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
        {/* Submit */}
        {assignment.assignment_duedate >= new Date() && (
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
                  buttonVariants({ variant: "outline", size: "sm" }),
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
  );
};

// <M_Card
// variants={VariantSlideInUp}
// initial="initial"
// animate="animate"
// transition={{ delay: idx * 0.05 }} // Custom delay for each item
// key={idx}
// className="w-full"
// >
// <CardHeader>
//     <CardTitle className="flex justify-between">
//     {assignment.name}
//     </CardTitle>
//     <p className="text-muted-foreground h-12 line-clamp-2">
//     {assignment.assignment_description}
//     </p>
// </CardHeader>
// <CardContent className="flex flex-col gap-4">
//     <div className="flex lg:flex-col lg:items-start items-center justify-between gap-4">
//     <div className="w-full grid grid-cols-2 gap-4 gap-y-2 text-muted-foreground stroke-muted-foreground">
//         <p className="flex items-center gap-2">
//         <ClassIcon />
//         {assignment.class_id}
//         </p>
//         <p className="flex items-center gap-2">
//         <Calendar size={16} />
//         <span>
//             {format(assignment.assignment_duedate, "dd-LL-y")}
//         </span>
//         </p>
//         <p className="flex items-center gap-2">
//         <Clock size={16} />
//         <span>
//             {format(assignment.assignment_duedate, "h:mm bb")}
//         </span>
//         </p>
//     </div>
//     {assignment.assignment_attachment ? (
//         <HoverCard>
//         <HoverCardTrigger asChild>
//             <BadgeLink href="#" className="w-fit">
//             Attachments 📂
//             </BadgeLink>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-60 text-subtle flex flex-col gap-2">
//             {assignment.assignment_attachment.map(
//             (
//                 assignment_attachment: {
//                 name: string;
//                 size: number;
//                 },
//                 idx: number
//             ) => {
//                 return (
//                 <Link
//                     key={idx}
//                     href="#"
//                     className={`flex items-center w-full gap-2 !justify-start ${buttonVariants(
//                     {
//                         variant: "outline",
//                         size: "sm",
//                     }
//                     )}`}
//                 >
//                     {assignment_attachment.name} 📁
//                     <DownloadIcon
//                     className="ml-auto"
//                     size={16}
//                     />
//                 </Link>
//                 );
//             }
//             )}
//             {assignment.assignment_attachment.length > 1 && (
//             <>
//                 <Separator className="my-1" />
//                 <Link
//                 key={idx}
//                 href="#"
//                 className={`flex items-center w-full gap-2 ${buttonVariants(
//                     {
//                     variant: "outline",
//                     size: "sm",
//                     }
//                 )}`}
//                 >
//                 Download all (
//                 {assignment.assignment_attachment.length})
//                 </Link>
//             </>
//             )}
//         </HoverCardContent>
//         </HoverCard>
//     ) : (
//         <div className="w-fit focus:outline-none flex gap-2 items-center stroke-foreground rounded-[3px] border p-2 text-badge font-semibold transition-colors border-border bg-shade opacity-50">
//         No attachments
//         </div>
//     )}
//     </div>
// </CardContent>
// <CardFooter className="mt-auto">
//     <Link
//     href={`assignments/${assignment.assignment_id}`}
//     className={cn(
//         buttonVariants({ variant: "outline", size: "sm" }),
//         "w-full"
//     )}
//     >
//     <PenIcon size={16} />
//     View / Edit
//     </Link>
// </CardFooter>
// </M_Card>
export default PESStudentAssignmentCard;
