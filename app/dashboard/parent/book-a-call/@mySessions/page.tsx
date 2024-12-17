import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import ConfirmDialog from "@/components/pes-custom/platform-components/ConfirmDialog";
import { buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { cn } from "@/lib/utils";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

const MySessions = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <M_Card
        variants={VariantSlideInUp}
        initial="initial"
        animate="animate"
        // transition={{ delay: idx * 0.05 }} // Custom delay for each item
        className="bg-background"
      >
        <CardHeader>
          <CardTitle className="text-h3">Quick Call</CardTitle>
          <p className="text-muted-foreground">15 mins</p>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2">
          <p className="col-span-2 text-muted-foreground">Instructor Name</p>
          <div className="text-muted-foreground flex items-center gap-2">
            <Calendar size={16} /> 2024-12-30
          </div>
          <div className="text-muted-foreground flex items-center gap-2">
            <Clock size={16} /> 6:00 PM
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <ConfirmDialog
            body="This action cannot be undone. This will permanently cancle your
            session."
            action={async () => {
              "use server";
              return;
            }}
            toastMsg="Your session has been canceled successfully"
          />
          <Link
            href="book-a-call/sessionId"
            className={cn(buttonVariants({ size: "sm" }), "group flex-1")}
          >
            View Details{" "}
            <ChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </Link>
        </CardFooter>
      </M_Card>
    </div>
  );
};

export default MySessions;
