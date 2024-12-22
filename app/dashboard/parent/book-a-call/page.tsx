import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PersonIcon } from "@/components/pes-custom/icons/PersonIcon";
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
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";

const SESSION_TYPES = [
  {
    type: "Quick Call",
    description:
      "Perfect for quick questions, homework help, or concept checks. Get immediate assistance from an available instructor.",
    duration: "15 mins",
    url: "book-a-call/quick-call",
  },
];

import React from "react";

const BookACallPage = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <div className="space-y-1">
        <h2 className="text-h2 pb-4">Book a Call 📱</h2>
        <p className="text-muted-foreground">
          Get help from our expert instructors through quick calls or scheduled
          sessions.
        </p>
      </div>
      <Tabs defaultValue="Book a Session">
        <TabsList className="bg-transparent flex gap-4 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Book a Session"
          >
            Book a Session
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="My Sessions"
          >
            My Sessions
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="Book a Session"
          className="flex flex-wrap gap-8 pb-4"
        >
          {SESSION_TYPES.map((session, idx) => (
            <Link
              key={idx}
              href={session.url}
              className="w-full min-w-[300px] max-w-[480px]"
            >
              <M_Card
                variants={VariantSlideInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.05 }} // Custom delay for each item
                className="bg-background border-primary/50 hover:border-primary duration-100 rounded-[1rem]"
              >
                <CardHeader>
                  <CardTitle className="text-h3">{session.type}</CardTitle>
                  <p className="text-muted-foreground">{session.duration}</p>
                </CardHeader>
                <CardContent>{session.description}</CardContent>
              </M_Card>
            </Link>
          ))}
        </TabsContent>
        <TabsContent value="My Sessions" className="flex flex-wrap gap-8 pb-4">
          {exampleScheduleEvents.map((event, idx) => {
            return (
              <M_Card
                key={idx}
                variants={VariantSlideInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.05 }} // Custom delay for each item
                className="bg-background rounded-[1rem] w-full min-w-[300px] max-w-[480px]"
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
                          No, Don&apos;t cancel
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
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BookACallPage;
