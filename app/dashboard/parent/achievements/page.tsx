import PESCertificateCard from "@/components/pes-custom/platform-components/PESCertificateCard";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { exampleCertificates } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Award, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

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

const AchievementsPage = async () => {
  const recentAchievements = ACHIEVEMENTS.splice(0, 6);

  return (
    <section className="dashboard-tab-wrapper">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="justify-between items-center flex gap-4">
            <h4 className="text-h4">Achievements 🏆</h4>
            <Link
              href="achievements/all-achievements"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "group"
              )}
            >
              View All
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="w-full flex flex-col md:flex-row overflow-x-scroll gap-4">
            {recentAchievements.map((achievement) => (
              <Card
                className="bg-background w-fulll max-w-[300px] h-full"
                key={achievement.id}
              >
                <CardHeader>
                  <CardTitle>{achievement.title}</CardTitle>
                  <span className="text-muted-foreground">
                    {achievement.description}
                  </span>
                </CardHeader>
                <CardFooter className="flex flex-col text-start gap-1 text-muted-foreground text-subtle items-start">
                  <p className="flex items-center gap-2">
                    <Calendar size={16} />
                    {achievement.date}
                  </p>
                  <p>{achievement.subject}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="justify-between items-center flex gap-4">
            <h4 className="text-h4">Badges 🥇 </h4>
            <Link
              href="achievements/all-badges"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "group"
              )}
            >
              View All
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <Card className="bg-background flex-1">
            <CardContent>
              <div className="max-w-[75vw] sm:max-w-[80vw] md:w-full p-4 flex gap-6 overflow-x-scroll [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
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
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="justify-between items-center flex gap-4 max-w-[300px]">
            <h4 className="text-h4">Recent Certificates</h4>
            <Link
              href="achievements/all-certificates"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "group"
              )}
            >
              View All
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exampleCertificates.map((certificate, idx) => {
              return <PESCertificateCard certificate={certificate} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPage;
