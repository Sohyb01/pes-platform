import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { exampleAssignments } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { Calendar, DownloadIcon, Eye, TriangleAlert } from "lucide-react";
import Link from "next/link";

const getCourseAssignmnets = async () => {
  return exampleAssignments;
};

const PendingAssignments = async () => {
  const assignments = await getCourseAssignmnets();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {assignments.map((assignment, idx) => {
        return (
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            key={idx}
            className="bg-background w-full"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-h3">Assignment {idx + 1}</span>
                {idx % 2 !== 0 && (
                  <Badge variant="outline" className="flex items-center gap-2">
                    <Eye size={16} />
                    <span className="text-nowrap">Under Review</span>
                  </Badge>
                )}
              </CardTitle>
              <Link href="#">
                <span className="max-w-[12ch] overflow-hidden text-subtle text-muted-foreground">
                  ENG. Ahmed Reda 👨‍🏫
                  {/* {assignment.sent_by} */}
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
                          key={idx}
                          href="#"
                          className={`flex items-center w-full gap-2 ${buttonVariants(
                            { variant: "outline", size: "sm" }
                          )}`}
                        >
                          Download all (
                          {assignment.assignment_attachment.length})
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
              <div className="flex gap-4">
                <Badge className="flex items-center gap-2">
                  <Calendar size={16} />
                  Assigned 1/30
                </Badge>
                {idx % 2 === 0 && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <TriangleAlert size={16} />
                    Due 2 days
                  </Badge>
                )}
              </div>
            </CardContent>
          </M_Card>
        );
      })}
    </div>
  );
};
export default PendingAssignments;