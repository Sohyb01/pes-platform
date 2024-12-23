import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { exampleClasses, leaderboardData } from "@/lib/data";
import {
  ArrowRightCircle,
  CalendarFold,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import * as React from "react";
import Link from "next/link";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Leaderboard from "@/components/pes-custom/platform-components/Leaderboard";
import { TFormSchemaAddClass } from "@/lib/types-forms";
import RequiredActionWidget from "@/components/pes-custom/platform-components/RequiredActionWidget";
import ArrowLink from "@/components/pes-custom/platform-components/ArrowLink";
import Image from "next/image";
import { format } from "date-fns";

const MOTIVATIONAL_STATEMENTS = [
  "Every small step you take today brings you closer to the person you want to be tomorrow.",
  "Learning is the key to unlocking your dreams; invest in yourself today!",
  "The more you learn, the more you grow. Knowledge is the only treasure that grows when shared.",
  "Your future self will thank you for the hard work you put in today.",
  "Every expert was once a beginner. Keep going!",
  "The journey of a thousand miles begins with a single page of notes.",
  "Mistakes are proof that you're trying. Keep learning and growing.",
  "Success doesn’t come from what you do occasionally but what you do consistently.",
  "Your mind is like a muscle—the more you train it, the stronger it gets.",
  "You have the power to create your future, one study session at a time.",
];

const Home = () => {
  const randomMotivationalStatement =
    MOTIVATIONAL_STATEMENTS[
      Math.floor(Math.random() * MOTIVATIONAL_STATEMENTS.length)
    ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center rounded-[1rem] bg-gradient-to-r from-primary to-primary/50">
        <div className="flex-1 p-4">
          <p className="mb-4 flex items-center gap-2">
            <CalendarFold size={16} />
            {format(new Date(), "MMMM d, yyyy")}
          </p>
          <div>
            <h3 className="text-h2">Hello, Omar! 👋</h3>
            <p className="">{randomMotivationalStatement}</p>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden size-52">
          <div className="absolute right-32 bottom-0 size-52">
            <Image
              src="/stock/student.png"
              alt="Student"
              width={0}
              height={0}
              sizes="100vw"
              className="size-full object-cover"
            />
          </div>

          <div className="absolute bottom-10 right-10 size-32">
            <Image
              src="/stock/backpack.png"
              alt="Student"
              width={0}
              height={0}
              sizes="100vw"
              className="size-full object-cover"
            />
          </div>

          <div className="hidden lg:block absolute top-10 left-10 size-40">
            <Image
              src="/stock/scholarcap.png"
              alt="Student"
              width={0}
              height={0}
              sizes="100vw"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 lg:min-w-[340px] lg:max-w-[580px] grow h-fit">
          <p className="text-h3 pb-4">Schedule</p>
          <PESCalendar />
        </div>
        <div className="flex-1 lg:min-w-[300px] lg:max-w-[580px] grow h-fit flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-h3">Classes</h3>
            <ArrowLink href="classes">View All</ArrowLink>
          </div>
          {exampleClasses
            .splice(0, 1)
            .map((studentClass: TFormSchemaAddClass) => {
              return (
                <div
                  key={studentClass.id}
                  className="bg-background rounded-[1rem] flex flex-col text-p_ui overflow-hidden border-border border-[1px]"
                >
                  <div className="flex justify-between text-large px-6 pt-6">
                    {studentClass.class_name}
                  </div>
                  {/* Extra data */}
                  <div className="text-muted-foreground px-6 flex justify-between">
                    <span>Eng Ahmed Reda</span>
                  </div>
                  {/* Buttons */}
                  <div className="flex px-6 pt-4 gap-4 justify-end">
                    <Button className="gap-2" variant="outline" size="sm">
                      Assignments (1)
                      <ArrowRightCircle size={16} />
                    </Button>
                  </div>
                  {/* Progress & Dates */}
                  <div className="pt-6">
                    <div className="flex justify-between px-6 text-muted-foreground text-detail">
                      <span>
                        {" Started " +
                          studentClass.classbegindate.getUTCDate() +
                          "/" +
                          (studentClass.classbegindate.getMonth() + 1)}
                      </span>
                      <span>
                        {" Ends " +
                          studentClass.classenddate.getUTCDate() +
                          "/" +
                          (studentClass.classenddate.getMonth() + 1)}
                      </span>
                    </div>
                    <Progress
                      className="bg-muted mt-2 h-1"
                      value={Math.random() * 100}
                    />
                  </div>
                </div>
              );
            })}
          <Tabs
            defaultValue="Weekly"
            className="w-full border-border bg-background border-[1px] rounded-[1rem]"
          >
            <div className="text-h4 mb-4 pt-4 px-4">Leaderboard ⭐</div>
            <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start">
              <TabsTrigger className="tab-trigger ml-4" value="Weekly">
                Weekly
              </TabsTrigger>
              <TabsTrigger className="tab-trigger " value="Monthly">
                Monthly
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Weekly"
              className="px-4 pb-4 max-h-[300px] overflow-y-scroll"
            >
              <Leaderboard students={leaderboardData} variant="week" />
            </TabsContent>
            <TabsContent
              value="Monthly"
              className="px-4 pb-4 max-h-[300px] overflow-y-scroll"
            >
              <Leaderboard students={leaderboardData} variant="month" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1 grow h-fit flex flex-col lg:flex-col gap-4">
          {/* Alert widget (current action: exam, submit homework, etc) */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-h3">Next Event</h3>
              <ArrowLink href="schedule">View All</ArrowLink>
            </div>
            <RequiredActionWidget label="Final Exam: Robotics" link="#" />
          </div>
          <div className="flex-1 relative flex flex-col rounded-[1rem] bg-background border-border border-[1px]">
            <div className="px-4 pt-4">
              <div className="text-p_ui">Omar Mohamed</div>
              <span className="flex gap-1 text-muted-foreground text-subtle items-center">
                📍Alexandria, EG
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-4 pt-4 flex-wrap lg:flex-nowrap">
              {/* Certificates */}
              <Link
                href="achievments/certificates"
                className="relative bg-background lg:border-primary/50 duration-100 lg:hover:border-primary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
              >
                <span className="text-h3 lg:text-h2">5</span>
                <span className="text-detail">Certificates</span>
                <ShieldCheck className="p-2 size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/backgrounds/grain.jpg"
                    alt="card bg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="size-full object-cover"
                  />
                </div>
              </Link>
              {/* Completed tracks */}
              <Link
                href="achievments"
                className="relative bg-background lg:border-secondary/50 duration-100 lg:hover:border-secondary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
              >
                <span className="text-h3 lg:text-h2">10</span>
                <span className="text-detail">Achievements</span>
                <Trophy className="p-2 size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/backgrounds/grain.jpg"
                    alt="card bg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="size-full object-cover"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
    </div>
  );
};

export default Home;
