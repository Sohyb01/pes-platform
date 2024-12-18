import { PersonIcon } from "@/components/pes-custom/icons/PersonIcon";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { exampleScheduleEvents } from "@/lib/data";
import { getNameById } from "@/lib/getNameById";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

const MySessions = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {exampleScheduleEvents.map((event, idx) => {
        return (
          <M_Card
            key={idx}
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            className="bg-background rounded-[1rem]"
          >
            <CardHeader>
              <CardTitle className="text-h3">{event.title}</CardTitle>
              <p className="text-muted-foreground">15 mins</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="text-muted-foreground flex items-center gap-2 pb-4 line-clamp-2 h-16">
                {event.description}
              </div>
              <div className="text-muted-foreground flex items-center gap-2 stroke-muted-foreground">
                <PersonIcon />
                {getNameById(event.scheduler_id, "Employee")}
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <Calendar size={16} /> {event.start}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4 ">
              <Link
                href="#"
                className={`${buttonVariants({
                  variant: "default",
                  size: "sm",
                })}`}
              >
                Join meeting
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="destructive">
                    Cancel
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. Your session will be
                      canceled.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      No, Don't cancel
                    </Button>
                    <Button variant="destructive" size="sm">
                      Yes, Cancel
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </M_Card>
        );
      })}
    </div>
  );
};

export default MySessions;
