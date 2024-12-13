import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { exampleClasses } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import { cn } from "@/lib/utils";
import { Award, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const getClasses = async () => {
  return exampleClasses;
};

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Perfect Score!",
    description: "Achieved 100% in Advanced Mathematics Quiz",
    date: "Dec 10, 2024",
    subject: "Advanced Mathematics",
  },
  {
    id: 2,
    title: "Speed Demon",
    description: "Completed all assignments before deadline",
    date: "Dec 8, 2024",
    subject: "Introduction to Computer Science",
  },
];

const Achievements = async () => {
  const classes = await getClasses();
  const recentAchievements = ACHIEVEMENTS.splice(0, 6);

  return (
    <section className="dashboard-tab-wrapper">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-h2 pb-4">Progress</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((pesClass, idx) => {
              const randomValue = Math.floor(Math.random() * 100);
              return (
                <M_Card
                  variants={VariantSlideInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: idx * 0.05 }} // Custom delay for each item
                  key={idx}
                  className="bg-background"
                >
                  <CardHeader>
                    <CardTitle className="text-nowrap">
                      📘 {pesClass.class_name}
                    </CardTitle>
                    <div className="w-full flex gap-1 flex-wrap justify-between items-center text-subtle pt-2">
                      <Link href="#">
                        <span className="max-w-[12ch] overflow-hidden">
                          ENG. Ahmed Reda
                          {/* {pesClass.instructor_id} */}
                        </span>
                      </Link>
                      <div className="text-muted-foreground">
                        {`${pesClass.classbegindate.getUTCDate()}/${
                          pesClass.classbegindate.getUTCMonth() + 1
                        }
-
${pesClass.classenddate.getUTCDate()}/${pesClass.classenddate.getUTCMonth() + 1}
`}
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <Progress className="h-2 bg-muted" value={randomValue} />
                    <span className="text-muted-foreground">
                      {randomValue}%
                    </span>
                  </CardFooter>
                </M_Card>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-h2">Achievements 🏆</h2>
          <Card className="flex-1 bg-background h-64">
            <CardHeader>
              <div className="justify-between items-center flex">
                <div className="text-h4">Recent Achievements</div>
                <Link
                  href="achievements/all-achievements"
                  className={cn(buttonVariants({ size: "sm" }), "group")}
                >
                  View All
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="max-h-[300px]">
              <div className="gap-4 overflow-x-scroll flex pb-4">
                {recentAchievements.map((achievement) => (
                  <Card className="min-w-[500px]" key={achievement.id}>
                    <CardHeader>
                      <CardTitle>{achievement.title}</CardTitle>
                      <span className="text-muted-foreground">
                        {achievement.description}
                      </span>
                    </CardHeader>
                    <CardFooter className="grid grid-cols-2 gap-4 text-muted-foreground text-detail">
                      <p>{achievement.subject}</p>
                      <p className="flex items-center gap-2">
                        <Calendar size={16} />
                        {achievement.date}
                      </p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-h2">Badges 🥇</div>
          <Card className="bg-background flex-1">
            <CardHeader>
              <div className="justify-between items-center flex">
                <div className="text-h4">Recent Badges</div>
                <Link
                  href="achievements/all-badges"
                  className={cn(buttonVariants({ size: "sm" }), "group")}
                >
                  View All
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-[82vw] md:w-full p-4 flex gap-6 overflow-x-scroll [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                {[...new Array(6)].fill(0).map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center bg-shade border rounded-full p-4">
                      <Award size={64} />
                    </div>
                    <h4 className="text-p_ui text-card-foreground">Badge</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
